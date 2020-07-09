import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { handleInitialData } from '../store/actions/shared';

// Main Components
import Home from './Home';
import NavBar from './NavBar';
import QuestionPage from './QuestionPage';
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';
import Login from './Login';
import NotFound from './NotFound'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authedUser } = this.props;
    return (
      <Router>
        <Layout className="container">
          <NavBar />
          <Switch>
            <Route exact path="/">
              {authedUser ? <Home /> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/new">
              {authedUser ? <NewQuestion /> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/leaderboard">
              {authedUser ? <LeaderBoard /> : <Redirect to="/login" />}
            </Route>
            <Route
              exact
              path="/question/:id"
              render={({ match }) =>
                authedUser ? (
                  <QuestionPage match={match} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route exact path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
