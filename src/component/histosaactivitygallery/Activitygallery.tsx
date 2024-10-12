"use client";
import Image from "next/image";
import styles from "./activity.module.css";
import im from "../../../public/imbnr.jpg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPlay, faVideo } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
export default function Activity({ data }: any) {
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
            className={`col-lg-6 col-6 ${styles.btn} ${
              content ? styles.clr : ""
            }`}
            onClick={handler}
          >
            <FontAwesomeIcon
              icon={faImage}
              className={`${styles.mic}  ${
                content ? styles.clr2 : styles.clr3
              }`}
            />
          </div>
          <div
            className={`col-lg-6 col-6 ${styles.btn}  ${
              content ? "" : styles.clr
            }`}
            onClick={handler}
          >
            <FontAwesomeIcon
              icon={faVideo}
              className={`${styles.mic} ${content ? styles.cl3 : styles.clr2}`}
            />
          </div>
          {content ? (
            <div className="row">
              {data.filter((x: any) => x.link == null).map((x: any, i: number) => (
                <div className="col-lg-4 col-12" key={i}>
                  <Link href={x.image} target="_blank">
                    <Image
                      src={x.image}
                      width={400}
                      height={400}
                      alt=""
                      className={styles.im}
                    ></Image>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            // video
            <div className="row">
              {data
                .filter((x: any) => x.link != null)
                .map((item: any, i: any) => (
                  <Link href={`${item.link}`}>
                    <div
                      className="col-lg-4 col-12"
                      style={{ position: "relative" }}
                      key={i}
                    >
                      <FontAwesomeIcon icon={faPlay} className={styles.play} />
                      <Image
                        src={item.image}
                        width={400}
                        height={400}
                        alt=""
                        className={styles.vid}
                      ></Image>
                    </div>
                  </Link>
                ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
