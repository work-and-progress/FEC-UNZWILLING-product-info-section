const faker = require('faker');

// generating random images
// this is an example.
// Do not use the variable so it can generate random ten images for each random product.
// const randomImages = new Array(10).fill(null).map(e => e = faker.fake("{{image.image}}"))

const bunchOfSeeds = [];
for (let i = 1; i < 101; i += 1) {
  const seeding = {
    id: i,
    category: faker.lorem.words(),
    name: faker.commerce.product(),
    price: faker.commerce.price(), // Need to find out $ format
    discountPercentage: faker.random.number({
      min: 10,
      max: 50,
    }),
    discount: faker.random.boolean(),
    review: {
      numberOfReviews: faker.random.number({
        min: 1,
        max: 999,
      }),
      fivStarReviews: faker.random.number({
        min: 0,
        max: 5,
      }),
      fourStarReviews: faker.random.number({
        min: 0,
        max: 5,
      }),
      threeStarReviews: faker.random.number({
        min: 0,
        max: 5,
      }),
      twoStarReviews: faker.random.number({
        min: 0,
        max: 5,
      }),
      oneStarReviews: faker.random.number({
        min: 0,
        max: 5,
      }),
      averageRating: faker.random.number({
        min: 0,
        max: 5,
      }),
    }, // Need to change ??
    description: faker.lorem.sentence(),
    specificationItemNo: faker.random.number({
      min: 1,
      max: 999,
    }),
    characteristics: {
      color: faker.commerce.color(),
      countryOfOrigin: faker.address.country(),
      substance: faker.lorem.sentence(),
      electricalPowerSupplyNeeded: faker.random.boolean(),
      voltage: faker.random.number({
        min: 110,
        max: 220,
      }),
      capacityMl: faker.random.number({
        min: 1000,
        max: 2000,
      }),
      safetyShutOff: faker.random.boolean(),
      motor: faker.lorem.sentence(),
      hiddenCordStorage: faker.random.boolean(),
      programs: faker.random.number({
        min: 5,
        max: 20,
      }),
      blade: faker.lorem.sentence(),
      speeds: faker.random.number({
        min: 5,
        max: 20,
      }),
      lcdDisplay: faker.random.boolean(),
      powerInput: faker.random.number({
        min: 1000,
        max: 2000,
      }),
    },
    measurement: {
      netWeight: faker.random.number({
        min: 10,
        max: 20,
      }),
      capacityQt: faker.random.number({
        min: 1,
        max: 5,
      }),
      lengthOfProduct: faker.random.number({
        min: 5,
        max: 10,
      }),
      widthOfProduct: faker.random.number({
        min: 5,
        max: 10,
      }),
      heightOfProduct: faker.random.number({
        min: 10,
        max: 20,
      }),
    },
    images: new Array(10).fill(null).map(() => faker.fake('{{image.image}}')),
    mainImage: faker.image.image(),
  };
  bunchOfSeeds.push(seeding);
}

module.exports = {
  bunchOfSeeds,
};
