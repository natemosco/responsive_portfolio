import React, { useState, useEffect } from "react";

function PDFView() {
    return (
        <div style={{ height: "95%", width: "50%" }}>
            <embed src="/Resume.pdf#view=FitH" style={{ height: "100%", width: "100%" }} />
        </div>
    );
}

export default PDFView;
