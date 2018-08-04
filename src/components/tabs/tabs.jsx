import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TopScreen from "../../containers/top.jsx";
import "../../css/tabs.css";

class TabComponect extends Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>トップ</Tab>
          <Tab>イラスト</Tab>
          <Tab>ライセンス</Tab>
          <Tab>お問い合わせ</Tab>
        </TabList>

        <TabPanel>
          <TopScreen />
        </TabPanel>
        <TabPanel>
          <h2>イラスト</h2>
        </TabPanel>
        <TabPanel>
          <h2>ライセンス</h2>
        </TabPanel>
        <TabPanel>
          <h2>お問い合わせ</h2>
        </TabPanel>
      </Tabs>
    );
  }
}

export default TabComponect;
