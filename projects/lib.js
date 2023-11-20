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

// between [0, max)
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomArrayElement(arr) {
  return arr[getRandomInt(arr.length)];
}

function range(end) {
  return [...Array(end).keys()];
}

// [min, max)
function getRandomIntInRange(min, max) {
  const randomIntSameRangeFromZero = getRandomInt(max - min);
  return randomIntSameRangeFromZero + min;
}

export {
  $,
  $$,
  wait,
  getRandomInt,
  getRandomArrayElement,
  range,
  getRandomIntInRange,
};
