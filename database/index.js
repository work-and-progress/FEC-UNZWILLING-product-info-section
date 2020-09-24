const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/UNZWILLING', {useNewUrlParser: true, useUnifiedTopology: true});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("MONGO CONNECTED!")
});

// Schema
let productSchema = new mongoose.Schema({
  // TODO: your schema here!
  product_name: String,
  category_id: Number,
  product_price: Number, // Need to find out $ format
  review_id: Number, // Need to change ??
  product_description: String,
  product_specification_item_no: Number, // Need to change??
  product_specification_color: String,
  product_specification_country_of_origin: String,
  product_specification_substance: String,
  product_specification_electrical_power_supply_needed: Boolean,
  product_specification_voltage: Number,
  product_specification_capacity: Number,
  product_specification_safety_shut_off: Boolean,
  product_specification_motor: String,
  product_specification_hidden_cord_storage: Boolean,
  product_specification_programs: Number,
  product_specification_blade: String,
  product_specification_speeds: Number,
  product_specification_lcd_display: Boolean,
  product_specification_power_input: Number,
  product_measurements_capacity: Number,
  product_images: String, // Need to change ??
  product_main_image: String // Need to change
  // product_inventory: Number
  // product_features: String,
  // related_products: String, // Need to change,
  // question_id: Number,
});

// Model
let Product = mongoose.model('Product', productSchema);

/////////////////////////////////////////////////

var test = new Product ({
  product_name: 'Knife',
  category_id: 1101,
  product_features: 'Knife',
  product_price: 132, // Need to find out $ format
  related_products: 'Knife', // Need to change
  review_id: 123, // Need to change ??
  question_id: 123,
  product_description: 'Knife',
  product_specification: 'Knife', // Need to change??
  product_images: 'Knife', // Need to change ??
  product_main_image: 'Knife', // Need to change
  product_inventory: 312
})


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

test.save((err) => {
  if(err) {
    return handleError(err)
  }
})