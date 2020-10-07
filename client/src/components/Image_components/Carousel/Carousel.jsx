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
    const { card } = this.props;
    return (
      <div>
        <div className={styles.card}>
          <img
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
