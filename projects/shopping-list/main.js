import { $, $$ } from '../lib.js';

class Items {
  constructor(itemNames) {
    this.items = itemNames.map((name) => new Item(name, this));
    this.itemContainer = $('.js-items');
    this.renderItems();
  }

  renderItems() {
    this.items.forEach((item) => this.itemContainer.append(item.element));
  }

  appendItem(item) {
    this.items.push(item);
    this.itemContainer.append(item.element);
    this.updateInLocalStorage();
  }

  deleteItem(item) {
    this.items = this.items.filter((currentItem) => currentItem !== item);
    this.updateInLocalStorage();
  }

  clearItems() {
    this.items = [];
    this.itemContainer.innerHTML = '';
    this.updateInLocalStorage();
  }

  convertToArrayOfItemNames() {
    return this.items.map((item) => item.name);
  }

  updateInLocalStorage() {
    console.log(JSON.stringify(this.convertToArrayOfItemNames()));
    localStorage.setItem(
      'items',
      JSON.stringify(this.convertToArrayOfItemNames()),
    );
  }
}

class Item {
  constructor(name, items) {
    this.name = name;
    this.items = items;

    this.element = this.createElement();

    this.editButton = this.element.querySelector('.js-edit-item-button');
    this.editInput = this.element.querySelector('.js-edit-item-input');
    this.editButton.addEventListener('click', () => this.makeItemEditable());
    this.editInput.addEventListener('keydown', (e) => {
      const itemIsEditable = !this.editInput.disabled;
      if (e.key === 'Enter' && itemIsEditable) {
        this.updateItem(this.editInput.value);
      }
    });
    document.addEventListener('click', (e) => {
      const clickOutsideOfItem = !this.element.contains(e.target);
      const itemIsEditable = !this.editInput.disabled;
      if (clickOutsideOfItem && itemIsEditable) {
        this.updateItem(this.editInput.value);
      }
    });

    const deleteButton = this.element.querySelector('.js-delete-item-button');
    deleteButton.addEventListener('click', () => this.deleteItem());
  }

  createElement() {
    const templateString = `<li class="flex gap-x-2">
    <input
      class="js-edit-item-input w-full rounded-l-lg p-2"
      type="text"
      value="${this.name}"
      disabled
    />
    <button class="js-edit-item-button inline">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-4 w-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
        />
      </svg>
    </button>
    <button class="js-delete-item-button inline">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-4 w-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        />
      </svg>
    </button>
  </li>`;

    return document.createRange().createContextualFragment(templateString)
      .firstChild;
  }

  makeItemEditable() {
    this.editInput.disabled = false;
    this.editInput.select();
  }

  updateItem(name) {
    this.editInput.disabled = true;
    this.name = name;
    this.items.updateInLocalStorage();
  }

  deleteItem() {
    this.items.deleteItem(this);
    this.element.remove();
  }
}

const itemsLocalStorage = JSON.parse(localStorage.getItem('items'));
const items = new Items(itemsLocalStorage);

const addItemButton = $('.js-add-item-button');
const addItemInput = $('.js-add-item-input');
addItemButton.addEventListener('click', addItem);
addItemInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addItem();
  }
});

function addItem() {
  const itemName = addItemInput.value;

  if (!itemName) {
    popUpEnterItemMessage();
    return;
  }

  const item = new Item(itemName, items);
  items.appendItem(item);
  addItemInput.value = '';
}

function popUpEnterItemMessage() {
  const enterItemMessage = $('.js-enter-item-message');
  enterItemMessage.classList.add('fade-in-out');
  enterItemMessage.addEventListener('animationend', () => {
    enterItemMessage.classList.remove('fade-in-out');
  });
}

const clearItemsButton = $('.js-clear-items-button');
clearItemsButton.addEventListener('click', () => items.clearItems());
