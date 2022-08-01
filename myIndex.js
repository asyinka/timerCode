
const timeDisplay = document.getElementById("timerDisplay");
const startButton = document.querySelector("#startButton");
const pauseButton = document.querySelector("#pauseButton");
const resetButton = document.querySelector("#resetButton");

let hours = 0;
let mins = 0;
let seconds = 0;
paused = true;
let interval;
elapsedTime = 0;
startTime = 0; //elapsedTime + startTime = 0 : "Date.now = elapsedTime + startTime;"

startButton.addEventListener("click", () => {
    if(paused) {
        paused = false;
        startTime = Date.now() - elapsedTime;
        interval = setInterval(updateTimer, 1000);
    }
} )

pauseButton.addEventListener("click", () => {
    if (!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(interval)
    }

})
resetButton.addEventListener("click", () => {
    paused = true;
    elapsedTime = 0;
    startTime = 0;
    clearInterval(interval);
    hours = 0;
    mins = 0;
    seconds = 0;
    timeDisplay.textContent = "00:00:00";
})

function updateTimer(){
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime/1000) % 60);
    mins = Math.floor((elapsedTime/(1000 * 60)) % 60);
    hours = Math.floor((elapsedTime/(1000 * 60 * 60)) % 60);

    secs = pad(secs);
    mins = pad(mins);
    hours = pad(hours);
    
    timeDisplay.textContent = `${hours}:${mins}:${secs}`;

    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }

}

