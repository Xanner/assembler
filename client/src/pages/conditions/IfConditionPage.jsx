import React, { PureComponent } from "react";
import ifConditionExample from "../../dal/arithmetic/conditions1.json";
import ArithmeticPage from "../ArithmeticPage";
import { Row } from "antd";

const multiplicationAction = (
  <>
    <Row>Definicja kodu</Row>
    <Row>Operacje logiczne</Row>
    <Row>Etykiety</Row>
    <Row>Cmp</Row>
    <Row>Skoki warunkowe</Row>
    <Row>Przerwanie int 21</Row>
  </>
);

export default class IfConditionPage extends PureComponent {
  render() {
    return (
      <ArithmeticPage
        headerTitle="Instrukcje warunkowe - przykład pierwszy."
        data={ifConditionExample}
        userAction={multiplicationAction}
        cardText="Program ten pokazuje przykładowe działanie i wykorzystanie isntrukcji warunkowych/skoków warunkowych. Aby poprawnie na nich operować należy wykorzystać etykiety 
(ang. labels), do których nastąpi skok wykonywania programu, jeśli jakiś warunek zostanie spełniony. Rodzaje wszystkich intrukcji warunkowych
opisano w częsci teoretycznej. Jeśli chodzi o dokładne działanie programu, to ogranicza się ono do pobrania dwóch cyfr (znaków) od użytkownika i wyświetlenia
komunikatu czy są one równe, czy też nie.  "
        beforeYouStartPath="/guide/register"
      />
    );
  }
}
