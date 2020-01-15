import React, { Component } from 'react'
import { Row, Col } from 'antd';

export default class RegisterPage extends Component {
    render() {
        return (
            <div className="register-page">
                <h1>W procesorach x86 znajdziemy następujące 16 bitowe rejestry:</h1>
                <Row>
                    <Col>
                        <p className="desc-title">Rejestry ogólnego przeznaczenia:</p>
                        <p className="desc-sub-title">Służą do wykonywania różnych operacji.</p>
                        <ul>
                            <li><span>AX (Accumulator)</span> - składający się z dwóch 8 bitowych rejestrów AH i AL. Jest podstawowym rejestrem , używanym głównie do wykonywania operacji arytmetycznych.</li>
                            <li><span>BX (base register)</span> - rejestr odpowiadający za adresowanie przestrzeni danych.</li>
                            <li><span>CX (count register)</span> - rejestr służący jako licznik przy operacjach wykonywanych w pętli.</li>
                            <li><span>DX (data register)</span> - rejestr używany do operacji wejścia/wyjścia.  Może być także użyty razem z rejestrem AX przy wykonywaniu operacji arytmetycznych, w których są duże liczby.</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="desc-title">Pozostałe rejestry ogólnego przeznaczenia:</p>
                        <ul>
                            <li><span>Stack Pointer (SP)</span> - Rejestr zapewnia przesunięte wartości w stosie programu. W połączeniu z SS (SS:SP) odnosi się do aktualnej pozycji danych lub adresu w stosie danych.</li>
                            <li><span>Base Pointer (BP)</span> - Rejestr pomagający odwoływać się do zmiennych wysyłanych do podprogramu. Adres w rejestrze SS łączony z przesunięciem daje lokalizację parametru. Może zostać połączony z SI oraz DI jako podstawowy rejestr.</li>
                            <li><span>Source Index (SI)</span> - Jest używany jako indeks źródłowy dla operacji na stringach.</li>
                            <li><span>Destination Index (DI)</span> - Jest używany jako indeks docelowy dla operacji na stringach.</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="desc-title">Segmentowe:</p>
                        <p className="desc-sub-title">Umożliwiają wskazanie fragmentów pamięci zawierających pewien kod maszynowy.</p>
                        <ul>
                            <li><span>CS (Code Segment)</span> - Przechowuje wszystkie instrukcje, które mają zostać wykonane. Wskazuje na początek segmentu danych przydzielonego naszemu programowi.</li>
                            <li><span>DS (Data Segment)</span> - Zawiera dane, stałe oraz obszar roboczy. Przechowuje adres początkowy segmentu danych.</li>
                            <li><span>SS (Stack Segment)</span> - Zawiera dane oraz zwracanie adresy procedur. Zaimplementowany jako stos. Przechowuje adres początkowy stosu.</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="desc-title">Rejestry flag:</p>
                        <ul>
                            <li><span>Overflow Flag (OF)</span> - Wskazuje przepełnienie najbardziej znaczącego bitu danych po operacji arytmetycznej.</li>
                            <li><span>Direction Flag (DF)</span> - Określa odpowiedni kierunek (lewo lub prawo) do przesunięcia lub porównania danych w stringu. Kiedy DF ma wartość 0, operacja wykonuje się od lewej do prawej, a gdy ma wartość 1, odwrotnie.</li>
                            <li><span>Interrupt Flag (IF)</span> - Określa czy działania zewnętrzne typu wciśnięcie klawisza na klawiaturze powinno być ignorowane czy przetwarzane. Gdy wartość wynosi 0, wtedy są wyłączone. Gdy 1 - włączone.</li>
                            <li><span>Trap Flag (TF)</span> - Pozwala ustawić operacje procesora na bycie wykonywanym krok po kroku. Dzięki czemu możemy przejść przez każdą instrukcję w czasie jej wykonywania.</li>
                            <li><span>Sign Flag (SF)</span> - Pokazuje znak wyniku operacji arytmetycznej. Flaga jest ustawiana w zależności od znaku obiektu kolejnej operacji arytmetycznej. Znak jest wskazywany przez najbardziej znaczący bit. Pozytywny wynik zmienia wartość na 0, a negatywny na 1.</li>
                            <li><span>Zero Flag (ZF)</span> - Wskazuje wynik operacji arytmetycznej lub operacji porównania. Wynik inny niż 0 zmienia wartość na 0, a wynik 0 zmienia wartość na 1.</li>
                            <li><span>Auxiliary Carry Flag (AF)</span> - Obejmuje przeniesienie z bitu 3 do bitu 4 kolejnej operacji arytmetycznej. Używany w specjalistycznej arytmetyce. Wartość wynosi 1 gdy 1 bajtowa operacja powoduje przeniesienie bitu z 3 na 4.</li>
                            <li><span>Parity Flag (PF)</span> - Wskazuje całkowitą liczbę pojedynczych bitów w wyniku otrzymanym z operacji arytmetycznej. Parzysta liczba ustawia wartość flagi na 0, a nieparzysta na 1.</li>
                            <li><span>Carry Flag (CF)</span> - Obejmuje przeniesienie 0 lub 1 z najbardziej znaczącego bitu po operacji arytmetycznej. Przechowuje również zawartość ostatniego bitu z operacji. Wartość wynosi 1 gdy w wyniku dodawania lub odejmowania przekroczono możliwy zakres wartości zmiennej</li>
                        </ul>
                    </Col>
                </Row>
            </div>
        )
    }
}
