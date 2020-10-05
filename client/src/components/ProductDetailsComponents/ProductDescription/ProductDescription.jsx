import React from 'react';
import ShowMoreText from 'react-show-more-text';
import PropTypes from 'prop-types';

import styles from './styles.css';

export default class ProductDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isOpened: false,
    };
  }

  // handleChange() {
  //   this.setState((previousState) => ({
  //     isOpened: !(previousState.isOpened),
  //   }));
  // }

  render() {
    const { productInfoDetails } = this.props;
    return (
      <div className={styles.container}>
        <h1>Description</h1>
        <div className={styles.text}>
          <ShowMoreText
            lines={3}
            more="load more"
            less="load less"
            anchorClass=""
            onClick={this.executeOnClick}
            expanded={false}
            width={600}
          >
            {productInfoDetails.description}
          </ShowMoreText>
        </div>
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
