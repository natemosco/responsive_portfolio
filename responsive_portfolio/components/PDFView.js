import React from "react";
import style from "./PDFView.module.scss";
import Download from "./download";

function PDFView() {
    return (
        <div className={style.embed_container}>
            <embed src="/Resume.pdf#view=FitH" className={style.embed} />
            <div className={style.small_screen_option}>
                <Download />
            </div>
        </div>
    );
}

export default PDFView;
