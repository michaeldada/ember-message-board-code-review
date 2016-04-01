import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newAnswerForm() {
      this.set('newAnswerForm', true);
    },
    newAnswer() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        question: this.get('question')
      };
      this.sendAction('newAnswer', params);
      this.set('content', null);
      this.set('author', null);
      this.set('newAnswerForm', false);
    }
  }
});
