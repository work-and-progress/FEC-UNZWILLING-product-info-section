import React from 'react';
import PropTypes from 'prop-types';

import ProductTitleAndLogo from '../ProductTitleAndLogo/ProductTitleAndLogo';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { productInfoDetails } = this.props;
    // console.log('PRODUCT DETAILS : ', productInfoDetails);
    return (
      <div>
        <h1>ProductDetails</h1>
        <ProductTitleAndLogo productInfoDetails={productInfoDetails} />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  productInfoDetails: PropTypes.instanceOf(Object),
};

ProductDetails.defaultProps = {
  productInfoDetails: null,
};
