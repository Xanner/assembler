import React from "react";
import InterruptionPage from "./pages/guide/InterruptionPage";
import RegisterPage from "./pages/guide/RegisterPage";
import CodeDefinitionPage from "./pages/guide/CodeDefinitionPage";

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
  }
];

export default GuideComponents;
