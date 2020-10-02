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

  const discountPrice = (price, discountPercentage, discount) => {
    if (discount === true) {
      const updatedPrice = price * ((100 - discountPercentage) / 100);
      return `$${updatedPrice}`;
    }
    return '';
  };

  const discountDescription = (discountPercentage, discount) => {
    if (discount === true) {
      return `YOU SAVE: - ${discountPercentage}%`;
    }
    return '';
  };

  const discountDescriptionElement = discountDescription(
    productInfoDetails.discountPercentage,
    productInfoDetails.discount,
  );

  const discountedPriceElement = discountPrice(
    productInfoDetails.price,
    productInfoDetails.discountPercentage,
    productInfoDetails.discount,
  );

  return (
    <div>
      <h1>Product Price</h1>
      <div>
        <p>
          IN STOCK | SHIPS WITHIN 1-2 DAYS
        </p>
        <p>
          {discountDescriptionElement}
        </p>
        <p>
          {`$${productInfoDetails.price}`}
        </p>
        <p>
          {discountedPriceElement}
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
