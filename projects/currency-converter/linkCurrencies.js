export default function linkCurrencies(currency1, currency2) {
  currency1.otherCurrency = currency2;
  currency2.otherCurrency = currency1;

  currency1.setAmount(1);
  currency1.convertToOtherCurrency();

  [currency1, currency2].forEach((currency) => {
    currency.typeInput.addEventListener('change', () =>
      currency1.convertToOtherCurrency(),
    );
  });
}
