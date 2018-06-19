describe('fadingDancer', function() {

  var fadingDancer, clock;
  var timeBetweenFades = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    fadingDancer = new makeFadingDancer(10, 20, timeBetweenFades);

  });

  it('should have a jQuery $node object', function() {
    expect(fadingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node fade', function() {
    sinon.spy(fadingDancer.$node, 'fadeToggle');
    fadingDancer.step();
    expect(fadingDancer.$node.fadeToggle.called).to.be.true;
  });

  describe('step', function() {
    it('should call step at least once per second', function() {
      sinon.spy(fadingDancer, 'step');
      expect(fadingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenFades); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenFades);

      expect(fadingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenFades);
      expect(fadingDancer.step.callCount).to.be.equal(2);
    });
  });
});