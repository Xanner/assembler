import React, { PureComponent } from "react";
import { PlusOutlined } from "@ant-design/icons";
import additionExample from "../../dal/arithmetic/addition.json";
import ArithmeticPage from "../ArithmeticPage";
import { Row, InputNumber } from "antd";

const addtionAction = (
  <>
    <Row style={{ marginBottom: 16 }}>
      <InputNumber
        style={{ width: "60px" }}
        value={5}
        size="default"
        disabled
      />
      <PlusOutlined rotate={90} />
      <InputNumber
        style={{ width: "60px" }}
        value={2}
        size="default"
        disabled
      />
    </Row>
  </>
);
export default class AdditionPage extends PureComponent {
  render() {
    return (
      <ArithmeticPage
        headerTitle="Operacje arytmetyczne - dodawanie"
        data={additionExample}
        userAction={addtionAction}
        cardText="Dodaj dwie liczby do siebie i naciśnij Start."
        beforeYouStartPath="/guide/register"
      />
    );
  }
}
