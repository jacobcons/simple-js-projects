import { removeDuplicates } from '../lib.js';

const baseUrl = 'https://api.nookipedia.com/nh/clothing';
const apiKey = '16b5eed6-c3a1-446a-b225-f44720762a0c';
const apiVersion = '1.0.0';

const clothingResponse = await fetch(baseUrl, {
  headers: {
    'X-API-KEY': apiKey,
    'X-API-VERSION': apiVersion,
  },
});
const allClothing = (await clothingResponse.json()).filter(
  (clothingItem) => clothingItem.buy.length,
);

const categoriesSet = new Set();
allClothing.forEach((clothingItem) => categoriesSet.add(clothingItem.category));
const categories = [...categoriesSet];

const colorsSet = new Set();
allClothing.forEach((clothingItem) =>
  clothingItem.variations.forEach((variation) =>
    colorsSet.add(...variation.colors),
  ),
);
const colors = [...colorsSet];

const stylesSet = new Set();
allClothing.forEach((clothingItem) => stylesSet.add(...clothingItem.styles));
stylesSet.delete(undefined);
const styles = [...stylesSet];

const themesSet = new Set();
allClothing.forEach((clothingItem) =>
  themesSet.add(...clothingItem.label_themes),
);
const themes = [...themesSet];

export { allClothing, categories, colors, styles, themes };
