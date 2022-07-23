import { isEscapeKey } from './utils.js';

const maxCommentLength = 140;
const maxHashtags = 5;

const errorMessage = {
  hashtagView: 'Каждый хэштег должен начинаться с # и после содержать от 1 до 19 букв и/или цифр',
  hashtagsLength: `Допустимо не более ${maxHashtags} хэштегов`,
  hashtagUniqe: 'Хэштеги не должны повторяться',
  hashtagLength: `Максимальная длина описания - ${maxCommentLength} символов`
};

const uploadForm = document.querySelector('.img-upload__form');
const textDescription = document.querySelector('.text__description');
const textHashtags = document.querySelector('.text__hashtags');


const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'form-item__invalid',
  successClass: 'form-item__valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'form__error'
}, false);

const checkLine = (value) => value.length <= maxCommentLength;
const hashtagRE = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const getHashtags = () => {
  const hashtagsInLowerCase = textHashtags.value.toLowerCase();
  const hashtags = hashtagsInLowerCase.replace(/^ +| +$|( )+/g,'$1').split(' ');
  return hashtags;
};

const isHashtagRight = () => {
  const hashtags = getHashtags();
  return (hashtags.length <= maxHashtags);
};

const isHashtagValid =  (currentValue) =>
  hashtagRE.test(currentValue);


const isHashtagsValid = () => {
  if (textHashtags.value === '') {
    return true;
  }
  const hashtags = getHashtags();
  return hashtags.every(isHashtagValid);
};

const isHashtagUnique = () => {
  const hashtags = getHashtags();
  const set = new Set(hashtags);
  return (set.size === hashtags.length);
};

const validateDescription = (value)=> {
  const maxLength= 140;
  return value !== '' ? checkLine(value, maxLength) : true;
};

pristine.addValidator(textHashtags, isHashtagRight, errorMessage.HASHTAG_AMOUNT);
pristine.addValidator(textHashtags, isHashtagsValid, errorMessage.HASHTAG_FORMAT);
pristine.addValidator(textHashtags, isHashtagUnique, errorMessage.HASHTAG_REPEAT);
pristine.addValidator(textDescription, validateDescription, errorMessage.DESCRIPTION_LENGTH);

const validateUploadForm = (evt)=> {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
};

const onEscapeDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    evt.stopPropagation();
  }
};

textDescription.addEventListener('keydown', onEscapeDown);
textHashtags.addEventListener('keydown', onEscapeDown);

export{validateUploadForm, validateDescription, errorMessage};
