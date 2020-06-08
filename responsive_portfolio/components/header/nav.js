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
                        <a onClick={toggleMenu}>
                            <FontAwesomeIcon
                                icon={menuOpen ? "times" : "caret-down"}
                                size="1x"
                                onClick={toggleMenu}
                                inverse
                                className={style.icon}
                            />
                        </a>
                        <h3 onClick={toggleMenu}>Menu</h3>
                    </div>
                    <Social_Icons className={style.social_icons} stylesheet={style} size={"2x"} />
                </div>
            </div>

            <div className={style.nav_drawer}>
                <nav>
                    <ul>
                        <Link href="/">
                            <a>
                                <li>Home</li>
                            </a>
                        </Link>
                        <Link href="/projects">
                            <a>
                                <li>Projects</li>
                            </a>
                        </Link>
                        <Link href="/resume">
                            <a>
                                <li>Resume</li>
                            </a>
                        </Link>
                        {/* <Link href="/certifications">
                            <a>
                                <li>Certifications</li>
                            </a>
                        </Link>
                        <Link href="/blog/">
                            <a>
                                <li>Blog</li>
                            </a>
                        </Link> */}
                    </ul>
                    {/* <a href="#footer"> */}
                    <a href="#footer">
                        <button className="contact">Contact</button>
                    </a>
                </nav>
            </div>
        </div>
    );
}
