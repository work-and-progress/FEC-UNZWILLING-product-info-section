import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

export default class MainImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      currentImage,
    } = this.props;

    return (
      <div className={styles.wrapper}>
        <h1>RENDER currentImage</h1>
        <img
          src={currentImage}
          alt="Main"
        />
      </div>
    );
  }
}

const propTypes = {
  currentImage: PropTypes.string,
};

const defaultProps = {
  currentImage: null,
};

MainImage.propTypes = propTypes;
MainImage.defaultProps = defaultProps;
