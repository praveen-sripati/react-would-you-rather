import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { handleInitialData } from '../store/actions/shared';
import NavBar from './NavBar';

// Main Components
import Home from './Home';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { loading } = this.props;
    console.log(loading);
    return (
      <Router>
        <Layout className="container">
          <NavBar />
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            <Route exact to="/">
              <Home />
            </Route>
          )}
        </Layout>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);
