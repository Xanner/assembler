import React, { PureComponent } from "react";
import { MinusOutlined } from "@ant-design/icons";
import subtractionExample from "../../dal/arithmetic/subtraction.json";
import ArithmeticPage from "./ArithmeticPage";

export default class SubtractionPAge extends PureComponent {
  subtraction = (firstNumber, secondNumber) => firstNumber - secondNumber;

  render() {
    return (
      <ArithmeticPage
        headerTitle="Operacje arytmetyczne - odejmowanie"
        data={subtractionExample}
        arithmeticSign={<MinusOutlined />}
        cardText="Odejmij dwie liczby od siebie i naciśnij Start."
        handleArithmeticOperation={this.subtraction}
      />
    );
  }
}
