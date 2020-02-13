import React from "react";
import InterruptionPage from "./pages/guide/InterruptionPage";
import RegisterPage from "./pages/guide/RegisterPage";

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
  }
];

export default GuideComponents;
