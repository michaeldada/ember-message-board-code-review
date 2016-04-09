import Ember from 'ember';

export default Ember.Component.extend({
  favorite: Ember.inject.service(),

  actions: {
    addToFavorites(favorite) {
      this.get('favorite').add(favorite);
      this.set('isFavorite', true);
    },
    removeFromFavorites(favorite) {
      this.get('favorite').remove(favorite);
      this.set('isFavorite', false);
    }
  }
});
