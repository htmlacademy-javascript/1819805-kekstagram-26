import {getRandomPositiveInteger} from './utils.js';

const COUNT = 25;
const DESCRIPTION = [
  'Счастлив и рад',
  'Замечательное фото, делюсь',
  'Как же круто выходит',
  'Уверен, такого вы еще не видели',
  'Вау, кто здесь снова оказался'
];
const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
];
const NAME = [
  'Антон',
  'Аня',
  'Макс',
  'Лена',
  'Игорь',
  'Света',
  'Женя',
  'Вика',
];

const createComments = () => {
  return {
    id: getRandomPositiveInteger(1, 25),
    avatar: `img/avatar-${getRandomPositiveInteger (1, 6)}.svg`,
    message: MESSAGE[getRandomPositiveInteger(0, 3)],
    name: NAME[getRandomPositiveInteger(0, 8)],
  };
};

const createCommentList = () => {
  const numberOfComments = getRandomPositiveInteger(1,5);
  return Array.from({length: numberOfComments}, createComments);
};

const createPhotos = () => {
  return {
    id: getRandomPositiveInteger(1,25),
    url: `photos/${ getRandomPositiveInteger(1,25) }.jpg`,
    likes: getRandomPositiveInteger(15,200),
    description:DESCRIPTION[getRandomPositiveInteger(1, DESCRIPTION.length - 1)],
    comments: createCommentList()
  };
};


const createSimilarComments = Array.from({length: COUNT}, createPhotos);

export {createPhotos, createSimilarComments, createCommentList};
