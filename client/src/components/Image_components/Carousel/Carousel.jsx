import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  image: PropTypes.string,

};

const defaultProps = {
  image: null,
};

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { image } = this.props;
    return (
      <div>
        <img
          src={image}
          alt="card"
        />
      </div>
    );
  }
}

Carousel.propTypes = propTypes;
Carousel.defaultProps = defaultProps;

/* ------------------------------ */

// import React, { Component } from 'react';
// import Slide from './slide';
// import landingData from '../Landing';
// import LeftArrow from './left_arrow';
// import RightArrow from './right_arrow';
// import './main.css';

// export default class Slider extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       activeIndex: 0,
//       length: 10,
//     };
//   }

//   goToPrevSlide() {
//     const { activeIndex, length } = this.state
//     let index = activeIndex;
//     const slideLength = length;

//     if (index < 1) {
//       index = slideLength - 1;
//     } else {
//       index -= 1;
//     }

//     this.setState({
//       activeIndex: index,
//     });
//   }

//   goToNextSlide() {
//     const { activeIndex, length } = this.state
//     let index = activeIndex;
//     let slideLength = length;

//       if(index === length - 1) {
//         index = 0
//       }
//       else {
//         index++;
//       }

//       this.setState({
//         activeIndex: index
//       });
//   }

//   render() {
//     return (
//       <div className='slider'>
//         <div className='slider-items'>
//           <LeftArrow
//             goToPrevSlide={() => this.goToPrevSlide()}
//           />
//         <div className='slider-text'>
//           <Slide
//             activeIndex={this.state.activeIndex}
//             goToNextSlide={() => this.goToNextSlide()}
//           />
//         </div>
//           <RightArrow
//             goToNextSlide={() => this.goToNextSlide()}
//           />
//         </div>
//       </div>
//     );
//   }
// }
