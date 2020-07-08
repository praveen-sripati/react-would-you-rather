import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Typography, Avatar } from 'antd';
import LoadingBar from 'react-redux-loading-bar';
import {
  TrophyOutlined,
  PlusOutlined,
  HomeOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

const { Text } = Typography;

class NavBar extends Component {
  render() {
    const { user } = this.props;

    return (
      <nav className="nav">
        <ul className="start-nav-ul">
          <li>
            <NavLink to="/" exact activeClassName="active">
              <HomeOutlined />
              <span className="nav-title">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/new" exact activeClassName="active">
              <PlusOutlined />
              <span className="nav-title">New Question</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard" exact activeClassName="active">
              <TrophyOutlined />
              <span className="nav-title">Leaderboard</span>
            </NavLink>
          </li>
        </ul>
        <ul className="end-nav-ul">
          <li>
            {user !== undefined ? (
              <Text className="login-user-title" strong>
                Hello, {user.name}
                <Avatar
                  className="user-avatar"
                  src={`https://api.adorable.io/avatars/120/${user.id}.png`}
                />
              </Text>
            ) : null}
            <NavLink to="/login" exact activeClassName="active">
              <LogoutOutlined />
              <span className="nav-title">Logout</span>
            </NavLink>
          </li>
        </ul>
        <LoadingBar />
      </nav>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  const user = users[authedUser];
  return {
    user,
  };
}

export default connect(mapStateToProps)(NavBar);
