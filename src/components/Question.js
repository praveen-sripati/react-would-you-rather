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
    const {
      name,
      authedUser,
      status,
      optionOneVotes,
      optionTwoVotes,
    } = this.props;
    const { author, optionOneText, optionTwoText } = this.props.question;

    const numOfOptionOneVotes = optionOneVotes.length;
    const numOfOptionTwoVotes = optionTwoVotes.length;
    const totalVotes = optionOneVotes.length + optionTwoVotes.length;
    const optionOneVotePercentage = Number(
      ((numOfOptionOneVotes / totalVotes) * 100).toFixed(2)
    );
    const optionTwoVotePercentage = Number(
      ((numOfOptionTwoVotes / totalVotes) * 100).toFixed(2)
    );

    return (
      <Card title={status === 'answered' ? `Asked by ${name}` : `${name} asks`}>
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
              style={{ height: '16rem' }}
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
                <Text className="answered-question-title " strong>
                  Would you rather{' '}
                  <span className="answered-question-title__option">
                    {optionOneText}
                    {optionOneVotes.includes(authedUser) ? (
                      <span style={{ color: 'black' }}> - You Voted</span>
                    ) : null}
                  </span>
                </Text>
                <div className="answered-question-progress-bar">
                  <Progress
                    type="line"
                    strokeWidth={30}
                    percent={optionOneVotePercentage}
                    showInfo={false}
                  />
                  <span className="answered-question-progress-bar-percent">{`${optionOneVotePercentage}%`}</span>
                </div>
                <Text strong className="answered-question-votes">
                  {numOfOptionOneVotes} out of {totalVotes}
                </Text>
                <Divider
                  className="answered-question-vertical-divider"
                  type="horizontal"
                />
                <Text className="answered-question-title " strong>
                  Would you rather{' '}
                  <span className="answered-question-title__option">
                    {optionTwoText}
                    {optionTwoVotes.includes(authedUser) ? (
                      <span style={{ color: 'black' }}> - You Voted</span>
                    ) : null}
                  </span>
                </Text>
                <div className="answered-question-progress-bar">
                  <Progress
                    type="line"
                    strokeWidth={30}
                    percent={optionTwoVotePercentage}
                    showInfo={false}
                  />
                  <span className="answered-question-progress-bar-percent">{`${optionTwoVotePercentage}%`}</span>
                </div>
                <Text strong className="answered-question-votes">
                  {numOfOptionTwoVotes} out of {totalVotes}
                </Text>
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
  const optionOneVotes = question.optionOne.votes;
  const optionTwoVotes = question.optionTwo.votes;
  const name = users[author].name;

  return {
    authedUser,
    name,
    question: {
      optionOneText,
      optionTwoText,
      author,
    },
    optionOneVotes,
    optionTwoVotes,
    status,
  };
}

export default connect(mapStateToProps)(Question);
