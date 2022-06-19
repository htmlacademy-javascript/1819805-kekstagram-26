import { get } from 'browser-sync';

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


// const checkStringLength = (string, length) => {
//   return string.length <= length;
// };

const COUNT = 25;
const DESCRIPTION = [
  'Счастлив и рад',
  'Замечательное фото, делюсь',
  'Как же круто выходит',
  'Уверен, такого вы еще не видели',
  'Вау, кто здесь снова оказался',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
];
const NAME = ['Антон', 'Аня', 'Макс', 'Лена', 'Игорь', 'Света', 'Женя', 'Вика'];
let amount = 0;

const createComments = (id) => {
  const comment = () => ({
    id,
    avatar: 'img/avatar' + [getRandomPositiveInteger(1, 6)] + '.svg',
    message: MESSAGE[getRandomPositiveInteger(0, 3)],
    name: NAME[getRandomPositiveInteger(0, 8)],
  });

  return Array.from({ length: COUNT }, comment);
};

const createPhotos = (id) => {
  const comments = [];
  const commentsCount = getRandomPositiveInteger(1,5);
  const ids = [];

  for (let i = 1; i <= commentsCount; i++) {
    if (i === 1) {
      const g = getRandomPositiveInteger(1,55);
      comments.push(createComments(g));
      ids.push(g);
    } else {
      let g;
      while(true) {
        g = getRandomPositiveInteger(1,55);
        if(!ids.some(el=>el===g)){
          ids.push(g);
          break;
        }
      }
      comments.push(createComments(g));
    }
  }
  return {
    id: amount++,
    url: 'photos/' + amount + '.jpg',
    likes: getRandomPositiveInteger(1, MESSAGE.length),
    description: DESCRIPTION[getRandomPositiveInteger(1, DESCRIPTION.length - 1)],
    comments: createComments(),
  };
};

const createSimilarComments = Array.from({ length: COUNT }, createPhotos);


export {createSimilarComments};
