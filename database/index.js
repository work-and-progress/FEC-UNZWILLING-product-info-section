const mongoose = require('mongoose');
const faker = require('faker');
mongoose.connect('mongodb://localhost/UNZWILLING', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("MONGO CONNECTED!")
});

// Schema
let productSchema = new mongoose.Schema({
  // TODO: your schema here!
  id: {type: Number,unique: true, required: true},
  name: {type: String, required: true},
  price: {type: Number, required: true}, // Need to find out $ format
  discount: Number,
  review: {
    number_of_reviews: Number,
    five_star_reviews: Number,
    four_star_reviews: Number,
    three_star_reviews: Number,
    two_star_reviews: Number,
    one_star_reviews: Number,
    average_rating: Number
  }, // Need to change ??
  description: String,
  specification_item_no: {type: Number,unique: true},
  characteristics: {
    color: String,
    country_of_origin: String,
    substance: String,
    electrical_power_supply_needed: Boolean,
    voltage: Number,
    capacity: Number,
    safety_shut_off: Boolean,
    motor: String,
    hidden_cord_storage: Boolean,
    programs: Number,
    blade: String,
    speeds: Number,
    lcd_display: Boolean,
    power_input: Number,
  },
  measurements: {
    net_weight: Number,
    capacity: Number,
    length_of_product: Number,
    width_of_product: Number,
    height_of_product: Number
  },
  // images: Array,
  main_image: String
});

// Model
let Product = mongoose.model('Product', productSchema);

var bunchOfSeeds = [];
for (var i = 0; i < 100; i ++) {
  var seeding = new Product({
    id: i,
    name: faker.commerce.product(),
    price: faker.commerce.price(), // Need to find out $ format
    discount: faker.random.number({
        'min': 10,
        'max': 50
      }),
    review: {
      number_of_reviews: faker.random.number({
        'min': 1,
        'max': 999
      }),
      five_star_reviews: faker.random.number({
        'min': 0,
        'max': 5
      }),
      four_star_reviews: faker.random.number({
        'min': 0,
        'max': 5
      }),
      three_star_reviews: faker.random.number({
        'min': 0,
        'max': 5
      }),
      two_star_reviews: faker.random.number({
        'min': 0,
        'max': 5
      }),
      one_star_reviews: faker.random.number({
        'min': 0,
        'max': 5
      }),
      average_rating: faker.random.number({
        'min': 0,
        'max': 5
      })
    }, // Need to change ??
    description: faker.lorem.sentence(),
    specification_item_no: faker.random.number({
      'min': 1,
      'max': 999
    }),
    characteristics: {
      color: faker.commerce.color(),
      country_of_origin: faker.address.country(),
      substance: faker.lorem.sentence(),
      electrical_power_supply_needed: faker.random.boolean(),
      voltage: faker.random.number({
        'min': 110,
        'max': 220
      }),
      capacity: faker.random.number({
        'min': 1000,
        'max': 2000
      }),
      safety_shut_off: faker.random.boolean(),
      motor: faker.lorem.sentence(),
      hidden_cord_storage: faker.random.boolean(),
      programs: faker.random.number({
        'min': 5,
        'max': 20
      }),
      blade: faker.lorem.sentence(),
      speeds: faker.random.number({
        'min': 5,
        'max': 20
      }),
      lcd_display: faker.random.boolean(),
      power_input: faker.random.number({
        'min': 1000,
        'max': 2000
      }),
    },
    measurements: {
      net_weight: faker.random.number({
        'min': 10,
        'max': 20
      }),
      capacity: faker.random.number({
        'min': 1,
        'max': 5
      }),
      length_of_product: faker.random.number({
        'min': 5,
        'max': 10
      }),
      width_of_product: faker.random.number({
        'min': 5,
        'max': 10
      }),
      height_of_product: faker.random.number({
        'min': 10,
        'max': 20
      })
    },
    // images: Array,
    main_image: faker.image.image()
  });
  bunchOfSeeds.push(seeding);
}

// drop collections before new seeding           =

mongoose.connection.collections['products'].drop( function(err) {
  console.log('collection dropped');
});

Product.insertMany(bunchOfSeeds)
.then(() => {
  console.log("Data inserted")  // Success
})
.catch((error) => {
  console.log(error)      // Failure
});

// var deleteMany = (callback) => {
//   Product.deleteMany({}, () => {
//     callback();
//   });
// }

// var seedingData = () => {
//   deleteMany(insertManyFnc);
// }

// seedingData();