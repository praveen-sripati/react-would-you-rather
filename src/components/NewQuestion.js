import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography, Input, Divider, Button } from 'antd';

const { Title, Text } = Typography;

class NewQuestion extends Component {
  render() {
    return (
      <div className="new-question-container">
        <Title style={{textAlign:"center"}}>Create New Question</Title>
        <Text>Complete the question: </Text>
        <Title level={3}>Would you rather...</Title>
        <Input size="large" placeholder="Enter Option One Text Here" />
        <Divider type="horizontal" style={{margin: "1rem 0"}} >OR</Divider>
        <Input size="large" placeholder="Enter Option One Text Here" />
        <Button size="large" type="primary" className="new-question-btn">Submit</Button>
      </div>
    );
  }
}

export default NewQuestion;
