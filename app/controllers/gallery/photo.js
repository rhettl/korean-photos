import Ember from 'ember';
import RSVP from 'rsvp';
import ENV from 'korean-photos/config/environment';

let controller = Ember.Controller.extend({

  actions: {
    updateTags (selected) {
      const photo = this.get('model');
      photo.set('tags', selected);

      return photo.save();
    },
    updatePeople (selected) {
      const photo = this.get('model');
      photo.set('people', selected);

      return photo.save();
    },
    updateDuplicates (selected) {
      const photo = this.get('model');
      const proms = [photo, ...selected].map((p, i, arr) => {
        p.set('duplicates', arr.filter(j => j.id !== p.id));
        return p.save();
      });

      return RSVP.all(proms);
    },
    updateRelated (selected) {
      const photo = this.get('model');
      const proms = [photo, ...selected].map((p, i, arr) => {
        p.set('related', arr.filter(j => j.id !== p.id));
        return p.save();
      });

      return RSVP.all(proms);
    },
    toggleMain () {
      const photo = this.get('model');
      photo.toggleProperty('isMain');

      return photo.save();
    },
    savePhoto () {
      return this.get('model').save();
    }
  },

  isDev:       ENV.environment === 'development',
  queryParams: ['edit'],
  _edit:       false,
  edit:        Ember.computed({
    get () {
      return this.get('isDev') && this.get('_edit')
    },
    set (_, val) {
      val = this.get('isDev') && !!val;
      this.set('_edit', val);
      return val;
    }
  }),

  store:         Ember.inject.service(),
  _tags:          Ember.computed(function () {
    return this.get('store').findAll('tag');
  }),
  tags:        Ember.computed.sort('_tags', (a, b) => (a.get('name') > b.get('name') ? +1 : (a.get('name') < b.get('name') ? -1 : 0))),
  _photos:       Ember.computed(function () {
    return this.get('store').findAll('photo');
  }),
  photos:        Ember.computed.sort('_photos', (a, b) => Number(a.id) - Number(b.id)),
  mainPhotos:    Ember.computed.filterBy('photos', 'isMain'),
  notMainPhotos: Ember.computed.filterBy('photos', 'isMain', false),
  people:        Ember.computed(function () {
    return this.get('store').findAll('person');
  }),

});

if (ENV.environment === 'development') {
}

export default controller;
