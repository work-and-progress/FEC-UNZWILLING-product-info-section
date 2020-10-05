/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import starImage from './star.png';
import emptyStarImage from './empty_star.png';
import ProductReviewDropdown from '../ProductReviewDropdown/ProductReviewDropdown';

export default class ProductReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDropdown: false,
    };
    this.displayProductReviewDropdown = this.displayProductReviewDropdown.bind(this);
  }

  displayProductReviewDropdown() {
    const { displayDropdown } = this.state;
    this.setState({
      displayDropdown: !(displayDropdown),
    });
  }

  render() {
    const {
      productInfoDetails: {
        review: {
          numberOfReviews,
          fivStarReviews,
          fourStarReviews,
          threeStarReviews,
          twoStarReviews,
          oneStarReviews,
          averageRating,
        } = {},
      },
      productInfoDetails,
    } = this.props;

    const { displayDropdown } = this.state;

    const averageRatingPercentage = (rating) => {
      const percentageRating = (rating / 5) * 100;
      return percentageRating;
    };

    const averageRatingPercentageValue = averageRatingPercentage(averageRating);

    let productReviewDropdown = null;

    if (displayDropdown) {
      productReviewDropdown = (<ProductReviewDropdown productInfoDetails={productInfoDetails} />);
    }

    return (
      <div
        className={styles.container}
        onMouseEnter={this.displayProductReviewDropdown}
        onMouseLeave={this.displayProductReviewDropdown}
      >
        <div className={styles.ratings}>
          <div className={styles.emptyStars} />
          <div
            className={styles.fullStars}
            style={{ width: `${averageRatingPercentageValue}%` }}
          />
        </div>
        <div className={styles.ratingSummary}>
          {averageRating}
          {' '}
          (
          {numberOfReviews}
          )
        </div>
        {productReviewDropdown}
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

ProductReviews.propTypes = propTypes;
ProductReviews.defaultProps = defaultProps;
