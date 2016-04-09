import Ember from 'ember';

export default Ember.Component.extend({
  favorite: Ember.inject.service(),

  actions: {
    removeFromFavorites(favorite) {
      this.get('favorite').remove(favorite);
    }
  }
});
