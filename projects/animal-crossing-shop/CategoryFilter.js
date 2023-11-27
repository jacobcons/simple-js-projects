import { $, $$ } from '../lib.js';
import clothingData from './clothingData.js';

export default class CategoryFilter {
  constructor(clothingItemsGrid) {
    this.element = $('#js-categories');
    this.fillCategories(CategoryFilter.getCategories());
    this.element.addEventListener('change', () => {
      clothingItemsGrid.filter();
    });
  }

  static getCategories() {
    const categories = clothingData.map(
      (clothingItem) => clothingItem.category,
    );
    const uniqueCategories = [...new Set(categories)];
    return uniqueCategories;
  }

  fillCategories(categories) {
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
