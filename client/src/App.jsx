import React from 'react';
// import PropTypes from 'prop-types';
// import Counter from './Counter';
import test from './test.css';
import TopNavBar from './components/top_bar_components/TopNavBar/TopNavBar';
import ProductDetails from './components/product_details_components/ProductDetails';
import ProductImages from './components/image_components/ProductImages';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    // const { counter } = this.state;
    return (
      <div>
        <h1 className={test.test}>HEY WELCOME TO MY APP.JSX</h1>
        <TopNavBar />
        <ProductDetails />
        <ProductImages />
      </div>
    );
  }
}

// Counter.propTypes = {
//   counter: PropTypes.number,
// };
// Counter.defaultProps = {
//   counter: 0,
// };

// addCounter() {
//   this.setState((previousState) => ({
//     counter: previousState.counter + 1,
//   }));
// }

export default App;
