import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Typography, Avatar } from 'antd';
import {
  TrophyOutlined,
  PlusOutlined,
  HomeOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

const { Text } = Typography;

class NavBar extends Component {
  render() {
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
            <Text className="login-user-title" strong>
              Hello, Sara{' '}
              <Avatar
                className="user-avatar"
                src="https://api.adorable.io/avatars/120/sarahedo.png"
              />
            </Text>
            <NavLink to="/login" exact activeClassName="active">
              <LogoutOutlined />
              <span className="nav-title">Logout</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
