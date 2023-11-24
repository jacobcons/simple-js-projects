import { $, $$ } from '../lib.js';

// display giveaway date
const giveawayDate = new Date();
giveawayDate.setDate(giveawayDate.getDate() + 4);
giveawayDate.setHours(
  giveawayDate.getHours() + 3,
  giveawayDate.getMinutes() + 2,
  giveawayDate.getSeconds() + 5,
);

displayGiveAwayDate();

function displayGiveAwayDate() {
  const dateAsString = convertDateObjectToHumanReadableString(giveawayDate);
  const giveawayDateDisplay = $('#js-giveaway-date');
  giveawayDateDisplay.textContent = dateAsString;
}

function convertDateObjectToHumanReadableString(date) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  return date.toLocaleString('en-GB', options);
}

// update time until giveaway
updateTimeUnitilGiveaway();
const intervalId = setInterval(updateTimeUnitilGiveaway, 1000);

function updateTimeUnitilGiveaway() {
  const millisecondsUntilGiveaway = giveawayDate - new Date();
  if (millisecondsUntilGiveaway < 0) {
    clearInterval(intervalId);
    displayGiveawayFinishedMessage();
  } else {
    displayTimeUntilGiveaway(
      calculateTimeUntilGiveaway(millisecondsUntilGiveaway),
    );
  }
}

function displayGiveawayFinishedMessage() {
  const giveawayFinishedMessage = $('#js-giveaway-finished-message');
  giveawayFinishedMessage.classList.remove('hidden');
}

function displayTimeUntilGiveaway({
  daysUntilGiveaway,
  hoursUntilGiveaway,
  minutesUntilGiveaway,
  secondsUntilGiveaway,
}) {
  const daysUntilGiveawayDisplay = $('#js-days-until-giveaway');
  const hoursUntilGiveawayDisplay = $('#js-hours-until-giveaway');
  const minutesUntilGiveawayDisplay = $('#js-minutes-until-giveaway');
  const secondsUntilGiveawayDisplay = $('#js-seconds-until-giveaway');
  daysUntilGiveawayDisplay.textContent = daysUntilGiveaway;
  hoursUntilGiveawayDisplay.textContent = hoursUntilGiveaway;
  minutesUntilGiveawayDisplay.textContent = minutesUntilGiveaway;
  secondsUntilGiveawayDisplay.textContent = secondsUntilGiveaway;
}

function calculateTimeUntilGiveaway(millisecondsUntilGiveaway) {
  const millisecondsInASecond = 1000;
  const millisecondsInAMinute = 60 * millisecondsInASecond;
  const millisecondsInAnHour = 60 * millisecondsInAMinute;
  const millisecondsInADay = millisecondsInAnHour * 24;

  const daysUntilGiveaway = ensureTwoDigitFormat(
    Math.floor(millisecondsUntilGiveaway / millisecondsInADay),
  );
  const hoursUntilGiveaway = ensureTwoDigitFormat(
    Math.floor((millisecondsUntilGiveaway / millisecondsInAnHour) % 24),
  );
  const minutesUntilGiveaway = ensureTwoDigitFormat(
    Math.floor((millisecondsUntilGiveaway / millisecondsInAMinute) % 60),
  );
  const secondsUntilGiveaway = ensureTwoDigitFormat(
    Math.floor((millisecondsUntilGiveaway / millisecondsInASecond) % 60),
  );
  return {
    daysUntilGiveaway,
    hoursUntilGiveaway,
    minutesUntilGiveaway,
    secondsUntilGiveaway,
  };
}

function ensureTwoDigitFormat(number) {
  return number < 10 ? `0${number}` : `${number}`;
}
