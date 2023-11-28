import { $, $$ } from '../lib.js';
import CheckboxesFilter from './CheckboxesFilter.js';
import { styles } from './clothing-data.js';

export default class StyleFilter extends CheckboxesFilter {
  constructor(clothingItemsGrid) {
    super(clothingItemsGrid, $('#js-style-checkboxes-list'), styles);
  }
}
