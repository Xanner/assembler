import React from "react";
import Pdf from "../../components/Pdf";

const SISDPage = () => {
  const interruptionPdf = require("../../assets/pdf/SISD.pdf");
  return (
    <Pdf
      pdfSource={interruptionPdf}
      title="Single Instruction Single Data"
    />
  );
};

export default SISDPage;
