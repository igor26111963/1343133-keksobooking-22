export function random(a, b) {
  let minNumber = a;
  let maxNumber = b;
  if (minNumber >= maxNumber) {
    minNumber = b;
    maxNumber = a;
  }
  if (minNumber >= 0 && maxNumber > 0) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  }
  return null;
}
// random(5, 10);
// console.log();

export function randomToFixed(a, b, c) {
  let minNumber = a;
  let maxNumber = b;
  let number_of_signs = c;
  if (minNumber >= maxNumber) {
    minNumber = b;
    maxNumber = a;
  }
  if (minNumber >= 0 && maxNumber > 0) {
    return Math.floor(((Math.random() * (maxNumber - minNumber + 1)) + minNumber) * Math.pow(10, number_of_signs)) / (Math.pow(10, number_of_signs));
  }
  return null;
}
randomToFixed(5, 10, 4)
// console.log();
