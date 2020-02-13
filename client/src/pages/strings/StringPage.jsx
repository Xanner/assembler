import React, { PureComponent } from "react";
import stringExample from "../../dal/arithmetic/rstring1.json";
import ArithmeticPage from "../ArithmeticPage";
import { Row } from "antd";

const userAction = (
  <>
    <b>
      <Row>Przerwanie Int 21</Row>
    </b>
  </>
);

export default class ProcedurePage extends PureComponent {
  render() {
    return (
      <ArithmeticPage
        headerTitle="Ciągi znaków - Pobranie łańcucha znaków"
        data={stringExample}
        userAction={userAction}
        cardText="Poniższy program demonstruje działanie przerwania int 21h - instrukcja 10. W tym wypadku do poprawnego działania tego rodzaju operacji wymagane są trzy
zdefiniowane zmienne: zmienna rozmiaru buffora (maksymalna ilość znaków), zmianna przechowująca pobraną długość znaku (inicjalizowana na 0) oraz sam buffor zainicjalizowany
powielonym symbolem $ - to w jego miejscu w pamięci zostanie zapisany pobrany ciąg znaków z klawiatury (po zatwierdzeniu klawiszem ENTER).
"
        beforeYouStartPath="/guide/register"
      />
    );
  }
}
