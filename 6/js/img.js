import {createSimilarComments} from './data.js';

const listOfPhotos = document.querySelector('.pictures');
const template = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const fragmentOfPhotos = document.createDocumentFragment();

createSimilarComments.forEach(({url, likes, comments}) => {
  const pictureElement = template.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  fragmentOfPhotos.appendChild(pictureElement);
});

listOfPhotos.appendChild(fragmentOfPhotos);
