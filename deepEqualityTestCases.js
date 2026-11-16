const d = require("./deepEquality");

const testData = [
  {
    input1: 1,
    input2: 1,
    expected: true,
    title: "if primitive value are same"
  },
  {
    input1: "hello",
    input2: "hi",
    expected: false,
    title: "if primitive value are different"
  },
  {
    input1: [],
    input2: [],
    expected: true,
    title: "if both input are empty array"
  },
  {
    input1: [2, 3],
    input2: [2, 3],
    expected: true,
    title: "if array data is same"
  },
  {
    input1: [2],
    input2: [2, 3],
    expected: false,
    title: "if array data is not same"
  },
  {
    input1: "1",
    input2: 1,
    expected: false,
    title: "if same primitive data is in integer and another in string"
  },
  {
    input1: { a: 1, b: 2 },
    input2: { a: 1, b: 2 },
    expected: true,
    title: "if object is identical"
  },
  {
    input1: { a: 2, x: 6 },
    input2: { a: 2, y: 5 },
    expected: false,
    title: "if object is not identical"
  },
  {
    input1: { a: [2, 3] },
    input2: { a: [2, 3] },
    expected: true,
    title: "if objects has same array value and property name is also same"
  },
  {
    input1: { a: { b: 1 } },
    input2: { a: { b: 1 } },
    expected: true,
    title: "nested objects(object has same identical nested object)"
  },
  {
    input1: { 0: "a", 1: "b" },
    input2: ["a", "b"],
    expected: false,
    title: "object and array with same property name and value"
  },
  {
    input1: { a: undefined },
    input2: { b: 1 },
    expected: false,
    title: "handle undefined bug"
  },
  {
    input1: { a: undefined },
    input2: { b: 1 },
    expected: false,
    title: "handle undefined bug"
  },
  {
    input1: null,
    input2: { a: 2, b: 5 },
    expected: true,
    title: "handle null values"
  },
  {
    input1: NaN,
    input2: NaN,
    expected: false,
    title: "handle NaN values"
  },
]

for (const data of testData) {
  console.log(data.title);
  if (data.expected === d.isEqual(data.input1, data.input2)) {
    console.log("correct ✅");
  }
  else {
    console.log("wrong ❌");
  }
  console.log("------------------------------------");
}