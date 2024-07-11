import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/home/home.module.css";
import img from "../assets/homeBook.png";
import Navbar from "./Navbar.js";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className={styles.home}>
        <div className={styles.homeContent}>
          <h1>
            My<span>CIS</span>HomeWork
          </h1>
          <h3>Welcome to CIS</h3>
          <p>
            Unlock Your Full Potential in English Language Learning At CIS
            College we believe that every student has the potential to excel in
            English. Our platform offers a comprehensive range of resources and
            Exercises to help you achieve your language learning goals.
          </p>
          <Link className={styles.btn} to={"login"}>
            Login
          </Link>
        </div>
        <div className={styles.homeImg}>
          <div className={styles.rhombus}>
            <img src={img} alt="" />
          </div>
        </div>
        <div className={styles.rhombus2}></div>
      </section>
    </div>
  );
}
