import React from "react";
import Pdf from "../../components/Pdf";

const InterruptionPage = () => {
  const interruptionPdf = require("../../assets/pdf/Przerwanie.pdf");
  return <Pdf pdfSource={interruptionPdf} title="Przerwania w języku Assembler" />;
};

export default InterruptionPage;
