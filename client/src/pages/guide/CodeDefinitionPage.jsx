import React from "react";
import Pdf from "../../components/Pdf";

const CodeDefinitionPage = () => {
  const interruptionPdf = require("../../assets/pdf/DefinicjaKodu.pdf");
  return (
    <Pdf
      pdfSource={interruptionPdf}
      title="Definicja podstawy kodu w Assemblerze"
    />
  );
};

export default CodeDefinitionPage;
