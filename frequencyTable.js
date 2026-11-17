function calcFrequency(items) {
  const freqtable = {};

  for (const item of items) {
    if (!(item in freqtable)) {
      freqtable[item] = 0;
    }

    freqtable[item] = freqtable[item] + 1;
  }

  return freqtable;
}

const items = ["apple", "banana", "apple", "apple", "orange", "banana"];
const freqtable = calcFrequency(items);

console.table(freqtable);