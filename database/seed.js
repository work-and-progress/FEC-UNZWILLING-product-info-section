const faker = require('faker');

const changeBooleanToYesOrNo = (boolean) => {
  if (boolean === true) {
    return 'Yes';
  }
  return 'No';
};

const bunchOfSeeds = [];
for (let i = 1; i < 101; i += 1) {
  const fakeReviews = {
    fakeFiveStarReviews: faker.random.number({
      min: 3,
      max: 5,
    }),
    fakeFourStarReviews: faker.random.number({
      min: 3,
      max: 5,
    }),
    fakeThreeStarReviews: faker.random.number({
      min: 0,
      max: 5,
    }),
    fakeTwoStarReviews: faker.random.number({
      min: 0,
      max: 5,
    }),
    fakeOneStarReviews: faker.random.number({
      min: 0,
      max: 5,
    }),
  };

  const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b);
  const fakeNumberOfReviews = sumValues(fakeReviews);
  const fakeAverageRating = (((fakeReviews.fakeFiveStarReviews * 5)
  + (fakeReviews.fakeFourStarReviews * 4)
  + (fakeReviews.fakeThreeStarReviews * 3)
  + (fakeReviews.fakeTwoStarReviews * 2)
  + fakeReviews.fakeOneStarReviews) / fakeNumberOfReviews).toFixed(2);

  const seeding = {
    id: i,
    category: faker.lorem.words(),
    name: faker.commerce.product(),
    price: faker.random.number({
      min: 100,
      max: 300,
      precision: 0.01,
    }),
    discountPercentage: faker.random.number({
      min: 10,
      max: 50,
    }),
    discount: 'Yes',
    review: {
      numberOfReviews: fakeNumberOfReviews,
      fivStarReviews: fakeReviews.fakeFiveStarReviews,
      fourStarReviews: fakeReviews.fakeFourStarReviews,
      threeStarReviews: fakeReviews.fakeThreeStarReviews,
      twoStarReviews: fakeReviews.fakeTwoStarReviews,
      oneStarReviews: fakeReviews.fakeOneStarReviews,
      averageRating: fakeAverageRating,
    },
    description: faker.lorem.paragraphs(),
    specificationItemNo: faker.random.number({
      min: 1,
      max: 999,
    }),
    characteristics: {
      color: faker.commerce.color(),
      countryOfOrigin: faker.address.country(),
      substance: faker.lorem.word(),
      electricalPowerSupplyNeeded: changeBooleanToYesOrNo(faker.random.boolean()),
      voltage: faker.random.number({
        min: 110,
        max: 220,
      }),
      capacityMl: faker.random.number({
        min: 1000,
        max: 2000,
      }),
      safetyShutOff: changeBooleanToYesOrNo(faker.random.boolean()),
      motor: faker.lorem.word(),
      hiddenCordStorage: changeBooleanToYesOrNo(faker.random.boolean()),
      programs: faker.random.number({
        min: 5,
        max: 20,
      }),
      blade: faker.lorem.word(),
      speeds: faker.random.number({
        min: 5,
        max: 20,
      }),
      lcdDisplay: changeBooleanToYesOrNo(faker.random.boolean()),
      powerInput: faker.random.number({
        min: 1000,
        max: 2000,
      }),
    },
    measurement: {
      netWeight: faker.random.number({
        min: 10,
        max: 20,
        precision: 0.01,
      }),
      capacityQt: faker.random.number({
        min: 1,
        max: 5,
        precision: 0.01,
      }),
      lengthOfProduct: faker.random.number({
        min: 5,
        max: 10,
        precision: 0.01,
      }),
      widthOfProduct: faker.random.number({
        min: 5,
        max: 10,
        precision: 0.01,
      }),
      heightOfProduct: faker.random.number({
        min: 10,
        max: 20,
        precision: 0.01,
      }),
    },
    images: new Array(10).fill(null).map(() => faker.fake('{{image.image}}')),
    mainImage: faker.image.image(),
  };
  bunchOfSeeds.push(seeding);
}

// Product No. 1 always has real images
bunchOfSeeds[0].name = 'POWER BLENDER';
bunchOfSeeds[0].category = 'UNZWILLING ENFINIGY';
bunchOfSeeds[0].price = '400';
bunchOfSeeds[0].discountPercentage = '25';
bunchOfSeeds[0].images = [];
bunchOfSeeds[0].images = [
  'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/main.jpg',
  'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/1.jpg',
  'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/2.jpg',
  'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/3.jpg',
  'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/4.jpg',
  'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/5.jpg',
  'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/6.jpg',
  'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/7.jpg',
  'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/8.jpg',
  'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/9.jpg',
];

module.exports = {
  bunchOfSeeds,
};
