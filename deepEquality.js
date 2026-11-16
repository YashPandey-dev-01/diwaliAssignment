function getDataType(input) {
  if (input === null) return 'null';
  if (Array.isArray(input)) return 'array';
  if (typeof (input) === 'object') return 'object';

  return 'primitive';
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

function isEqual(input1, input2) {
  const input1Type = getDataType(input1);
  const input2Type = getDataType(input2);

  if (input1Type !== input2Type) return false;

  if (input1Type === 'primitive' || input1Type === 'null') {
    return input1 === input2;
  }

  return areObjectsEqual(input1, input2);
}

module.exports = {
  isEqual
};