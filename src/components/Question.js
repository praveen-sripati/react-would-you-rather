import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Card,
  Avatar,
  Typography,
  Button,
  Divider,
  Radio,
  Progress,
} from 'antd';
import { handleSubmitAnswer } from '../store/actions/shared';

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
    e.preventDefault();

    const { dispatch, authedUser, id } = this.props;
    const { value } = this.state;

    if (value === 1) {
      dispatch(handleSubmitAnswer(authedUser, id, 'optionOne'));
    } else {
      dispatch(handleSubmitAnswer(authedUser, id, 'optionTwo'));
    }
  };

  render() {
    const { name, status } = this.props;
    const { author, optionOneText, optionTwoText } = this.props.question;
    return (
      <Card title={`${name} asks`}>
        <div className="question-content">
          {status === 'answered' ? (
            <div>
              <Avatar
                src={`https://api.adorable.io/avatars/100/${author}.png`}
                size={150}
              />
            </div>
          ) : (
            <div>
              <Avatar
                src={`https://api.adorable.io/avatars/100/${author}.png`}
                size={100}
              />
            </div>
          )}
          {status === null ? (
            <Divider className="question-content-divider" type="vertical" />
          ) : status === 'unanswered' ? (
            <Divider
              style={{ height: '7.5rem' }}
              className="question-content-divider"
              type="vertical"
            />
          ) : (
            <Divider
              style={{ height: '12rem' }}
              className="question-content-divider"
              type="vertical"
            />
          )}
          <div className="question-content-details">
            {status !== 'answered' ? (
              <Title level={4}>Would you rather...</Title>
            ) : (
              <Title level={3}>Results</Title>
            )}
            {status === 'unanswered' && (
              <div className="unanswered-question-section">
                <Radio.Group onChange={this.onChange} value={this.state.value}>
                  <Radio className="question-radio-option" value={1}>
                    {optionOneText}
                  </Radio>
                  <Radio className="question-radio-option" value={2}>
                    {optionTwoText}
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
            {status === 'answered' && (
              <div className="answered-question-details">
                <Text style={{ marginBottom: '0.1rem' }} strong>
                  Would you rather{' '}
                  <span style={{ color: '#ff4d4f' }}>{optionOneText}</span>
                </Text>
                <Progress
                  type="line"
                  strokeWidth={30}
                  percent={50}
                  showInfo={false}
                />
                <Divider
                  className="answered-question-vertical-divider"
                  type="horizontal"
                />
                <Text style={{ marginBottom: '0.1rem' }} strong>
                  Would you rather{' '}
                  <span style={{ color: '#ff4d4f' }}>{optionTwoText}</span>
                </Text>
                <Progress
                  type="line"
                  strokeWidth={30}
                  percent={50}
                  showInfo={false}
                />
              </div>
            )}
            {status === null && (
              <div>
                <Text>{optionOneText}</Text>
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
    question: {
      optionOneText,
      optionTwoText,
      author,
    },
    status,
  };
}

export default connect(mapStateToProps)(Question);
