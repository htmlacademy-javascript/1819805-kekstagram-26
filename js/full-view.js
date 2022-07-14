import {isEscape} from './utils.js';
import { createPhotos } from './data.js';

const picture = document.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const canselButton = document.querySelector('.big-picture__cancel');


const commentsCount = document.querySelector('.social__comment-count');
const loaderMoreComments = document.querySelector('.comments-loader');
commentsCount.add('hidden');
loaderMoreComments('hidden');

const onCloseButton = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  canselButton.removeEventListener('click', onCloseButton);
};

const onButtonEscape = (evt) => {
  if(isEscape(evt)) {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onButtonEscape);
  }
};

const commentsList = document.querySelector('.social__comments');
const commentTemplate = commentsList.querySelector('.social__comment');


const openBigPicture = (evt, picture) => {
  evt.preventDefault();

  canselButton.addEventListener('click', onCloseButton);
  document.addEventListener('keydown', onButtonEscape);


  bigPicture.classList.remove('hidden');
  commentsCount.classList.add('hidden');
  loaderMoreComments.classList.add('hidden');
  body.classList.add('modal-open');
  commentsList.innerHTML = '';

  bigPicture.querySelector('.big-picture__img').querySelector('img').src = picture.querySelector('.picture__img').src;
  bigPicture.querySelector('.likes-count').textContent = picture.querySelector('.picture__likes').textContent;
  bigPicture.querySelector('.comments-count').textContent = picture.querySelector('.picture__comments').textContent;
  bigPicture.querySelector('.social__caption').textContent = picture.querySelector('.picture__comments').textContent;


  const commentsFragment = document.createDocumentFragment();
  for(const comments of createPhotos[id].comments) {
    const commentElement = commentTemplate.cloneNode(true);

    commentElement.querySelector('.social__picture').src = comments.avatar;
    commentElement.querySelector('.social__picture').alt = comments.name;
    commentElement.querySelector('.social__text').textContent = comments.message;

    commentsFragment.appendChild(commentElement);
  }

  commentsList.appendChild(commentsFragment);
};

picture.forEach((picture) => {
  picture.addEventListener('click', (evt) => {openBigPicture(evt, picture);});
});
