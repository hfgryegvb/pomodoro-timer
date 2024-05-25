let timerClock = null;
let start = document.getElementById('start');
let timerId = document.getElementById('pomodoro-time');

function timer() {
    start.addEventListener('click', function () {
        if (start.textContent === "stop") {
            clearInterval(timerClock);
            start.textContent = 'start';
        } else {
            start.textContent = 'stop';
            timerClock = setInterval(function () {
                let sec = timerId.textContent.split(":")[1];
                let minute = timerId.textContent.split(":")[0];
                document.getElementById('pomodoro-time').innerHTML = `${minute}:${sec}`;

                if (sec > 0) {
                    sec -= 1;
                } else if (minute > 0) {
                    minute -= 1;
                    sec = 59;
                }

                let ssec = '' + sec;
                if (ssec.length < 2) {
                    ssec = '0' + ssec;
                }

                let min = '' + minute;
                if (min.length < 2) {
                    min = '0' + min;
                }

                if (sec <= 0 && minute <= 0) {
                    clearInterval(timerClock);
                }

                document.getElementById("pomodoro-time").innerHTML = min + " : " + ssec;
            }, 1000);
        }
    }
    )
};
timer();