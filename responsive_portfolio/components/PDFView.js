import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import style from "./PDFView.module.scss";

function MyApp() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <Document file="/Resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                <Page className={style.pdf} pageNumber={pageNumber} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    );
}

export default MyApp;
