import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
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
    return (
      <Router>
        <Layout className="container">
          <NavBar />
          {loading ? (
            <Spin
              className="loading"
              tip=" Loading..."
              indicator={<LoadingOutlined style={{ fontSize: '32px' }} />}
            />
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
