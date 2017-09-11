import Ember from 'ember';

export function img([src, alt, width, height], hash) {
  height = hash.height || height;
  width = hash.width || width;
  src = hash.src || src;
  alt = hash.alt || alt || '';

  let cls = ['img-responsive'];
  if (typeof hash.rounded === 'undefined' && typeof hash.circle === 'undefined' && typeof hash.thumbnail === 'undefined' && typeof hash.noClass === 'undefined') {
    cls.push('img-rounded'); // Default
  } else {
    if (typeof hash.rounded !== 'undefined') {
      cls.push('img-rounded');
    }
    if (typeof hash.circle !== 'undefined') {
      cls.push('img-circle');
    }
    if (typeof hash.thumbnail !== 'undefined') {
      cls.push('img-thumbnail');
    }
  }

  (hash.class || '')
    .split(/\s+/g)
    .filter(c => c.length)
    .forEach(c => cls.push(c))
  ;

  height = height ? ` height="${height}"` : '';
  width = width ? ` width="${width}"` : '';

  return new Ember.String.htmlSafe(`<img src="${src}" alt="${alt}" class="${cls.join(' ')}"${height}${width} />`);
}

export default Ember.Helper.helper(img);
