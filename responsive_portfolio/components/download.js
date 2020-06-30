import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./download.module.scss";

export default function Download() {
    return (
        <a href="/Resume.pdf" download="Nathaniel Mosco's Resume" className={style.tdn}>
            <div className={style.button}>
                <FontAwesomeIcon icon="download" size="sm" />
                <span className={style.select}>Download</span>
                <div className={style.inner_div}></div>
            </div>
        </a>
    );
}
