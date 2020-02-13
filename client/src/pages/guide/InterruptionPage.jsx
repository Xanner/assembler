import React from "react";
import Pdf from "../../components/Pdf";

const InterruptionPage = () => {
  const interruptionPdf = require("../../assets/pdf/Rejestry.pdf");
  return <Pdf pdfSource={interruptionPdf} title="Przerwania" />;
};

export default InterruptionPage;
