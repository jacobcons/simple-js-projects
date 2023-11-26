import { $, $$ } from '../lib.js';
import CurrencyInput from './CurrencyInput.js';
import linkCurrencies from './linkCurrencies.js';

const currency1 = new CurrencyInput(
  $('#js-currency-amount-1'),
  $('#js-currency-type-1'),
  'gbp',
);
const currency2 = new CurrencyInput(
  $('#js-currency-amount-2'),
  $('#js-currency-type-2'),
  'usd',
);

linkCurrencies(currency1, currency2);
