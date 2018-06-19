describe('slidingDancer', function() {

  var slidingDancer, clock;
  var timeBetweenSlides= 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    slidingDancer = new makeSlidingDancer(10, 20, timeBetweenSlides);
  });

  it('should have a jQuery $node object', function() {
    expect(slidingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node slide', function() {
    sinon.spy(slidingDancer.$node, 'slideToggle');
    slidingDancer.step();
    expect(slidingDancer.$node.slideToggle.called).to.be.true;
  });

  describe('step', function() {
    it('should call step at least once per second', function() {
      sinon.spy(slidingDancer, 'step');
      expect(slidingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSlides); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSlides);

      expect(slidingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSlides);
      expect(slidingDancer.step.callCount).to.be.equal(2);
    });
  });
});