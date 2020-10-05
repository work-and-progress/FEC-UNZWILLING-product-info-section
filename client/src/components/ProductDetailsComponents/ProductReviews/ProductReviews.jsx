/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import starImage from './star.png';
import emptyStarImage from './empty_star.png';

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
    <div className={styles.container}>
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
    </div>
  );
}

const propTypes = {
  productInfoDetails: PropTypes.instanceOf(Object),
};

const defaultProps = {
  productInfoDetails: null,
};

ProductReviews.propTypes = propTypes;
ProductReviews.defaultProps = defaultProps;
