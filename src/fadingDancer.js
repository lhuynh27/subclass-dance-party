var makeFadingDancer = function(top, left, timeBetweenFades) {
  makeDancer.call(this, top, left, timeBetweenFades);
};

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function

makeFadingDancer.prototype = Object.create(makeDancer.prototype);

makeFadingDancer.prototype.constructor = makeFadingDancer;

makeFadingDancer.prototype.step = function(timeBetweenFades) {
  makeDancer.prototype.step.call(this, timeBetweenFades);
  // call the old version of step at the beginning of any call to this new version of step
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.fadeToggle();
  this.$node.fadeToggle();
};