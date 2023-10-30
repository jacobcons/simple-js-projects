function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}

function wait(ms) {
  let timerId;
  const promise = new Promise((resolve) => {
    timerId = setTimeout(() => {
      resolve();
    }, ms);
  });

  // Add a method to the promise to cancel the delay
  promise.cancel = function () {
    clearTimeout(timerId);
  };

  return promise;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomArrayElement(arr) {
  return arr[getRandomInt(arr.length)];
}

function range(end) {
  return [...Array(end).keys()];
}

export { $, $$, wait, getRandomInt, getRandomArrayElement, range };
