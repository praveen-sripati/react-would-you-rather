import React, { Component } from 'react';
import { Layout, Tabs } from 'antd';

const { Content } = Layout;
const { TabPane } = Tabs;

class Home extends Component {
  render() {
    return (
      <Content>
        <div className="card-container">
          <Tabs type="card">
            <TabPane tab="UnAnswered Questions" key="1">
              <p>Content of Tab Pane 1</p>
              <p>Content of Tab Pane 1</p>
              <p>Content of Tab Pane 1</p>
            </TabPane>
            <TabPane tab="Answered Questions" key="2">
              <p>Content of Tab Pane 2</p>
              <p>Content of Tab Pane 2</p>
              <p>Content of Tab Pane 2</p>
            </TabPane>
          </Tabs>
        </div>
      </Content>
    );
  }
}

export default Home;
