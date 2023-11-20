import { $, getRandomArrayElement } from '../lib.js';

const ColorSelectionModes = {
  LIST: Symbol('list'),
  HEX: Symbol('hex'),
};
let colorSelectionMode = ColorSelectionModes.LIST;

const colorFromListModeButton = $('.js-color-from-list-mode');
const randomHexColorModeButton = $('.js-random-hex-color-mode');
colorFromListModeButton.addEventListener('click', () => {
  colorSelectionMode = ColorSelectionModes.LIST;
  colorFromListModeButton.classList.add('text-theme-color');
  randomHexColorModeButton.classList.remove('text-theme-color');
});
randomHexColorModeButton.addEventListener('click', () => {
  colorSelectionMode = ColorSelectionModes.HEX;
  randomHexColorModeButton.classList.add('text-theme-color');
  colorFromListModeButton.classList.remove('text-theme-color');
});

let randomColor = '';
const generateRandomColorButton = $('.js-generate-random-color');
generateRandomColorButton.addEventListener('click', () => {
  if (colorSelectionMode === ColorSelectionModes.LIST) {
    const colors = ['red', 'rgb(27, 34, 151)', '#F3A89A', 'green', 'pink'];

    const colorsWithPreviouslyChosenColorRemoved = colors.filter(
      (color) => color !== randomColor,
    );
    randomColor = getRandomArrayElement(colorsWithPreviouslyChosenColorRemoved);
  } else if (colorSelectionMode === ColorSelectionModes.HEX) {
    const hexCodeLength = 6;
    const hexDigits = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'A',
      'B',
      'C',
      'D',
      'E',
    ];

    randomColor = '#';
    for (let i = 0; i < hexCodeLength; i += 1) {
      randomColor += getRandomArrayElement(hexDigits);
    }
  }
  setBackgroundColor(randomColor);
});

function setBackgroundColor(color) {
  const backgroundColorText = $('.js-bg-color-text');
  document.body.style.backgroundColor = color;
  backgroundColorText.textContent = color;
}
