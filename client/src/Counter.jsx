import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ counter }) => (
  <div>
    <h1>COUNTER JSX</h1>
    <h2>{ counter }</h2>
  </div>
);

Counter.propTypes = {
  counter: PropTypes.number,
};
Counter.defaultProps = {
  counter: 0,
};

export default Counter;
