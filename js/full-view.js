import {isEscapeKey} from './utils.js';
import { createSimilarComments} from './data.js';

const pictures = document.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const canselButton = document.querySelector('.big-picture__cancel');
// const shownCommentsCounter = bigPicture.querySelector('.comments-count-shown');
const commentsList = document.querySelector('.social__comments');
const commentTemplate = commentsList.querySelector('.social__comment');
const commentsCount = document.querySelector('.social__comment-count');
const loaderMoreComments = document.querySelector('.comments-loader');

// commentsCount.classList.add('hidden');
// loaderMoreComments.classList.add('hidden');


const onCloseButton = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  canselButton.removeEventListener('click', onCloseButton);
};


const onButtonEscape = (evt) => {
  if(isEscapeKey(evt)) {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onButtonEscape);
  }
};
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
  // const id = picture.dataset;
  createSimilarComments.forEach((avatar, name, message) => {
    const commentElement = commentTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = avatar;
    commentElement.querySelector('.social__picture').alt = name;
    commentElement.querySelector('.social__text').textContent = message;
    commentsFragment.appendChild(commentElement);
  });

  commentsList.appendChild(commentsFragment);
};
pictures.forEach((picture) => {
  picture.addEventListener('click', (evt) => {openBigPicture(evt, picture);});
});

