import Ember from 'ember';
import ENV from 'korean-photos/config/environment';

const $ = window.$;

export default Ember.Component.extend({
  actions: {
    save () {
      return ENV.environment === 'development' ? $.getJSON('/api/save') : null;
    }
  },
  isDev: ENV.environment === 'development',
});
