var hours = 0;
var mins = 0
var seconds = 0
var milliseconds = 0

var hoursDisp = document.getElementById("hoursDisp")
var minsDisp = document.getElementById("minsDisp")
var secondsDisp = document.getElementById("secondsDisp")
var millisecondsDisp = document.getElementById("millisecondsDisp")

function renderTimer() {
    hoursDisp.innerHTML = hours
    minsDisp.innerHTML = mins
    secondsDisp.innerHTML = seconds
    millisecondsDisp.innerHTML = milliseconds
}

var interval
function startTimer() {
    interval = setInterval(function () {
        milliseconds++;
        if (milliseconds == 10) {
            milliseconds = 0;
            seconds++;
            if (seconds == 60) {
                seconds = 0;
                mins++;
                if (mins == 60) {
                    mins = 0;
                    hours++;
                }
            }
        }
        renderTimer()
    }, 100)
}
function stopTimer() {
    clearInterval(interval)
}
function resetTimer() {
    stopTimer();
    hours = 0;
    mins = 0
    seconds = 0
    milliseconds = 0
    renderTimer()
}