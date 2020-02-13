import React from "react";
import Pdf from "../../components/Pdf";

const AddressPage = () => {
  const interruptionPdf = require("../../assets/pdf/Adresowanie-Pamieci.pdf");
  return (
    <Pdf
      pdfSource={interruptionPdf}
      title="Adresowanie Pamięci"
    />
  );
};

export default AddressPage;
