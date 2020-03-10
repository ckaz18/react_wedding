import React from "react";
import styles from "./About.module.css";
import estes from "../../images/estes.png";

const About = () => {
    return (
        <div>
            <section className={styles.main} id="main" data-section="about">
            About
            <h3>Danielle Shriver & Billy Askew</h3>
            <div className={styles.aboutFont}>
            <img src={estes} alt='Danielle and Billy' className={styles.rotateImage}/><br></br>
                Join us for the Summer Solstice
                <p>
                    Saturday
                </p>
                <p>
                    June 20th, 2020
                </p>
                <p>
                    Sedalia, CO
                </p>
            </div>
            </section>
        </div>
    );
};

export default (About)