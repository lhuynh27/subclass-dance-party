var makeSlidingDancer = function(top, left, timeBetweenSlides) {
  makeDancer.call(this, top, left, timeBetweenSlides);
};

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function

makeSlidingDancer.prototype = Object.create(makeDancer.prototype);

makeSlidingDancer.prototype.constructor = makeSlidingDancer;

makeSlidingDancer.prototype.step = function(timeBetweenSlides) {
  makeDancer.prototype.step.call(this, timeBetweenSlides);
  // call the old version of step at the beginning of any call to this new version of step
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.slideToggle();
};