import React, { PureComponent } from "react";
import divisionExample from "../../dal/arithmetic/division.json";
import ArithmeticPage from "./ArithmeticPage";
import { Row, InputNumber } from "antd";

const divisionAction = (
  <>
    <Row style={{ marginBottom: 16 }}>
      <InputNumber
        style={{ width: "60px" }}
        value={3}
        size="default"
        disabled
      />
      <span style={{ fontSize: 18 }}> : </span>
      <InputNumber
        style={{ width: "60px" }}
        value={5}
        size="default"
        disabled
      />
    </Row>
  </>
);
export default class MultiplicationPage extends PureComponent {
  render() {
    return (
      <ArithmeticPage
        headerTitle="Operacje arytmetyczne - dzielenie"
        data={divisionExample}
        userAction={divisionAction}
        cardText="Podziel dwie liczby przez siebie i naciśnij Start."
        handleArithmeticOperation={this.division}
      />
    );
  }
}
