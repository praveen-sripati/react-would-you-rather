import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Tabs } from 'antd';

//Main Components
import QuestionsList from './QuestionsList';

const { Content } = Layout;
const { TabPane } = Tabs;

class Home extends Component {
  render() {
    const { answeredQuestionsIds, unAnsweredQuestionsIds } = this.props;

    return (
      <Content>
        <div className="card-container">
          <Tabs type="card">
            <TabPane tab="UnAnswered Questions" key="1">
              <QuestionsList
                questionsListIds={unAnsweredQuestionsIds}
              />
            </TabPane>
            <TabPane tab="Answered Questions" key="2">
              <QuestionsList
                questionsListIds={answeredQuestionsIds}
              />
            </TabPane>
          </Tabs>
        </div>
      </Content>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  const userAnswers = Object.keys(users[authedUser].answers);
  const sortedQuestions = Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
  const answeredQuestionsIds = sortedQuestions.filter((question) =>
    userAnswers.includes(question)
  );
  const unAnsweredQuestionsIds = sortedQuestions.filter(
    (question) => !userAnswers.includes(question)
  );
  return {
    answeredQuestionsIds,
    unAnsweredQuestionsIds,
  };
}

export default connect(mapStateToProps)(Home);
