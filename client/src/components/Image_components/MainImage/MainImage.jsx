import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  currentImg: PropTypes.string,
};

const defaultProps = {
  currentImg: null,
};

export default class MainImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      currentImg,
    } = this.props;
    return (
      <div>
        <h1>RENDER MainImage</h1>
        <img
          src={currentImg}
          alt="Main"
        />
      </div>
    );
  }
}

MainImage.propTypes = propTypes;
MainImage.defaultProps = defaultProps;
