import flatpickr from "flatpickr";


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
            alert('Please choose a date in the future')
        }
        
        else if (timerId !== 0) {
            console.log(timerId);
            clearInterval(timerId);
             startBtn.disabled = false;          
            futureDate = selectedDates[0].getTime();
            currentDate = Date.now();  
            dateDifference = futureDate - currentDate;
            convertMs(dateDifference)
           
       }
        
        else {
            startBtn.disabled = false;     
            console.log(timerId);
            futureDate = selectedDates[0].getTime();
            currentDate = Date.now();  
            dateDifference = futureDate - currentDate;
            convertMs(dateDifference)
             }
    }
};
    
const fp = flatpickr("#datetime-picker", options);




function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
    const days = Math.floor(ms / day);
    dataDays.textContent = days;
  // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    dataHours.textContent = hours;
  // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    dataMinutes.textContent = minutes;
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    dataSeconds.textContent = seconds;
    
  return { days, hours, minutes, seconds };
}


function onStart() {
         currentDate = Date.now();  
         dateDifference = futureDate - currentDate;
         convertMs(dateDifference)
    }

startBtn.addEventListener('click', () => {timerId = setInterval(onStart, 1000), startBtn.disabled = true;  });

