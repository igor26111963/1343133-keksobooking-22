function random(a, b) {
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
random(5, 10);
// console.log();

function randomToFixed(a, b, c) {
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

// создаем эллемент будующего массива.

// const postcard = [author, offer, location];

// author.

// const author = {
//   avatar: 'img/avatars/user{{xx}}.png',
// };

// offer.

// const offer = [title, address, price, type, rooms, guests, checkin, checkout, features, description, photos];

// price

let price = (a, b) => {
  let minPrice = a;
  let maxPrice = b;
  if (minPrice >= maxPrice) {
    minPrice = b;
    maxPrice = a;
  }
  if (minPrice >= 0 && maxPrice > 0) {
    return Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
  }
  return null;
}
// price(5, 10);
console.log(price(5, 10));


// type

let type = [
  'palace',
  'flat',
  'house',
  'bungalow',
];
let typeIndex = () => {
  const randomTypeIndex = _.random(0, type.length - 1);
  return {
    type: type[randomTypeIndex]
  };
}
console.log(typeIndex());

// rooms

let rooms = (a, b) => {
  let minRooms = a;
  let maxRooms = b;
  if (minRooms >= maxRooms) {
    minRooms = b;
    maxRooms = a;
  }
  if (minRooms >= 0 && maxRooms > 0) {
    return Math.floor(Math.random() * (maxRooms - minRooms + 1)) + minRooms;
  }
  return null;
}
// rooms(5, 10);
console.log(rooms(1, 4));

// guests

let guests = (a, b) => {
  minGuests = a;
  maxGuests = b;
  if (minGuests >= maxGuests) {
    minGuests = b;
    maxGuests = a;
  }
  if (minGuests >= 0 && maxGuests > 0) {
    return Math.floor(Math.random() * (maxGuests - minGuests + 1)) + minGuests;
  }
  return null;
}
// guests(5, 10);
console.log(guests(0, 10));

// checkin

let checkin = [
  '12:00',
  '13:00',
  '14:00',
];
let checkinIndex = () => {
  const randomCheckinIndex = _.random(0, checkin.length - 1);
  return {
    checkin: checkin[randomCheckinIndex]
  };
}
console.log(checkinIndex());

// checkout

let checkout = [
  '12:00',
  '13:00',
  '14:00',
];
let checkoutIndex = () => {
  const randomCheckoutIndex = _.random(0, checkout.length - 1);
  return {
    checkout: checkout[randomCheckoutIndex]
  };
}
console.log(checkoutIndex());

// features



// location.

let coordinates = [
  'coordinatesX',
  'coordinatesY',
];
function coordinatesX(a, b, c) {
  let minСoordinatesX = a;
  let maxСoordinatesX = b;
  let number_of_signs = c;
  if (minСoordinatesX >= maxСoordinatesX) {
    minСoordinatesX = b;
    maxСoordinatesX = a;
  }
  if (minСoordinatesX >= 0 && maxСoordinatesX > 0) {
    return Math.floor(((Math.random() * (maxСoordinatesX - minСoordinatesX + 1)) + minСoordinatesX) * Math.pow(10, number_of_signs)) / (Math.pow(10, number_of_signs));
  }
  return null;
}
console.log(coordinatesX(35.65000, 35.70000, 5));

function coordinatesY(a, b, c) {
  let minСoordinatesY = a;
  let maxСoordinatesY = b;
  let number_of_signs = c;
  if (minСoordinatesY >= maxСoordinatesY) {
    minСoordinatesY = b;
    maxСoordinatesY = a;
  }
  if (minСoordinatesY >= 0 && maxСoordinatesY > 0) {
    return Math.floor(((Math.random() * (maxСoordinatesY - minСoordinatesY + 1)) + minСoordinatesY) * Math.pow(10, number_of_signs)) / (Math.pow(10, number_of_signs));
  }
  return null;
}
console.log(coordinatesY(139.70000, 139.80000, 5));
