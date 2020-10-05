/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

export default function ProductReviewDropDown(props) {
  const {
    productInfoDetails: {
      review: {
        fivStarReviews,
        fourStarReviews,
        threeStarReviews,
        twoStarReviews,
        oneStarReviews,
      } = {},
    },
  } = props;

  const reviewRatingSummary = [
    fivStarReviews,
    fourStarReviews,
    threeStarReviews,
    twoStarReviews,
    oneStarReviews,
  ];

  const averageRatingPercentage = (rating) => {
    const percentageRating = (rating / 5) * 100;
    return percentageRating;
  };

  const reviewRatingSummaryInPercentage = reviewRatingSummary.map((item) => (
    averageRatingPercentage(item)
  ));

  const ratingBars = reviewRatingSummaryInPercentage.map((reviewPercentage, i) => (
    <div key={i} className={styles.ratingContainer}>
      <div className={styles.ratings}>
        <div className={styles.emptyBars} />
        <span className={styles.rating}>{5 - i}</span>
        <span className={styles.star}>★</span>
        <div
          className={styles.fullBars}
          style={{ width: `${reviewPercentage}%` }}
        />
        <span className={styles.percentage}>{`${reviewRatingSummary[i]}`}</span>
      </div>
    </div>
  ));

  return (
    <div>
      {ratingBars}
    </div>
  );
}

const propTypes = {
  productInfoDetails: PropTypes.instanceOf(Object),
};

const defaultProps = {
  productInfoDetails: null,
};

ProductReviewDropDown.propTypes = propTypes;
ProductReviewDropDown.defaultProps = defaultProps;
