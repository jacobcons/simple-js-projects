import { $, $$ } from '../lib.js';

let items = [];
function addItemsFromLocalStorage() {
  const itemsFromLocalStorage = JSON.parse(localStorage.getItem('items'));
  items = itemsFromLocalStorage;
  itemsFromLocalStorage.forEach((item) => {
    appendItemToItemList(item);
  });
}

const itemsView = $('.js-items');
function appendItemToItemList(item) {
  itemsView.insertAdjacentHTML('beforeend', generateItemTemplate(item));
  const itemView = itemsView.lastElementChild;
  addItemEditButtonFunctionality(itemView);
  addItemDeleteButtonFunctionality(itemView);
}

addItemsFromLocalStorage();

const addItemButton = $('.js-add-item-button');
const addItemInput = $('.js-add-item-input');
addItemButton.addEventListener('click', addItem);
addItemInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addItem();
  }
});

function addItem() {
  const item = addItemInput.value;

  if (!item) {
    popUpEnterItemMessage();
    return;
  }

  items.push(item);
  updateItemsInLocalStorage();
  appendItemToItemList(item);
  addItemInput.value = '';
}

function popUpEnterItemMessage() {
  const enterItemMessage = $('.js-enter-item-message');
  enterItemMessage.classList.add('fade-in-out');
  enterItemMessage.addEventListener('animationend', () => {
    enterItemMessage.classList.remove('fade-in-out');
  });
}

function generateItemTemplate(item) {
  return `<li class="flex gap-x-2">
    <input
      class="js-edit-item-input w-full rounded-l-lg p-2"
      type="text"
      value="${item}"
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
}

function addItemEditButtonFunctionality(itemView) {
  const editItemButton = itemView.querySelector('.js-edit-item-button');
  const editItemInput = itemView.querySelector('.js-edit-item-input');
  editItemButton.addEventListener('click', () => {
    editItemInput.disabled = false;
    editItemInput.select();
    editItemInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        updateItem(itemView, editItemInput);
      }
    });

    document.addEventListener('click', (e) => {
      const clickOutsideOfItem = !itemView.contains(e.target);
      if (clickOutsideOfItem && !editItemInput.disabled) {
        updateItem(itemView, editItemInput);
      }
    });
  });
}

function updateItem(itemView, editItemInput) {
  const item = editItemInput.value;
  items[getIndexOfItemView(itemView)] = item;
  updateItemsInLocalStorage();
  editItemInput.disabled = true;
}

function updateItemsInLocalStorage() {
  console.log(items);
  localStorage.setItem('items', JSON.stringify(items));
}

function getIndexOfItemView(itemView) {
  const itemsViewArray = [...itemsView.children];
  return itemsViewArray.indexOf(itemView);
}

function addItemDeleteButtonFunctionality(itemView) {
  const deleteItemButton = itemView.querySelector('.js-delete-item-button');
  deleteItemButton.addEventListener('click', () => {
    items.splice(getIndexOfItemView(itemView), 1);
    updateItemsInLocalStorage();
    itemView.remove();
  });
}

const clearItemsButton = $('.js-clear-items-button');
clearItemsButton.addEventListener('click', clearItems);
function clearItems() {
  items = [];
  updateItemsInLocalStorage();
  itemsView.innerHTML = '';
}
