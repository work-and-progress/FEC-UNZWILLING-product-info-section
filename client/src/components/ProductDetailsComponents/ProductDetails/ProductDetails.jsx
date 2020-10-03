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

const propTypes = {
  productInfoDetails: PropTypes.instanceOf(Object),
  updateBasket: PropTypes.func,
};

const defaultProps = {
  productInfoDetails: null,
  updateBasket: null,
};

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
      <div className={styles.temp}>
        <div>
          <h1>ProductDetails</h1>
          <ProductTitleAndLogo productInfoDetails={productInfoDetails} />
          <AddToBasket updateBasket={updateBasket} />
          <ProductReviews productInfoDetails={productInfoDetails} />
          <ProductPrice productInfoDetails={productInfoDetails} />
          <SocialSharingButtons />
          <ProductDescription productInfoDetails={productInfoDetails} />
          <ProductSpecifications productInfoDetails={productInfoDetails} />
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = propTypes;
ProductDetails.defaultProps = defaultProps;
