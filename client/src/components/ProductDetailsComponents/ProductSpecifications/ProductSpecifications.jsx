import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

export default class ProductSpecifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState((previousState) => ({
      isOpened: !(previousState.isOpened),
    }), () => {
      console.log(this.state.isOpened);
    });
  }

  render() {
    const {
      productInfoDetails: {
        specificationItemNo,
        characteristics: {
          color,
          countryOfOrigin,
          substance,
          electricalPowerSupplyNeeded,
          voltage,
          capacityMl,
          safetyShutOff,
          motor,
          hiddenCordStorage,
          programs,
          blade,
          speeds,
          lcdDisplay,
          powerInput,
        } = {},
        measurement: {
          netWeight,
          capacityQt,
          lengthOfProduct,
          widthOfProduct,
          heightOfProduct,
        } = {},
      },
    } = this.props;

    return (
      <div className={styles.container}>
        <h1>Specifications</h1>
        <button onClick={this.handleChange}> TEST BUTTON </button>
        {this.state.isOpened ? (
          <div>
            <h3 className={styles.title}>SPECIFICATIONS</h3>
            <ul>
              <li className={styles.attribute}>
                <span className={styles.key}>Item no.</span>
                <span className={styles.value}>{specificationItemNo}</span>
              </li>
            </ul>
            <h3 className={styles.title}>CHARACTERISTICS</h3>
            <ul>
              <li className={styles.attribute}>
                <span className={styles.key}>Color:</span>
                <span className={styles.value}>{color}</span>
              </li>
              <li className={styles.attribute}>
                <span className={styles.key}>Country of origin:</span>
                <span className={styles.value}>{countryOfOrigin}</span>
              </li>
              <li className={styles.attribute}>
                <span className={styles.key}>Substance:</span>
                <span className={styles.value}>{substance}</span>
              </li>
              <li className={styles.attribute}>
                <span className={styles.key}>Electrical power supply needed:</span>
                <span className={styles.value}>{electricalPowerSupplyNeeded}</span>
              </li>
              <li className={styles.attribute}>
                <span className={styles.key}>Voltage:</span>
                <span className={styles.value}>
                  {voltage}
                  {' '}
                  V
                </span>
              </li>
              <li className={styles.attribute}>
                <span className={styles.key}>Capacity:</span>
                <span className={styles.value}>
                  {capacityMl}
                  {' '}
                  ml
                </span>
              </li>
              <li className={styles.attribute}>
                <span className={styles.key}>Safety Shut Off:</span>
                <span className={styles.value}>{safetyShutOff}</span>
              </li>
              <li className={styles.attribute}>
                <span className={styles.key}>Motor:</span>
                <span className={styles.value}>{motor}</span>
              </li>
              <li className={styles.attribute}>
                <span className={styles.key}>Hidden Card Storage:</span>
                <span className={styles.value}>{hiddenCordStorage}</span>
              </li>
              <li className={styles.attribute}>
                <span className={styles.key}>Programs:</span>
                <span className={styles.value}>{programs}</span>
              </li>
              <li className={styles.attribute}>
                <span className={styles.key}>Blade:</span>
                <span className={styles.value}>{blade}</span>
              </li>
              <li className={styles.attribute}>
                <span className={styles.key}>Speeds:</span>
                <span className={styles.value}>{speeds}</span>
              </li>
              <li className={styles.attribute}>
                <span className={styles.key}>LCD Display:</span>
                <span className={styles.value}>{lcdDisplay}</span>
              </li>
              <li className={styles.attribute}>
                <span className={styles.key}>Power Input:</span>
                <span className={styles.value}>
                  {powerInput}
                  {' '}
                  W
                </span>
              </li>
            </ul>
            <h3 className={styles.title}>MEASUREMENTS</h3>
            <ul>
              <li className={styles.attribute}>
                <span className={styles.key}>Net Weight:</span>
                <span className={styles.value}>
                  {netWeight}
                  {' '}
                  lbs
                </span>
              </li>
              <li className={styles.attribute}>
                <span className={styles.key}>Capacity:</span>
                <span className={styles.value}>
                  {capacityQt}
                  {' '}
                  qt
                </span>
              </li>
              <li className={styles.attribute}>
                <span className={styles.key}>Length of product:</span>
                <span className={styles.value}>
                  {lengthOfProduct}
                  {' '}
                  in
                </span>
              </li>
              <li className={styles.attribute}>
                <span className={styles.key}>Width of product:</span>
                <span className={styles.value}>
                  {widthOfProduct}
                  {' '}
                  in
                </span>
              </li>
              <li className={styles.attribute}>
                <span className={styles.key}>eight of product:</span>
                <span className={styles.value}>
                  {heightOfProduct}
                  {' '}
                  in
                </span>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}

const propTypes = {
  productInfoDetails: PropTypes.instanceOf(Object),
};

const defaultProps = {
  productInfoDetails: null,
};

ProductSpecifications.propTypes = propTypes;
ProductSpecifications.defaultProps = defaultProps;
