
let seconds = 150
let minutes = seconds / 60
let timer = document.getElementById('timer')
let formattedSeconds = ''
let formattedMinutes = ''

function Pomodoro() {
    seconds = seconds - 1

}
function Minutes() {
    
    if (minutes < 10) {
        formattedMinutes = Math.round(minutes)
        formattedMinutes = ('0' + formattedMinutes)
        
    }
    else {
        formattedMinutes = Math.round(minutes)
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
    timer.innerHTML = formattedMinutes + ':' +formattedSeconds
}
 

 let interval = setInterval(Minutes(), 1000)
