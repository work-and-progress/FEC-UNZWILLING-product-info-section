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
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
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
      currentIndex: id,
    });
  }

  handlePrevClick() {
    const { currentIndex } = this.state;
    const { cardList } = this.props;
    let index = currentIndex;

    if (index < 4) {
      index = cardList.length - 1;
      document.getElementById('carouselComponent').scrollBy(1260, 0);
    } else {
      index -= 1;
      document.getElementById('carouselComponent').scrollBy(-126, 0);
    }
    this.setState({
      currentIndex: index,
    });
  }

  handleNextClick() {
    const { currentIndex } = this.state;
    const { cardList } = this.props;
    let index = currentIndex;

    if (index === cardList.length - 4) {
      index = 0;
      document.getElementById('carouselComponent').scrollBy(-1260, 0);
    } else {
      index += 1;
      document.getElementById('carouselComponent').scrollBy(126, 0);
    }

    this.setState({
      currentIndex: index,
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
      bottomBoarder,
    } = this.state;

    const CarouselComponent = cardList.map((card, i) => (
      <div
        key={card}
        className={bottomBoarder[i] ? styles.border : styles.noBorder}
      >
        <Carousel
          card={card}
          id={i}
          currentIndex={currentIndex}
          updateCurrentImage={this.updateCurrentImage}
          cardList={cardList}
          updateBottomBoarder={this.updateBottomBoarder}
          bottomBoarder={bottomBoarder}
        />
      </div>
    ));

    return (
      <div className={styles.container}>
        <div className={styles.currentImageAndCarouselContainer}>
          <CurrentImage currentImage={currentImage} />
        </div>
        <div className={styles.carouselComponentWrapper}>
          <button onClick={this.handlePrevClick} className={styles.carouselBtn}>
            <svg width="18px" height="18px" viewBox="0 0 18 28" aria-hidden="true" style={{ transform: 'rotate(180deg)' }}><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor" /></svg>
          </button>
          <div id="carouselComponent" className={styles.carouselComponent}>
            {CarouselComponent}
          </div>
          <button onClick={this.handleNextClick} className={styles.carouselBtn}>
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
