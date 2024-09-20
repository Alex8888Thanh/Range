class Range {
  constructor(style, start, stop) {
    this.style = style;
    this.start = start;
    this.stop = stop;
  }
  static of(start, stop) {
    this.style = "of";
    this.start = start;
    this.stop = stop;
  }
  static open(start, stop) {
    this.style = "open";
    this.start = start;
    this.stop = stop;
  }
}

module.exports = Range;
