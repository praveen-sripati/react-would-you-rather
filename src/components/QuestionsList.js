import React, { Component } from 'react';
import Question from './Question';

class QuestionsList extends Component {
  render() {
    const { questionsListIds } = this.props;
    return (
      <div>
        {questionsListIds.map((id) => (
          <Question key={id} id={id} />
        ))}
      </div>
    );
  }
}

export default QuestionsList;
