// const { get } = require("browser-sync");

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

function getRandomElementFromArray(array) {
  return array[random(0, array.length - 1)];
}



// author

let avatar = () => random(1, 8);

// price

let price = () => random(100, 1000);

// type

const type = ['palace', 'flat', 'house', 'bungalow'];

// rooms

let rooms = () => random(1, 4);

// guests

let guests = () => random(0, 3);

// checkin

const checkin = ['12:00', '13:00', '14:00'];

// checkout

const checkout = ['12:00', '13:00', '14:00'];

// features

let getRandomFeatures = () => {
  let randomFeaturesLength = random(0, Array.length);
  let featuresCard = [];
  const featuresList = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  for (let option = 0; option <= randomFeaturesLength; option++) {
    featuresCard.push(featuresList[option])
  }
  return featuresCard
}

// photos

let getRandomPhotos = () => {
  let randomPhotosLength = random(0, Array.length);
  let randomNewPhotos = [];
  const randomPhotos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/  images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
  for (let photo = 0; photo <= randomPhotosLength; photo++) {
    randomNewPhotos.push(randomPhotos[photo])
  }
  return randomNewPhotos;
}

// location.

let coordinatesX = () => randomToFixed(35.65000, 35.70000, 5);
let coordinatesY = () => randomToFixed(139.70000, 139.80000, 5);

// создаем эллемент будующего массива.

const generateCard = () => {
  return {
    author: {
      avatar: `img / avatars / user0${avatar(1, 8)}.png`,
    },
    offer: {
      title: 'Сдаётся уютное жильё',
      address: `${coordinatesX()} , ${coordinatesY()} `,
      price: `${price()} `,
      type: `${getRandomElementFromArray(type)} `,
      rooms: `${rooms()} `,
      guests: `${guests()} `,
      checkin: `${getRandomElementFromArray(checkin)} `,
      checkout: `${getRandomElementFromArray(checkout)} `,
      features: `${getRandomFeatures()}`,
      description: 'Жилье, которое Вы незахотите покидать!',
      photos: `${getRandomPhotos()}`,
    },
    location: {
      locationX: `${coordinatesX()} `,
      locationY: `${coordinatesY()} `,
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
generateCardsList();
// npm testconsole.log(generateCardsList());
