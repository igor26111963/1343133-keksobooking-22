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
console.log(b);

const randomToFxed = (a, b) => {
  let minNumber = a;
  let maxNumber = b;
  if (minNumber >= maxNumber) {
    minNumber = b;
    maxNumber = a;
  }
  if (minNumber >= 0 && maxNumber > 0) {
    return ((Math.random() * (maxNumber - minNumber + 1)) + minNumber).toFixed(3);
  }
  return null;
}
let a = random(5, 10)
console.log(a);
