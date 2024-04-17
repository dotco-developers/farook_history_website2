"use client";
import im from "../../../public/news.jpg";
import Image from "next/image";
import styles from "./student_card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

export default function Card_scrol() {


  return (
    <>
      <div className={styles.wrap}  id="wr" >
        <div className={`row alt  ${styles.content_wrap}`}>
          <div className="col-lg-4 col-md-12 col-12">
            <h6>LOREM</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est,
              rerum ex, minima corrupti quae labore ducimus quam dolor minus hic
              totam modi quod expedita eaque cum quibusdam eos natus delectus?
            </p>
            <div></div>
          </div>
          <div className={`col-lg-3 col-md-12 col-12 `}>
            <Image src={im} alt="" className={styles.im}></Image>
          </div>
          <div className={`col-lg-4 col-md-12 col-12 ${styles.col_out}`}>
            <p className={styles.pera}>
              <FontAwesomeIcon icon={faQuoteLeft} className={styles.qute} />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rem
              rerum reiciendis ipsa iste quae deleniti commodi dignissimos vitae
              distinctio nulla sapiente adipisci reprehenderit, laborum ad, at
              nostrum dolorem asperiores?
              <br />
              <FontAwesomeIcon icon={faQuoteRight} className={styles.qute2} />
            </p>
          </div>
        </div>

        <div className={`row alt  ${styles.content_wrap}`}>
          <div className="col-lg-4 col-md-12 col-12">
            <h6>LOREM</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est,
              rerum ex, minima corrupti quae labore ducimus quam dolor minus hic
              totam modi quod expedita eaque cum quibusdam eos natus delectus?
            </p>
            <div></div>
          </div>
          <div className="col-lg-3 col-md-12 col-12">
            <Image src={im} alt="" className={styles.im}></Image>
          </div>
          <div className={`col-lg-4 col-md-12 col-12 ${styles.col_out}`}>
            <p className={styles.pera}>
              <FontAwesomeIcon icon={faQuoteLeft} className={styles.qute} />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rem
              rerum reiciendis ipsa iste quae deleniti commodi dignissimos vitae
              distinctio nulla sapiente adipisci reprehenderit, laborum ad, at
              nostrum dolorem asperiores?
              <br />
              <FontAwesomeIcon icon={faQuoteRight} className={styles.qute2} />
            </p>
          </div>
        </div>
        <div className={`row alt ${styles.content_wrap}`}>
          <div className="col-lg-4 col-md-12 col-12">
            <h6>LOREM</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est,
              rerum ex, minima corrupti quae labore ducimus quam dolor minus hic
              totam modi quod expedita eaque cum quibusdam eos natus delectus?
            </p>
            <div></div>
          </div>
          <div className="col-lg-3 col-md-12 col-12">
            <Image src={im} alt="" className={styles.im}></Image>
          </div>
          <div className={`col-lg-4 col-md-12 col-12 ${styles.col_out}`}>
            <p className={styles.pera}>
              <FontAwesomeIcon icon={faQuoteLeft} className={styles.qute} />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rem
              rerum reiciendis ipsa iste quae deleniti commodi dignissimos vitae
              distinctio nulla sapiente adipisci reprehenderit, laborum ad, at
              nostrum dolorem asperiores?
              <br />
              <FontAwesomeIcon icon={faQuoteRight} className={styles.qute2} />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
