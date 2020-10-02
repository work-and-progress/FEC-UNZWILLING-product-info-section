import React from 'react';
import PropTypes from 'prop-types';
// Product prices should be refactored.
const propTypes = {
  productInfoDetails: PropTypes.instanceOf(Object),
};

const defaultProps = {
  productInfoDetails: null,
};

export default function ProductPrice(props) {
  const { productInfoDetails } = props;

  const discountPrice = (price, discount) => (
    price * ((100 - discount) / 100)
  );

  const discountedPrice = discountPrice(productInfoDetails.price, productInfoDetails.discount);

  return (
    <div>
      <div>
        <p>
          IN STOCK | SHIPS WITHIN 1-2 DAYS
        </p>
        <p>
          {`YOU SAVE: - ${productInfoDetails.discount}%`}
        </p>
        <p>
          {`$${productInfoDetails.price}`}
        </p>
        <p>
          {`$${discountedPrice}`}
        </p>
        <p>
          WRITE A REVIEW
        </p>
      </div>
    </div>
  );
}

ProductPrice.propTypes = propTypes;
ProductPrice.defaultProps = defaultProps;
