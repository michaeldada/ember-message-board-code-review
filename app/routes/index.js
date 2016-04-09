import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('question');
  },

  favorite: Ember.inject.service(),

  actions: {
    createQuestion(params) {
        var newQuestion = this.store.createRecord('question', params);
        newQuestion.save();
        this.transitionTo('index');
      }
  }
});
