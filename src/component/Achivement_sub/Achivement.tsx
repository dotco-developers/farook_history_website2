"use client";
import { Component, useEffect, useState } from "react";
import styles from "./achievement.module.css";
import im from "../../../public/icons grey/fac1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import fca1 from "../../../public/icons grey/fca2.png";
import CountUp from "react-countup";

export default function Achivement({ data }: any) {
  const [counterdata, setcounterdata] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [first, setfirst] = useState(true);

  function handle() {
    setfirst(!first);
  }

  const [content, setcontent] = useState(true);
  const handler = () => {
    setcontent(!content);
  };

  useEffect(() => {
    const interval = setInterval(handle, 5000);
    return () => clearInterval(interval);
  }, [first]);

  useEffect(() => {
    setcounterdata(data?.countup);
  }, [counterdata]);

  return (
    <section id={styles.about}>
      <div className={styles.headmain}>
        <div className="container">
          <Image className={styles.fca} src={fca1} alt="" />
          <div className="row">
            <div className={`col-lg-8 col-md-12 col-12 ${styles.headsub}`}>
              <h1>
                OUR GREATEST <br />
                ACHIEVEMENTS
              </h1>
              <br />
              <br />
              {data.data?.map((x: any, i: number) => (
                <div
                  dangerouslySetInnerHTML={{ __html: x.description }}
                  key={i}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {counterdata ? (
        <div className={styles.counter}>
          {counterdata?.map((x: any, i: number) => (
            <div className={`col-lg-3 col-12 ${styles.countersub} `} key={i}>
              <h3>
                <CountUp
                  start={0}
                  end={x.count}
                  duration={4}
                  decimals={0}
                  suffix="+"
                >
                  {({ countUpRef, start }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
              </h3>
              <h5>{x.name}</h5>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}

      {/* <div className={styles.carousel} {...swipeHandlers}>
        <button className={styles.arrow} onClick={prevSlide}>
          &#10094;
        </button>
        <div className={styles.slides}>
          {image?.slice(currentIndex, currentIndex + 3).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={styles.slide}
            />
          ))}
        </div>
        <button className={styles.arrow} onClick={nextSlide}>
          &#10095;
        </button>
      </div> */}

      <div className="container">
        <div className={`row ${styles.row4} `}>
          <div
            className={`col-lg-6 col-6 ${styles.btn} ${
              content ? styles.clr : ""
            }`}
            onClick={handler}
          >
            <h1
              className={`${styles.mic}  ${
                content ? styles.clr2 : styles.clr3
              }`}
            >
              {" "}
              Faculty achievements
            </h1>
          </div>
          <div
            className={`col-lg-6 col-6 ${styles.btn}  ${
              content ? "" : styles.clr
            }`}
            onClick={handler}
          >
            <h1
              className={`${styles.mic} ${content ? styles.cl3 : styles.clr2}`}
            >
              {" "}
              Student achievements
            </h1>
          </div>
          {content ? (
            <div className="container">
              <div className="row">
                {data?.facultydata?.map((x: any, i: number) => (
                  <div
                    className={styles.card}
                    key={i}
                    style={{
                      width: "90%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <div className="row">
                      <Link href={`${x.cv}`}>
                        <button className={styles.btncv}>Download CV</button>
                      </Link>

                      <div className={`col-lg-4 col-12 ${styles.cardimg}`}>
                        <Image
                          width={300}
                          height={200}
                          src={x.image}
                          alt=""
                          className={styles.imgcard}
                        ></Image>
                      </div>
                      <div className={`col-lg-8 col-12 ${styles.cardcont}`}>
                        <h1>{x.name}</h1>
                        <h4>
                          {" "}
                          <FontAwesomeIcon
                            icon={faClock}
                            className="size-[15px]"
                          />{" "}
                          {x.date}
                        </h4>

                        <br />
                        <h5>{x.designation}</h5>
                        <br />

                        <div
                          dangerouslySetInnerHTML={{ __html: x.description }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="container">
              <div className="row">
                {data?.studentdata?.map((x: any, i: number) => (
                  <div
                    className={styles.card}
                    key={i}
                    style={{
                      width: "90%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <div className="row">
                      <Link href={`${x.cv}`}>
                        <button className={styles.btncv}>Download CV</button>
                      </Link>

                      <div className={`col-lg-4 col-12 ${styles.cardimg}`}>
                        <Image
                          width={300}
                          height={200}
                          src={x.image}
                          alt=""
                          className={styles.imgcard}
                        ></Image>
                      </div>
                      <div className={`col-lg-8 col-12 ${styles.cardcont}`}>
                        <h1>{x.name}</h1>
                        <h4>
                          {" "}
                          <FontAwesomeIcon
                            icon={faClock}
                            className="size-[15px]"
                          />{" "}
                          {x.date}
                        </h4>

                        <br />
                        <h5>{x.designation}</h5>
                        <br />

                        <div
                          dangerouslySetInnerHTML={{ __html: x.description }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
