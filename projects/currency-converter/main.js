import { $, $$ } from '../lib.js';
import Currency from './Currency.js';
import CurrencyPair from './CurrencyPair.js';

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

const currencyPair = new CurrencyPair(currency1, currency2);
