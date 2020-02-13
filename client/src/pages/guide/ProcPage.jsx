import React from "react";
import Pdf from "../../components/Pdf";

const ProcPage = () => {
  const interruptionPdf = require("../../assets/pdf/Proc.pdf");
  return (
    <Pdf
      pdfSource={interruptionPdf}
      title="Procedury w języku Assembler"
    />
  );
};

export default ProcPage;
