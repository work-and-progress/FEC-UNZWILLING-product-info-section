import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

export default function ProductReviewDropDown(props) {
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

  const reviewRatingSummary = [
    fivStarReviews,
    fourStarReviews,
    twoStarReviews,
    twoStarReviews,
    oneStarReviews,
  ];

  console.log(reviewRatingSummary);
  console.log(numberOfReviews);

  const averageRatingPercentage = (rating) => {
    const percentageRating = (rating / 5) * 100;
    return percentageRating;
  };

  const changeReviewSummaryToPercentage = reviewRatingSummary.map((item) => (
    averageRatingPercentage(item)
  ));

  console.log(changeReviewSummaryToPercentage);

  const averageRatingPercentageValue = averageRatingPercentage(averageRating);

  return (
    <div>
      <div className={styles.ratingContainer}>
        <div className={styles.ratings}>
          <div className={styles.emptyStars} />
          <div
            className={styles.fullStars}
            style={{ width: `${averageRatingPercentageValue}%` }}
          />
        </div>
      </div>
      <div className={styles.ratingContainer}>
        <div className={styles.ratings}>
          <div className={styles.emptyStars} />
          <div
            className={styles.fullStars}
            style={{ width: `${averageRatingPercentageValue}%` }}
          />
        </div>
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

ProductReviewDropDown.propTypes = propTypes;
ProductReviewDropDown.defaultProps = defaultProps;
