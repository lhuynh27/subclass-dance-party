describe('bouncyDancer', function() {

  var bouncyDancer, clock;
  var timeBetweenBounce= 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bouncyDancer = new MakeBouncyDancer(10, 20, timeBetweenBounce);

  });

  it('should have a jQuery $node object', function() {
    expect(bouncyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a bounce function that makes its node bounce', function() {
    sinon.spy(bouncyDancer.$node, 'toggle');
    bouncyDancer.bounce();
    expect(bouncyDancer.$node.toggle.called).to.be.true;
  });

  describe('bounce', function() {
    it('should call bounce at least once per second', function() {
      sinon.spy(bouncyDancer, 'bounce');
      expect(bouncyDancer.bounce.callCount).to.be.equal(0);
      clock.tick(timeBetweenBounce); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenBounce);

      expect(bouncyDancer.bounce.callCount).to.be.equal(1);

      clock.tick(timeBetweenBounce);
      expect(bouncyDancer.bounce.callCount).to.be.equal(2);
    });
  });
});