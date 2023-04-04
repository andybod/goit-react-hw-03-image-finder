import axios from 'axios';

export async function fetchImages(inputData, page) {
  const searchParams = new URLSearchParams({
    key: '33912760-ff4b5d68ea8baf81744bcc433',
    q: inputData,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 12,
    page,
  });
  const images = await axios.get(`https://pixabay.com/api/?${searchParams}`);

  return images.data;
}
