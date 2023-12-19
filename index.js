const bg = document.querySelector('.bg');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');
let count = 0;

let abc = setInterval(() => {
    a()
    count++;
}, 500);


function a() {
    if (count <= 3) {
        red.style.background = 'red'
    }
    else if (count > 5 && count <= 7) {
        yellow.style.background = 'yellow'
        red.style.background = 'red'
    }
    else if (count > 7 && count < 10) {
        green.style.background = 'green'
        yellow.style.background = 'white'
        red.style.background = 'white'
    }

    if (count > 11) {
        count = 0
        green.style.background = 'white'
    }
}


// /////////////////////////////////////////////////////

const hoursDisplay = document.getElementById("hours");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");

let startTime;
let elapsedTime = 0;
let intervalId;

function startStopwatch() {
    startTime = new Date();
    intervalId = setInterval(updateStopwatch); // Update every 10 milliseconds
}

function stopStopwatch() {
    clearInterval(intervalId);
}


function updateStopwatch() {
    const now = new Date();
    elapsedTime = now - startTime;

    const hours = Math.floor(elapsedTime / (10 * 60 * 60));
    const minutes = Math.floor(elapsedTime / (10 * 60)) % 60;
    const seconds = Math.floor(elapsedTime / 10) % 60;

    hoursDisplay.textContent = padTimeValue(hours);
    minutesDisplay.textContent = padTimeValue(minutes);
    secondsDisplay.textContent = padTimeValue(seconds);
}

function padTimeValue(value) {
    return value.toString().padStart(2, "0");
}

// Add event listeners to your start, stop, and reset buttons here
startButton.addEventListener("click", startStopwatch);
stopButton.addEventListener("click", stopStopwatch);
