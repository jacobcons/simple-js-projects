const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest';

async function getCurrencyTypes() {
  const currencyTypesResponse = await fetch(`${baseUrl}/currencies.min.json`);
  const currencyTypesJSON = await currencyTypesResponse.json();
  // remove currencies with no name and sort alphabetically by currency name
  const currencyTypes = Object.fromEntries(
    Object.entries(currencyTypesJSON)
      .filter(([currencyCode, currencyName]) => currencyName)
      .sort((a, b) => a[1].localeCompare(b[1])),
  );
  return currencyTypes;
}

async function getExchangeRates() {
  const exchangeRateResponse = await fetch(
    `${baseUrl}/currencies/gbp.min.json`,
  );
  const exchangeRateJSON = await exchangeRateResponse.json();
  return exchangeRateJSON['gbp'];
}

const [currencyTypes, exchangeRates] = await Promise.all([
  getCurrencyTypes(),
  getExchangeRates(),
]);

export { currencyTypes, exchangeRates };
