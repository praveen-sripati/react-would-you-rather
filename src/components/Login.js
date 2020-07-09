import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginImage from '../icons/would-you-rather.png';
import { Card, Divider, Select, Button } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { setAuthedUser } from '../store/actions/authedUser';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

const { Title, Text } = Typography;

class Login extends Component {
  state = {
    selectedUser: '',
  };

  handleSignIn = (e) => {
    e.preventDefault();

    const { dispatch } = this.props;
    const { selectedUser } = this.state;

    dispatch(showLoading());
    dispatch(setAuthedUser(selectedUser));
    dispatch(hideLoading());
  };

  handleChange = (value) => {
    this.setState({
      selectedUser: value,
    });
  };

  render() {
    const { selectedUser } = this.state;
    const { totalUsers } = this.props;
    return (
      <Card className="login-card">
        <div className="login-content">
          <div className="login-title-details">
            <Title level={3}>Welcome to the Would You Rather App!</Title>
            <Text strong>Please sign in to continue</Text>
          </div>
          <Divider type="horizontal" className="login-content-divider" />
          <div className="login-content-details">
            <img
              src={LoginImage}
              alt="Welcome to Would You Rather App"
              height="120px"
            />
            <Title level={4}>Sign In</Title>
          </div>
          <div className="login-form-details">
            <Select
              defaultValue="Select User"
              style={{ width: '100%' }}
              suffixIcon={<CaretDownOutlined />}
              onChange={this.handleChange}
              options={totalUsers}
            />
            <Button
              type="primary"
              className="login-submit-btn"
              onClick={this.handleSignIn}
              disabled={this.state.selectedUser === ''}
            >
              Sign In
            </Button>
          </div>
        </div>
      </Card>
    );
  }
}

function mapStateToProps({ users }) {
  const totalUsers = Object.keys(users).map((user) => ({
    label: users[user].name,
    value: users[user].id,
  }));
  return {
    totalUsers,
  };
}

export default connect(mapStateToProps)(Login);
