import React, { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('constructor: Component is being initialized');
  }

  componentDidMount() {
    console.log('componentDidMount: Component has been mounted to the DOM');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: Component has been updated');
    console.log('Previous state:', prevState.count);
    console.log('Current state:', this.state.count);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component is about to be unmounted');
  }

  updateState = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log('render: Component is rendering');
    return (
      <div>
        <h2>Lifecycle Demo</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.updateState}>Update State</button>
      </div>
    );
  }
}

export default LifecycleDemo;
