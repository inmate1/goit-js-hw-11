export function createMarkup(array) {
  return array
    .map(
      ({ id, largeImageURL, previewURL, tags }) =>
        `<li class="list-item">
          <a href="${largeImageURL}" class="list-link">
          <img src="${previewURL}" alt="${tags}" class="item-img" width="300">
          </a>
          </li>`
    )
    .join('');
}
