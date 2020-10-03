import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  productInfoDetails: PropTypes.instanceOf(Object),
};

const defaultProps = {
  productInfoDetails: null,
};

export default class ProductSpecifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
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
      <div>
        <h1>Product Specifications</h1>
        <h3>SPECIFICATIONS</h3>
        <ul>
          <li>
            Item no.
            {specificationItemNo}
          </li>
        </ul>
        <h3>CHARACTERISTICS</h3>
        <ul>
          <li>
            Color:
            {color}
          </li>
          <li>
            Country of origin:
            {countryOfOrigin}
          </li>
          <li>
            Substance:
            {substance}
          </li>
          <li>
            Electrical power supply needed:
            {electricalPowerSupplyNeeded}
          </li>
          <li>
            Voltage:
            {voltage}
            {' '}
            V
            {' '}
          </li>
          <li>
            Capacity:
            {capacityMl}
            {' '}
            ml
            {' '}
          </li>
          <li>
            Safety Shut Off:
            {safetyShutOff}
          </li>
          <li>
            Motor:
            {motor}
          </li>
          <li>
            Hidden Card Storafe:
            {hiddenCordStorage}
          </li>
          <li>
            Programs:
            {programs}
          </li>
          <li>
            Blade:
            {blade}
          </li>
          <li>
            Speeds:
            {speeds}
          </li>
          <li>
            LCD Display:
            {lcdDisplay}
          </li>
          <li>
            Power Input:
            {powerInput}
            {' '}
            W
            {' '}
          </li>
        </ul>
        <h3>MEASUREMENTS</h3>
        <ul>
          <li>
            Net Weight:
            {netWeight}
            {' '}
            lbs
            {' '}
          </li>
          <li>
            Capacity:
            {capacityQt}
            {' '}
            qt
            {' '}
          </li>
          <li>
            Length of product:
            {lengthOfProduct}
            {' '}
            in
            {' '}
          </li>
          <li>
            Width of product:
            {widthOfProduct}
            {' '}
            in
            {' '}
          </li>
          <li>
            Height of product:
            {heightOfProduct}
            {' '}
            in
            {' '}
          </li>
        </ul>
      </div>
    );
  }
}

ProductSpecifications.propTypes = propTypes;
ProductSpecifications.defaultProps = defaultProps;
