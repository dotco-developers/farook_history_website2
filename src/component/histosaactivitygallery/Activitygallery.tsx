"use client";
import Image from "next/image";
import styles from "./activity.module.css";
import im from "../../../public/imbnr.jpg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPlay, faVideo } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
export default function Activity() {
  const [content, setcontent] = useState(true);
  const handler = () => {
    setcontent(!content);
  };
  return (
    <section>
      <div className="container">
      <div className={`row ${styles.row4} `}>
      <div className="co-lg-12 col-12">
        {" "}
        <h2> GALLERY</h2>
      </div>
      <div
        className={`col-lg-6 col-6 ${styles.btn} ${content ? styles.clr : ""}`}
        onClick={handler}
      >
        <FontAwesomeIcon
          icon={faImage}
          className={`${styles.mic}  ${content ? styles.clr2 : styles.clr3}`}
        />
      </div>
      <div
        className={`col-lg-6 col-6 ${styles.btn}  ${content ? "" : styles.clr}`}
        onClick={handler}
      >
        <FontAwesomeIcon
          icon={faVideo}
          className={`${styles.mic} ${content ? styles.cl3 : styles.clr2}`}
        />
      </div>
      {content ? (
        <div className="row">
          <div className="col-lg-4 col-12">
            <Link href={im.src} target="_blank">
              <Image src={im} alt="" className={styles.im}></Image>
            </Link>
          </div>
          <div className="col-lg-4 col-12">
            <Image src={im} alt="" className={styles.im}></Image>
          </div>
          <div className="col-lg-4 col-12">
            <Image src={im} alt="" className={styles.im}></Image>
          </div>
        </div>
      ) : (
        // video
        <div className="row">
          <div className="col-lg-4 col-12" style={{ position: "relative" }}>
            <FontAwesomeIcon icon={faPlay} className={styles.play} />
            <Image src={im} alt="" className={styles.vid}></Image>
          </div>
          <div className="col-lg-4 col-12" style={{ position: "relative" }}>
            <FontAwesomeIcon icon={faPlay} className={styles.play} />
            <Image src={im} alt="" className={styles.vid}></Image>
          </div>
        </div>
      )}
    </div> 

      </div>
     
    </section>
  );
}
