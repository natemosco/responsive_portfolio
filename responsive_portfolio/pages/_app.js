import React from "react";
import App from "next/app";
import "../styles.scss";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import { fab } from "@fortawesome/free-brands-svg-icons";
import {
    // fas add this to get access to all icons,
    faCheckSquare,
    faCoffee,
    faBars,
    faUser,
    faCaretDown,
    faCaretUp,
    faToggleOff,
    faToggleOn,
    faHome,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";

library.add(
    fab,
    // fas,
    faCheckSquare,
    faCoffee,
    faBars,
    faUser,
    faCaretDown,
    faCaretUp,
    faToggleOff,
    faToggleOn,
    faHome,
    faTimes
);

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
