
function isEqual(input1, input2) {

  if (typeof (input1) !== typeof (input2)) {
    return false;
  }

  if (typeof (input1) === "object" && typeof (input2) === "object") {
    const obj1Keys = Object.keys(input1);
    const obj2Keys = Object.keys(input2);

    if (obj1Keys.length !== obj2Keys.length) {
      return false;
    }

    for (const key of obj1Keys) {
      if (!isEqual(input1[key], input2[key])) {
        return false;
      }
    }

    return true;
  }

  return input1 === input2;
}


const input1 = { 0: 2, 1: 4 };
const input2 = [2, 4];
// console.log(isEqual(input1, input2));

module.exports = {
  isEqual
}