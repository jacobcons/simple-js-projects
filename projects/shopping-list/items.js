import { $, $$ } from '../lib.js';
import Item from './Item.js';

class Items {
  constructor() {
    const jsonItemNamesInStorage = localStorage.getItem('items');
    const itemNamesInStorage = jsonItemNamesInStorage
      ? JSON.parse(jsonItemNamesInStorage)
      : [];
    this.items = itemNamesInStorage.map((name) => new Item(name, this));
    this.itemContainer = $('#js-items');
  }

  renderItems() {
    this.items.forEach((item) => this.itemContainer.append(item.element));
  }

  appendItem(item) {
    this.items.push(item);
    this.itemContainer.append(item.element);
    this.updateLocalStorage();
  }

  deleteItem(item) {
    this.items = this.items.filter((currentItem) => currentItem !== item);
    this.updateLocalStorage();
  }

  clearItems() {
    this.items = [];
    this.itemContainer.innerHTML = '';
    this.updateLocalStorage();
  }

  convertItemObjectsToItemNames() {
    return this.items.map((item) => item.name);
  }

  updateLocalStorage() {
    localStorage.setItem(
      'items',
      JSON.stringify(this.convertItemObjectsToItemNames()),
    );
  }
}

export default new Items();
