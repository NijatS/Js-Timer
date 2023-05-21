const startBtn = document.querySelector("#start-button");
const stopBtn = document.querySelector("#stop-button");
const resetBtn = document.querySelector("#reset-button");
const timer = document.querySelector("#timer");

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let interval;
startBtn.addEventListener("click", () => {
  stopBtn.disabled = false;
  startBtn.disabled = true;
  resetBtn.disabled = true;
  interval = setInterval(calculate, 10);
});
resetBtn.addEventListener("click", () => {
  resetBtn.disabled = true;
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  timer.textContent = "00:00:000";
});
stopBtn.addEventListener("click", () => {
  clearInterval(interval);
  startBtn.disabled = false;
  resetBtn.disabled = false;
  stopBtn.disabled = true;
});

function calculate() {
  let ms = 0;
  let s;
  let m;
  milliseconds += 10;
  if (milliseconds == 1000) {
    seconds++;
    milliseconds = 0;
    if (seconds == 60) {
      minutes++;
      seconds = 0;
    }
  }
  // if (minutes == 59 && seconds == 59 && milliseconds == 990) {
  //   seconds = 0;
  //   milliseconds = 0;
  //   minutes = 0;
  // }
  if (milliseconds < 10) {
    ms = "00" + milliseconds;
  } else if (milliseconds < 100) {
    ms = "0" + milliseconds;
  } else {
    ms = milliseconds;
  }
  if (seconds < 10) {
    s = "0" + seconds;
  } else {
    s = seconds;
  }
  if (minutes < 10) {
    m = "0" + minutes;
  } else {
    m = minutes;
  }
  timer.textContent = `${m}:${s}:${ms}`;
}
