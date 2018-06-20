$(document).ready(function() {
  window.dancers = [];
  window.dogHouse;

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    if (!dancer.$node.hasClass('dogHouseClass')) {
      window.dancers.push(dancer);
    } else {
      window.dogHouse = dancer;   
    }
  });
  
  $('.lineUpButton').on('click', function(event) {
    for(var i = 0; i < window.dancers.length; i++){
      window.dancers[i].lineUp(i);
    }
  });

  $('.clusterButton').on('click', function(event) {
    var blinkyCount = 0;
    var fadingCount = 0;
    var slidingCount = 0;
    var spinnyCount = 0;
    console.log('hello');
    for(var i = 0; i < window.dancers.length; i++){
      if(window.dancers[i].$node.hasClass('blinky')){
        blinkyCount++;
        window.dancers[i].clusterByClass(blinkyCount);
      }
      if(window.dancers[i].$node.hasClass('fading')){
        fadingCount++;
        window.dancers[i].clusterByClass(fadingCount);
      }
      if(window.dancers[i].$node.hasClass('sliding')){
        slidingCount++;
        window.dancers[i].clusterByClass(slidingCount);
      }
      if(window.dancers[i].$node.hasClass('spinny')){
        spinnyCount++;
        window.dancers[i].clusterByClass(spinnyCount);
      }
    }
  });
  
  $('.sleepTimeButton').on('click', function(event) {
    var top = window.dogHouse.top;
    var left = window.dogHouse.left;
    for(var i = 0; i < window.dancers.length; i++){
      window.dancers[i].goHome(top, left);
    }
  });

  $(document).on('mouseenter', '.spinny', (function(event) {
    $('.spinny').hide();
  }));

});

