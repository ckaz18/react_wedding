import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
    const listStyle = `${styles["li-top"]} ${styles.active}`;
    // MOST RECENT
        {/* <div>
            <nav className={styles["primary-nav-2"]}>
            <ul className={styles["primary-nav-2"]}>
                <li>
                    <NavLink to="/registry">Registry</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/info" >Info</NavLink>
                </li>
                <li>
                    <NavLink to="/photos" >Photos</NavLink>
                </li>
                <li>
                    <NavLink to="/wedding-party" >Wedding Party</NavLink>
                </li>
            </ul>
            </nav>
        </div> */}
    return (
        <div className="header-container">
            <div className="header">
                <nav className={styles["sidebar-container"]}>
                <ul className={styles["sidebar-container"]}>
                    <li>
                        <NavLink to="/registry">Registry</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/info" >Info</NavLink>
                    </li>
                    <li>
                        <NavLink to="/photos" >Photos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/wedding-party" >Wedding Party</NavLink>
                    </li>
                </ul>
                </nav>
            </div>
        </div>
    );
};

export default (Sidebar);