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
    return this;
  }
  static open(start, stop) {
    this.style = "open";
    this.start = start;
    this.stop = stop;
    return this;
  }
  static closed(start, stop) {
    this.style = "closed";
    this.start = start;
    this.stop = stop;
    return this;
  }
  static closedOpen(start, stop) {
    this.style = "closedOpen";
    this.start = start;
    this.stop = stop;
    return this;
  }
  static openClosed(start, stop) {
    this.style = "openClosed";
    this.start = start;
    this.stop = stop;
    return this;
  }
}
module.exports = Range;
