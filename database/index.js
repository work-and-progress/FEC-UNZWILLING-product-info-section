const mongoose = require('mongoose');
// const dummy = require('mongoose-dummy');
const faker = require('faker');
mongoose.connect('mongodb://localhost/UNZWILLING', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("MONGO CONNECTED!")
});

// Schema
let productSchema = new mongoose.Schema({
  // TODO: your schema here!
  product_id: {type: Number,unique: true},
  product_name: String,
  category_id: {type: Number,unique: true},
  product_price: Number, // Need to find out $ format
  review_id: {type: Number,unique: true} // Need to change ??
  // Make the product description as a nested object
  // product_description: {
  //   product_description: String,
  //   product_specification_item_no: {type: Number,unique: true}, // Need to change??
  //   product_specification_color: String,
  //   product_specification_country_of_origin: String,
  //   product_specification_substance: String,
  //   product_specification_electrical_power_supply_needed: Boolean,
  //   product_specification_voltage: Number,
  //   product_specification_capacity: Number,
  //   product_specification_safety_shut_off: Boolean,
  //   product_specification_motor: String,
  //   product_specification_hidden_cord_storage: Boolean,
  //   product_specification_programs: Number,
  //   product_specification_blade: String,
  //   product_specification_speeds: Number,
  //   product_specification_lcd_display: Boolean,
  //   product_specification_power_input: Number,
  // },
  // product_measurements_capacity: Number,
  // product_images: String, // Need to be an array?
  // product_main_image: String // Need to change
  // product_inventory: Number
  // product_features: String,
  // related_products: String, // Need to change,
  // question_id: Number,
});

// Model
let Product = mongoose.model('Product', productSchema);

// Code from Jon
let save = (products) => {
  var savePromises = [];
  products.forEach(product => {
    let filter = {id: product.id};
    savePromises.push(
      Product.findOneAndUpdate(filter, product, {
        new: true,
        upsert: true
      })
      .catch(err=>{
        console.error(err);
      })
    );
  })
  return Promise.all(savePromises);
    // .then(response => {
    //   return response;
    // });
};

// product_id => 1000 ~ 1099.
var randomData = new Product({
  product_id: faker.random.number({
    'min': 1000,
    'max': 1099
  }),
  product_name: faker.commerce.product(),
  category_id: faker.random.number({
    'min': 2000,
    'max': 2099
  }),
  product_price: faker.commerce.price(), // Need to find out $ format
  review_id: faker.random.number({
    'min': 3000,
    'max': 3099
  }) // Need to change ??
  // Make the product description as a nested object
  // product_description: {
  //   product_description: String,
  //   product_specification_item_no: Number, // Need to change??
  //   product_specification_color: String,
  //   product_specification_country_of_origin: String,
  //   product_specification_substance: String,
  //   product_specification_electrical_power_supply_needed: Boolean,
  //   product_specification_voltage: Number,
  //   product_specification_capacity: Number,
  //   product_specification_safety_shut_off: Boolean,
  //   product_specification_motor: String,
  //   product_specification_hidden_cord_storage: Boolean,
  //   product_specification_programs: Number,
  //   product_specification_blade: String,
  //   product_specification_speeds: Number,
  //   product_specification_lcd_display: Boolean,
  //   product_specification_power_input: Number,
  // },
  // product_measurements_capacity: Number,
  // product_images: String, // Need to be an array?
  // product_main_image: String // Need to change
  // // product_inventory: Number
  // // product_features: String,
  // // related_products: String, // Need to change,
  // // question_id: Number,

})

randomData.save((err) => {
  if(err) {
    return console.log(err)
  }
})
