import Ember from 'ember';

export default Ember.Component.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  favorite: Ember.inject.service(),

  actions: {
    addToFavorites(favorite) {
      this.get('favorite').add(favorite);
    }
  }
});
