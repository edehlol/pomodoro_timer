
let seconds = 1500
let minutes = seconds / 60
let timer = document.getElementById('timer')
let formattedSeconds = ''
let formattedMinutes = ''
let interval
let counter = 0

// Sound that plays when timer reaches 0 / made in Ableton.
const sound = new Audio('pomodoroSound.mp3')



// Functions for the Play / Pause / Reset buttons.

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
        Pomodoro()
    }
}

// Event listeners for the Play / Pause / Reset buttons.
startPomodoro.addEventListener('mousedown', function () {
    start()
})
stopPomodoro.addEventListener('mousedown', function () {
    stop()
})
resetPomodoro.addEventListener('mousedown', function () {
    reset()
})

// Functions for switching between timers.
function setWork() {
    seconds = 1500
    work.style.backgroundColor = '#FDFFFC'
    shortBreak.style.backgroundColor = '#011627'
    longBreak.style.backgroundColor = '#011627'
}
function setShotBreak() {
    seconds = 300
    work.style.backgroundColor = '#011627'
    shortBreak.style.backgroundColor = '#FDFFFC'
    longBreak.style.backgroundColor = '#011627'
}
function setLongBreak() {
    seconds = 900
    work.style.backgroundColor = '#011627'
    shortBreak.style.backgroundColor = '#011627'
    longBreak.style.backgroundColor = '#FDFFFC'
}

// Optional button interactivity to switch between work/short break/long break. Disabled in the final version.

// work.addEventListener('mousedown', function () {
//     setWork()
//     Pomodoro()
// })
// shortBreak.addEventListener('mousedown', function () {
//     setShotBreak()
//     Pomodoro()
// })
// longBreak.addEventListener('mousedown', function () {
//     setLongBreak()
//     Pomodoro()
// })

// Function to keep track and change the sequence of timers.

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

// Displays the timer

function display() {
    formattedTime()
    timer.innerHTML = formattedTimer
}

// Changes the value and properties of the timer.

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
        timer.style.color = '#E71D36'
    }
    else {
        timer.style.color = '#011627'
    }
}

// Formats minutes and seconds variables into a 00:00 format.

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

setWork()
display()

