import React from "react";
import { Card, Col } from "antd";
import Register from "./Register";
import DataSegment from "./DataSegment";
import CodeSegment from "./CodeSegment";
import StackSegment from "./StackSegment";
import { convertToHex } from "./ArithmeticCodeItems";

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

let REGISTER = {
  AH: "00",
  AL: "00",
  BH: "00",
  BL: "00",
  CH: "01",
  CL: "26",
  DH: "00",
  DL: "00",
  CS: "0721",
  IP: "0000",
  SS: "0710",
  SP: "0100",
  SI: "0000",
  DI: "0000",
  DS: "0700",
  ES: "0700"
};

const DSADDRESS = "0720";
const CSADDRESS = "0721";
const SSADDRESS = "0710";

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

export default class TabsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "dataSegment",
      dataSegment: DSRAM,
      codeSegment: CSRAM,
      stackSegment: STACKRAM,
      register: REGISTER,
      currentMemoryChanges: [],
      currentRegisterChanges: null
    };
  }

  updateSegment = (segmentKey, currentCode, lastOffset) => {
    const memory = currentCode.memory;

    this.setState(
      {
        [segmentKey]: this.state[segmentKey].map(ds => {
          const matchedMemory = memory.find(
            item => item.address === ds.address
          );
          return matchedMemory || ds;
        }),
        currentMemoryChanges: memory
      },
      () => {
        if (currentCode.registers)
          this.updateRegister(currentCode.registers, lastOffset);
      }
    );
  };

  updateRegister = (registers, lastOffset) => {
    this.setState({
      register: {
        ...this.state.register,
        IP: lastOffset,
        ...registers[0]
      },
      currentRegisterChanges: {
        IP: lastOffset,
        ...registers[0]
      }
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps === this.props) return;
    const { currentCode } = this.props;
    if (!currentCode) return;
    const initialAddress =
      currentCode.memory && currentCode.memory[0].address.substring(0, 4);
    let lastOffset;
    const memoryLength = currentCode.memory && currentCode.memory.length;
    if (memoryLength) {
      lastOffset =
        currentCode.memory &&
        currentCode.memory[memoryLength - 1].address.substring(5, 9);
    }

    if (initialAddress) {
      if (initialAddress === DSADDRESS) {
        this.updateSegment("dataSegment", currentCode, lastOffset);
      }
      if (initialAddress === CSADDRESS) {
        this.updateSegment("codeSegment", currentCode, lastOffset);
      }
      if (initialAddress === SSADDRESS) {
        this.updateSegment("stackSegment", currentCode, lastOffset);
      }
    }
  }

  onTabChange = key => {
    this.setState({ selectedTab: key });
  };

  render() {
    const contentListNoTitle = {
      dataSegment: (
        <DataSegment
          data={this.state.dataSegment}
          currentMemoryChanges={this.state.currentMemoryChanges}
        />
      ),
      codeSegment: (
        <CodeSegment
          data={this.state.codeSegment}
          currentMemoryChanges={this.state.currentMemoryChanges}
        />
      ),
      stackSegment: (
        <StackSegment
          data={this.state.stackSegment}
          currentMemoryChanges={this.state.currentMemoryChanges}
        />
      )
    };

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
          <Register
            data={this.state.register}
            currentRegisterChanges={this.state.currentRegisterChanges}
          />
        </Col>
      </Card>
    );
  }
}
