import React from 'react';
import PropTypes from 'prop-types';
// import Counter from './Counter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.addCounter = this.addCounter.bind(this);
    this.subtractCounter = this.subtractCounter.bind(this);
  }

  addCounter() {
    this.setState((previousState) => ({
      counter: previousState.counter + 1,
    }));
  }

  subtractCounter() {
    this.setState((previousState) => ({
      counter: previousState.counter - 1,
    }));
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <h1>HEY WELCOME TO MY APP.JSX</h1>
        <button type="button" onClick={this.addCounter}>Increment</button>
        <button type="button" onClick={this.subtractCounter}>Decrement</button>
        <Counter counter={counter} />
      </div>
    );
  }
}

export const Counter = ({ counter }) => (
  <div>
    <h2>{ counter }</h2>
  </div>
);

Counter.propTypes = {
  counter: PropTypes.number,
};
Counter.defaultProps = {
  counter: 0,
};

export default App;
