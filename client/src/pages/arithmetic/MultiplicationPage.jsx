import React, { PureComponent } from "react";
import { PlusOutlined } from "@ant-design/icons";
import multiplicationExample from "../../dal/arithmetic/multiplication.json";
import ArithmeticPage from "./ArithmeticPage";

export default class MultiplicationPage extends PureComponent {
  multiplication = (firstNumber, secondNumber) => firstNumber * secondNumber;

  render() {
    return (
      <ArithmeticPage
        headerTitle="Operacje arytmetyczne - mnożenie"
        data={multiplicationExample}
        arithmeticSign={<PlusOutlined rotate={45} />}
        cardText="Pomnóż dwie liczby przez siebie i naciśnij Start."
        handleArithmeticOperation={this.multiplication}
      />
    );
  }
}
