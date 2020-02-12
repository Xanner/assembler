import React, { PureComponent } from "react";
import { MinusOutlined } from "@ant-design/icons";
import subtractionExample from "../../dal/arithmetic/subtraction.json";
import ArithmeticPage from "../ArithmeticPage";
import { Row, InputNumber } from "antd";

const subtractionAction = (
  <>
    <Row style={{ marginBottom: 16 }}>
      <InputNumber
        style={{ width: "60px" }}
        value={5}
        size="default"
        disabled
      />
      <MinusOutlined />
      <InputNumber
        style={{ width: "60px" }}
        value={2}
        size="default"
        disabled
      />
    </Row>
  </>
);

export default class SubtractionPAge extends PureComponent {
  render() {
    return (
      <ArithmeticPage
        headerTitle="Operacje arytmetyczne - odejmowanie"
        data={subtractionExample}
        userAction={subtractionAction}
        cardText="Odejmij dwie liczby od siebie i naciśnij Start."
        beforeYouStartPath="/guide/register"
      />
    );
  }
}
