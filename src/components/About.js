import React from "react";
import styles from "../styles/About/About.module.css";
import Navbar from "./Navbar";
import img from "../assets/CIS.jpg";

export default function About() {
  return (
    <>
      <Navbar />
      <div></div>
      <div>
        <div className={styles.warpper}>
          <div className={styles.testimonial}>
            <article>
              <h1>About Us</h1>
              <img src={img} alt="" />

              <blockquote>
                Welcome to CIS, a dedicated institution for ESL learners. Our
                mission is to empower students with the language skills they
                need to succeed in their personal and professional lives. At
                CIS, we provide a supportive and engaging learning environment,
                tailored to meet the diverse needs of our students.
              </blockquote>
              <h5>CIS Team</h5>
              <p>&copy; 2024 CIS Basra, Iraq </p>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
