import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography, Input, Divider, Button } from 'antd';
import { handleAddQuestion } from '../store/actions/shared';
import { Redirect } from 'react-router-dom';

const { Title, Text } = Typography;

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false,
  };

  handleOnChangeTextOne = (e) => {
    this.setState({
      optionOneText: e.target.value,
    });
  };

  handleOnChangeTextTwo = (e) => {
    this.setState({
      optionTwoText: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, authedUser } = this.props;
    const { optionOneText, optionTwoText } = this.state;
    const question = {
      optionOneText,
      optionTwoText,
      author: authedUser,
    };
    dispatch(handleAddQuestion(question));
    this.setState({
      optionOneText: '',
      optionTwoText: '',
      toHome: true,
    });
  };

  render() {
    const { toHome } = this.state;
    if (toHome) {
      return <Redirect to="/" />;
    }
    return (
      <div className="new-question-container">
        <Title style={{ textAlign: 'center' }}>Create New Question</Title>
        <Text strong>Complete the question: </Text>
        <Title level={3} style={{ marginTop: '1rem' }}>
          Would you rather...
        </Title>
        <Input
          size="large"
          placeholder="Enter Option One Text Here"
          onChange={this.handleOnChangeTextOne}
          maxLength={60}
        />
        <Divider type="horizontal" style={{ margin: '1rem 0' }}>
          OR
        </Divider>
        <Input
          size="large"
          placeholder="Enter Option One Text Here"
          onChange={this.handleOnChangeTextTwo}
          maxLength={60}
        />
        <Button
          size="large"
          type="primary"
          className="new-question-btn"
          onClick={this.handleSubmit}
          disabled={
            this.state.optionOneText === '' || this.state.optionTwoText === ''
          }
        >
          Submit
        </Button>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(NewQuestion);
