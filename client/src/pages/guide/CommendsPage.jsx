import React from "react";
import Pdf from "../../components/Pdf";

const CommendsPage = () => {
  const interruptionPdf = require("../../assets/pdf/Komendy-i-kody-liczbowe.pdf");
  return (
    <Pdf
      pdfSource={interruptionPdf}
      title="Komendy i kody liczbowe"
    />
  );
};

export default CommendsPage;
