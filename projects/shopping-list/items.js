import { $, $$ } from '../lib.js';
import Item from './Item.js';

// get items from local storage
const jsonItemNamesInStorage = localStorage.getItem('items');
const itemNamesInStorage = jsonItemNamesInStorage
  ? JSON.parse(jsonItemNamesInStorage)
  : [];
let items = itemNamesInStorage.map((name) => new Item(name));

const itemContainer = $('.js-items');

function renderItems() {
  items.forEach((item) => itemContainer.append(item.element));
}

function appendItem(item) {
  items.push(item);
  itemContainer.append(item.element);
  updateLocalStorage();
}

function deleteItem(item) {
  items = items.filter((currentItem) => currentItem !== item);
  updateLocalStorage();
}

function clearItems() {
  items = [];
  itemContainer.innerHTML = '';
  updateLocalStorage();
}

function convertItemObjectsToItemNames() {
  return items.map((item) => item.name);
}

function updateLocalStorage() {
  localStorage.setItem(
    'items',
    JSON.stringify(convertItemObjectsToItemNames()),
  );
}

export { renderItems, appendItem, deleteItem, clearItems, updateLocalStorage };
