import React, { PureComponent } from "react";
import { MinusOutlined } from "@ant-design/icons";
import subtractionExample from "../../dal/arithmetic/subtraction.json";
import ArithmeticPage from "../ArithmeticPage";
import { Row, InputNumber } from "antd";

const subtractionAction = (
  <>
    <Row>Definicja kodu (3)</Row>
    <Row>op arytmetyczne (h)</Row>
    <Row>Przerwanie int 21 (4)</Row>
    <Row style={{ marginTop: 16 }}>
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
        headerTitle="Operacje arytmetyczne - Odejmowanie dwóch cyfr - wynik jednocyfrowy, dodatni. "
        data={subtractionExample}
        userAction={subtractionAction}
        cardText="W tym programie pokazana zostanie instrukcja odejmowania dwóch cyfr, która jest wręcz bliźniacza do instrukcji dodawania. Warto jednak przyswoić sobie te komendy, gdyż ich znajomość jest bardzo ważna w nieco bardziej skomplikowanych programach."
        beforeYouStartPath="/guide/interruption"
      />
    );
  }
}
