import React, { Component } from "react";
import { Layout, Col, Row, InputNumber, Timeline, Card, Button } from "antd";
import {
  PauseOutlined,
  PlayCircleOutlined,
  CaretRightOutlined
} from "@ant-design/icons";
import Diagram from "../../components/Diagram";
import CommentView from "../../components/CommentView";
import { ArithmeticCodeItems } from "../../components/ArithmeticCodeItems";

const { Content, Header } = Layout;

export default class ArithmeticPage extends Component {
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
      hasData: false
    };
  }

  handleChange = (field, value) => this.setState({ [field]: value });

  handleStart = () => {
    this.setState({
      ...this.props.data,
      currentLineNumber: 0,
      currentLeftRegister: null,
      currentRightRegister: null,
      currentComment: null,
      hasData: true
    });
  };

  handleNextStep = () => {
    this.setState(
      prevState => ({
        currentLineNumber: prevState.currentLineNumber + 1,
        result:
          prevState.currentLineNumber + 1 === 20
            ? this.props.handleArithmeticOperation(
                this.state.firstNumber,
                this.state.secondNumber
              )
            : prevState.result
      }),
      () => this.setNextCodeLine()
    );
  };

  setNextCodeLine = () => {
    const currentCode = this.state.codes.find(
      c => c.lineNumber === this.state.currentLineNumber
    );
    currentCode &&
      this.setState({
        currentLeftRegister: currentCode.leftValue.value,
        currentRightRegister: currentCode.rightValue.value,
        currentComment: currentCode.comment
      });
  };

  handleRestart = () =>
    this.setState({
      currentLineNumber: 0,
      result: null,
      currentLeftRegister: null,
      currentRightRegister: null,
      currentComment: null
    });

  render() {
    const { codes, currentLineNumber, firstNumber, secondNumber } = this.state;
    const { headerTitle, cardText, arithmeticSign } = this.props;
    const codeLines =
      this.state.hasData &&
      ArithmeticCodeItems(codes, currentLineNumber, firstNumber, secondNumber);
    return (
      <>
        <Header style={{ background: "#fff" }}>
          <h2>{headerTitle}</h2>
        </Header>
        <Content>
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
                  {arithmeticSign}
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
                    disabled={
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
                  <Card>
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
              <Col span={16}>
                <Diagram
                  activReg={{
                    currentLeftRegister: this.state.currentLeftRegister,
                    currentRightRegister: this.state.currentRightRegister
                  }}
                />
                <CommentView currentComment={this.state.currentComment} />
              </Col>
            </Row>
          </div>
        </Content>
      </>
    );
  }
}