import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../store/actions/shared';
import { Layout } from 'antd';
import NavBar from './NavBar';

const { Content } = Layout;

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Layout className="container">
          <NavBar />
          <Content>something</Content>
        </Layout>
      </Router>
    );
  }
}

export default connect()(App);
