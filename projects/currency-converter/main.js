import { $, $$ } from '../lib.js';
import Currency from './Currency.js';
import linkCurrencies from './linkCurrencies.js';

const currency1 = new Currency(
  $('#js-currency-amount-1'),
  $('#js-currency-type-1'),
  'gbp',
);
const currency2 = new Currency(
  $('#js-currency-amount-2'),
  $('#js-currency-type-2'),
  'usd',
);

linkCurrencies(currency1, currency2);
