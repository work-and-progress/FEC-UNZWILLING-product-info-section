import React from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

// import TopNavBar from './components/top_bar_components/TopNavBar/TopNavBar';
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
    this.getOneProductDetails(1);
  }

  getOneProductDetails(id) {
    axios.get(`http://localhost:8080/products/${id}`)
      .then((response) => {
        this.setState(() => ({
          productInfoDetails: response.data,
          cardList: response.data.images,
        }));
      })
      .catch(() => {
        // console.err(error);
      });
  }

  updateBasket(numberOfItemsAdded) {
    this.setState((previousState) => ({
      numberOfItemsInBasket: previousState.numberOfItemsInBasket + numberOfItemsAdded,
    }), () => {
      console.log(this.state.numberOfItemsInBasket);
    });
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
