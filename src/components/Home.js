import React, { Component } from 'react';
import { Layout, Tabs } from 'antd';

//Main Components
import Question from './Question'


const { Content } = Layout;
const { TabPane } = Tabs;

class Home extends Component {
  render() {
    return (
      <Content>
        <div className="card-container">
          <Tabs type="card">
            <TabPane tab="UnAnswered Questions" key="1">
              <Question />
              <Question />
            </TabPane>
            <TabPane tab="Answered Questions" key="2">
              <Question />
            </TabPane>
          </Tabs>
        </div>
      </Content>
    );
  }
}

export default Home;
