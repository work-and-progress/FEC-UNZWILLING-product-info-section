import React from 'react';
import axios from 'axios';

import styles from './styles.css';
import ProductDetails from '../components/ProductDetailsComponents/ProductDetails/ProductDetails';
import ProductImages from '../components/image_components/ProductImages/ProductImages';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfoDetails: {},
      numberOfItemsInBasket: 0,
      cardList: [],
    };
    this.getOneProductDetails = this.getOneProductDetails.bind(this);
    this.updateBasket = this.updateBasket.bind(this);
  }

  componentDidMount() {
    this.getOneProductDetails(2);
  }

  getOneProductDetails(id) {
    axios.get(`http://localhost:3002/products/productInfo/${id}`)
      .then((response) => {
        this.setState(() => ({
          productInfoDetails: response.data,
          cardList: response.data.images,
        }));
      })
      .catch(() => {
      });
  }

  updateBasket(numberOfItemsAdded) {
    this.setState((previousState) => ({
      numberOfItemsInBasket: previousState.numberOfItemsInBasket + numberOfItemsAdded,
    }));
  }

  render() {
    const {
      productInfoDetails,
      cardList,
    } = this.state;

    return (
      <div className={styles.container}>
        <div data-test="appComponent">
          <div className={styles.productImages}>
            <ProductImages
              productInfoDetails={productInfoDetails}
              cardList={cardList}
            />
          </div>
          <div className={styles.productDetails}>
            <ProductDetails
              productInfoDetails={productInfoDetails}
              updateBasket={this.updateBasket}
            />
          </div>
        </div>
      </div>
    );
  }
}
