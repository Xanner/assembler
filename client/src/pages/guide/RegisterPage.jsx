import React from "react";
import Pdf from "../../components/Pdf";

const RegisterPage = () => {
  const interruptionPdf = require("../../assets/pdf/Rejestry.pdf");
  return (
    <Pdf pdfSource={interruptionPdf} title="Rejestry ogólnego przeznaczenia" />
  );
};

export default RegisterPage;
