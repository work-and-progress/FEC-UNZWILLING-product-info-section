import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    const {
      card, id, updateCurrentImage, updateBottomBoarder,
    } = this.props;
    updateCurrentImage(card);
    updateBottomBoarder(id);
  }

  render() {
    const { card, id, bottomBoarder, currentIndex } = this.props;
    // console.log(bottomBoarder);
    // console.log(id);
    // console.log(id);
    // console.log(bottomBoarder[id]);
    // const bid = bottomBoarder[id];
    // const setClass = `${bottomBoarder[id]} ? ${styles.card} : ${styles.temp}`;
    // const setClass2 = `${bottomBoarder[id]} ? 'styles.card' : 'styles.temp'`;
    // const setClass3 = bottomBoarder[id] ? 'card' : 'temp';
    // const testStyle = (currentIndex === 0) ? 'card' : 'temp';
    // console.log ((currentIndex === 0));

    return (
      <div>
        <div>
          <img
            // className={ styles.card }
            src={card}
            alt="card"
            onClick={this.clickHandler}
          />
        </div>
      </div>
    );
  }
}

const propTypes = {
  card: PropTypes.string,
  updateCurrentImage: PropTypes.func,
  updateBottomBoarder: PropTypes.func,
  id: PropTypes.number,
};

const defaultProps = {
  card: null,
  updateCurrentImage: null,
  updateBottomBoarder: null,
  id: null,
};

Carousel.propTypes = propTypes;
Carousel.defaultProps = defaultProps;
