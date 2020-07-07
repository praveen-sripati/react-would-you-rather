import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { formatQuestion } from '../utils/helpers';
import { Card, Avatar, Typography, Button, Divider, Radio } from 'antd';

const { Title, Text } = Typography;

class Question extends Component {
  state = {
    value: 1,
  };

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    // submit answer
  }

  render() {
    const { name, status } = this.props;
    const { author, optionOne, optionTwo } = this.props.question;

    return (
      <Card title={`${name} asks`}>
        <div className="question-content">
          <div>
            <Avatar
              src={`https://api.adorable.io/avatars/100/${author}.png`}
              size={100}
            />
          </div>
          {status === null ? (
            <Divider className="question-content-divider" type="vertical" />
          ) : (
            <Divider
              style={{ height: '7.5rem' }}
              className="question-content-divider"
              type="vertical"
            />
          )}
          <div className="question-content-details">
            <Title level={4}>Would you rather...</Title>
            {status === 'unanswered' && (
              <div className="unanswered-question-section">
                <Radio.Group onChange={this.onChange} value={this.state.value}>
                  <Radio className="question-radio-option" value={1}>
                    {optionOne.text}
                  </Radio>
                  <Radio className="question-radio-option" value={2}>
                    {optionTwo.text}
                  </Radio>
                </Radio.Group>
                <Button
                  type="primary"
                  className="unanswered-question-section__btn"
                  onClick={this.handleSubmit}
                >
                  Submit
                </Button>
              </div>
            )}
            {status === 'answered' && <h2>answered</h2>}
            {status === null && (
              <div>
                <Text>{optionOne.text}</Text>
                <Link to={`/question/${this.props.id}`}>
                  <Button
                    type="primary"
                    className="question-content-details__poll_btn"
                  >
                    View Poll
                  </Button>
                </Link>
              </div>
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
