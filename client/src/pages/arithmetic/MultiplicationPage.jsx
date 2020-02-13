import React, { PureComponent } from "react";
import { PlusOutlined } from "@ant-design/icons";
import multiplicationExample from "../../dal/arithmetic/multiplication.json";
import ArithmeticPage from "../ArithmeticPage";
import { Row, InputNumber } from "antd";

const multiplicationAction = (
  <>
    <b>
      <Row>Definicja kodu</Row>
      <Row>Operacje arytmetyczne</Row>
      <Row>Przerwanie int 21</Row>
      <Row style={{ marginTop: 16 }}>
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
    </b>
  </>
);
export default class MultiplicationPage extends PureComponent {
  render() {
    return (
      <ArithmeticPage
        headerTitle="Operacje arytmetyczne - Mnożenie dwóch cyfr - wynik jednocyfrowy, dodatni. "
        data={multiplicationExample}
        userAction={multiplicationAction}
        cardText="Kolejny porsty program pokazuje instrukcję mnożenia dwóch wartości, a w tym przypadku dwóch cyfr. Tak jak w przypadku dzielenia, instrukacja ta przyjmuje jeden argument w postaci rejestru ogólnego przeznaczenia (jego wartości) 
lub adresu pamięci (na wartość, którą ten adres wskazuje). Drugim mnożnikiem jest wartość rejestru ax (al - operacja jednobajtowa, ax - operacja dwubajtowa). Wynik mnożenia zapisywany jest rejestrze ax lub dx i ax dla większych wartości. 
    "
        beforeYouStartPath="/guide/register"
      />
    );
  }
}
