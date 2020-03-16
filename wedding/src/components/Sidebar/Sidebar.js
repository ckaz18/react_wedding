import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
    const listStyle = `${styles["li-top"]} ${styles.active}`;
    // return (
    //     <nav className={styles["primary-nav"]}>
    //     <ul className={styles["nav-pages"]}>
    //         <li className={listStyle}>
    //             <NavLink to="/registry">Registry</NavLink>
    //         </li>
            
    //         <li  className={styles["li-top"]}>
    //             <NavLink to="/about">About</NavLink>
    //         </li>
            
    //         <li className={styles["li-top"]}>
    //             <NavLink to="/info" >Info</NavLink>
    //         </li>
    //     </ul>
    //     </nav>
    // );
    return (
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
        </ul>
        </nav>
    );
};

export default (Sidebar);