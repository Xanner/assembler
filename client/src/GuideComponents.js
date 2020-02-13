import React from "react";
import InterruptionPage from "./pages/guide/InterruptionPage";
import RegisterPage from "./pages/guide/RegisterPage";
import CodeDefinitionPage from "./pages/guide/CodeDefinitionPage";
import AddressPage from "./pages/guide/AddressPage";
import ASCIIPage from "./pages/guide/ASCIIPage";
import CommendsPage from "./pages/guide/CommendsPage";
import HexPage from "./pages/guide/InternalMemoryPage";
import SISDPage from "./pages/guide/SISDPage";
import StackPage from "./pages/guide/StackPage";

const GuideComponents = [
  {
    key: "register",
    name: "Rejestr",
    route: "/guide/register",
    component: RegisterPage
  },
  {
    key: "interruption",
    name: "Przerwania",
    route: "/guide/interruption",
    component: InterruptionPage
  },
  {
    key: "code-defiition",
    name: "Definicja kodu",
    route: "/guide/code-definition",
    component: CodeDefinitionPage
  },
  {
    key: "adress-page",
    name: "Adresowanie Pamięci",
    route: "/guide/address",
    component: AddressPage
  },
  {
    key: "ascii",
    name: "Tablica kodów ASCII",
    route: "/guide/ascii",
    component: ASCIIPage
  },
  {
    key: "commends",
    name: "Komendy i kody liczbowe",
    route: "/guide/commends",
    component: CommendsPage
  },
  {
    key: "hex",
    name: "Konwersja Hex",
    route: "/guide/hex",
    component: HexPage
  },
  {
    key: "internal-memory",
    name: "Budowa pamięci wewnętrznej",
    route: "/guide/internal",
    component: CodeDefinitionPage
  },
  {
    key: "sisd",
    name: "SISD",
    route: "/guide/sisd",
    component: SISDPage
  },
  {
    key: "stack",
    name: "Stos",
    route: "/guide/stack",
    component: StackPage
  }
];

export default GuideComponents;
