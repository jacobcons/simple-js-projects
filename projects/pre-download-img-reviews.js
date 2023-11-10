// URL of the image you want to download
const imageUrl = 'https://example.com/image.jpg';

// Create a new Image object
const image = new Image();

// Set the src attribute of the Image object to the image URL
image.src = imageUrl;

// When the image has finished downloading
image.onload = function () {
  // Find the img tag
  const imgTag = document.querySelector('img');

  // Set the src attribute of the img tag to the image URL
  imgTag.src = imageUrl;
};
