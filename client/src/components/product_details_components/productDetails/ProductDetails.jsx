import React from 'react';
import PropTypes from 'prop-types';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { productInfoDetails } = this.props;
    console.log('PRODUCT DETAILS : ', productInfoDetails);
    return (
      <div>
        <h1>Hey</h1>
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
