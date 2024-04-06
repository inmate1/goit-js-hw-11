import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const imgGallery = document.querySelector('.img-list');

console.log(imgGallery);

import { fetchImages } from './js/pixabay-api';

import { createMarkup } from './js/render-functions';

const form = document.querySelector('.search-form');
form.addEventListener('submit', onSubmit);
console.dir(form);

function onSubmit(event) {
  event.preventDefault();
  const elements = event.target.elements;
  if (elements.images.value.trim() === '') {
    return;
  }
  const userSearch = elements.images.value.trim();
  fetchImages(userSearch)
    .then(data =>
      imgGallery.insertAdjacentHTML('beforeend', createMarkup(data))
    )
    .catch(error => {
      alert(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      iziToast.show({
        title: 'Hey',
        message: 'What would you like to add?',
      });
    });
  //   console.log(userSearch);
}
