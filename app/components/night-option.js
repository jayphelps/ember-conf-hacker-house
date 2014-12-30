import Ember from 'ember';

var greaterThan = Ember.computed.gt;

export default Ember.Component.extend({
  'on-change': 'nightOptionDidChange',

  classNames: ['night-option'],
  classNameBindings: ['isSelected:selected'],
  isSelected: greaterThan('personCount', 0),
  cost: 0.00,
  selectOptions: range(0, 10),

  costFormatted: function () {
    return '$' + this.get('cost').toFixed(2);
  }.property('cost')
});

function range(low, high) {
  var range = [];
  for (var i = low; i <= high; i++) {
    range.push(i);
  }
  return range;
}