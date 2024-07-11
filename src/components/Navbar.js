import React from "react";
import styles from "../styles/Navbar/Navbar.module.css";
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <Link to={"/"} className={styles.logo}>
        My<span>CIS</span>Homework
      </Link>
      <input type="checkbox" id="check" className={styles.check} />
      <label for="check" className={styles.icons}>
        <IoMenu className={[styles.bx, styles.bxMenu]} id={styles.menuIcon} />
        <AiOutlineClose
          className={[styles.bx, styles.bxMenu]}
          id={styles.closeIcon}
        />
      </label>
      <nav className={styles.navbar}>
        <Link to={"/"}>Home</Link>
        <Link to={"/Contact"}>Contact</Link>
        <Link to={"/About"}>About</Link>
      </nav>
    </header>
  );
}
