import React, { Component } from "react";
import {
  Layout,
  Col,
  Row,
  InputNumber,
  Timeline,
  Card,
  Button,
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
      name: null,
      codes: [],
      hasData: false,
      hasDataChanged: false
    };
  }

  handleChange = (field, value) => this.setState({ [field]: value, hasDataChanged: true });

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
    this.setState({ ...sampleData[0], currentLineNumber: 1, hasData: true });
  };

  handleNextStep = () => {
      this.setState(prevState => ({currentLineNumber: prevState.currentLineNumber + 1}));
  }

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
                      !this.state.firstNumber && !this.state.secondNumber
                    }
                    onClick={this.handleStart}
                    type="primary"
                  >
                    <PlayCircleOutlined />
                    Start
                  </Button>{" "}
                  <Button
                    onClick={this.handleNextStep}
                    disabled={!this.state.hasData || (this.state.currentLineNumber - 1 === this.state.codes.length) }
                    type="secondary"
                  >
                    <CaretRightOutlined />
                    Następny krok
                  </Button>{" "}
                  <Button disabled={!this.state.hasData} type="secondary">
                    Restart
                  </Button>
                </Row>
                <Row>
                  <Card>
                    {this.state.hasData ? (
                      <Timeline style={{ textAlign: "left" }}>
                        {timeLineItems}
                      </Timeline>
                    ) : (
                      <p style={{ fontFamily: "Consolas" }}>
                        Dodaj dwie liczby do siebie i naciśnij Start.
                      </p>
                    )}
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
