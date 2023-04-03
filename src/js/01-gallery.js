import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}" >
    <img
      class="gallery__image"
      src="${preview}"      
      alt="${description}"
    />
  </a>
</li>
`;
    })
    .join('');
}
const textImg = {
  captionsData: 'alt',
  captionDelay: 250,
};
var lightbox = new SimpleLightbox('.gallery a', textImg);

// console.log(galleryItems);
