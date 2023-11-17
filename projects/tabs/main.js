import { $, $$ } from '../lib.js';

const tabButtons = $$('.js-tab-button');
tabButtons.forEach((tabButton) => {
  tabButton.addEventListener('click', () => {
    tabButtons.forEach((tabButton) => {
      tabButton.classList.remove('tab-button-is-selected');
      const tabBody = getTabBodyGivenButton(tabButton);
      tabBody.classList.add('hidden');
    });

    tabButton.classList.add('tab-button-is-selected');
    const tabBody = getTabBodyGivenButton(tabButton);
    tabBody.classList.remove('hidden');
  });
});

function getTabBodyGivenButton(tabButton) {
  const { tabBodySelector } = tabButton.dataset;
  return $(tabBodySelector);
}
