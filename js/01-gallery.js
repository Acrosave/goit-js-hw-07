import { galleryItems } from './gallery-items.js';
const ulList = document.querySelector('.gallery');
const markup = galleryItems
  .map(item => {
    return `<li class="gallery__item">
    <a class="gallery__link">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>`;
  })
  .join('');
ulList.insertAdjacentHTML('beforeend', markup);
ulList.addEventListener('click', basicLight);

function basicLight(limiter) {
  const instance = basicLightbox.create(`
  <img src="${limiter.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  document.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      instance.close();
    }
  });
}
