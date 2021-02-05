// function getRndInteger(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1) ) + min;
//  } Функция возвращающая случайное целое число из заданого интервала.

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
let c = random (5, 10);
console.log(c);


// функция возвращающая случайное число с плавающей запятой из заданого интенвала.  

const randomToFixed = (a, b) => {
	let minNumber = a;
	let maxNumber = b;
	if (minNumber >= maxNumber) {
		minNumber = b;
      maxNumber = a;
	}
	if (minNumber >= 0 && maxNumber > 0) {
		return ((Math.random() * (maxNumber - minNumber + 1)) + minNumber).toFixed (3);
		}
	return null;
}
let d = randomToFixed (4, 10);
console.log(d);
