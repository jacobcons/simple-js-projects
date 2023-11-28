import { $, $$ } from '../lib.js';
import { categories } from './clothing-data.js';

export default class CategoryFilter {
  constructor(clothingItemsGrid) {
    this.element = $('#js-categories');
    this.addCategoryOptions();
    this.element.addEventListener('change', () => {
      clothingItemsGrid.filter();
    });
  }

  addCategoryOptions() {
    categories.forEach((category) => {
      this.element.insertAdjacentHTML(
        'beforeend',
        `<option value="${category}">${category}</option>`,
      );
    });
  }

  getValue() {
    return this.element.value;
  }
}
