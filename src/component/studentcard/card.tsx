"use client";
import im from "../../../public/news.jpg";
import Image from "next/image";
import styles from "./student_card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import insta from "../../../public/icons grey/insta.png";
import app from "../../../public/icons grey/app.png";
import mail from "../../../public/icons grey/mail.png";
export default function Card_scrol() {
  // const [value, setvalue] = useState(0)

  // useEffect(() => {
  //   const altdivs=document.getElementsByClassName('alt')
  //   const len=altdivs.length
  //   let currentindex=0
  //  const handle=()=>{
  //   if (currentindex<=len) {
  //     altdivs[currentindex? currentindex:0]?.scrollIntoView({behavior:"smooth",block:"center"})
  //     setvalue(currentindex)
  //     console.log("function called");
  //     currentindex++;
  //   }else{
  //     currentindex=0
  //   }
  //  }

  //  const intervalId = setInterval(handle, 3000);
  //  return () => clearInterval(intervalId);

  // }, [])

  return (
    <>
      <div className={styles.wrap} id="wr">
        <div className={`row alt  ${styles.content_wrap}`}>
          <div className="col-lg-4 col-md-6 col-12">
            <h6>Saheen</h6>
            <p className={styles.conten}>
              Dept. of History <br></br>Batch 2020-25
            </p>
            <div className={styles.ic_wr}>
              <Image
                src={mail}
                alt=""
                className={styles.icc}
                style={{ marginLeft: "-2px" }}
              ></Image>
              <Image src={insta} alt="" className={styles.icc}></Image>
              <Image src={app} alt="" className={styles.icc}></Image>
            </div>
          </div>
          <div className={`col-lg-3 col-md-6 col-12 ${styles.imalg}`}>
            <Image src={im} alt="" className={styles.im}></Image>
          </div>
          <div className={`col-lg-5 col-md-12 col-12 ${styles.col_out}`}>
            <p className={styles.pera}>
              <FontAwesomeIcon icon={faQuoteLeft} className={styles.qute} />
              <br />
              The best thing about the College was being part of a supportive
              environment, where everyone is focussed, help each other and are
              encouraged to succeed as individuals.
              <br />
              <FontAwesomeIcon icon={faQuoteRight} className={styles.qute2} />
            </p>
          </div>
        </div>

        <div className={`row alt  ${styles.content_wrap}`}>
          <div className="col-lg-4 col-md-12 col-12">
            <h6>LOREM</h6>
            <p className={styles.conten}>
              Dept. of History <br></br> Batch 2020-25
            </p>
            <div></div>
          </div>
          <div className="col-lg-3 col-md-12 col-12">
            <Image src={im} alt="" className={styles.im}></Image>
          </div>
          <div className={`col-lg-5 col-md-12 col-12 ${styles.col_out}`}>
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
            <p className={styles.conten}>
              Dept. of History <br></br> Batch 2020-25
            </p>
            <div></div>
          </div>
          <div className="col-lg-3 col-md-12 col-12">
            <Image src={im} alt="" className={styles.im}></Image>
          </div>
          <div className={`col-lg-5 col-md-12 col-12 ${styles.col_out}`}>
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
