import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { handleInitialData } from '../store/actions/shared';

// Main Components
import Home from './Home';
import NavBar from './NavBar';
import QuestionPage from './QuestionPage';
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';
import Login from './Login';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { loading, authedUser } = this.props;
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
            <Fragment>
              <Switch>
                <Route exact path="/">
                  {authedUser ? <Home /> : <Redirect to="/login" />}
                </Route>
                <Route exact path="/new">
                  {authedUser ? <NewQuestion /> : <Redirect to="/login" />}

                </Route>
                <Route exact path="/leaderboard">
                  {authedUser ? <LeaderBoard /> : <Redirect to="/login" />}
                  <LeaderBoard />
                </Route>
                <Route exact path="/question/:id">
                  {authedUser ? <QuestionPage /> : <Redirect to="/login" />}
                  <QuestionPage />
                </Route>
                <Route exact path="/login" component={Login} />
              </Switch>
            </Fragment>
          )}
        </Layout>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);
