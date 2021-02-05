const random = (a, b) => {
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
let b = random(5, 10);
// console.log(b);

const randomToFixed = (a, b, c) => {
  let minNumber = a;
  let maxNumber = b;
  let number_of_signs = c;
  if (minNumber >= maxNumber) {
    minNumber = b;
    maxNumber = a;
  }
  if (minNumber >= 0 && maxNumber > 0) {
    return ((Math.random() * (maxNumber - minNumber + 1)) + minNumber) * Math.pow(10, number_of_signs) / Math.floor(Math.pow(10, number_of_signs));
  }
  return null;
}
let a = randomToFixed(5, 10, 4)
// console.log(a);
