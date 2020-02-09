import React, { PureComponent } from "react";
import divisionExample from "../../dal/arithmetic/division.json";
import ArithmeticPage from "./ArithmeticPage";

export default class MultiplicationPage extends PureComponent {
  division = (firstNumber, secondNumber) => firstNumber / secondNumber;

  render() {
    return (
      <ArithmeticPage
        headerTitle="Operacje arytmetyczne - dzielenie"
        data={divisionExample}
        arithmeticSign={<span style={{ fontSize: 18 }}> : </span>}
        cardText="Podziel dwie liczby przez siebie i naciśnij Start."
        handleArithmeticOperation={this.division}
      />
    );
  }
}
