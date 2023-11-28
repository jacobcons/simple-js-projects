import { $, $$ } from '../lib.js';
import CheckboxesFilter from './CheckboxesFilter.js';
import { themes } from './clothing-data.js';

export default class ThemeFilter extends CheckboxesFilter {
  constructor(clothingItemsGrid) {
    super(clothingItemsGrid, $('#js-theme-checkboxes-list'), themes);
  }
}
