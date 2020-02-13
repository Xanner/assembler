import React from "react";
import Pdf from "../../components/Pdf";

const HexPage = () => {
  const interruptionPdf = require("../../assets/pdf/budowa_pamieci_wew.pdf");
  return (
    <Pdf
      pdfSource={interruptionPdf}
      title="Budowa pamięci wewnętrznej"
    />
  );
};

export default HexPage;
