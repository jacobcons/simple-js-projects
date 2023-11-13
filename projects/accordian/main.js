import { $, $$ } from '../lib.js';

const accordianButtons = $$('.js-accordian-toggle-button');
accordianButtons.forEach((button) =>
  button.addEventListener('click', () => {
    const section = button.closest('.js-accordian-section');
    section.classList.toggle('accordian-section-is-open');
  }),
);

const collapseAccordians = $$('.js-collapse-accordian');
collapseAccordians.forEach((accordian) => {
  const buttons = accordian.querySelectorAll('.js-accordian-toggle-button');
  const sections = accordian.querySelectorAll('.js-accordian-section');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const sectionForClickedButton = button.closest('.js-accordian-section');
      sections.forEach((section) => {
        if (section !== sectionForClickedButton) {
          section.classList.remove('accordian-section-is-open');
        }
      });
    });
  });
});
