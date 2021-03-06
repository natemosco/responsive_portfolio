import React from "react";
import style from "./footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Social_Icons from "../social_icons";
export default function Footer({ home }) {
    return (
        <footer className={style.footer} id="footer">
            <section className={style.contact}>
                <div>
                    <pre>ADDRESS </pre>
                    <span>Marion, IN 46952</span>
                </div>
                <div>
                    <pre>PHONE </pre>
                    <a className={style.link} href="tel:1-765-251-8941">
                        +1 (765) 251-8941
                    </a>
                </div>
                <div>
                    <pre>EMAIL </pre>
                    <a className={style.link} href="mailto:natemosco@gmail.com">
                        natemosco@gmail.com
                    </a>
                </div>
                <div>
                    <pre>SOCIAL </pre>
                    <Social_Icons className={style.social_icons} stylesheet={style} />
                </div>
            </section>
            <section className={style.credits}>
                {home && (
                    <span className={style.photo_credits}>
                        {" "}
                        Photos by{" "}
                        <a href="https://unsplash.com/photos/ntX2TjKrzLc" target="blank">
                            Gabriel Beaudry
                        </a>
                        {"  "}
                        and{" "}
                        <a href="https://www.mjdobbsphotography.com/" target="blank">
                            MJ Dobbs Photography
                        </a>{" "}
                    </span>
                )}
                <span>Original Web Design: © Nathaniel Mosco</span>
            </section>
        </footer>
    );
}
