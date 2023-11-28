import { $, $$ } from '../lib.js';
import CheckboxesFilter from './CheckboxesFilter.js';
import { colors } from './clothing-data.js';

export default class ColorFilter extends CheckboxesFilter {
  constructor(clothingItemsGrid) {
    super(clothingItemsGrid, $('#js-color-checkboxes-list'), colors);
  }
}
