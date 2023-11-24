import { $, $$ } from '../lib.js';

const openModalButton = $('#js-open-modal-button');
const closeModalButton = $('#js-close-modal-button');
const modal = $('#js-modal');
openModalButton.addEventListener('click', () => {
  modal.classList.remove('hidden');
});
closeModalButton.addEventListener('click', () => {
  modal.classList.add('hidden');
});
