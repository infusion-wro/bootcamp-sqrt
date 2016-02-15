function sqrt(x) {
  var y = 3;
  for (var i = 0; i < 10; i++) {
    y = y - (y*y - x) / (2 * y);
  }

  return y;
}

module.exports = sqrt;
