import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatQuestion } from '../utils/helpers';
import { Card, Avatar, Typography, Button, Divider } from 'antd';

const { Title, Text } = Typography;

class Question extends Component {
  render() {
    const { author, optionOne } = this.props.question;

    return (
      <Card title={`${author} asks`}>
        <div className="question-content">
          <div>
            <Avatar
              src={`https://api.adorable.io/avatars/100/${author}.png`}
              size={100}
            />
          </div>
          <Divider className="question-content-divider" type="vertical" />
          <div className="question-content-details">
            <Title level={4}>Would you rather</Title>
            <Text>{optionOne.text}</Text>
            <Button className="question-content-details__poll_btn">
              View Poll
            </Button>
          </div>
        </div>
      </Card>
    );
  }
}

function mapStateToProps({ authedUser, questions }, { id }) {
  const question = questions[id];
  const optionOneText = question.optionOne.text;
  const optionTwoText = question.optionTwo.text;
  return {
    authedUser,
    question: formatQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    }),
  };
}

export default connect(mapStateToProps)(Question);
