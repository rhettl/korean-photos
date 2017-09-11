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

  isDev: ENV.environment === 'development',

  store:      Ember.inject.service(),
  tags:       Ember.computed(function () {
    return this.get('store').findAll('tag');
  }),
  photos:     Ember.computed(function () {
    // const id = this.get('model.id');
    return this.get('store')
      .findAll('photo')
      // .then(data => {
      //   data.set('content', data.content.filter(p => p.id !== id))
      //   return data;
      // })
      ;
  }),
  mainPhotos: Ember.computed(function () {
    return this.get('store')
      .findAll('photo')
      // .then(data => {
      //   data.set('content', data.content.filter(p => p.isMain))
      //   return data;
      // })
      ;
  }),
  people:     Ember.computed(function () {
    return this.get('store').findAll('person');
  }),

});

if (ENV.environment === 'development') {
  controller.queryParams = ['edit'];
  controller.edit = false;
}

export default controller;
