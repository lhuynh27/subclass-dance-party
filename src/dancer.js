// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
// use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.step(timeBetweenSteps);
  this.setPosition(top, left);
};

makeDancer.prototype.step = function(timeBetweenSteps) {
// it just schedules the next step
// the basic dancer doesn't do anything interesting at all on each step,
  setTimeout(this.step.bind(this, timeBetweenSteps), timeBetweenSteps); 
//this.step gives us the function and everytime 'this' appears within the function, 
//it is referring to the context that called it.
};

makeDancer.prototype.setPosition = function(top, left) {
// Use css top and left properties to position our <span> tag
// where it belongs on the page. See http://api.jquery.com/css/

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random  default point within the body