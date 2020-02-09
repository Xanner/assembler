import React, { PureComponent } from "react";
import { PlusOutlined } from "@ant-design/icons";
import additionExample from "../../dal/arithmetic/addition.json";
import ArithmeticPage from "./ArithmeticPage";

export default class AdditionPage extends PureComponent {
  addition = (firstNumber, secondNumber) => firstNumber + secondNumber;

  render() {
    return (
      <ArithmeticPage
        headerTitle="Operacje arytmetyczne - dodawanie"
        data={additionExample}
        arithmeticSign={<PlusOutlined rotate={90} />}
        cardText="Dodaj dwie liczby do siebie i naciśnij Start."
        handleArithmeticOperation={this.addition}
      />
    );
  }
}
