const d = require("./deepEquality");

function test(message, expected, input1, input2) {
  console.log(message);
  if (expected === d.isEqual(input1, input2)) {
    console.log("correct ✅");
  } else {
    console.log("wrong ❌");
  }
  console.log("------------------------------------");
}

function checkIntegerData() {
  test("Two same integars are equal", true, 1, 1);
  test("Two different integars are unequal", false, 3, 7);
  test("Two same negative integars are equal", true, -3, -3);
  test("Two different negative integars are unequal", false, -3, -9);
}

function checkBooleanData() {
  test("Two same boolean values are equal", true, true, true);
  test("Two different boolean values are unequal", false, true, false);
}

function checkStringData() {
  test("Two similar strings are equal", true, "hello", "hello");
  test("Two different strings are unequal", false, "hello", "hi");
  test("Two empty strings are equal", true, "", "");
}

function checkArrayData() {
  test("Two empty arrays are equal", true, [], []);
  test("Two arrays having same length are unequal", false, [2], [3, 4]);
  test(
    "Two arrays having same length and different data are unequal",
    false,
    [3, 4],
    [4, 4],
  );
}

function checkObjectData() {
  test("Identical objects are equal", true, { a: 1, b: 2 }, { a: 1, b: 2 });
  test(
    "Unidentical objects are unequal",
    false,
    { a: 5, b: 2 },
    { a: 1, b: 2 },
  );
  test(
    "Identical nested objects are equal",
    true,
    { a: { b: 1 } },
    { a: { b: 1 } },
  );
  test(
    "Unidentical nested objects are unequal",
    false,
    { a: { b: 1 } },
    { a: { b: 4 } },
  );
  test(
    "If Object length are equal but have different property,they are unequal",
    false,
    { a: undefined },
    { b: 1 },
  );
  test(
    "Object and array with same property name and value are unequal",
    false,
    { 0: "a", 1: "b" },
    ["a", "b"],
  );
}

function checkNullUndefinedNaN() {
  test(
    "If both inputs are undefined, they are equal",
    true,
    undefined,
    undefined,
  );
  test("If both inputs are NULL, they are equal", true, null, null);
  test("If both inputs are NaN, they are equal", true, NaN, NaN);
}

function main() {
  checkIntegerData();
  checkBooleanData();
  checkStringData();
  checkArrayData();
  checkObjectData();
  checkNullUndefinedNaN();
}

main();
