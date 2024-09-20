class Range {
  constructor() {}
  static rule(start, stop) {
   if(start>stop){
    console.log("error");
    return;
   }
  }
  static of(start, stop) {
    this.rule(start, stop);
    this.start=start;
    this.stop=stop;
    this.style="of";
    return this;
  }
  static open(start, stop) {
    this.rule(start, stop);
    this.start=start;
    this.stop=stop;
    this.style="open()";
    return this;
  }
  static closed(start, stop) {
    this.rule(start, stop);
    this.start=start;
    this.stop=stop;
    this.style="closed[]";
    return this;
  }
  static closedOpen(start, stop) {
    this.rule(start, stop);
    this.start=start;
    this.stop=stop;
    this.style="closedOpen[)";
    return this;
  }
  static openClosed(start, stop) {
    this.rule(start, stop);
    this.start=start;
    this.stop=stop;
    this.style="openClosed(]";
    return this;
  }
  static ofR(n) {
    if(this.start<n&&n<this.stop){
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  }
  static openR(n) {
    if(this.start<n&&n<this.stop){
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  }
  static closedR(n) {
    if(this.start<=n&&n<=this.stop){
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  }
  static closedOpenR(n) {
    if(this.start<=n&&n<this.stop){
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  }
  static openClosedR(n) {
    if(this.start<n&&n<=this.stop){
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  }
  static result(n, style) {
    switch (style) {
     case "of":return this.ofR(n);
     case "open()":return this.openR(n);
     case "closed[]":return this.closedR(n);
     case "closedOpen[)":return this.closedOpenR(n);
     case "openClosed(]":return this.openClosedR(n);
    }
  }
  static contains(n) {
   switch (this.style) {
    case "of":return this.result(n, this.style);
    case "open()":return this.result(n, this.style);
    case "closed[]":return this.result(n, this.style);
    case "closedOpen[)":return this.result(n, this.style);
    case "openClosed(]":return this.result(n, this.style);
   }
  }
}

console.log("of");
const validAgesForWatchingPorn = Range.of(13, 80);
validAgesForWatchingPorn.contains(5); // false
validAgesForWatchingPorn.contains(13); // false
validAgesForWatchingPorn.contains(22); // true
validAgesForWatchingPorn.contains(100); // false
validAgesForWatchingPorn.contains(101); // false

console.log("open");
const validAgesForWatchingPornO = Range.open(7, 23);
validAgesForWatchingPornO.contains(5); // false
validAgesForWatchingPornO.contains(6); // false
validAgesForWatchingPornO.contains(7); // false
validAgesForWatchingPornO.contains(23); // false
validAgesForWatchingPornO.contains(24); // false
validAgesForWatchingPornO.contains(25); // false
console.log("closed");
const validAgesForWatchingPornC = Range.closed(7, 23);
validAgesForWatchingPornC.contains(5); // false
validAgesForWatchingPornC.contains(6); // false
validAgesForWatchingPornC.contains(7); // true
validAgesForWatchingPornC.contains(23); // true
validAgesForWatchingPornC.contains(24); // false
validAgesForWatchingPornC.contains(25); // false
console.log("closedOpen");
const validAgesForWatchingPornCO = Range.closedOpen(7, 23);
validAgesForWatchingPornCO.contains(5); // false
validAgesForWatchingPornCO.contains(6); // false
validAgesForWatchingPornCO.contains(7); // true
validAgesForWatchingPornCO.contains(23); // false
validAgesForWatchingPornCO.contains(24); // false
validAgesForWatchingPornCO.contains(25); // false
console.log("openClosed");
const validAgesForWatchingPornOC = Range.openClosed(7, 23);
validAgesForWatchingPornOC.contains(5); // false
validAgesForWatchingPornOC.contains(6); // false
validAgesForWatchingPornOC.contains(7); // false
validAgesForWatchingPornOC.contains(23); // true
validAgesForWatchingPornOC.contains(24); // false
validAgesForWatchingPornOC.contains(25); // false
