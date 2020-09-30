import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      id,
      category,
      name,
      price,
      discount,
      // review,
      // review.number_of_reviews,
      //   number_of_reviews,
      //   five_star_reviews,
      //   four_star_reviews,
      //   three_star_reviews,
      //   two_star_reviews,
      //   one_star_reviews,
      //   average_rating,
      // },
      // description: String,
      // specification_item_no: { type: Number, unique: true },
      characteristics,
      //   color: String,
      //   country_of_origin: String,
      //   substance: String,
      //   electrical_power_supply_needed: Boolean,
      //   voltage: Number,
      //   capacity: Number,
      //   safety_shut_off: Boolean,
      //   motor: String,
      //   hidden_cord_storage: Boolean,
      //   programs: Number,
      //   blade: String,
      //   speeds: Number,
      //   lcd_display: Boolean,
      //   power_input: Number,
      // },
      // measurements: {
      //   net_weight: Number,
      //   capacity: Number,
      //   length_of_product: Number,
      //   width_of_product: Number,
      //   height_of_product: Number,
      // },
      // images: Array,
      // main_image: String,
    } = this.props.productInfoDetails
    console.log(characteristics);
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
}

export default ProductDetails;
