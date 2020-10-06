/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

export default class ProductDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
    };
    this.textRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e) {
    this.textRef.current.className = (`${styles.expandText} ${styles.text}`);
    e.target.className = styles.hideButton;
  }

  handleChange() {
    this.setState((previousState) => ({
      isOpened: !(previousState.isOpened),
    }));
  }

  render() {
    const { productInfoDetails } = this.props;
    const { isOpened } = this.state;

    let closeAndOpenButton = (
      <div className={styles.descriptionContainer}>
        <div className={styles.descriptionTitle.container}>
          <h1 className={styles.descriptionTitle}>Description</h1>
          <p
            className={styles.openAndCloseButton}
            onClick={this.handleChange}
          >
            {' '}
            –
          </p>
        </div>
      </div>
    );

    if (!isOpened) {
      closeAndOpenButton = (
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionTitle.container}>
            <h1 className={styles.descriptionTitle}>Description</h1>
            <p
              className={styles.openAndCloseButton}
              onClick={this.handleChange}
            >
              {' '}
              +
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className={styles.container}>
        {closeAndOpenButton}
        {isOpened ? (
          <div>
            <div ref={this.textRef} className={styles.text}>
              {productInfoDetails.description}
            </div>
            <button type="button" className={styles.showMoreButton} onClick={this.handleClick}>...show more</button>
          </div>
        ) : null}
      </div>
    );
  }
}

const propTypes = {
  productInfoDetails: PropTypes.instanceOf(Object),
};

const defaultProps = {
  productInfoDetails: null,
};

ProductDescription.propTypes = propTypes;
ProductDescription.defaultProps = defaultProps;
