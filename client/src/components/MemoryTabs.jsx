import React from "react";

import { Card, Input } from "antd";

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
  },
  {
    key: "registers",
    tab: "Rejestry"
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
          {index !== 0 && <br />}
          <b>{item.address}:</b>{" "}
          <Input
            style={{ width: "31px" }}
            size="small"
            disabled
            value={item.content}
          />
        </span>
      );
    return (
      <span key={item.address}>
        <Input
          style={{ width: "31px" }}
          size="small"
          disabled
          value={item.content}
        />
      </span>
    );
  }),
  codeSegment: CSRAM.map((item, index) => {
    if (index % 16 === 0)
      return (
        <span key={item.address}>
          {index !== 0 && <br />}
          <b>{item.address}:</b>{" "}
          <Input
            style={{ width: "31px" }}
            size="small"
            disabled
            value={item.content}
          />
        </span>
      );
    return (
      <span key={item.address}>
        <Input
          style={{ width: "31px" }}
          size="small"
          disabled
          value={item.content}
        />
      </span>
    );
  }),
  stackSegment: STACKRAM.map((item, index) => {
    if (index % 16 === 0)
      return (
        <span key={item.address}>
          {index !== 0 && <br />}
          <b>{item.address}:</b>{" "}
          <Input
            style={{ width: "31px" }}
            size="small"
            disabled
            value={item.content}
          />
        </span>
      );
    return (
      <span key={item.address}>
        <Input
          style={{ width: "31px" }}
          size="small"
          disabled
          value={item.content}
        />
      </span>
    );
  }),
  registers: (
    // TODO: poprawić paskudne inputy
    // TODO: wrzucic rejestry i te tablice w stan, zeby latwo moc zmieniac zawartosc ramu
    // TODO: do jsonow dodac adres, offset, content | RAM
    // TODO: podpiac poradniki
    <>
      <div>
        AX <Input style={{ width: "30px" }} size="small" disabled />{" "}
        <Input style={{ width: "30px" }} size="small" disabled />
      </div>
      <div>
        BX <Input style={{ width: "30px" }} size="small" disabled />{" "}
        <Input style={{ width: "30px" }} size="small" disabled />
      </div>
      <div>
        CX <Input style={{ width: "30px" }} size="small" disabled />{" "}
        <Input style={{ width: "30px" }} size="small" disabled />
      </div>
      <div>
        DX <Input style={{ width: "30px" }} size="small" disabled />{" "}
        <Input style={{ width: "30px" }} size="small" disabled />
      </div>
      <div>
        CS <Input style={{ width: "60px" }} size="small" disabled />
      </div>
      <div>
        IP <Input style={{ width: "60px" }} size="small" disabled />
      </div>
      <div>
        SS <Input style={{ width: "60px" }} size="small" disabled />
      </div>
      <div>
        SP <Input style={{ width: "60px" }} size="small" disabled />
      </div>
      <div>
        BP <Input style={{ width: "60px" }} size="small" disabled />
      </div>
      <div>
        SI <Input style={{ width: "60px" }} size="small" disabled />
      </div>
      <div>
        DI <Input style={{ width: "60px" }} size="small" disabled />
      </div>
      <div>
        DS <Input style={{ width: "60px" }} size="small" disabled />
      </div>
      <div>
        ES <Input style={{ width: "60px" }} size="small" disabled />
      </div>
    </>
  )
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
        style={{ width: "100%", textAlign: "center" }}
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
