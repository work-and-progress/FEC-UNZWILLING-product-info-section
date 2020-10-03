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

  const roundUpPrice = Math.ceil((productInfoDetails.price) / 10) * 10;
  const roundUpDiscount = Math.ceil((productInfoDetails.discountPercentage) / 10) * 10;

  const discountedPrice = (price, discountPercentage, discount) => {
    if (discount === 'Yes') {
      const updatedPrice = Math.floor((price * ((100 - discountPercentage) / 100))) - 0.01;
      return `$${updatedPrice}`;
    }
    return '';
  };

  const discountDescription = (discountPercentage, discount) => {
    if (discount === 'Yes') {
      return `YOU SAVE: - ${discountPercentage}%`;
    }
    return '';
  };

  const discountDescriptionElement = discountDescription(
    roundUpDiscount,
    productInfoDetails.discount,
  );

  const discountedPriceElement = discountedPrice(
    roundUpPrice,
    roundUpDiscount,
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
          {`$${roundUpPrice}`}
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
