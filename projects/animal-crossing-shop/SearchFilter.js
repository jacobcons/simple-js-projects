import { $, $$ } from '../lib.js';

export default class LoadMoreButton {
  constructor(clothingItemsGrid) {
    this.element = $('#js-search');
    this.element.addEventListener('input', () => {
      clothingItemsGrid.filter();
    });
  }

  getValue() {
    return this.element.value;
  }
}
