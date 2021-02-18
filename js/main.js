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
// random(5, 10);
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



// author.

let avatar = () => random(1, 8);

// price

let price = () => random(100, 1000);

// type

const type = ['palace', 'flat', 'house', 'bungalow',];
let randomType = Math.floor(Math.random() * type.length);

// rooms

let rooms = () => random(1, 4);

// guests

let guests = () => random(0, 3);

// checkin

const checkin = ['12:00', '13:00', '14:00',];
let randomCheckin = Math.floor(Math.random() * checkin.length);

// checkout

const checkout = ['12:00', '13:00', '14:00',];
let randomCheckout = Math.floor(Math.random() * checkout.length);

// features

let randomfeaturesLength = random(0, 5);
let featuresCard = [];
let featuresList = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner',];
for (let option = 0; option <= randomfeaturesLength; option++) {
  featuresCard.push(featuresList[option])
};

// photos

let randomPhotosLength = random(0, 2);
let randomNewPhotos = [];
let randomPhotos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
for (let photo = 0; photo <= randomPhotosLength; photo++) {
  randomNewPhotos.push(randomPhotos[photo])
};

// location.

let coordinates = [
  'coordinatesX',
  'coordinatesY',
];

let coordinatesX = () => randomToFixed(35.65000, 35.70000, 5);
let coordinatesY = () => randomToFixed(139.70000, 139.80000, 5);


// создаем эллемент будующего массива.

const generateCard = () => {
  return {
    author: {
      avatar: `img / avatars / user0${avatar(1, 8)}.png`
    },
    offer: {
      title: 'Сдаётся уютное жильё',
      address: `${coordinatesX()} , ${coordinatesY()} `,
      price: `${price()} `,
      type: `${type[randomType]} `,
      rooms: `${rooms()} `,
      guests: `${guests()} `,
      checkin: `${checkin[randomCheckin]} `,
      checkout: `${checkout[randomCheckout]} `,
      features: `${featuresCard}`,
      description: 'Жилье, которое Вы незахотите покидать!',
      photos: `${randomNewPhotos}`,
    },
    location: {
      locationX: `${coordinatesX()} `,
      locationY: `${coordinatesY()} `
    },
  }
}

// создаем массив

const generateCardsList = () => {
  const list = [];
  for (let i = 0; i < 10; i++) {
    let card = generateCard();
    list.push(card);
  }
  return list
}
console.log(generateCardsList());
