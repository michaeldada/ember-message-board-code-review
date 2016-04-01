import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createQuestion() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes')
      };
      this.sendAction('createQuestion', params);
      this.set('content', null);
      this.set('author', null);
      this.set('notes', null);
    }
  }
});
