import React from "react";

import { Card } from "antd";

import { convertToHex } from "./ArithmeticCodeItems";

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

let DSRAM = [];
let DSinitialAddress = 720;
for (let i = 0; i < 128; i++) {
  DSRAM.push({
    address: `0${DSinitialAddress}:00${convertToHex(i)}`,
    content: "00"
  });
}

let CSRAM = [];
let CSinitialAddress = 721;
for (let i = 0; i < 128; i++) {
  CSRAM.push({
    address: `0${CSinitialAddress}:00${convertToHex(i)}`,
    content: "00"
  });
}

let STACKRAM = [];
let STACKinitialAddress = 710;
for (let i = 0; i < 128; i++) {
  STACKRAM.push({
    address: `0${STACKinitialAddress}:00${convertToHex(i)}`,
    content: "00"
  });
}

const contentListNoTitle = {
  dataSegment: DSRAM.map((item, index) => {
    if (index % 16 === 0)
      return (
        <span key={item.address}>
          <br />
          <b>{item.address}:</b> {item.content}{" "}
        </span>
      );
    return <span key={item.address}>{item.content} </span>;
  }),
  codeSegment: CSRAM.map((item, index) => {
    if (index % 16 === 0)
      return (
        <span key={item.address}>
          <br />
          <b>{item.address}:</b> {item.content}{" "}
        </span>
      );
    return <span key={item.address}>{item.content} </span>;
  }),
  stackSegment: STACKRAM.map((item, index) => {
    if (index % 16 === 0)
      return (
        <span key={item.address}>
          <br />
          <b>{item.address}:</b> {item.content}{" "}
        </span>
      );
    return <span key={item.address}>{item.content} </span>;
  })
};

export default class TabsCard extends React.Component {
  state = {
    selectedTab: "codeSegment"
  };

  onTabChange = key => {
    console.log(key);
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
        {contentListNoTitle[this.state.selectedTab]}
      </Card>
    );
  }
}
