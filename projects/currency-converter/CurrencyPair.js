export default class CurrencyPair {
  constructor(currency1, currency2) {
    this.currency1 = currency1;
    this.currency2 = currency2;

    this.currency1.otherCurrency = currency2;
    this.currency2.otherCurrency = currency1;

    currency1.setAmount(1);
    currency1.convertToOtherCurrency();

    [this.currency1, this.currency2].forEach((currency) => {
      currency.typeInput.addEventListener('change', () =>
        currency1.convertToOtherCurrency(),
      );
    });
  }
}
