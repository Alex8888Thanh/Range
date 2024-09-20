const { Range } = require("../range");
const { RangeKata } = require("./range-kata");

const ranges = [
  new Range("Of", 10, 20),
  new Range("Open", 2, 0),
  new Range("Closed", 5, 7),
  new Range("ClosedOpen", 0, 80),
  new Range("OpenClosed", -1, 80),
];

const days = Number(process.argv[2]) || 2;
const rangeKata = new RangeKata(ranges);

console.log("OMGHAI!");
for (let day = 0; day < days + 1; day++) {
  console.log(`-------- day ${day} --------`);
  console.log("name, sellIn, quality");
  ranges.forEach(range => console.log(`${range.style}, ${range.start}, ${range.stop}`));
  rangeKata.updateQuality();
  console.log("")
}
