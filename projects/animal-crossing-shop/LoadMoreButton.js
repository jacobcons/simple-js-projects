import { $, $$ } from '../lib.js';

export default class LoadMoreButton {
  constructor(clothingItemsGrid) {
    this.element = $('#js-load-more-button');
    this.element.addEventListener('click', () => {
      clothingItemsGrid.renderNextPage();
    });
  }
}
