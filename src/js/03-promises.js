const inputDelay = document.querySelector('[name=delay]');
const inputStep = document.querySelector('[name=step]');
const inputAmount = document.querySelector('[name=amount]');
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
          .then(v => {
            console.log(
              `Fullfilled promice ${i} in ${i * step + delay} mseconds`
            );
          })
          .catch(() => {
            console.log(
              `Rejected promice ${i} in ${i * step + delay} mseconds`
            );
          }),
      i * step + delay
    );
  }
}

sbmtBtn.addEventListener('submit', e => {
  e.preventDefault();
  submitForm(1000, inputStep.value, inputAmount.value); /// <---- Ось тут проблема. Я поставив першу затримку 1000мс, тому як параметр inputDelay.value функцією не зчитується, хоча вводиться і записується корректно
  console.log(inputDelay.value);
});
