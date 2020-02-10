import React from "react";
import { Card, Col } from "antd";
import Register from "./Register";
import DataSegment from "./DataSegment";
import CodeSegment from "./CodeSegment";
import StackSegment from "./StackSegment";

const tabListNoTitle = [
  {
    key: "dataSegment",
    tab: "Data Segment"
  },
  {
    key: "codeSegment",
    tab: "Code Segment"
  },
  {
    key: "stackSegment",
    tab: "Stack Segment"
  }
];

// TODO: wrzucic rejestry i te tablice w stan, zeby latwo moc zmieniac zawartosc ramu
// TODO: do jsonow dodac adres, offset, content | RAM
// TODO: podpiac poradniki
const contentListNoTitle = {
  dataSegment: <DataSegment />,
  codeSegment: <CodeSegment />,
  stackSegment: <StackSegment />
};

export default class TabsCard extends React.Component {
  state = {
    selectedTab: "codeSegment"
  };

  onTabChange = key => {
    this.setState({ selectedTab: key });
  };

  render() {
    return (
      <Card
        style={{ width: "100%" }}
        tabList={tabListNoTitle}
        activeTabKey={this.state.selectedTab}
        onTabChange={key => {
          this.onTabChange(key);
        }}
      >
        <Col xs={21}>{contentListNoTitle[this.state.selectedTab]}</Col>
        <Col xs={3}>
          <Register />
        </Col>
      </Card>
    );
  }
}
