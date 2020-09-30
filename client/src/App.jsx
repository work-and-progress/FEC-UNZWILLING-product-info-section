import React from 'react';
import axios from 'axios';

// import TopNavBar from './components/top_bar_components/TopNavBar/TopNavBar';
import ProductDetails from './components/ProductDetailsComponents/ProductDetails/ProductDetails';
import ProductImages from './components/image_components/ProductImages';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfoDetails: {},
    };
    this.getOneProductDetails = this.getOneProductDetails.bind(this);
  }

  componentDidMount() {
    this.getOneProductDetails(1);
  }

  getOneProductDetails(id) {
    axios.get(`http://localhost:8080/products/${id}`)
      .then((response) => {
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
        <h1>HEY WELCOME TO MY APP . JSX</h1>
        <ProductDetails productInfoDetails={productInfoDetails} />
        <ProductImages />
      </div>
    );
  }
}
