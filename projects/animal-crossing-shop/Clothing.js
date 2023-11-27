import { $, $$ } from '../lib.js';
import clothingData from './clothingData.js';
import ClothingItem from './ClothingItem.js';

export default class Clothing {
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

    const clothingItemsToRender = clothingDataToRenderEssentialData.forEach(
      ({ name, price, variations }) =>
        new ClothingItem(name, price, variations),
    );
  }

  renderClothingItem(clothingItem) {
    const colors = clothingItem.variations.map((variation) =>
      variation.colors.find((color) => color !== 'Colorful'),
    );
    generateClothingItemColoursTemplate(clothingItem);
    const clothingItemColoursTemplate = ``;
    const clothingItemTemplate = ``;
    this.container.insertAdjacentHTML();
  }
}
