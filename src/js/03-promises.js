import { Notify } from 'notiflix/build/notiflix-notify-aio';
const sbmtBtn = document.querySelector('.form');

function createPromise() {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve();
    } else {
      reject();
    }
  });
}

function submitForm(delay, step, amount) {
  for (let i = 1; i <= amount; i += 1) {
    setTimeout(
      () =>
        createPromise(delay, step, amount)
          .then(() => {
            Notify.success(
              `Fullfilled promise ${i} in ${i * step + delay} mseconds`
            );
          })
          .catch(() => {
            Notify.failure(
              `Rejected promise ${i} in ${i * step + delay} mseconds`
            );
          }),
      i * step + delay
    );
  }
}

sbmtBtn.addEventListener('submit', e => {
  e.preventDefault();
  submitForm(
    Number(e.currentTarget.elements[0].value),
    Number(e.currentTarget.elements[1].value),
    Number(e.currentTarget.elements[2].value)
  );
});
