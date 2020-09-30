import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  productInfoDetails: PropTypes.instanceOf(Object),
};

const defaultProps = {
  productInfoDetails: null,
};
export default class ProductTitleAndLogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { productInfoDetails } = this.props;
    return (
      <div>
        <h1>ProductTitleAndLogo</h1>
        <h2>
          Product Category :
          {productInfoDetails.category}
        </h2>
        <h2>
          Product Name :
          {productInfoDetails.name}
        </h2>
      </div>
    );
  }
}

ProductTitleAndLogo.propTypes = propTypes;
ProductTitleAndLogo.defaultProps = defaultProps;
