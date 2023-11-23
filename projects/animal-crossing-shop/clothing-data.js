const baseUrl = 'https://api.nookipedia.com/nh/clothing';
const apiKey = '16b5eed6-c3a1-446a-b225-f44720762a0c';
const apiVersion = '1.0.0';

async function getClothingData() {
  const clothingResponse = await fetch(baseUrl, {
    headers: {
      'X-API-KEY': apiKey,
      'X-API-VERSION': apiVersion,
    },
  });
  const clothingJson = await clothingResponse.json();
  return clothingJson;
}

const clothingData = await getClothingData();

export { clothingData };
