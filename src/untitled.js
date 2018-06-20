
var dogHouse = function(top, left, timeNotUsed) {
  makeDancer.call(this, top, left, timeNotUsed);
  this.$node.addClass('dogHouseClass');
  this.$node.append('<img src=http://yanhe.me/wp-content/uploads/doghouse-png-clip-art-2572-clipart-of-dog-house.png>')
  this.left = left;
  this.top = top;
};

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function

dogHouse.prototype = Object.create(makeDancer.prototype);

dogHouse.prototype.constructor = dogHouse;

dogHouse.prototype.step = function(timeNotUsed) {
  makeDancer.prototype.step.call(this, timeNotUsed);
  // call the old version of step at the beginning of any call to this new version of step
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
};