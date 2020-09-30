/* eslint-disable no-console */
const mongoose = require('mongoose');
const seed = require('./seed.js');

mongoose.connect('mongodb://localhost/UNZWILLING', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false,
});

/*----------------------------------------------------------------*/
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MONGO CONNECTED!');
});

// Schema
const productSchema = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  category: String,
  name: { type: String, required: true },
  price: { type: Number, required: true },
  discount: Number,
  numberOfReviews: Number,
  fivStarReviews: Number,
  fourStarReviews: Number,
  threeStarReviews: Number,
  twoStarReviews: Number,
  oneStarReviews: Number,
  averageRating: Number,
  description: String,
  specificationItemNo: { type: Number, unique: true },
  characteristicsColor: String,
  characteristicsCountryOfOrigin: String,
  characteristicsSubstance: String,
  characteristicsElectricalPowerSupplyNeeded: Boolean,
  characteristicsVoltage: Number,
  characteristicsCapacity: Number,
  characteristicsSafetyShutOff: Boolean,
  characteristicsMotor: String,
  characteristicsHiddenCordStorage: Boolean,
  characteristicsPrograms: Number,
  characteristicsBlade: String,
  characteristicsSpeeds: Number,
  characteristicsLcdDisplay: Boolean,
  characteristicsPowerInput: Number,
  MeasurementsNetWeight: Number,
  MeasurementsCapacity: Number,
  MeasurementsLengthOfProduct: Number,
  MeasurementsWidthOfProduct: Number,
  MeasurementsHeightOfProduct: Number,
  images: Array,
  main_image: String,
});

// Model
const Product = mongoose.model('Product', productSchema);

const seedingData = () => {
  // drop collections before new seeding
  mongoose.connection.collections.products.drop((err) => {
    console.log('collection dropped', err);
  });

  const seeds = seed.bunchOfSeeds;

  Product.insertMany(seeds)
    .then(() => {
      console.log('Data inserted');// Success
    })
    .catch((error) => {
      console.log(error);// Failure
    });
};
/*----------------------------------------------------------------*/

const getOneProductData = (id, callback) => {
  Product.findOne({ id }, (err, productInfo) => {
    if (err) {
      callback(err);
    } else {
      callback(null, productInfo);
    }
  });
};

module.exports = {
  seedingData,
  getOneProductData,
};
