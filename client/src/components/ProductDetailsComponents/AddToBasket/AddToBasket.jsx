import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const propTypes = {
  updateBasket: PropTypes.func,
};

const defaultProps = {
  updateBasket: null,
};

export default class AddToBasket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfItemsInBasketTemp: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { numberOfItemsInBasketTemp } = this.state;
    const { updateBasket } = this.props;
    const NumberOfAddedItemInBasket = Number(numberOfItemsInBasketTemp);
    updateBasket(NumberOfAddedItemInBasket);
    // console.log('UPDATED BASKET : ', updateBasket(321));
  }

  handleChange(e) {
    this.setState(() => ({
      numberOfItemsInBasketTemp: e.target.value,
    }));
    e.persist();
  }

  render() {
    const { numberOfItemsInBasketTemp } = this.state;
    return (
      <div className={styles.temp}>
        <h1>ADD TO BASKET</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <select value={numberOfItemsInBasketTemp} onChange={this.handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <input type="submit" value="Add To Basket" />
          </form>
        </div>
      </div>
    );
  }
}

AddToBasket.propTypes = propTypes;
AddToBasket.defaultProps = defaultProps;
