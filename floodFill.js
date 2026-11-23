const getnewReferenceArray = function (array) {
  const newArray = [...array];

  for (let row = 0; row < array.length; row++) {
    newArray[row] = [...array[row]];
  }

  return newArray;
}

const isIndexOutOfBound = function (row, column, arrayLength, rowLength) {
  return row < 0 || row >= arrayLength || column < 0 || column >= rowLength;
}

const fillEmptySpace = function (row, column, bitmap) {
  if (isIndexOutOfBound(row, column, bitmap.length, bitmap[0].length)) return;
  if (bitmap[row][column] === 1) return;

  bitmap[row][column] = 1;

  fillEmptySpace(row - 1, column, bitmap);
  fillEmptySpace(row + 1, column, bitmap);
  fillEmptySpace(row, column - 1, bitmap);
  fillEmptySpace(row, column + 1, bitmap);
}

const floodFill = function (row, column, bitmap) {
  const newBitmap = getnewReferenceArray(bitmap);
  fillEmptySpace(row, column, newBitmap);

  return newBitmap;
}

const bitmap = [
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0],
  [0, 1, 0, 1, 0, 0],
  [0, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 0],
  [0, 0, 1, 0, 1, 0],
  [0, 0, 1, 1, 1, 0]
];

const newBitmap = floodFill(5, 3, bitmap);
console.log(newBitmap);