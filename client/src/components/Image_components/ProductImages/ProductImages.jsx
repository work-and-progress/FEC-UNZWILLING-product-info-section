import React from 'react';
import MainImage from '../MainImage/MainImage';

class ProductImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1>RENDER ProductImages</h1>
        <MainImage />
      </div>
    );
  }
}

export default ProductImages;
