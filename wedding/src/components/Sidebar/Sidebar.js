import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
    return (
        // className={styles["primary-nav-container"]}
        <nav className={styles["primary-nav"]}>
        {/* <div>  */}
            {/*  className={styles["primary-nav"]} */}
        {/* <NavLink to="/home">
        Danielle and Billy
        </NavLink> */}
        <ul className={styles["nav-pages"]}>
            <li className={styles["li-top", "active"]}>
                <NavLink to="/registry">Registry</NavLink>
                {/*  className={styles["nav-link"]} */}
            </li>
            
            <li  className={styles["li-top"]}>
                <NavLink to="/about">About</NavLink>
            </li>
            
            <li className={styles["li-top"]}>
                <NavLink to="/info" >Info</NavLink>
            </li>
        </ul>
        {/* </div> */}
        </nav>
    );
};

export default (Sidebar);