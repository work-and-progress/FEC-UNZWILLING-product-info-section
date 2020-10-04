import React from 'react';
import axios from 'axios';
import styles from './styles.css';

// import TopNavBar from './components/top_bar_components/TopNavBar/TopNavBar';
import ProductDetails from '../components/ProductDetailsComponents/ProductDetails/ProductDetails';
import ProductImages from '../components/image_components/ProductImages/ProductImages';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfoDetails: {},
      numberOfItemsInBasket: 0,
      productInfoDetailsImages: [],
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
          productInfoDetailsImages: response.data.images,
        }));
      })
      .catch(() => {
        // console.err(error);
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
      productInfoDetailsImages,
    } = this.state;

    return (
      <div>
        <div className={styles.container} data-test="appComponent">
          <div>
            <ProductImages
              productInfoDetails={productInfoDetails}
              productInfoDetailsImages={productInfoDetailsImages}
            />
          </div>
          <div>
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
