import React from 'react';
import ShowMoreText from 'react-show-more-text';

export default class ProductDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
          {this.props.productInfoDetails.description}
        </ShowMoreText>
      </div>
    );
  }
}
