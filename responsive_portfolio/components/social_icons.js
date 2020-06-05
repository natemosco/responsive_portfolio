import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Social_Icons({ size = "lg", ...props }) {
    return (
        <span className={props.className}>
            <a href="https://www.linkedin.com/in/natemosco/" target="_blank">
                <FontAwesomeIcon
                    className={props.stylesheet.linkedin_icon}
                    icon={["fab", "linkedin"]}
                    size={size}
                />
            </a>
            <a href="https://github.com/natemosco" target="_blank">
                <FontAwesomeIcon
                    className={props.stylesheet.github_icon}
                    icon={["fab", "github"]}
                    size={size}
                />
            </a>
            <a href="https://twitter.com/natemosco" target="_blank">
                <FontAwesomeIcon
                    className={props.stylesheet.twitter_icon}
                    icon={["fab", "twitter"]}
                    size={size}
                />
            </a>
        </span>
    );
}
