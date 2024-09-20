const {
  of,
  open,
  closed,
  closedOpen,
  openClosed,
} = require('./range');

class RangeKata {
  constructor(ranges = []) {
    this.ranges = ranges.map((range) => {
      switch (range.style) {
        case 'of': return new of(range.start, range.stop);
        case 'open': return new open(range.start, range.stop);
        case 'closed': return new closed(range.start, range.stop);
        case 'closedOpen': return new closedOpen(range.start, range.stop);
        case 'openClosed': return new openClosed(range.start, range.stop);
        default: return new of(range.start, range.stop);
      }
    });
  }

  updateContains(n) {
    this.ranges.forEach((range) => range.contains(n));
    return this.ranges;
  }
}

module.exports = RangeKata;
