import React from "react";
import Pdf from "../../components/Pdf";

const StackPage = () => {
    const interruptionPdf = require("../../assets/pdf/stack.pdf");
    const gif = require("../../assets/stack.gif");
    return (
        <Pdf
            pdfSource={interruptionPdf}
            title="Zasada działania stosu"
            image={gif}
        />
    );
};

export default StackPage;
