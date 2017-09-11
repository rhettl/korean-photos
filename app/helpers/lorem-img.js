import Ember from 'ember';
import {img} from './img';

const categories = [
  'abstract',
  'animals',
  'business',
  'cats',
  'city',
  'food',
  'nightlife',
  'fashion',
  'people',
  'nature',
  'sports',
  'technics',
  'transport',
];

export function loremImg([x, y], hash) {
  const colorString = typeof hash.color === 'undefined' || hash.color ? '' : '/g';

  let type = '';
  if (hash.type && categories.includes(hash.type.toLowerCase())) {
    type = '/' + hash.type.toLowerCase();
  }

  let number = '';
  if (hash.number) {
    number = '/' + hash.number;
  }

  let text = '';
  if (hash.text) {
    text = '/' + hash.text;
  }

  return img([`http://lorempixel.com${colorString}/${x}/${y}${type}${number}${text}`, hash.alt, x, y], hash);
}

export default Ember.Helper.helper(loremImg);
