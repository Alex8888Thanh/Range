const Range = require("./range/range");
const RangeKata = require("./range-kata");
const RangeOf = Range.of(17, 31);
const RangeOpen = Range.open(17, 31);
const RangeClosed = Range.closed(17, 31);
const RangeClosedOpen = Range.closedOpen(17, 31);
const RangeOpenClosed = Range.openClosed(17, 31);
const ranges = [
  new Range("of", 11, 23),
  new Range("open", 11, 23),
  new Range("closed", 11, 23),
  new Range("closedOpen", 11, 23),
  new Range("openClosed", 11, 23),
  RangeOf,
  RangeOpen,
  RangeClosed,
  RangeClosedOpen,
  RangeOpenClosed,
];

const nums = Number(process.argv[2]) || 31;
const rangeKata = new RangeKata(ranges);

console.log("OMGHAI!");
for (let num = 0; num < nums + 1; num++) {
  console.log(`-------- num ${num} --------`);
  console.log("style, start, stop");
  ranges.forEach(range => console.log(`${range.style}, ${range.start}, ${range.stop}`));
  rangeKata.updateContains(num);
  console.log("")
}
