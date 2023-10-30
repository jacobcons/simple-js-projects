import { $ } from '../lib.js';

const nav = $('.js-nav');
const dropDownNavButton = $('.js-dropdown-nav-button');
const openDropdownNavIcon = $('.js-open-dropdown-nav-icon');
const closeDropdownNavIcon = $('.js-close-dropdown-nav-icon');
const root = $(':root');
const extraSpaceAtBottomDropDownNav = 32;
dropDownNavButton.addEventListener('click', () => {
  openDropdownNavIcon.classList.toggle('hidden');
  closeDropdownNavIcon.classList.toggle('hidden');
  const dropdownNavHeight = getComputedStyle(root).getPropertyValue(
    '--dropdown-nav-height',
  );
  if (dropdownNavHeight === '0px') {
    root.style.setProperty(
      '--dropdown-nav-height',
      `${nav.scrollHeight + extraSpaceAtBottomDropDownNav}px`,
    );
  } else {
    root.style.setProperty('--dropdown-nav-height', '0px');
  }
});
