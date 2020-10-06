import React from 'react';
import PropTypes from 'prop-types';
// Product prices should be refactored.
import styles from './styles.css';

export default function ProductPrice(props) {
  const { productInfoDetails } = props;

  const roundUpPrice = (Math.ceil((productInfoDetails.price) / 10) * 10).toFixed(2);
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
    <div className={styles.container}>
      <div>
        <p>
          {discountDescriptionElement}
        </p>
        <p className={styles.roundUpPrice}>
          {`${roundUpPrice}`}
        </p>
        <p className={styles.discountedPrice}>
          {discountedPriceElement}
        </p>
      </div>
    </div>
  );
}

const propTypes = {
  productInfoDetails: PropTypes.instanceOf(Object),
};

const defaultProps = {
  productInfoDetails: null,
};

ProductPrice.propTypes = propTypes;
ProductPrice.defaultProps = defaultProps;
