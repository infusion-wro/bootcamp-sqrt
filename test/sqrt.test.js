var expect = require('chai').expect;
var sqrt = require('../sqrt');

describe('sqrt', function() {
  it('should return ~1.41 for 2', function(){
    expect(sqrt(2).toFixed(2)).to.equal(1.41.toFixed(2));
  });

  it('should return ~1.71 for 3', function(){
    expect(sqrt(3).toFixed(2)).to.equal(1.73.toFixed(2));
  });

  it('should return 3 for 9', function(){
    expect(sqrt(9)).to.equal(3);
  });

  it('should return 4 for 16', function(){
    expect(sqrt(16)).to.equal(4);
  });
})
