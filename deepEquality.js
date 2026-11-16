

function areObjectsEqual(input1, input2) {

  if (Object.keys(input1).length !== Object.keys(input2).length) {
    return false;
  }

  for (const key in input1) {
    if (!(key in input2)) {
      return false;
    }

    if (!isEqual(input1[key], input2[key])) {
      return false;
    }
  }

  return true;
}

function isEqual(input1, input2) {
  if (typeof (input1) !== typeof (input2)) {
    return false;
  }

  if (typeof (input1) === "object") {

    if (!(Array.isArray(input1) ^ Array.isArray(input2))) {
      return areObjectsEqual(input1, input2);
    }

  }

  return input1 === input2;
}

module.exports = {
  isEqual
};