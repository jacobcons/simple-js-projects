import { $ } from '../lib.js';

// button functionality
const decreaseButton = $('#js-decrease-button');
const increaseButton = $('#js-increase-button');
const resetButton = $('#js-reset-button');
makeButtonUpdateHoldMouseDown(increaseButton, incrementCounter);
makeButtonUpdateHoldMouseDown(decreaseButton, decrementCounter);
resetButton.addEventListener('mousedown', resetCounter);

function makeButtonUpdateHoldMouseDown(button, changeCounter) {
  let initialWait;
  let intervalBetweenUpdates;
  const intialWaitTimeMs = 100;
  const intervalBetweenUpdatesTimeMs = 1000;
  button.addEventListener('mousedown', () => {
    changeCounter();
    initialWait = setTimeout(() => {
      intervalBetweenUpdates = setInterval(() => {
        changeCounter();
      }, intialWaitTimeMs);
    }, intervalBetweenUpdatesTimeMs);
  });
  button.addEventListener('mouseup', () => {
    clearTimeout(initialWait);
    clearInterval(intervalBetweenUpdates);
  });
}

// change counter data
let count = 0;

function incrementCounter() {
  count += 1;
  updateCounter();
}

function decrementCounter() {
  count -= 1;
  updateCounter();
}

function resetCounter() {
  count = 0;
  updateCounter();
}

// change counter view
const counter = $('#js-counter');

function updateCounterColor() {
  const redColor = 'red';
  const grayColor = '#1e293b';
  const greenColor = 'green';
  if (count < 0) {
    counter.style.color = redColor;
  } else if (count === 0) {
    counter.style.color = grayColor;
  } else {
    counter.style.color = greenColor;
  }
}

function updateCounter() {
  counter.textContent = String(count);
  updateCounterColor();
}
