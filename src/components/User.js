import React, { Component } from 'react';
import { Card, Avatar, Divider, Typography } from 'antd';

const { Title, Text } = Typography;

class User extends Component {
  render() {
    const {
      user,
      name,
      userAnswers,
      userQuestions,
      userTotalScore,
    } = this.props.userScoreInfo;
    return (
      <Card>
        <div className="user-content">
          <div>
            <Avatar
              src={`https://api.adorable.io/avatars/100/${user}.png`}
              size={100}
            />
          </div>
          <Divider className="user-content-divider" type="vertical" />
          <div className="user-content-details">
            <Title level={2}>{name}</Title>
            <div>
              <Text strong>
                Answered Questions{' '}
                <span style={{ float: 'right' }}>{userAnswers}</span>
              </Text>
            </div>
            <Divider className="user-horizontal-divider" type="horizontal" />
            <div>
              <Text strong>
                Created Questions{' '}
                <span style={{ float: 'right' }}>{userQuestions}</span>
              </Text>
            </div>
          </div>
          <Divider className="user-content-divider__two" type="vertical" />
          <div className="user-score-card">
            <Text strong className="user-score-title">
              Score
            </Text>
            <Divider className="user-score-divider" type="horizontal" />
            <Text strong className="user-score-number">
              {userTotalScore}
            </Text>
          </div>
        </div>
      </Card>
    );
  }
}

export default User;
