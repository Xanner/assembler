import React, { PureComponent } from "react";
import arrayExample from "../../dal/arithmetic/array.json";
import ArithmeticPage from "../ArithmeticPage";
import { Row } from "antd";

const userAction = (
  <>
    <b>
      <Row>Definicja kodu: pętla loop, inc, dec</Row>
      <Row>Tablice</Row>
      <Row>Przerwanie int 21</Row>
    </b>
  </>
);

export default class ArrayPage extends PureComponent {
  render() {
    return (
      <ArithmeticPage
        headerTitle="Podstawowa tablica"
        data={arrayExample}
        userAction={userAction}
        cardText="W tej części kursu pokazany zostanie program z wykorzytsaniem podstawowej tablicy. W języku Assembler definicja takiej struktury danych jest bardzo prosta -
tak naprawdę tablicę stanowią wartości wpisane po przecinku pod jedną nazwą i w jednym typie zmiennej np. zm db 1,2,3,4. W pamięci procesor zapisuje każdą zmienną bajt po bajcie 
obok siebie, a więc taka tablica to nic innego jak zestaw sąsiednich wartości, na których początek wskazuje jedna zmienna. 
Dostanie się do danego elementu tablicy to podanie nazwy zmiennej oraz indeksu w kwadratowym nawiasie - a więc bliżniaczo podobnie do tablicy w językach C/C++.
Program wypisuje zawartość tablicy po indeksie w pętli Loop."
        beforeYouStartPath="/guide/register"
      />
    );
  }
}
