import { currencyTypes, exchangeRates } from './CurrencyData.js';

export default class Currency {
  constructor(amountInput, typeInput, initialType) {
    this.amountInput = amountInput;
    this.typeInput = typeInput;
    this.initialType = initialType;

    this.initTypes();
    this.amountInput.addEventListener('input', () =>
      this.convertToOtherCurrency(),
    );
  }

  initTypes() {
    this.fillTypes();
    this.setType(this.initialType);
  }

  fillTypes() {
    Object.entries(currencyTypes).forEach(([code, name]) =>
      this.typeInput.insertAdjacentHTML(
        'beforeend',
        `<option value="${code}">${name}</option>`,
      ),
    );
  }

  convertToOtherCurrency() {
    const amount = this.getAmount();
    if (amount < 0 || isNaN(amount)) {
      this.otherCurrency.setAmount('');
      return;
    }

    const type = this.getType();
    const otherCurrencyType = this.otherCurrency.getType();
    const exchangeRate = exchangeRates[otherCurrencyType] / exchangeRates[type];
    const otherCurrencyConvertedAmount = (amount * exchangeRate).toFixed(2);
    this.otherCurrency.setAmount(otherCurrencyConvertedAmount);
  }

  getAmount() {
    return parseFloat(this.amountInput.value);
  }

  setAmount(amount) {
    this.amountInput.value = amount;
  }

  getType() {
    return this.typeInput.value;
  }

  setType(type) {
    this.typeInput.value = type;
  }
}
