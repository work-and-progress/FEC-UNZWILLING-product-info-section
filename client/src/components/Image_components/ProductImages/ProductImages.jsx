/* eslint-disable no-restricted-syntax */
import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';
import CurrentImage from '../CurrentImage/CurrentImage';
import Carousel from '../Carousel/Carousel';

export default class ProductImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/main.jpg',
      currentIndex: 0,
      bottomBoarder: {
        0: true,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
      },
    };
    this.updateCurrentImage = this.updateCurrentImage.bind(this);
    this.updateBottomBoarder = this.updateBottomBoarder.bind(this);
  }

  updateCurrentImage(updateImage) {
    this.setState({
      currentImage: updateImage,
    });
  }

  updateBottomBoarder(id) {
    const { bottomBoarder } = this.state;
    const newState = { ...bottomBoarder };
    // eslint-disable-next-line guard-for-in
    for (const key in newState) {
      if (Object.prototype.hasOwnProperty.call(newState, key)) {
        if (key !== id) {
          newState[key] = false;
        }
      }
      newState[id] = true;
    }
    this.setState({
      bottomBoarder: newState,
    });
  }

  render() {
    const {
      productInfoDetails,
      cardList,
    } = this.props;

    const {
      currentImage,
      currentIndex,
    } = this.state;

    const CarouselComponent = cardList.map((card, i) => (
      <Carousel
        card={card}
        key={card}
        id={i}
        currentIndex={currentIndex}
        updateCurrentImage={this.updateCurrentImage}
        cardList={cardList}
        updateBottomBoarder={this.updateBottomBoarder}
      />
    ));

    return (
      <div className={styles.container}>
        <h1>RENDER ProductImages</h1>
        <div className={styles.mainImage}>
          <CurrentImage currentImage={currentImage} />
        </div>
        <h1>Carousel</h1>
        <div className={styles.carouselComponentWrapper}>
          <button>
            <svg width="18px" height="18px" viewBox="0 0 18 28" aria-hidden="true" style={{ transform: 'rotate(180deg)' }}><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor" /></svg>
          </button>
          <div className={styles.carouselComponent}>
            {CarouselComponent}
          </div>
          <button>
            <svg width="18px" height="18px" viewBox="0 0 18 28" aria-hidden="true"><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor" /></svg>
          </button>
        </div>
      </div>
    );
  }
}

const propTypes = {
  productInfoDetails: PropTypes.instanceOf(Object),
  cardList: PropTypes.instanceOf(Object),
};

const defaultProps = {
  productInfoDetails: null,
  cardList: null,
};

ProductImages.propTypes = propTypes;
ProductImages.defaultProps = defaultProps;
