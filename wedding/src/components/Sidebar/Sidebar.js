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


        {/* <div className="header-container"> 
            <div className="header"> */}
    return (
        <nav className={styles["nav-container"]}>
            <div className={`container ${styles["nav"]}`}>
                <div className="header">
                    <b>Dani & Billy</b>
                    <div style={{fontSize:"1rem"}}>
                    06.20.20 -  Sedalia CO
                    </div>
                </div>
            </div>
            <ul className={styles["navigation-pages"]}>
                <li>
                    <NavLink to="/registry" className={styles["nav-link"]}>Registry</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={styles["nav-link"]}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/info" className={styles["nav-link"]}>Info</NavLink>
                </li>
                <li>
                    <NavLink to="/photos" className={styles["nav-link"]}>Photos</NavLink>
                </li>
                <li>
                    <NavLink to="/wedding-party" className={styles["nav-link"]}>Wedding Party</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default (Sidebar);