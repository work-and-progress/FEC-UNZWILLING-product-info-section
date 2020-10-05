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
      <div className={styles.container}>
        <div className={styles.categoryAndNameContainer}>
          <h2 className={styles.category}>
            {productInfoDetails.category}
          </h2>
          <h2 className={styles.name}>
            {productInfoDetails.name}
          </h2>
          <span className={styles.logoContainer}>
            <img src={logo} className={styles.logo} alt="logo" />
          </span>
        </div>
        <div className={styles.newContainer}>
          <span className={styles.new}>
            NEW
          </span>
        </div>
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
