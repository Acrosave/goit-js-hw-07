import { galleryItems } from './gallery-items.js';
const ulList = document.querySelector('.gallery');
const markup = galleryItems
  .map(item => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}" >
       <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
    </li>`;
  })
  .join('');
ulList.insertAdjacentHTML('beforeend', markup);
ulList.addEventListener('click', () => {});
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});
lightbox.on('show.simplelightbox');
