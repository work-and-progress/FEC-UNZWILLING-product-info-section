import React from 'react';
import PropTypes from 'prop-types';

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

ProductTitleAndLogo.propTypes = {
  productInfoDetails: PropTypes.instanceOf(Object),
};

ProductTitleAndLogo.defaultProps = {
  productInfoDetails: null,
};
