export default class ClothingItemCard {
  constructor(name, price, variations) {
    this.name = name;
    this.price = price;
    this.variations = variations;

    this.element = this.createElement();
    this.image = this.element.querySelector('.js-clothing-item-image');
    this.colorCircles = this.element.querySelector('.js-clothing-items-colors');

    variations.forEach((variation) =>
      this.createColorCircle(
        variation.image_url,
        ClothingItemCard.ensureCorrectColorFormat(variation.colors),
      ),
    );
  }

  static ensureCorrectColorFormat(colors) {
    colors = colors.filter((color) => color !== 'Colorful');
    colors = colors.length === 2 ? colors : [colors[0], colors[0]];
    return colors;
  }

  createElement() {
    const elementTemplate = `<div
    class="rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
  >
    <img
      class="h-[200px] w-full rounded-t-lg object-contain js-clothing-item-image"
      src="${this.variations[0].image_url}"
      alt=""
    />
    <div class="flex flex-col items-center gap-y-1 p-5">
      <h5
        class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        ${this.name}
      </h5>
      <div class="flex items-center">
        <span
          class="text-lg font-normal text-gray-700 dark:text-gray-400"
        >
          ${this.price}
        </span>
        <img
          src="https://dodo.ac/np/images/thumb/6/6c/1%2C000_Bells_NH_Inv_Icon.png/120px-1%2C000_Bells_NH_Inv_Icon.png"
          alt=""
          class="w-8"
        />
      </div>
      <div class="flex flex-wrap gap-4 js-clothing-items-colors">
      </div>
    </div>
  </div>`;

    return document.createRange().createContextualFragment(elementTemplate)
      .firstChild;
  }

  createColorCircle(imageUrl, colors) {
    const colorCircleTemplate = `<button>
      <svg width="28" height="28" viewBox="-5 -5 110 110">
      <circle
        cx="50"
        cy="50"
        r="50"
        fill="none"
        stroke="gray"
        stroke-width="10"
      />
      <path d="M50 50 L50 0 A50 50 0 0 1 50 100 Z" fill="${colors[0]}" />
      <path d="M50 50 L50 100 A50 50 0 0 1 50 0 Z" fill="${colors[1]}" />
    </svg>
  </button>`;

    const colorCircle = document
      .createRange()
      .createContextualFragment(colorCircleTemplate).firstChild;
    colorCircle.addEventListener('click', () => {
      this.changeImage(imageUrl);
    });
    this.colorCircles.append(colorCircle);
  }

  changeImage(imageUrl) {
    this.image.src = imageUrl;
  }
}
