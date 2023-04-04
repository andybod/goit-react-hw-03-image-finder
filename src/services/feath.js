const API_KEY = '33912760-ff4b5d68ea8baf81744bcc433';
const BASE_URL = 'https://pixabay.com/api/';
export function getImages(searchText, page) {
  return fetch(
    `${BASE_URL}?q=${searchText}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}
