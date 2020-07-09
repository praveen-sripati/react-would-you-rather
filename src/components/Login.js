import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginImage from '../icons/would-you-rather.png';
import { Card, Divider, Select, Button } from 'antd';
import { CaretUpOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

const { Title, Text } = Typography;

class Login extends Component {

  state = {
    selectedUser: ''
  }

  handleChange = (value) => {
    this.setState({
      selectedUser: value
    })
  }

  render() {
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
              defaultValue="lucy"
              style={{ width: '100%' }}
              suffixIcon={<CaretUpOutlined />}
              onChange={this.handleChange}
              options={totalUsers}
            />
            <Button type="primary" className="login-submit-btn">
              Sign In
            </Button>
          </div>
        </div>
      </Card>
    );
  }
}

function mapStateToProps({ users }) {
  const totalUsers = Object.keys(users).map(user => ({label:users[user].name, value: users[user].id}))
  return {
    totalUsers,
  };
}

export default connect(mapStateToProps)(Login);
