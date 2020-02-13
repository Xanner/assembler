import React, { PureComponent } from "react";
import { PlusOutlined } from "@ant-design/icons";
import additionExample from "../../dal/arithmetic/addition.json";
import ArithmeticPage from "../ArithmeticPage";
import { Row, InputNumber } from "antd";

const addtionAction = (
  <>
    <Row>
      <Row>Rejestry Assemblera</Row>
      <Row>Budowa pamięci wenetrznej</Row>
      <Row>Definicja kodu:</Row>
      <Row>Model, stack, data , zmienne , code , mov , op arytmetyczne</Row>
      <Row>Przerwanie int 21</Row>
      <Row>Tablica ASCII </Row>
      <Row>HEX - system szenastkowy </Row>
      <Row>Litte Endian </Row>
    </Row>
    <Row style={{ marginTop: 16 }}>
      <InputNumber
        style={{ width: "60px" }}
        value={5}
        size="default"
        disabled
      />
      <PlusOutlined rotate={90} />
      <InputNumber
        style={{ width: "60px" }}
        value={2}
        size="default"
        disabled
      />
    </Row>
  </>
);
export default class AdditionPage extends PureComponent {
  render() {
    return (
      <ArithmeticPage
        headerTitle="Operacje arytmetyczne - Dodawanie dwóch cyfr - wynik jednocyfrowy, dodatni. "
        data={additionExample}
        userAction={addtionAction}
        cardText='Pierwszy program jest bardzo zwięzły oraz prosty w swej budowie jak i działaniu. Dodaje on dwie cyfry, a wynik wyświetla w konsoli. Wynik ten nie może być większy od 10, gdyż algorytm przystosowany jest do wyświetlenia pojedynczego znaku. 
Operacje arytmetyczne w języku Assembler ograniczają się często do wywołania jednej, odpowiedniej komendy. Mimo tego odpowiednie wyświetlenie wyniku może wydawac się na początku nieco dziwne. Warto dodać, że program stanowi także
wstęp, pokazujący strukturę kodu assemblera (TASM) z dodatkowymi komendami, wymaganymi w inicjalizacji wielu operacji. Pierszy krok kursu wymaga podstawowej wiedzy teoretycznej dotyczącej rejestrów, budowy procesora i pamięci oraz samego języka Assembler, 
dlatego sekcja "Zanim zaczniesz" jest znacznie bardziej rozbudowana niż w pozostałych częściach kursu.'
        beforeYouStartPath="/guide/register"
      />
    );
  }
}
