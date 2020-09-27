const faker = require('faker');

// generating random images
// this is an example.
// Do not use the variable so it can generate random ten images for each random product.
// const randomImages = new Array(10).fill(null).map(e => e = faker.fake("{{image.image}}"))

const bunchOfSeeds = [];
for (let i = 1; i < 3; i += 1) {
  const seeding = {
    id: i,
    name: faker.commerce.product(),
    price: faker.commerce.price(), // Need to find out $ format
    discount: faker.random.number({
      min: 10,
      max: 50,
    }),
    review: {
      number_of_reviews: faker.random.number({
        min: 1,
        max: 999,
      }),
      five_star_reviews: faker.random.number({
        min: 0,
        max: 5,
      }),
      four_star_reviews: faker.random.number({
        min: 0,
        max: 5,
      }),
      three_star_reviews: faker.random.number({
        min: 0,
        max: 5,
      }),
      two_star_reviews: faker.random.number({
        min: 0,
        max: 5,
      }),
      one_star_reviews: faker.random.number({
        min: 0,
        max: 5,
      }),
      average_rating: faker.random.number({
        min: 0,
        max: 5,
      }),
    }, // Need to change ??
    description: faker.lorem.sentence(),
    specification_item_no: faker.random.number({
      min: 1,
      max: 999,
    }),
    characteristics: {
      color: faker.commerce.color(),
      country_of_origin: faker.address.country(),
      substance: faker.lorem.sentence(),
      electrical_power_supply_needed: faker.random.boolean(),
      voltage: faker.random.number({
        min: 110,
        max: 220,
      }),
      capacity: faker.random.number({
        min: 1000,
        max: 2000,
      }),
      safety_shut_off: faker.random.boolean(),
      motor: faker.lorem.sentence(),
      hidden_cord_storage: faker.random.boolean(),
      programs: faker.random.number({
        min: 5,
        max: 20,
      }),
      blade: faker.lorem.sentence(),
      speeds: faker.random.number({
        min: 5,
        max: 20,
      }),
      lcd_display: faker.random.boolean(),
      power_input: faker.random.number({
        min: 1000,
        max: 2000,
      }),
    },
    measurements: {
      net_weight: faker.random.number({
        min: 10,
        max: 20,
      }),
      capacity: faker.random.number({
        min: 1,
        max: 5,
      }),
      length_of_product: faker.random.number({
        min: 5,
        max: 10,
      }),
      width_of_product: faker.random.number({
        min: 5,
        max: 10,
      }),
      height_of_product: faker.random.number({
        min: 10,
        max: 20,
      }),
    },
    images: new Array(10).fill(null).map(() => faker.fake('{{image.image}}')),
    main_image: faker.image.image(),
  };
  bunchOfSeeds.push(seeding);
}

module.exports = {
  bunchOfSeeds,
};
