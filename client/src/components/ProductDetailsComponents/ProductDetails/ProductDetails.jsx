import React from 'react';
import PropTypes from 'prop-types';
import ProductTitleAndLogo from '../ProductTitleAndLogo/ProductTitleAndLogo';
import AddToBasket from '../AddToBasket/AddToBasket';
import styles from './styles.css';

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
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = propTypes;
ProductDetails.defaultProps = defaultProps;
