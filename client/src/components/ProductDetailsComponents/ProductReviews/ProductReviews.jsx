import React from 'react';
import PropTypes from 'prop-types';
// import styles from './styles.css';
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

  const altRenderStars = (num) => {
    const stars = [];
    for (let i = 0; i < 5; i += 1) {
      stars.push(<img
        style={{ width: '30px' }}
        src={i < num ? starImage : emptyStarImage}
        alt="rating"
        key={i}
      />);
    }
    return stars;
  };

  console.log(
    numberOfReviews,
    fivStarReviews,
    fourStarReviews,
    threeStarReviews,
    twoStarReviews,
    oneStarReviews,
    averageRating,
  );
  // console.log(review.averageRating)
  return (
    <div>
      <h1>RENDER ProductReviews</h1>
      <div>
        <h2>Star Rating</h2>
        {altRenderStars(2)}
      </div>
    </div>
  );
}

ProductReviews.propTypes = propTypes;
ProductReviews.defaultProps = defaultProps;
