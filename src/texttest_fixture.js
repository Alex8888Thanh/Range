const Range = require("./range/range");
const RangeKata = require("./range-kata");

const ranges = [
  new Range("of", 11, 23),
  new Range("open", 11, 23),
  new Range("closed", 11, 23),
  new Range("closedOpen", 11, 23),
  new Range("openClosed", 11, 23),
  Range.of(17, 31),
  Range.open(17, 31),
  Range.closed(17, 31),
  Range.closedOpen(17, 31),
  Range.openClosed(17, 31),
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
