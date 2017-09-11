import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createTag (tagName) {
      const store = this.get('store');
      return store.query('tag', {name: tagName})
        .then(found => {
          if (found.length) {
            return Promise.reject(new Error ('Tag already exists'));
          } else {
            return store.createRecord('tag', {name: tagName});
          }
        })
      ;
    }
  }
});
