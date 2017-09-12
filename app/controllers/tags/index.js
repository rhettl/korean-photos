import Ember from 'ember';

export default Ember.Controller.extend({
  sortProp: ['name'],
  tags: Ember.computed.alias('model'),
  tagsQuantity: Ember.computed.sort('tags', (a, b) => b.get('photos.length') - a.get('photos.length')),
  tagsAlpha: Ember.computed.sort('tags', 'sortProp')
});
