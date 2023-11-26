import { $, $$ } from '../lib.js';
import Items from './Items.js';
import AddItemInput from './AddItemInput.js';
import ClearItemsButton from './ClearItemsButton.js';

const items = new Items();
new AddItemInput(items);
new ClearItemsButton(items);
