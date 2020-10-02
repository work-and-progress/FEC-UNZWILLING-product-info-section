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
      <div>
        <p>
          {`YOU SAVE: - ${productInfoDetails.discount}%`}
        </p>
        <p>
          {productInfoDetails.price}
        </p>
      </div>
    </div>
  );
}

ProductPrice.propTypes = propTypes;
ProductPrice.defaultProps = defaultProps;
