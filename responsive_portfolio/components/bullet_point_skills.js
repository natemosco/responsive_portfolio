import React from "react";
import style from "./bullet_point_skills.module.scss";

import * as Icon from "./svg";

export default function BulletPointSkills() {
    return (
        <div className={style.svg_container}>
            <h2>My Skillset Includes:</h2>
            <div className={style.icons}>
                <Icon.PythonSvg size="32px" />
                <Icon.JavascriptSvg size="32px" />
                <Icon.ReactSvg size="32px" />
                <Icon.ReduxSvg size="32px" />
                <Icon.NodeJsSvg size="32px" />
                <Icon.NextJsSvg size="32px" />
                <Icon.GraphqlSvg size="32px" />
                <Icon.PostgreSQLSvg size="32px" />
                <Icon.SqlSvg size="32px" />
                <Icon.Html5Svg size="32px" />
                <Icon.Css3Svg size="32px" />
                <Icon.SassSvg size="32px" />
                <Icon.ZeitSvg size="32px" />
                <Icon.HerokuSvg size="32px" />
                <Icon.NetlifySvg size="32px" />
                <Icon.GithubSvg size="32px" />
            </div>
        </div>
    );
}
