import React from "react";
import Pdf from "../../components/Pdf";

const ASCIIPage = () => {
  const interruptionPdf = require("../../assets/pdf/ASCII.pdf");
  return (
    <Pdf
      pdfSource={interruptionPdf}
      title="Tablica kodów ASCII"
    />
  );
};

export default ASCIIPage;
