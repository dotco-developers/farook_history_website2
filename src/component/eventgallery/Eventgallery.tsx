"use client";
import Image from "next/image";
import styles from "./gallery.module.css";
import im from "../../../public/imbnr.jpg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPlay, faVideo } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
export default function Gallery({ image, video }: any) {
  const [content, setcontent] = useState(true);
  const handler = () => {
    setcontent(!content);
  };
  return (
    <div className={`row ${styles.row4} `}>
      <h2>EVENT GALLERY</h2>
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
          {image.map((x: any, i: number) => (
            <div className="col-lg-4 col-12" key={i}>
              <Link href={x.image} target="_blank">
                <Image width={300} height={300} src={x.image} alt="" className={styles.im}></Image>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        // video
        <div className="row">
          {video.map((x: any, i: number) => (
            <div className="col-lg-4 col-12" style={{ position: "relative" }} key={i}>
              <FontAwesomeIcon icon={faPlay} className={styles.play} />
              <Image width={300} height={300} src={im} alt="" className={styles.vid}></Image>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
