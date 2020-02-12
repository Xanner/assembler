import React, { PureComponent } from "react";
import { PlusOutlined } from "@ant-design/icons";
import multiplicationExample from "../../dal/arithmetic/multiplication.json";
import ArithmeticPage from "../ArithmeticPage";
import { Row, InputNumber } from "antd";

const multiplicationAction = (
  <>
    <Row style={{ marginBottom: 16 }}>
      <InputNumber
        style={{ width: "60px" }}
        value={3}
        size="default"
        disabled
      />
      <PlusOutlined rotate={45} />
      <InputNumber
        style={{ width: "60px" }}
        value={3}
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
        headerTitle="Operacje arytmetyczne - mnożenie"
        data={multiplicationExample}
        userAction={multiplicationAction}
        cardText="Pomnóż dwie liczby przez siebie i naciśnij Start."
        beforeYouStartPath="/guide/register"
      />
    );
  }
}
