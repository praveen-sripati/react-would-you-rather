import React, { Component } from 'react';
import Question from './Question';

class QuestionsList extends Component {
  render() {
    const { questionsListIds } = this.props;
    return (
      <div className="question-list">
        {questionsListIds.map((id) => (
          <Question status={null} key={id} id={id} />
        ))}
      </div>
    );
  }
}

export default QuestionsList;
