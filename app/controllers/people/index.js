import Ember from 'ember';

export default Ember.Controller.extend({
  sortProp: ['name'],
  people: Ember.computed.alias('model'),
  peopleQuantity: Ember.computed.sort('people', (a, b) => b.get('photos.length') - a.get('photos.length')),
  peopleAlpha: Ember.computed.sort('people', 'sortProp')
});
