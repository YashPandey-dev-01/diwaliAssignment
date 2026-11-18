function toggleSequenceType(sequenceType) {
  return sequenceType === "increasing" ? "decreasing" : "increasing";
}

function findSequenceType(prevElement, currElement) {
  return prevElement < currElement ? "increasing" : "decreasing";
}

function findRun(array) {
  if (array.length === 0) {
    return [];
  }

  const sequences = [[]];
  let row = 0;
  let column = 0;
  let sequenceType = undefined;
  let currSequenceType = undefined;

  sequences[row][column] = array[0];

  for (let idx = 1; idx < array.length; idx++) {
    if (array[idx] === array[idx - 1]) {
      column++;
      sequences[row][column] = array[idx];
    } else {
      sequenceType = findSequenceType(array[idx - 1], array[idx]);

      if (currSequenceType === undefined) {
        currSequenceType = sequenceType;
      }

      if (currSequenceType === sequenceType) {
        column++;
        sequences[row][column] = array[idx];
      }
      else {
        row++;
        column = 0;
        sequences[row] = [];
        sequences[row][column] = array[idx];
        currSequenceType = toggleSequenceType(currSequenceType);
      }
    }
  }

  return sequences;
}

console.log(findRun([]));
console.log(findRun([4, 4, 4, 4]));
console.log(findRun([4, 5, 8, 0, 1, 2, 0, 1, 2, 3, 4, 4, 4, 4, 3, - 1, -2, -3]));
