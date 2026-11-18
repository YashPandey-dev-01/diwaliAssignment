const f = require("./findTheRun.js");
const d = require("./deepEquality");

function test(message, expected, input) {
  const result = f.findRun(input);

  console.log(message);

  if (d.isEqual(expected, result)) {
    console.log("correct ✅");
  } else {
    console.log("wrong ❌");
  }

  console.log("------------------------------------");
}

// findRun([1, 2, 3, 4, 6, 4, 2, 1, 2, 3]);

test("Empty array should return empty array", [], [])