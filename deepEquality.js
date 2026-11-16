function isArrayEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let idx = 0; idx < arr1.length; idx++) {
    if (arr1[idx] !== arr2[idx]) {
      return false;
    }
  }

  return true;
}

function isEqual(input1, input2) {

  if (typeof (input1) !== typeof (input2)) {
    return false;
  }

  if (typeof (input1) === "object" && typeof (input2) === "object") {

    if (Array.isArray(input1) && Array.isArray(input2)) {
      return isArrayEqual(input1, input2);
    }

    if (!(Array.isArray(input1)) && !(Array.isArray(input2))) {
      const obj1Keys = Object.keys(input1);
      const obj2Keys = Object.keys(input2);

      if (obj1Keys.length !== obj2Keys.length) {
        return false;
      }

      for (const key of obj1Keys) {
        return isEqual(input1[key], input2[key]);
      }
    }
  }

  return input1 === input2;
}


const input1 = { 0: 2, 1: 4 };
const input2 = [2, 4];
console.log(isEqual(input1, input2));