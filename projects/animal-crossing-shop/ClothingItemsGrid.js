import { $, $$ } from '../lib.js';
import { allClothing } from './clothing-data.js';
import ClothingItemCard from './ClothingItemCard.js';
import LoadMoreButton from './LoadMoreButton.js';
import SearchFilter from './SearchFilter.js';
import CategoryFilter from './CategoryFilter.js';
import ColorFilter from './ColorFilter.js';
import StyleFilter from './StyleFilter.js';
import ThemeFilter from './ThemeFilter.js';

export default class ClothingItemsGrid {
  constructor() {
    this.container = $('#js-clothing-container');
    this.renderedClothes = 0;
    this.clothesPerPage = 12;
    this.allClothing = allClothing;
    this.renderNextPage();
    this.loadMoreButton = new LoadMoreButton(this);
    this.searchFilter = new SearchFilter(this);
    this.categoryFilter = new CategoryFilter(this);
    this.colorFilter = new ColorFilter(this);
    this.styleFilter = new StyleFilter(this);
    this.themeFilter = new ThemeFilter(this);
  }

  renderNextPage() {
    const allClothingToRender = this.allClothing.slice(
      this.renderedClothes,
      this.renderedClothes + this.clothesPerPage,
    );

    const allClothingToRenderEssentialData = allClothingToRender.map(
      (clothingItem) => ({
        name: clothingItem.name,
        price: clothingItem.buy[0].price,
        variations: clothingItem.variations.map((variation) => ({
          colors: variation.colors,
          image_url: variation.image_url,
        })),
      }),
    );

    const clothingItemCardsToRender = allClothingToRenderEssentialData.forEach(
      ({ name, price, variations }) =>
        this.appendClothingItemCard(
          new ClothingItemCard(name, price, variations),
        ),
    );

    this.renderedClothes += this.clothesPerPage;
  }

  appendClothingItemCard(clothingItemCard) {
    this.container.append(clothingItemCard.element);
  }

  clear() {
    this.container.innerHTML = '';
    this.renderedClothes = 0;
  }

  filter() {
    this.clear();
    this.allClothing = allClothing.filter(
      (clothingItem) =>
        this.clothingItemMatchesSearch(clothingItem) &&
        this.clothingItemMatchesCategory(clothingItem) &&
        this.clothingItemMatchesAnyColor(clothingItem) &&
        this.clothingItemMatchesAnyStyle(clothingItem) &&
        this.clothingItemMatchesAnyTheme(clothingItem),
    );
    this.renderNextPage();
  }

  clothingItemMatchesSearch(clothingItem) {
    return clothingItem.name.includes(this.searchFilter.getValue());
  }

  clothingItemMatchesCategory(clothingItem) {
    return (
      clothingItem.category === this.categoryFilter.getValue() ||
      this.categoryFilter.getValue() === 'All'
    );
  }

  clothingItemMatchesAnyColor(clothingItem) {
    const checkedColors = this.colorFilter.getCheckedCheckboxValues();
    if (!checkedColors.length) return true;

    return clothingItem.variations.some((variation) =>
      variation.colors.some((color) => checkedColors.includes(color)),
    );
  }

  clothingItemMatchesAnyStyle(clothingItem) {
    const checkedStyles = this.styleFilter.getCheckedCheckboxValues();
    if (!checkedStyles.length) return true;

    return clothingItem.styles.some((style) => checkedStyles.includes(style));
  }

  clothingItemMatchesAnyTheme(clothingItem) {
    const checkedThemes = this.themeFilter.getCheckedCheckboxValues();
    if (!checkedThemes.length) return true;

    return clothingItem.label_themes.some((theme) =>
      checkedThemes.includes(theme),
    );
  }
}
