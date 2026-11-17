function getDataType(input) {
  if (input === null) return 'null';
  if (Array.isArray(input)) return 'array';
  if (Number.isNaN(input)) return 'NaN';

  return typeof (input);
}

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

function areValuesEqual(value1, value2) {
  return value1 === value2;
}

function isTypeEqual(input1, input2) {
  return getDataType(input1) === getDataType(input2);
}

function isEqual(input1, input2) {
  if (!isTypeEqual(input1, input2)) return false;

  switch (getDataType(input1)) {
    case 'array':
      return areObjectsEqual(input1, input2);
    case 'object':
      return areObjectsEqual(input1, input2);
    case 'NaN':
      return true;
    default:
      return areValuesEqual(input1, input2);
  }
}

module.exports = {
  isEqual
};