import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { formatQuestion } from '../utils/helpers';
import { Card, Avatar, Typography, Button, Divider } from 'antd';

const { Title, Text } = Typography;

class Question extends Component {
  render() {
    const { name, status } = this.props;
    const { author, optionOne } = this.props.question;

    console.log(this.props);
    return (
      <Card title={`${name} asks`}>
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
            {status === 'unanswered' && <h2>unanswered</h2>}
            {status === 'answered' && <h2>answered</h2>}
            {status === null && (
              <Link to={`/question/${this.props.id}`}>
                <Button className="question-content-details__poll_btn">
                  View Poll
                </Button>
              </Link>
            )}
          </div>
        </div>
      </Card>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id, status }) {
  const question = questions[id];

  const optionOneText = question.optionOne.text;
  const optionTwoText = question.optionTwo.text;
  const { author } = question;

  const name = users[author].name;

  return {
    authedUser,
    name,
    question: formatQuestion({
      optionOneText,
      optionTwoText,
      author,
    }),
    status,
  };
}

export default connect(mapStateToProps)(Question);
