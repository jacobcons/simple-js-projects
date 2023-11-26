import { $, $$ } from '../lib.js';

export default class EnterItemPopup {
  constructor() {
    const element = $('#js-enter-item-popup');
    element.classList.add('fade-in-out');
    element.addEventListener('animationend', () => {
      element.classList.remove('fade-in-out');
    });
  }
}
