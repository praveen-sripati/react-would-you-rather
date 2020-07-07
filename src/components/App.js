import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { handleInitialData } from '../store/actions/shared';

// Main Components
import Home from './Home';
import NavBar from './NavBar';
import QuestionPage from './QuestionPage';
import NewQuestion from './NewQuestion';

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
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/new" component={NewQuestion} />
              <Route exact path="/question/:id" component={QuestionPage} />
            </Switch>
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
