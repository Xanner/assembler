import React, { Component } from "react";
import { Layout, Col, Row, Timeline, Card, Button, Icon } from "antd";
import { PlayCircleOutlined, CaretRightOutlined } from "@ant-design/icons";
import Diagram from "../components/Diagram";
import { ArithmeticCodeItems } from "../components/ArithmeticCodeItems";
import MemoryTabs from "../components/MemoryTabs";

const { Content, Header } = Layout;

export default class ArithmeticPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLineNumber: null,
      currentCode: null,
      currentLeftRegister: null,
      currentRightRegister: null,
      currentComment: null,
      counter: 3,
      codes: [],
      hasStarted: false,
      hasData: false
    };
    this.memoryRef = React.createRef();
  }

  handleChange = (field, value) => this.setState({ [field]: value });

  handleStart = () => {
    this.setState({
      ...this.props.data,
      currentLineNumber: 0,
      currentLeftRegister: null,
      currentRightRegister: null,
      currentComment: null,
      currentCode: null,
      counter: 3,
      hasData: true,
      hasStarted: true
    });
  };

  handleNextStep = () => {
    this.setState(
      prevState => ({
        currentLineNumber: prevState.currentLineNumber + 1
      }),
      () => this.setNextCodeLine()
    );
  };

  setNextCodeLine = () => {
    const currentCode = this.state.codes.find(
      c => c.lineNumber === this.state.currentLineNumber
    );
    if (!currentCode) return;
    if (currentCode.type === "endLoop" && this.state.counter !== 0) {
      const startCode = this.state.codes.find(d => d.lineNumber === 25);
      this.setState({
        currentLeftRegister: startCode.leftValue.value,
        currentRightRegister: startCode.rightValue.value,
        currentComment: startCode.comment,
        currentCode: startCode,
        currentLineNumber: 25,
        counter: this.state.counter - 1
      });
    } else {
      currentCode &&
        this.setState({
          currentLeftRegister: currentCode.leftValue.value,
          currentRightRegister: currentCode.rightValue.value,
          currentComment: currentCode.comment,
          currentCode: currentCode
        });
    }
  };

  handleRestart = () =>
    this.setState(
      {
        currentLineNumber: 0,
        currentLeftRegister: null,
        currentRightRegister: null,
        currentComment: null,
        currentCode: null,
        hasRestarted: true
      },
      () => this.setState({ hasRestarted: false, hasStarted: false })
    );

  render() {
    const { codes, currentLineNumber } = this.state;
    const { headerTitle, cardText, beforeYouStartPath } = this.props;
    const codeLines =
      this.state.hasData && ArithmeticCodeItems(codes, currentLineNumber);
    return (
      <>
        <Header style={{ background: "#fff" }}>
          <h2>{headerTitle}</h2>
        </Header>
        <Content>
          <div className="site-layout-background" style={{ minHeight: 360 }}>
            <Row type="flex" justify="start">
              <Col span={10}>
                <Row style={{ marginBottom: 16 }}>
                  <Card
                    title={
                      <>
                        <Icon type="bulb" theme="twoTone" />
                        Zanim zaczniesz
                      </>
                    }
                    extra={<a href={beforeYouStartPath}>Więcej</a>}
                  >
                    Przejdź do odnośnika aby dowiedzieć się więcej na dany
                    temat.
                    <Row style={{ marginTop: 8 }}>{this.props.userAction}</Row>
                  </Card>
                </Row>
                <Row style={{ marginBottom: 8 }} justify="space-between">
                  <Button
                    disabled={this.state.hasStarted}
                    onClick={this.handleStart}
                    type="primary"
                  >
                    <PlayCircleOutlined />
                    Start
                  </Button>{" "}
                  <Button
                    onClick={this.handleNextStep}
                    disabled={
                      !this.state.hasStarted ||
                      !this.state.hasData ||
                      this.state.currentLineNumber - 1 ===
                        this.state.codes.length
                    }
                    type="secondary"
                  >
                    <CaretRightOutlined />
                    Następny krok
                  </Button>{" "}
                  <Button
                    onClick={this.handleRestart}
                    disabled={!this.state.hasData}
                    type="secondary"
                  >
                    Restart
                  </Button>
                </Row>
                <Row>
                  <Card style={{ maxHeight: 700, overflow: "auto" }}>
                    {this.state.hasData ? (
                      <Timeline style={{ textAlign: "left" }}>
                        {codeLines}
                      </Timeline>
                    ) : (
                      <p style={{ fontFamily: "Consolas" }}>{cardText}</p>
                    )}
                  </Card>
                </Row>
              </Col>
              <Col span={14}>
                {!this.state.hasRestarted && (
                  <Diagram
                    activReg={{
                      currentLeftRegister: this.state.currentLeftRegister,
                      currentRightRegister: this.state.currentRightRegister
                    }}
                  />
                )}
                <div style={{ marginLeft: 40 }}>
                  {!this.state.hasRestarted && (
                    <MemoryTabs
                      counter={this.state.counter}
                      currentCode={this.state.currentCode}
                      ref={this.memoryRef}
                    />
                  )}
                </div>
              </Col>
            </Row>
          </div>
        </Content>
      </>
    );
  }
}
