



const API_KEY = '43226276-a07a0c17e428cfffb021b9b05';

const params = new URLSearchParams({
  key: API_KEY,
  // q: userSearch, // слово для поиска. То, что будет вводить пользователь.
  image_type: 'photo', //тип изображения. Нужны только фотографии, поэтому поставь значение  photo.
  orientation: 'horizontal', // ориентация фотографии. Поставь значение  horizontal.
  safesearch: true, // фильтр по возрасту. Поставь значение  true.
});

export function fetchImages(userSearch) {
  const url = `https://pixabay.com/api/?${params}&q=${encodeURIComponent(
    userSearch
  )}`;
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      console.log(response); // promis
      return response.json(); // object
    })
    .then(data => {
      if (data.hits.length === 0) {
        throw new Error(response.status);
      }
      return data.hits;
    });
  // .catch(error =>
  //   alert(
  //     'Sorry, there are no images matching your search query. Please try again!'
  //   )
  // );
}