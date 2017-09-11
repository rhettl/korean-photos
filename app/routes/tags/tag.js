import Ember from 'ember';

export default Ember.Route.extend({
  model ({tag_id}) {
    return this.get('store').find('tag', tag_id)
  }
});
