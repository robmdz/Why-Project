// Get the switch element
const switchInput = document.querySelector('.switch input');

// Add event listener for the switch
switchInput.addEventListener('change', function() {
    if (this.checked) {
        console.log('Switch is ON');
        document.body.classList.add('dark-mode');
    } else {
        console.log('Switch is OFF');
        document.body.classList.remove('dark-mode');
    }
});

window.onload = function() {
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let milliseconds = 0;
    let appendHours = document.querySelector('#hours');
    let appendMinutes = document.querySelector('#minutes');
    let appendSeconds = document.querySelector('#seconds');
    let appendMilliseconds = document.querySelector('#milliseconds');
    let buttonStart = document.querySelector('#startClock');
    let buttonStop = document.querySelector('#stopClock');
    let buttonReset = document.querySelector('#resetClock');
    let interval;

    const startTimer = () => {
        milliseconds++;
        if (milliseconds <= 9) {
            appendMilliseconds.innerHTML = "0" + milliseconds;
        }
        if (milliseconds > 9) {
            appendMilliseconds.innerHTML = milliseconds;
        }
        if (milliseconds > 99) {
            seconds++;
            appendSeconds.innerHTML = seconds;
            milliseconds = 0;
            appendMilliseconds.innerHTML = "0" + milliseconds;
        }
        if (seconds <= 9) {
            appendSeconds.innerHTML = '0' + seconds;
        }
        if (seconds > 59) {
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            appendSeconds.innerHTML = "0" + 0;
        }
        if (minutes < 9) {
            appendMinutes.innerHTML = "0" + minutes;
        }
        if (minutes > 59) {
            hours++;
            appendHours.innerHTML = "0" + hours;
            minutes = 0;
            appendMinutes.innerHTML = "0" + 0;
        }
        if (hours < 9) {
            appendHours.innerHTML = "0" + hours;
        }
        if (hours > 23) {
            hours = 0;
            appendHours.innerHTML = "0" + 0;
        }
    }

    buttonStart.onclick = () => {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = () => {
        clearInterval(interval);
    }

    buttonReset.onclick = () => {
        clearInterval(interval);
        hours = 0;
        minutes = 0;
        seconds = 0;
        milliseconds = 0;
        appendHours.innerHTML = "00";
        appendMinutes.innerHTML = "00";
        appendSeconds.innerHTML = "00";
        appendMilliseconds.innerHTML = "00";
    }
}
    
    
