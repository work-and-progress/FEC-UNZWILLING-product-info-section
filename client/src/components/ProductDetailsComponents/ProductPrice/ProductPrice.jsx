import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  productInfoDetails: PropTypes.instanceOf(Object),
};

const defaultProps = {
  productInfoDetails: null,
};

export default function ProductPrice(props) {
  const { productInfoDetails } = props;

  return (
    <div>
      <h1>ProductPrice</h1>
    </div>
  );
}

ProductPrice.propTypes = propTypes;
ProductPrice.defaultProps = defaultProps;
