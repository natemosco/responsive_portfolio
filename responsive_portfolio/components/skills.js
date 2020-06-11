import React from "react";
import style from "./skills.module.scss";

import * as Icon from "./svg";

export default function skills() {
    return (
        <div className={style.svg_container}>
            <h2>My Skillset Includes:</h2>
            <div className={style.icons}>
                <Icon.PythonSvg />
                <Icon.JavascriptSvg />
                <Icon.ReactSvg />
                <Icon.ReduxSvg />
                <Icon.NodeJsSvg />
                <Icon.NextJsSvg />
                <Icon.GraphqlSvg />
                <Icon.PostgreSQLSvg />
                <Icon.SqlSvg />
                <Icon.Html5Svg />
                <Icon.Css3Svg />
                <Icon.SassSvg />
                <Icon.ZeitSvg />
                <Icon.HerokuSvg />
                <Icon.NetlifySvg />
                <Icon.GithubSvg />
            </div>
        </div>
    );
}
