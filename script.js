
let seconds = 1500
let minutes = seconds / 60
let timer = document.getElementById('timer')
let formattedSeconds = ''
let formattedMinutes = ''
let interval
let counter = 0

const sound = new Audio('pomodoroSound.mp3')

let eventHelper = true

work.addEventListener('mousedown', function () {
    setWork()
    Pomodoro()
})
shortBreak.addEventListener('mousedown', function () {
    setShotBreak()
    Pomodoro()
})
longBreak.addEventListener('mousedown', function () {
    setLongBreak()
    Pomodoro()
})
startPomodoro.addEventListener('mousedown', function () {
    start()
})
stopPomodoro.addEventListener('mousedown', function () {
    stop()
})
resetPomodoro.addEventListener('mousedown', function () {
    reset()
})

addTime.addEventListener('mousedown', function () {
    addWorkTime()
})
function addWorkTime() {
    seconds = seconds + 60
    minutes = seconds / 60
    formattedTime()
    timer.innerHTML = formattedTimer
}

function setWork() {
    seconds = 1500
    typeOfSequence.innerHTML = 'get sum'
    work.style.backgroundColor = 'blue'
    shortBreak.style.backgroundColor = 'white'
    longBreak.style.backgroundColor = 'white'
}
function setShotBreak() {
    seconds = 300
    work.style.backgroundColor = 'white'
    shortBreak.style.backgroundColor = 'blue'
    longBreak.style.backgroundColor = 'white'
}
function setLongBreak() {
    seconds = 900
    work.style.backgroundColor = 'white'
    shortBreak.style.backgroundColor = 'white'
    longBreak.style.backgroundColor = 'blue'
}
function start() {
    if (interval == null) {
        interval = setInterval(Pomodoro, 1000)
    }

}
function stop() {
    clearInterval(interval)
    interval = null
}
function reset() {
    if (confirm('Are you sure you want to reset the timer?')) {
        seconds = 1501
        eventHelper = false;
        Pomodoro()

    }


}
function sequence() {
    counter = counter + 1

    if (counter == 1 || counter == 3 || counter == 5) {
        setShotBreak()

        start()
        Pomodoro()
    }
    else if (counter == 7) {
        setLongBreak()
        start()
        Pomodoro()


    }
    else if (counter == 8) {
        setWork()
        start()
        Pomodoro()
        counter = 0
    }
    else {
        setWork()
        start()
        Pomodoro()
    }


}

function display() {
    formattedTime()

    timer.innerHTML = formattedTimer
}

function Pomodoro() {

    if (seconds == 0) {
        sound.play()
        clearInterval(interval)
        interval = null
        sequence()

    }
    else {
        seconds = seconds - 1
        minutes = seconds / 60
        formattedTime()
        timer.innerHTML = formattedTimer
    }

    if (seconds <= 10) {
        timer.style.color = 'red'
    }
    else {
        timer.style.color = 'black'
    }

}

function formattedTime() {

    if (minutes < 10) {
        formattedMinutes = Math.floor(minutes)
        formattedMinutes = ('0' + formattedMinutes)

    }
    else {
        formattedMinutes = Math.floor(minutes)
        formattedMinutes = formattedMinutes
    }
    if (seconds % 60 < 10) {
        formattedSeconds = Math.round(seconds % 60)
        formattedSeconds = ('0' + formattedSeconds)
    }
    else {
        formattedSeconds = Math.round(seconds % 60)
        formattedSeconds = (formattedSeconds)
    }
    formattedTimer = formattedMinutes + ':' + formattedSeconds
}


display()
// formattedTime()
