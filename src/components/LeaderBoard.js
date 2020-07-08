import React, { Component } from 'react'
import {connect} from 'react-redux'
import User from './User'

class LeaderBoard extends Component {
  render() {
    return (
      <div className="leaderboard-container">
        <User />
      </div>
    )
  }
}

export default LeaderBoard;