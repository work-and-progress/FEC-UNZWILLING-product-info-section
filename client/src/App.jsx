import React from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
// import Counter from './Counter';
import test from './test.css';
import TopNavBar from './components/top_bar_components/TopNavBar/TopNavBar';
import ProductDetails from './components/product_details_components/productDetails/ProductDetails';
import ProductImages from './components/image_components/ProductImages';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfoDetails: {},
    };
    this.getOneProductDetails = this.getOneProductDetails.bind(this);
  }

  componentDidMount() {
    console.log('IT WORKS');
    this.getOneProductDetails(1);
  }

  getOneProductDetails(id) {
    axios.get(`http://localhost:8080/products/${id}`)
      .then((response) => {
        console.log('RESPONSE DATA : ', response.data);
        this.setState(() => ({
          productInfoDetails: response.data,
        }));
      })
      .catch((error) => {
        console.err(error);
      });
  }

  render() {
    const { productInfoDetails } = this.state;
    return (
      <div>
        <h1 className={test.test}>HEY WELCOME TO MY APP.JSX</h1>
        <TopNavBar />
        <ProductDetails productInfoDetails={productInfoDetails} />
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
