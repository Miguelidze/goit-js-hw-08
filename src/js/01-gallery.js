import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import {
  galleryItems
} from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryPlace = document.querySelector(".gallery");

const createGallery = (items) => {
  return items.map((element) => createItem(element)).join("");
};

const createItem = ({
  preview,
  original,
  description
}) => {
  return `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"/>
          </a>`;
};

galleryPlace.insertAdjacentHTML("beforeend", createGallery(galleryItems));

const gallery = new SimpleLightbox(".gallery a", {
  captionSelector: "img", 
  captionsData: "alt", 
  captionPosition: "bottom", 
  captionDelay: 250, 
  scrollZoom: false, 
});