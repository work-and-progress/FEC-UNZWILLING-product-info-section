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
    discount: faker.random.number({
      min: 10,
      max: 50,
    }),
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
    }), // Need to change ??
    description: faker.lorem.sentence(),
    specificationItemNo: faker.random.number({
      min: 1,
      max: 999,
    }),

    characteristicsColor: faker.commerce.color(),
    characteristicsCountryOfOrigin: faker.address.country(),
    characteristicsSubstance: faker.lorem.sentence(),
    characteristicsElectricalPowerSupplyNeeded: faker.random.boolean(),
    characteristicsVoltage: faker.random.number({
      min: 110,
      max: 220,
    }),
    characteristicsCapacity: faker.random.number({
      min: 1000,
      max: 2000,
    }),
    safetcharacteristicsSafetyShutOffy_shut_off: faker.random.boolean(),
    characteristicsMotor: faker.lorem.sentence(),
    characteristicsHiddenCordStorage: faker.random.boolean(),
    characteristicsPrograms: faker.random.number({
      min: 5,
      max: 20,
    }),
    characteristicsBlade: faker.lorem.sentence(),
    characteristicsSpeeds: faker.random.number({
      min: 5,
      max: 20,
    }),
    characteristicsLcdDisplay: faker.random.boolean(),
    characteristicsPowerInput: faker.random.number({
      min: 1000,
      max: 2000,
    }),
    MeasurementsNetWeight: faker.random.number({
      min: 10,
      max: 20,
    }),
    MeasurementsCapacity: faker.random.number({
      min: 1,
      max: 5,
    }),
    MeasurementsLengthOfProduct: faker.random.number({
      min: 5,
      max: 10,
    }),
    MeasurementsWidthOfProduct: faker.random.number({
      min: 5,
      max: 10,
    }),
    MeasurementsHeightOfProduct: faker.random.number({
      min: 10,
      max: 20,
    }),
    images: new Array(10).fill(null).map(() => faker.fake('{{image.image}}')),
    main_image: faker.image.image(),
  };
  bunchOfSeeds.push(seeding);
}

module.exports = {
  bunchOfSeeds,
};
