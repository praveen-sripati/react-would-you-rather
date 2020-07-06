import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Typography, Avatar } from 'antd';
import { TrophyOutlined } from '@ant-design/icons';

const { Text } = Typography;

class NavBar extends Component {
  render() {
    return (
      <nav className="nav">
        <ul className="start-nav-ul">
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/new" exact activeClassName="active">
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard" exact activeClassName="active">
              <TrophyOutlined />
              <span style={{ padding: '5px' }}>Leaderboard</span>
            </NavLink>
          </li>
        </ul>
        <ul className="end-nav-ul">
          <li>
            <Text className="login-user-title" strong>Hello, Sara <Avatar className="user-avatar" src="https://api.adorable.io/avatars/120/sarahedo.png" /></Text>
            <NavLink to="/login" exact activeClassName="active">
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
