import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const dateInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

let futureDate = '';
let currentDate = '';
let dateDifference = '';
let timerId = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0].getTime() < Date.now()) {
      startBtn.disabled = true;
      Notify.failure('Please choose a date in the future');
    } else if (timerId !== 0) {
      console.log(timerId);
      clearInterval(timerId);
      Notify.success('Timer stopped his job succesfully!');
      Notify.success('Please choose a new date!');
      startBtn.disabled = false;
      futureDate = selectedDates[0].getTime();
      currentDate = Date.now();
      dateDifference = futureDate - currentDate;
      convertMs(dateDifference);
    } else {
      startBtn.disabled = false;
      console.log(timerId);
      futureDate = selectedDates[0].getTime();
      currentDate = Date.now();
      dateDifference = futureDate - currentDate;
      convertMs(dateDifference);
    }
  },
};

const fp = flatpickr('#datetime-picker', options);

function addLeadingZero(value) {
  return value.padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = Math.floor(ms / day);
  dataDays.textContent = addLeadingZero(days.toString());
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  dataHours.textContent = addLeadingZero(hours.toString());
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  dataMinutes.textContent = addLeadingZero(minutes.toString());
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  dataSeconds.textContent = addLeadingZero(seconds.toString());

  return { days, hours, minutes, seconds };
}

function onStart() {
  if (dateDifference >= 1000) {
    console.log(dateDifference);
    currentDate = Date.now();
    dateDifference = futureDate - currentDate;
    convertMs(dateDifference);
  } else {
    clearInterval(timerId);
    Notify.success('Timer fineshed his job succesfully!');
  }
}

function counting() {
  startBtn.disabled = true;
  timerId = setInterval(onStart, 1000);
}

startBtn.addEventListener('click', () => {
  counting(), Notify.success('Success your timer has been started!');
});
