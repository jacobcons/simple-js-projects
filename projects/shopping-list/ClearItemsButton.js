import { $, $$ } from '../lib.js';

export default class ClearItemsButton {
  constructor(items) {
    const clearItemsButton = $('#js-clear-items-button');
    clearItemsButton.addEventListener('click', () => items.clearItems());
  }
}
