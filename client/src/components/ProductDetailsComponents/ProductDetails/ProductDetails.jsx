import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-unresolved
import styles from './styles.css';

import ProductTitleAndLogo from '../ProductTitleAndLogo/ProductTitleAndLogo';
import AddToBasket from '../AddToBasket/AddToBasket';
import ProductReviews from '../ProductReviews/ProductReviews';
import ProductPrice from '../ProductPrice/ProductPrice';
import SocialSharingButtons from '../SocialSharingButtons/SocialSharingButtons';
import ProductDescription from '../ProductDescription/ProductDescription';
import ProductSpecifications from '../ProductSpecifications/ProductSpecifications';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { productInfoDetails, updateBasket } = this.props;
    // console.log('PRODUCT DETAILS : ', productInfoDetails);
    return (
      <div className={styles.container}>
        <div>
          <ProductTitleAndLogo productInfoDetails={productInfoDetails} />
          <div className={styles.basketAndPrice}>
            <AddToBasket updateBasket={updateBasket} />
            <ProductPrice productInfoDetails={productInfoDetails} />
          </div>
          <div className={styles.shippingInfo}>
            <p>
              IN STOCK | SHIPS WITHIN 1-2 DAYS
            </p>
          </div>
          <ProductReviews productInfoDetails={productInfoDetails} />
          <SocialSharingButtons />
          <ProductDescription productInfoDetails={productInfoDetails} />
          <ProductSpecifications productInfoDetails={productInfoDetails} />
        </div>
      </div>
    );
  }
}

const propTypes = {
  productInfoDetails: PropTypes.instanceOf(Object),
  updateBasket: PropTypes.func,
};

const defaultProps = {
  productInfoDetails: null,
  updateBasket: null,
};

ProductDetails.propTypes = propTypes;
ProductDetails.defaultProps = defaultProps;
