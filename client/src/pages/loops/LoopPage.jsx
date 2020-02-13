import React, { PureComponent } from "react";
import loopExample from "../../dal/arithmetic/loop1.json";
import ArithmeticPage from "../ArithmeticPage";
import { Row } from "antd";

const userAction = (
  <>
    <Row>Definicja kodu (3):</Row>
    <Row>operacje logiczne (i)</Row>
    <Row>etykiety (n)</Row>
    <Row>loop (s)</Row>
  </>
);

export default class LoopPage extends PureComponent {
  render() {
    return (
      <ArithmeticPage
        headerTitle="Pętla Loop"
        data={loopExample}
        userAction={userAction}
        cardText="Program pokazuje w jaki sposób tworzone są i używane pętle w języku Assembler. Najpopularnieszym rodzajem jest instrukcja Loop, która wyonuje się tyle
razy, ile wielokrotności liczby 1 znajduje się w rejestrze cx, znanym także potocznie jako rejestr-licznik. Za każdym przejściem pętli wartość licznika zmniejszana
jest o 1, aż osiągnie wartość 0. Poniższy porgram prosi użytkownika o wpisanie liczby reprezentującej licznik cx, czyli w skórcie ile razy wykonać się ma wyświetlenie określonego napisu. 
    "
        beforeYouStartPath="/guide/register"
      />
    );
  }
}
