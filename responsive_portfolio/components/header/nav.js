import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./nav.module.scss";
import Social_Icons from "../social_icons";

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div
            className={
                menuOpen ? `${style.container} ${style.container_expanded}` : style.container
            }
        >
            <div className={style.menu}>
                <img
                    src="/favicon/512x512-removebg.png"
                    alt="Nate Mosco Logo"
                    className={style.logo}
                />
                <div className={style.nav_options}>
                    <div className={style.menu_toggle}>
                        <FontAwesomeIcon
                            icon={menuOpen ? "times" : "caret-down"}
                            size="1x"
                            onClick={toggleMenu}
                            inverse
                            className={style.icon}
                        />
                        <h3 onClick={toggleMenu}>Menu</h3>
                    </div>
                    <Social_Icons className={style.social_icons} stylesheet={style} size={"2x"} />
                </div>
            </div>

            <div className={style.nav_drawer}>
                <nav>
                    <ul>
                        <Link href="/">
                            <li>Home</li>
                        </Link>
                        <Link href="/projects">
                            <li>Projects</li>
                        </Link>
                        <Link href="/resume">
                            <li>Resume</li>
                        </Link>
                        {/* <Link href="/certifications">
                            <li>Certifications</li>
                        </Link>
                        <Link href="/blog/">
                            <li>Blog</li>
                        </Link> */}
                    </ul>
                    {/* <a href="#footer"> */}
                    <button className="contact">
                        <a href="#footer">Contact</a>
                    </button>
                </nav>
            </div>
        </div>
    );
}
