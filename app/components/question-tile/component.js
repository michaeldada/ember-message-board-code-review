import Ember from 'ember';

export default Ember.Component.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  favorite: Ember.inject.service(),

  totalAnswers: Ember.computed('question.answers', function() {
    var total = Object.keys(this.get('question.answers')).length;
    return total;
  })
});
