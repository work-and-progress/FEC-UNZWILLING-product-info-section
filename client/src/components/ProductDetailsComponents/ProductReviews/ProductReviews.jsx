import React from 'react';
import PropTypes from 'prop-types';
// import styles from './styles.css';
const propTypes = {
  productInfoDetails: PropTypes.instanceOf(Object),
};

const defaultProps = {
  productInfoDetails: null,
};

export default class ProductReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { productInfoDetails: { review: { averageRating } = {} } } = this.props;
    // console.log(review.averageRating);
    console.log(averageRating);
    return (
      <div>
        <h1>RENDER ProductReviews</h1>
      </div>
    );
  }
}

ProductReviews.propTypes = propTypes;
ProductReviews.defaultProps = defaultProps;
