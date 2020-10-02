/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import starImage from './star.png';
import emptyStarImage from './empty_star.png';

const propTypes = {
  productInfoDetails: PropTypes.instanceOf(Object),
};

const defaultProps = {
  productInfoDetails: null,
};

export default function ProductReviews(props) {
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
  } = props;

  const averageRatingPercentage = (rating) => {
    const percentageRating = (rating / 5) * 100;
    return percentageRating;
  };

  const averageRatingPercentageValue = averageRatingPercentage(averageRating);

  return (
    <div>
      <h1>ProductReviews</h1>
      <div>
        <h2>Star Rating</h2>
      </div>
      <div className={styles.ratings}>
        <div className={styles.emptyStars} />
        <div
          className={styles.fullStars}
          style={{ width: `${averageRatingPercentageValue}` }}
        />
      </div>
    </div>
  );
}

ProductReviews.propTypes = propTypes;
ProductReviews.defaultProps = defaultProps;
