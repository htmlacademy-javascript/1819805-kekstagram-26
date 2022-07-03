import { get } from 'browser-sync';

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
let amount = 0;

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createComments = () => {
  return {
    id: getRandomPositiveInteger(50, 200),
    avatar: 'img/avatar' + [getRandomPositiveInteger(1, 6)] + '.svg',
    message: MESSAGE[getRandomPositiveInteger(0, 3)],
    name: NAME[getRandomPositiveInteger(0, 8)],
  };
};

const createPhotos = () => {
  return {
    id: amount++,
    url: 'photos/' + amount + '.jpg ',
    likes: getRandomPositiveInteger(1, MESSAGE.length),
    description:
      DESCRIPTION[getRandomPositiveInteger(1, DESCRIPTION.length - 1)],
    comments: createComments(),
  };
};

createComments();
const createSimilarComments = Array.from({COUNT}, createComments);

export{createSimilarComments, createPhotos, createComments};
