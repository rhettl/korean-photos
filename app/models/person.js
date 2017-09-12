import DS from 'ember-data';

const {attr, hasMany} = DS;

export default DS.Model.extend({
  name: attr('string'),
  article: attr('string'),
  desc: attr('string'),
  photos: hasMany('photo')
});
