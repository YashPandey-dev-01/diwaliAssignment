const isEdgeDetected = function (currentElement, rightElement, bottomElement, threshold) {
  return Math.abs(currentElement - rightElement) > threshold ||
    Math.abs(currentElement - bottomElement) > threshold
}

const findEdges = function (bitmap, threshold) {
  const edges = [];

  for (let row = 0; row < bitmap.length; row++) {
    for (let pixel = 0; pixel < bitmap[row].length; pixel++) {
      const rightElementColumn = Math.min(pixel + 1, bitmap[row].length - 1);
      const bottomElementRow = Math.min(row + 1, bitmap.length - 1);

      const rightElement = bitmap[row][rightElementColumn];
      const bottomElement = bitmap[bottomElementRow][pixel];
      const currentElement = bitmap[row][pixel];

      if (isEdgeDetected(rightElement, bottomElement, currentElement, threshold)) {
        edges.push(({ row, pixel }));
      }

    }
  }

  return edges;
}

const bitmap = [
  [20, 127, 200, 20],
  [20, 200, 156, 200],
  [200, 200, 200, 200],
  [200, 200, 20, 15]
]

console.log(findEdges(bitmap, 100));