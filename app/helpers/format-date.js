import Ember from 'ember';

export function formatDate(params/*, hash*/) {
  var date = params[0].get('date');

  return date.toDateString();
}

export default Ember.Helper.helper(formatDate);
