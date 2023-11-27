import { $, $$ } from '../lib.js';
import clothingData from './clothingData.js';
import ClothingItemCard from './ClothingItemCard.js';

export default class ClothingItemsGrid {
  constructor() {
    this.container = $('#js-clothing-container');
    this.renderedClothes = 0;
    this.clothesPerPage = 12;
    this.renderNextPage();
  }

  renderNextPage() {
    const clothingDataToRender = clothingData.slice(
      this.renderedClothes,
      this.renderedClothes + this.clothesPerPage,
    );

    const clothingDataToRenderEssentialData = clothingDataToRender.map(
      (clothingItem) => ({
        name: clothingItem.name,
        price: clothingItem.buy[0].price,
        variations: {
          colors: clothingItem.variations.colors,
          image_url: clothingItem.variations.image_url,
        },
      }),
    );

    const clothingItemCardsToRender = clothingDataToRenderEssentialData.forEach(
      ({ name, price, variations }) =>
        this.appendClothingItemCard(
          new ClothingItemCard(name, price, variations),
        ),
    );
  }

  appendClothingItemCard(clothingItemCard) {
    this.container.insertAdjacentHTML(clothingItemCard.element);
  }
}
