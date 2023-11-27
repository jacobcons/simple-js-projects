const baseUrl = 'https://api.nookipedia.com/nh/clothing';
const apiKey = '16b5eed6-c3a1-446a-b225-f44720762a0c';
const apiVersion = '1.0.0';

const clothingResponse = await fetch(baseUrl, {
  headers: {
    'X-API-KEY': apiKey,
    'X-API-VERSION': apiVersion,
  },
});
const clothingData = (await clothingResponse.json()).filter(
  (clothingItem) => clothingItem.buy.length,
);

export default clothingData;
