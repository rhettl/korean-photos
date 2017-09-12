import Ember from 'ember';
import ENV from 'korean-photos/config/environment';

export default Ember.Controller.extend({
  isDev: ENV.environment === 'development',
  queryParams: ['edit'],
  _edit: false,
  edit: Ember.computed({
    get () { return this.get('isDev') && this.get('_edit') },
    set (_, val) {
      val = this.get('isDev') && !!val;
      this.set('_edit', val);
      return val;
    }
  }),

  photos: Ember.computed.sort('model', (a, b) => Number(a.id)-Number(b.id)),
  mainPhotos: Ember.computed.filterBy('photos', 'isMain'),
  notMainPhotos: Ember.computed.filterBy('photos', 'isMain', false)
});
