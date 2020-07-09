import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User';

class LeaderBoard extends Component {
  render() {
    const { totalScoresOfUsers } = this.props;
    return (
      <div className="leaderboard-container">
        {totalScoresOfUsers.map((user) => (
          <User key={user.user} userScoreInfo={user} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  const totalScoresOfUsers = Object.keys(users)
    .map((user) => {
      const name = users[user].name;
      const userAnswers = Object.keys(users[user].answers).length;
      const userQuestions = users[user].questions.length;
      const userTotalScore = userAnswers + userQuestions;
      return { user, name, userAnswers, userQuestions, userTotalScore };
    })
    .sort((a, b) => {
      return b.userTotalScore - a.userTotalScore;
    });

  return { totalScoresOfUsers };
}

export default connect(mapStateToProps)(LeaderBoard);
