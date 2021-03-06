//SPIN, BABY SPIN!

var makeSpinnyDancer = function(top, left, timeBetweenSpins) {
  makeDancer.call(this, top, left, timeBetweenSpins);
  this.$node.addClass('spinny');
  this.$node.addClass('w3-spin');
  this.$node.append('<img src=https://i2.wp.com/freepngimages.com/wp-content/uploads/2015/12/cute-puppy-climbing.png?resize=624%2C624>');55
  // this.$node.animate({'right: += 50px'}, 'fast');
  this.left = left;
  this.top = top;
};

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function

makeSpinnyDancer.prototype = Object.create(makeDancer.prototype);

makeSpinnyDancer.prototype.constructor = makeSpinnyDancer;

makeSpinnyDancer.prototype.step = function(timeBetweenSpins) {
  makeDancer.prototype.step.call(this, timeBetweenSpins + 30);
  // call the old version of step at the beginning of any call to this new version of step
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
};

makeSpinnyDancer.prototype.clusterByClass = function(offset) {
  this.setPosition(100 + (offset * 150), 900);
  this.left = 900;
  this.top = 100 + (offset * 150);
};

// makeSpinnyDancer.prototype.walk = function(offset) {
//   this.$node.animate({'right: += 50px'}, 'fast');
// };