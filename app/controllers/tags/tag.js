import Ember from 'ember';

export default Ember.Controller.extend({
  photos: Ember.computed.alias('model.photos'),
  mainPhotos: Ember.computed.filterBy('photos', 'isMain'),
});
