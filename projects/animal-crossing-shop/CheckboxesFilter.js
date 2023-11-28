export default class CheckboxesFilter {
  constructor(clothingItemsGrid, element, labels) {
    this.clothingItemsGrid = clothingItemsGrid;
    this.element = element;
    this.labels = labels;
    this.addCheckboxes();
    this.checkboxes = this.element.querySelectorAll('.js-checkbox-item');
    this.detectCheckboxChange();
  }

  addCheckboxes() {
    this.labels.forEach((label) => {
      this.element.insertAdjacentHTML(
        'beforeend',
        `<li>
        <div class="flex items-center">
          <input
            type="checkbox"
            value="${label}"
            class="js-checkbox-item h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
          />
          <label
            for="js-checkbox-item"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >${label}</label
          >
        </div>
      </li>`,
      );
    });
  }

  detectCheckboxChange() {
    this.checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
        this.clothingItemsGrid.filter();
      });
    });
  }

  getCheckedCheckboxValues() {
    const checkedCheckboxValues = [];
    this.checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        checkedCheckboxValues.push(checkbox.value);
      }
    });
    return checkedCheckboxValues;
  }
}
