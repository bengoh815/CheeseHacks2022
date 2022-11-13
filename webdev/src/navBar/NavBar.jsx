import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";
import styles from "../../styles/NavBar.module.css";

const MENU_LIST = [
    {text: "Home", href: "/"},
    {text: "About", href: "/about"},
];

const NavBar = () => {
    const [navActive, setNavActive] = useState(null);
    const [activeIdx, setActiveIdx] = useState(-1);

    return (
        <header>
            <nav className={styles.nav}>
                <Link href={"/"}>
                    <Image
                        src="/logo.png"
                        alt="Logo picture"
                        width={100}
                        height={100}
                    />
                </Link>
                <div
                    onClick={() => setNavActive(!navActive)}
                    className={styles.nav__menuBar}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.nav__menuList}>
                    {MENU_LIST.map((menu, idx) => (
                        <div
                            onClick={() => {
                                setActiveIdx(idx);
                                setNavActive(false);
                            }}
                            key={menu.text}
                        >
                        <NavItem active={activeIdx === idx} {...menu} />
                        </div>
                    ))}
                </div>
            </nav>
        </header>
    );
}

export default NavBar;