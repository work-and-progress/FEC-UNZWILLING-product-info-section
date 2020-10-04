import React from 'react';
import ShowMoreText from 'react-show-more-text';
import PropTypes from 'prop-types';

export default class ProductDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { productInfoDetails } = this.props;
    return (
      <div>
        <h1>Product Description</h1>
        <ShowMoreText
                  /* Default options */
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
