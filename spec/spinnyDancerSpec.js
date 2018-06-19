describe('spinnyDancer', function() {

  var spinnyDancer, clock;
  var timeBetweenSpins = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    spinnyDancer = new MakeSpinnyDancer(10, 20, timeBetweenSpins);
  });

  it('should have a jQuery $node object', function() {
    expect(spinnyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a spin function that makes its node spin', function() {
    sinon.spy(spinnyDancer.$node, 'toggle');
    spinnyDancer.spin();
    expect(spinnyDancer.$node.toggle.called).to.be.true;
  });

  describe('spinning', function() {
    it('should call spin at least once per second', function() {
      sinon.spy(spinnyDancer, 'step');
      expect(spinnyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSpins); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSpins);

      expect(spinnyDancer.spin.callCount).to.be.equal(1);

      clock.tick(timeBetweenSpins);
      expect(spinnyDancer.spin.callCount).to.be.equal(2);
    });
  });
});