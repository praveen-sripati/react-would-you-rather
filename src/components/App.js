import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { handleInitialData } from '../store/actions/shared';
import NavBar from './NavBar';

// Main Components
import Home from './Home'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Layout className="container">
          <NavBar />
          <Route exact to="/">
            <Home />
          </Route>
        </Layout>
      </Router>
    );
  }
}

export default connect()(App);
