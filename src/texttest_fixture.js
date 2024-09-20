const { Range } = require("./range/range");
const { RangeKata } = require("./range-kata");

const ranges = [
  new Range("Of", 11, 23),
  new Range("Open", 11, 23),
  new Range("Closed", 11, 23),
  new Range("ClosedOpen", 11, 23),
  new Range("OpenClosed", 11, 23),
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
