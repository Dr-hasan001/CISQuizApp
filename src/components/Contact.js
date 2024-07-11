import React from "react";
import styles from "../styles/Contact/Contact.module.css";
import Navbar from "../components/Navbar";
import { AiFillFacebook } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTiktok } from "react-icons/io5";

export default function Contact() {
  const facebook = "https://www.facebook.com/ciscollegebasrah?mibextid=ZbWKwL";
  const insta =
    "https://www.instagram.com/ciscollegebasrah/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D";
  const tiktok = "https://www.tiktok.com/@cis.basrah?_t=8nntdy14TBu&_r=1";
  return (
    <>
      <Navbar></Navbar>
      <div>
        <h2 className={styles.header} style={styles}>
          For more Information please visit us:
        </h2>
        <div className={styles.socialMedia}>
          <a
            className={styles.face}
            href={facebook}
            rel="noreferrer"
            target="_blank"
          >
            <AiFillFacebook></AiFillFacebook>
          </a>
          <a
            className={styles.insta}
            href={insta}
            rel="noreferrer"
            target="_blank"
          >
            <IoLogoInstagram></IoLogoInstagram>
          </a>
          <a
            className={styles.tiktok}
            href={tiktok}
            rel="noreferrer"
            target="_blank"
          >
            <IoLogoTiktok></IoLogoTiktok>
          </a>
        </div>
      </div>
    </>
  );
}
