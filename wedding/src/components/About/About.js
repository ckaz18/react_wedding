import React from "react";
import styles from "./About.module.css";
import estes from "../../images/estes.png";

const About = () => {
    return (
        <div className={styles.parent} id="parent">
            {/* <section className="main" id="main" data-section="about">
            About
            <h3>Danielle Shriver & Billy Askew</h3>
            <div className={styles.aboutFont}>
            <img src={estes} alt='Danielle and Billy' className={styles.rotateImage}/><br></br>
                Join us for the Summer Solstice
               
            </div>
            </section> */}
            <div className={styles["child-1"]}><img src={estes} alt='Danielle and Billy' className={styles.rotateImage}/>
            </div>
            <div className="child-2">Hello</div>
        </div>
    );
};

export default (About)