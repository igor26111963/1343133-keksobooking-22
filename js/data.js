import { random } from './utilit.js';

// author

export let avatar = () => random(1, 8);

// price

export let price = () => random(100, 1000);

// rooms

export let rooms = () => random(1, 4);

// guests

export let guests = () => random(0, 3);

// features

export let getRandomFeatures = () => {
  let randomFeaturesLength = random(0, Array.length);
  let featuresCard = [];
  const featuresList = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  for (let option = 0; option <= randomFeaturesLength; option++) {
    featuresCard.push(featuresList[option])
  }
  return featuresCard
}

// photos

export let getRandomPhotos = () => {
  let randomPhotosLength = random(0, Array.length);
  let randomNewPhotos = [];
  const randomPhotos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/  images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
  for (let photo = 0; photo <= randomPhotosLength; photo++) {
    randomNewPhotos.push(randomPhotos[photo])
  }
  return randomNewPhotos;
}
