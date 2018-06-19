var makeSlidingDancer = function(top, left, timeBetweenSlides) {
  makeDancer.call(this, top, left, timeBetweenSlides);
  this.$node.addClass('sliding');
  this.$node.append('<img src=https://www.guidedogs.com.au/sites/default/files/pups-puppy-star.png>')
};

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function

makeSlidingDancer.prototype = Object.create(makeDancer.prototype);

makeSlidingDancer.prototype.constructor = makeSlidingDancer;

makeSlidingDancer.prototype.step = function(timeBetweenSlides) {
  makeDancer.prototype.step.call(this, timeBetweenSlides + 30);
  // call the old version of step at the beginning of any call to this new version of step
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.slideToggle('fast');
};

makeSlidingDancer.prototype.lineUp = function(offset) {
  this.setPosition(200, 100 + (offset * 70));
};

