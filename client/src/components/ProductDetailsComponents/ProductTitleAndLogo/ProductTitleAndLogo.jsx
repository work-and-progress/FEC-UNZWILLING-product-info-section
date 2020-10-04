import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import logo from './logo.png';

export default class ProductTitleAndLogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { productInfoDetails } = this.props;
    return (
      <div className={styles.temp}>
        <h1>ProductTitleAndLogo</h1>
        <h2>
          Product Category :
          {productInfoDetails.category}
        </h2>
        <h2>
          Product Name :
          {productInfoDetails.name}
        </h2>
        <span>
          <img src={logo} className={styles.logo} alt="logo" />
        </span>
        <h3>
          NEW
        </h3>
      </div>
    );
  }
}

const propTypes = {
  productInfoDetails: PropTypes.instanceOf(Object),
};

const defaultProps = {
  productInfoDetails: null,
};

ProductTitleAndLogo.propTypes = propTypes;
ProductTitleAndLogo.defaultProps = defaultProps;
