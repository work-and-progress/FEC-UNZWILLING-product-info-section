import React from 'react';

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
    this.setState((preveState) => ({
      counter: preveState.counter + 1,
    }));
  }

  subtractCounter() {
    this.setState((preveState) => ({
      counter: preveState.counter - 1,
    }));
  }

  render() {
    return (
      <div>
        <h1>HEY WELCOME TO MY APP.JSX</h1>
        <button type="button" onClick={this.addCounter}>Increment</button>
        <button type="button" onClick={this.subtractCounter}>Decrement</button>
        <Counter counter={this.state.counter} />
      </div>
    );
  }
}

export const Counter = ({ counter }) => (
  <div>
    <h2>{ counter }</h2>
  </div>
);

export default App;
