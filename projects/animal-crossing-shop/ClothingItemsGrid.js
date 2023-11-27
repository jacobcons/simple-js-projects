import { $, $$ } from '../lib.js';
import clothingData from './clothingData.js';
import ClothingItemCard from './ClothingItemCard.js';
import LoadMoreButton from './LoadMoreButton.js';
import SearchFilter from './SearchFilter.js';
import CategoryFilter from './CategoryFilter.js';

export default class ClothingItemsGrid {
  constructor() {
    this.container = $('#js-clothing-container');
    this.renderedClothes = 0;
    this.clothesPerPage = 12;
    this.clothingData = clothingData;
    this.renderNextPage();
    this.loadMoreButton = new LoadMoreButton(this);
    this.searchFilter = new SearchFilter(this);
    this.categoryFilter = new CategoryFilter(this);
  }

  renderNextPage() {
    const clothingDataToRender = this.clothingData.slice(
      this.renderedClothes,
      this.renderedClothes + this.clothesPerPage,
    );

    const clothingDataToRenderEssentialData = clothingDataToRender.map(
      (clothingItem) => ({
        name: clothingItem.name,
        price: clothingItem.buy[0].price,
        variations: clothingItem.variations.map((variation) => ({
          colors: variation.colors,
          image_url: variation.image_url,
        })),
      }),
    );

    const clothingItemCardsToRender = clothingDataToRenderEssentialData.forEach(
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
    this.clothingData = clothingData.filter(
      (clothingItem) =>
        clothingItem.name.includes(this.searchFilter.getValue()) &&
        (clothingItem.category === this.categoryFilter.getValue() ||
          this.categoryFilter.getValue() === 'All'),
    );
    this.renderNextPage();
  }
}
