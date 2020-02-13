import React from "react";
import Pdf from "../../components/Pdf";

const HexPage = () => {
  const interruptionPdf = require("../../assets/pdf/hex.pdf");
  return (
    <Pdf
      pdfSource={interruptionPdf}
      title="Konwersja Hex"
    />
  );
};

export default HexPage;
