import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../store/actions/shared';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div className="App">
        <h3>App</h3>
      </div>
    );
  }
}

export default connect()(App);
