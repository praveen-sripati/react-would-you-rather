import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';

class QuestionPage extends Component {
  render() {
    const { id } = this.props.match.params;
    const { status } = this.props;
    return (
      <div className="question-page-container">
        <Question status={status} id={id} />
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }, props) {
  const { id } = props.match.params;
  const user = users[authedUser];
  const answeredIds = Object.keys(user.answers);
  return {
    status: answeredIds.includes(id) ? "answered" : "unanswered"
  };
}

export default connect(mapStateToProps)(QuestionPage);
