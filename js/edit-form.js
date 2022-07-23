const bodyDocument = document.querySelector('body');
const uploadFileOverlay = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const uploadForm = document.querySelector('#upload-select-image');
const buttonClose = document.querySelector('#upload-cancel');
const hashtagField = document.querySelector('.text__hashtags');
const descriptionField = document.querySelector('.text__description');

const OpenOrCloseModal =  () => {
  uploadFileOverlay.classList.toggle('hidden');
  bodyDocument.classList.toggle('modal-open');
};


hashtagField.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});
descriptionField.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});


uploadFile.addEventListener('change', () => {
  OpenOrCloseModal();
});


buttonClose.addEventListener('click', () => {
  OpenOrCloseModal();
  uploadForm.reset();
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    OpenOrCloseModal();
    uploadForm.reset();
  }
});
