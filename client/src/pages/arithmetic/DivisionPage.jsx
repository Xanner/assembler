import React, { PureComponent } from "react";
import divisionExample from "../../dal/arithmetic/division.json";
import ArithmeticPage from "../ArithmeticPage";
import { Row, InputNumber } from "antd";

const divisionAction = (
  <>
    <Row>Dodawanie dwóch cyfr wynik jednocyfrowy</Row>
    <Row>Definicja kodu</Row>
    <Row>Operacje arytmetyczne</Row>
    <Row>Operacje logiczne</Row>
    <Row>Przerwanie int 21h</Row>
    <Row style={{ marginTop: 16 }}>
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
        headerTitle="Operacje arytmetyczne - Dzielenie dwóch cyfr - wynik oraz reszta. "
        data={divisionExample}
        userAction={divisionAction}
        cardText="Ten program w skrócie pokazuje operację dzielenia dwóch cyfr. Sama instrukcja div działa w bardzo prosty sposób: jako dzielną traktuje wartość rejestru AX (w przypadku zmiennej o rozmiarze dw: dx i ax), 
jako dzielnik wartość rejestru dwa razy krótszego lub adres pamięci 
wpisanego jako argument tej operacji. Program wypisuje wynik i resztę z dzielenia jako dwie cyfry obok siebie. "
        handleArithmeticOperation={this.division}
      />
    );
  }
}
