const {
  Of,
  Open,
  Closed,
  ClosedOpen,
  OpenClosed,
} = require('./range');

class Range {
  constructor(ranges = []) {
    this.ranges = ranges.map((range) => {
      switch (range.style) {
        case 'Of': return new Of(range.start, range.stop);
        case 'Open': return new Open(range.start, range.stop);
        case 'Closed': return new Closed(range.start, range.stop);
        case 'ClosedOpen': return new ClosedOpen(range.start, range.stop);
        case 'OpenClosed': return new OpenClosed(range.start, range.stop);
        default: return new Of(range.start, range.stop);
      }
    });
  }

  updateQuality() {
    this.ranges.forEach((range) => range.update());
    return this.ranges;
  }
}

module.exports = {
  Range,
};
