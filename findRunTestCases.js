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

test("Empty array should return empty array", [[]], [])
test("If only 1 element same element will be returned", [[3]], [3])
test("If all elements are same only 1 array will be returned", [[4, 4, 4, 4]], [4, 4, 4, 4]);
test("First increasing than decreased and then increasing will have two array", [[4, 5, 6, 999], [0, 2, 3]], [4, 5, 6, 999, 0, 2, 3]);
test("Random Pattern", [[1, 2, 3, 4, 4, 8], [6, 6], [4, 2, 1], [2, 3]], [1, 2, 3, 4, 4, 8, 6, 6, 4, 2, 1, 2, 3]);

