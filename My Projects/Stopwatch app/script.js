let timer;
let running = false;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startStopwatch() {
  timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 1000);
}

function stopStopwatch() {
  clearInterval(timer);
}

function resetStopwatch() {
  clearInterval(timer);
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

document.getElementById('startStop').addEventListener('click', () => {
  if (running) {
    stopStopwatch();
    document.getElementById('startStop').textContent = 'Start';
  } else {
    startStopwatch();
    document.getElementById('startStop').textContent = 'Stop';
  }
  running = !running;
});

document.getElementById('reset').addEventListener('click', resetStopwatch);
