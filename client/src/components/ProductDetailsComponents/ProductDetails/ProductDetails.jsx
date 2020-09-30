import React from 'react';
import PropTypes from 'prop-types';

import ProductTitleAndLogo from '../ProductTitleAndLogo/ProductTitleAndLogo';
import AddToBasket from '../AddToBasket/AddToBasket';

const propTypes = {
  productInfoDetails: PropTypes.instanceOf(Object),
};

const defaultProps = {
  productInfoDetails: null,
};

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
        <div>
          <h1>ProductDetails</h1>
          <ProductTitleAndLogo productInfoDetails={productInfoDetails} />
          <AddToBasket />
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = propTypes;
ProductDetails.defaultProps = defaultProps;
