import { $, $$ } from '../lib.js';

const accordianButtons = $$('.js-accordian-button');
accordianButtons.forEach((accordianButton) =>
  accordianButton.addEventListener('click', () => {
    // debugger;
    console.log(accordianButton.dataset);
    const { accordianBodySelector } = accordianButton.dataset;
    const accordianBody = $(accordianBodySelector);
    accordianBody.classList.toggle('hidden');
  }),
);
