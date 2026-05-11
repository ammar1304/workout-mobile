let restInterval = null;
let restRemaining = 0;
let timerEl;
let timeEl;
let stopBtn;
let addBtn;

function parseRestToSeconds(rest) {
  if (!rest) return 60;
  const lower = rest.toString().toLowerCase();
  const numbers = lower.match(/\d+/g);
  if (!numbers) return 60;
  const value = Number(numbers[numbers.length - 1]);
  if (lower.includes('min')) return value * 60;
  return value;
}

function updateRestTimer() {
  if (!timeEl) return;
  const minutes = Math.floor(restRemaining / 60);
  const seconds = restRemaining % 60;
  timeEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function finishRest() {
  clearInterval(restInterval);
  restInterval = null;
  restRemaining = 0;
  if (timeEl) timeEl.textContent = 'Done';
  if (navigator.vibrate) {
    navigator.vibrate([200, 100, 200]);
  }
  setTimeout(() => stopRest(), 1500);
}

export function initRestTimer() {
  timerEl = document.getElementById('restTimer');
  timeEl = document.getElementById('restTime');
  stopBtn = document.getElementById('restStopBtn');
  addBtn = document.getElementById('restAddBtn');

  if (stopBtn) {
    stopBtn.addEventListener('click', stopRest);
  }

  if (addBtn) {
    addBtn.addEventListener('click', () => addRest(15));
  }
}

export function startRest(restValue) {
  const seconds = typeof restValue === 'number' ? restValue : parseRestToSeconds(restValue);
  if (!seconds) return;
  restRemaining = seconds;
  updateRestTimer();
  if (timerEl) timerEl.classList.add('show');
  clearInterval(restInterval);
  restInterval = setInterval(() => {
    restRemaining -= 1;
    if (restRemaining <= 0) {
      finishRest();
    } else {
      updateRestTimer();
    }
  }, 1000);
}

export function addRest(seconds) {
  restRemaining += seconds;
  updateRestTimer();
}

export function stopRest() {
  clearInterval(restInterval);
  restInterval = null;
  restRemaining = 0;
  if (timerEl) timerEl.classList.remove('show');
}
