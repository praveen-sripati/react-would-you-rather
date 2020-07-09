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
        <span style={{textAlign: "center"}}>Icons by <a href="https://icons8.com" target="_blank">Icons8</a></span>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  let totalScoresOfUsers = Object.keys(users)
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

  totalScoresOfUsers = totalScoresOfUsers.map((user, index) => {
    return {...user, index}
  })

  return { totalScoresOfUsers };
}

export default connect(mapStateToProps)(LeaderBoard);
