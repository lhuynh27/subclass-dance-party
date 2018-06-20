//NOW YOU SEE ME, NOW YOU DON'T!

var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinky');
  this.$node.append('<img src=https://media.giphy.com/media/LVrHEIxyJRaq89XlwN/giphy.gif>');
  //this.$node.append('<img src=https://vignette.wikia.nocookie.net/inanimateinsanity/images/7/7e/Shiba-inu.png/revision/latest/scale-to-width-down/556?cb=20180215124137>');
  this.left = left;
  this.top = top;
};

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(timeBetweenSteps) {
  makeDancer.prototype.step.call(this, timeBetweenSteps + 250);
  // call the old version of step at the beginning of any call to this new version of step
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

makeBlinkyDancer.prototype.clusterByClass = function(offset) {
  this.setPosition(100 + (offset * 150), 300);
  this.left = 300;
  this.top = 100 + (offset * 150);
};