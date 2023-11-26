import { $, $$ } from '../lib.js';
import Item from './Item.js';
import EnterItemPopup from './EnterItemPopup.js';

export default class AddItemInput {
  constructor(items) {
    this.items = items;

    this.submitButton = $('#js-add-item-submit-button');
    this.nameInput = $('#js-add-item-name-input');
    this.submitButton.addEventListener('click', () => this.addItem());
    this.nameInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        this.addItem();
      }
    });
  }

  addItem() {
    const itemName = this.nameInput.value;

    if (!itemName) {
      new EnterItemPopup();
      return;
    }

    const item = new Item(itemName, this.items);
    this.items.appendItem(item);
    this.nameInput.value = '';
  }
}
