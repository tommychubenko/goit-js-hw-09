const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = '';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStart() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function onStop() {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

startBtn.addEventListener('click', () => {
  timerId = setInterval(onStart, 1000);
});
stopBtn.addEventListener('click', onStop);
