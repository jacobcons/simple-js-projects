export default class ClothingItemCard {
  constructor(name, price, variations) {
    this.name = name;
    this.price = price;
    this.variations = variations;

    this.element = this.createElement();
  }
}
