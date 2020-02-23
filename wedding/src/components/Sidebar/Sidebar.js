import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
    return (
        <nav className={styles["primary-nav-container"]}>
        <div className={styles["primary-nav"]}>
        <NavLink to="/home">
        Danielle and Billy
        </NavLink>
        <ul className={styles["nav-pages"]}>
            <li>
                <NavLink to="/registry" className={styles["nav-link"]}>Registry</NavLink>
            </li>
            
            <li>
                <NavLink to="/about" className={styles["nav-link"]}>About</NavLink>
            </li>
        </ul></div></nav>
    );
};

export default (Sidebar);