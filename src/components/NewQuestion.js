import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography, Input, Divider, Button } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

class NewQuestion extends Component {
  state = {
    optionOneValue: '',
    optionTwoValue: '',
    toHome: false,
  };

  handleOnChangeTextOne = (e) => {
    this.setState({
      optionOneValue: e.target.value,
    });
  };

  handleOnChangeTextTwo = (e) => {
    this.setState({
      optionTwoValue: e.target.value,
    });
  };

  handleSubmit = (e) => {
    return e;
  };

  render() {
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
        />
        <Divider type="horizontal" style={{ margin: '1rem 0' }}>
          OR
        </Divider>
        <Input
          size="large"
          placeholder="Enter Option One Text Here"
          onChange={this.handleOnChangeTextTwo}
        />
        <Link to="/" style={{ marginTop: '1.5rem' }}>
          <Button
            size="large"
            type="primary"
            className="new-question-btn"
            onClick={this.handleSubmit}
            disabled={
              this.state.optionOneValue === '' || this.state.optionTwoValue === ''
            }
          >
            Submit
          </Button>
        </Link>
      </div>
    );
  }
}

export default NewQuestion;
