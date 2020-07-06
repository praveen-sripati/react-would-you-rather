import React, { Component } from 'react';
import { Card, Avatar, Typography, Button, Divider } from 'antd';

const { Title, Text } = Typography;

class Question extends Component {
  render() {
    return (
      <Card title="Sarah Edo asks">
        <div className="question-content">
          <div>
            <Avatar
              src="https://api.adorable.io/avatars/100/sarahedo.png"
              size={100}
            />
          </div>
          <Divider className="question-content-divider" type="vertical" />
          <div className="question-content-details">
            <Title level={4}>Would you rather</Title>
            <Text>Description</Text>
            <Button className="question-content-details__poll_btn">
              View Poll
            </Button>
          </div>
        </div>
      </Card>
    );
  }
}

export default Question;
