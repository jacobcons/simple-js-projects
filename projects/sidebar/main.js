import { $, $$ } from '../lib.js';

const openSidebarButton = $('#js-open-sidebar-button');
const closeSidebarButton = $('#js-close-sidebar-button');
const sidebar = $('#js-sidebar');
openSidebarButton.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar-is-open');
});
closeSidebarButton.addEventListener('click', () => {
  sidebar.classList.remove('sidebar-is-open');
});
