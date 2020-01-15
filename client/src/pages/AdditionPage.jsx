import React, { Component } from "react";
import {
  Layout,
  Col,
  Row,
  InputNumber,
  Timeline,
  Card,
  Button,
  Collapse,
} from "antd";
import {
  PlusOutlined,
  PauseOutlined,
  PlayCircleOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
import Diagram from "../components/Diagram";
import sampleData from "../assets/sample.json";

const { Content, Header } = Layout;

export default class AdditionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNumber: null,
      secondNumber: null,
      result: null,
      currentLineNumber: null,
      currentLeftRegister: null,
      currentRightRegister: null,
      currentComment: null,
      name: null,
      codes: [],
      hasData: false,
    };
  }

  handleChange = (field, value) => this.setState({ [field]: value });

  getTimelineItems = () => {
    return this.state.codes.map(code => {
      return (
        <Timeline.Item
          style={{ fontFamily: "Consolas" }}
          key={code.lineNumber + code.comment}
          color={
            this.state.currentLineNumber !== code.lineNumber ? "grey" : "red"
          }
          dot={`#${code.lineNumber}`}
        >
          <span
            style={{
              textAlign: "right",
              paddingLeft: 5,
              color:
                this.state.currentLineNumber !== code.lineNumber ? "" : "red"
            }}
          >
            {code.operation} {code.leftValue && code.leftValue.value}
          </span>
        </Timeline.Item>
      );
    });
  };

  handleStart = () => {
    console.log(
      `Sending to API values ${this.state.firstNumber} and ${this.state.secondNumber} ...`
    );
    this.setState({ ...sampleData[0], currentLineNumber: 0, hasData: true });
  };

  handleNextStep = () => {
    this.setState(prevState => ({
      currentLineNumber: prevState.currentLineNumber + 1,
    }), () => this.setCurrentCode());
  }

  setCurrentCode = () => {
    const currentCode = this.state.codes.find(c => c.lineNumber === this.state.currentLineNumber);
    currentCode && this.setState({
      currentLeftRegister: currentCode.leftValue.value,
      currentRightRegister: currentCode.rightValue.value,
      currentComment: currentCode.comment,
    }, () => console.log(this.state));
  }

  handleRestart = () => this.setState({
    currentLineNumber: 0,
    currentLeftRegister: null,
    currentRightRegister: null,
    currentComment: null,
  });

  render() {
    const timeLineItems = this.state.hasData && this.getTimelineItems();
    return (
      <Layout className="site-layout">
        <Header style={{ background: "#fff" }}>
          <h2>Operacje arytmetyczne - dodawanie</h2>
        </Header>
        <Content style={{ background: "#fff" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Row type="flex" justify="start">
              <Col span={8}>
                <Row style={{ marginBottom: 16 }}>
                  <InputNumber
                    value={this.state.firstNumber}
                    size="large"
                    onChange={value => this.handleChange("firstNumber", value)}
                  />
                  <PlusOutlined />
                  <InputNumber
                    value={this.state.secondNumber}
                    size="large"
                    onChange={value => this.handleChange("secondNumber", value)}
                  />
                  <PauseOutlined rotate={90} />
                  <InputNumber
                    disabled
                    value={this.state.result}
                    size="large"
                  />
                </Row>
                <Row style={{ marginBottom: 8 }} justify="start">
                  <Button
                    disabled={
                      !(this.state.firstNumber && this.state.secondNumber)
                    }
                    onClick={this.handleStart}
                    type="primary"
                  >
                    <PlayCircleOutlined />
                    Start
                  </Button>{" "}
                  <Button
                    onClick={this.handleNextStep}
                    disabled={!this.state.hasData || (this.state.currentLineNumber - 1 === this.state.codes.length)}
                    type="secondary"
                  >
                    <CaretRightOutlined />
                    Następny krok
                  </Button>{" "}
                  <Button onClick={this.handleRestart} disabled={!this.state.hasData} type="secondary">
                    Restart
                  </Button>
                </Row>
                <Row>
                  <Card bodyStyle={{
                    maxHeight: 400,
                    overflow: "auto"
                  }}>
                    <Collapse accordion>
                      {this.state.hasData ? (
                        <Timeline style={{ textAlign: "left" }}>
                          {timeLineItems}
                        </Timeline>
                      ) : (
                          <p style={{ fontFamily: "Consolas" }}>
                            Dodaj dwie liczby do siebie i naciśnij Start.
                      </p>
                        )}
                    </Collapse>
                  </Card>
                </Row>
              </Col>
              <Col span={16}>
                <Diagram />
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    );
  }
}