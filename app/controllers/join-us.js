import Ember from 'ember';

var lessThan = Ember.computed.lt;

export default Ember.Controller.extend({
  nightCost: 40.00,
  totalPersonNights: function () {
    return this.get('mondayCount') + this.get('tuesdayCount') + this.get('wednesdayCount');
  }.property('mondayCount', 'tuesdayCount', 'wednesdayCount'),

  nightCostInCents: multiply('nightCost', 100),
  cartAmountInCents: multiply('totalPersonNights', 'nightCostInCents'),
  hasNoNightsSelected: lessThan('totalPersonNights', 1),
});

function multiply(first, second) {
  var keys = [first];
  if (typeof second !== 'number') {
    keys.push(second);
  }

  var cp = function () {
    if (typeof second === 'number') {
      return this.get(first) * second;
    } else {
      return this.get(first) * this.get(second);
    }
  };

  return cp.property.apply(cp, keys);
}