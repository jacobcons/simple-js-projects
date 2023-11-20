import { $, $$, getRandomIntInRange, wait } from '../lib.js';

class TypeWriterText {
  constructor(element) {
    this.element = element;
    const { minTimeMsBetweenLetters, maxTimeMsBetweenLetters } =
      this.element.dataset;
    this.minTimeMsBetweenLetters = parseInt(minTimeMsBetweenLetters);
    this.maxTimeMsBetweenLetters = parseInt(maxTimeMsBetweenLetters);
    this.finalText = this.element.textContent.trim();
  }

  typeText() {
    return new Promise(async (resolve, reject) => {
      this.element.textContent = '';
      let currentLetterIndex = 0;
      while (this.element.textContent !== this.finalText) {
        this.element.insertAdjacentText(
          'beforeend',
          this.finalText[currentLetterIndex],
        );
        currentLetterIndex += 1;

        const randomWaitTimeUntilNextLetter = getRandomIntInRange(
          this.minTimeMsBetweenLetters,
          this.maxTimeMsBetweenLetters,
        );
        await wait(randomWaitTimeUntilNextLetter);
      }
      resolve();
    });
  }
}

const typeWriterTextElements = $$('[data-typewriter-text]');
typeWriterTextElements.forEach((typeWriterTextElement) => {
  const typeWriterText = new TypeWriterText(typeWriterTextElement);
  typeWriterText.typeText().then(() => {
    console.log('done');
  });
});
