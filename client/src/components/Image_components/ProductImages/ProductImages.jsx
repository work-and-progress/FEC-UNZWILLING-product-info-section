import React from 'react';
import PropTypes from 'prop-types';

import MainImage from '../MainImage/MainImage';
import Carousel from '../Carousel/Carousel';

const propTypes = {
  productInfoDetails: PropTypes.instanceOf(Object),
  productInfoDetailsImages: PropTypes.instanceOf(Object),
};

const defaultProps = {
  productInfoDetails: null,
  productInfoDetailsImages: null,
};

export default class ProductImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImg: 'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/main.jpg',
      currentIndex: 0,
    };
  }

  render() {
    const {
      productInfoDetails,
      productInfoDetailsImages,
    } = this.props;

    const {
      currentImg,
      currentIndex,
    } = this.state;

    const CarouselComponent = productInfoDetailsImages.map(
      (image, i) => (
        <Carousel
          image={image}
          key={i}
          currentIndex={currentIndex}
        />
      ),
    );
    return (
      <div>
        <h1>RENDER ProductImages</h1>
        <MainImage currentImg={currentImg} />
        <h1>Carousel</h1>
        {CarouselComponent}
      </div>
    );
  }
}

ProductImages.propTypes = propTypes;
ProductImages.defaultProps = defaultProps;
