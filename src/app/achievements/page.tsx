"use client";
import { Component, useEffect, useState } from "react";
import styles from "./achievements.module.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.css";
import im from "../../../public/icons grey/fac1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faPlay,
  faClock,
  faLocationPin,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import { FiTarget } from "react-icons/fi";
import { FaEye } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import fca1 from "../../../public/icons grey/fca2.png";
import fac1 from "../../../public/icons grey/fac1.png";
import { AiFillInstagram } from "react-icons/ai";
import { FaRegFilePdf } from "react-icons/fa";
import CountUp from "react-countup";
import { useSwipeable } from "react-swipeable";

export default function about() {
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
    const interval = setInterval(handle, 5000); // Change cards every 5 seconds

    return () => clearInterval(interval); // Cleanup function to clear interval on unmount
  }, [first]); // Update the effect whenever isFirstCard changes

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/icons grey/car1.jpg",
    "/icons grey/car2.jpg",
    "/icons grey/car1.jpg",
    "/icons grey/car2.jpg",
    "/icons grey/car1.jpg",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 3 : prevIndex - 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
  });

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
              <p>
                The Department of History, re-designated in 1991, offers
                post-graduate programme in History. The curriculum of the course
                carries specialization in Islamic History enabling the students
                to enjoy the benefits that go along with History and Islamic
                History course structure. The course has conventional form of
                terminal examination and internal evaluations in addition to the
                submission of dissertation by the candidate for the fulfillment
                of the requirements of the University of Calicut.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.counter}>
        <div className={`col-lg-3 col-12 ${styles.countersub} `}>
          <h3>
            <CountUp start={0} end={100} duration={4} decimals={0} suffix="+">
              {({ countUpRef, start }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
          </h3>
          <h5>students</h5>
        </div>

        <div className={`col-lg-3 col-12 ${styles.countersub} `}>
          <h3>
            <CountUp start={0} end={100} duration={4} decimals={0} suffix="+">
              {({ countUpRef, start }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
          </h3>
          <h5>students</h5>
        </div>
        <div className={`col-lg-3 col-12 ${styles.countersub} `}>
          <h3>
            <CountUp start={0} end={100} duration={4} decimals={0} suffix="+">
              {({ countUpRef, start }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
          </h3>
          <h5>students</h5>
        </div>

        <div className={`col-lg-3 col-12 ${styles.countersub} `}>
          <h3>
            <CountUp start={0} end={100} duration={4} decimals={0} suffix="+">
              {({ countUpRef, start }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
          </h3>
          <h5>students</h5>
        </div>
      </div>

      <div className={styles.carousel} {...swipeHandlers}>
        <button className={styles.arrow} onClick={prevSlide}>
          &#10094;
        </button>
        <div className={styles.slides}>
          {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
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
      </div>

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
                <div className={styles.card}>
                  <div className="row">
                    <Link href={"/faculties"}>
                      <div className={styles.btncv}>
                        <h3>Download CV</h3>
                      </div>
                    </Link>

                    <div className={`col-lg-4 col-12 ${styles.cardimg}`}>
                      <Image src={im} alt="" className={styles.imgcard}></Image>
                    </div>
                    <div className={`col-lg-8 col-12 ${styles.cardcont}`}>
                      <h1>LOREM IPSUM</h1>
                      <h4>
                        {" "}
                        <FontAwesomeIcon icon={faClock} className="size-[15px]"/> 12 January 2024 |
                        12:30 pm
                      </h4>
                      <h4>
                        {" "}
                        <FontAwesomeIcon icon={faLocationPin} className="size-[15px]" /> Lorem ipsum,
                        India
                      </h4>
                      <br />
                      <h5>to popupar belife,</h5>
                      <h5>Lorem ipsum</h5>
                      <br />

                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ea, nostrum velit! Cupiditate, nostrum laborum
                        laudantium autem soluta labore placeat quam animi, iure
                        dolorum possimus molestias voluptas dignissimos ut
                        repellat fuga?
                      </p>
                      <div className={styles.icondiv}>logo | logo | logo</div>
                    </div>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className="row">
                    <Link href={"/faculties"}>
                      <div className={styles.btncv}>
                        <h3>Download CV</h3>
                      </div>
                    </Link>

                    <div className={`col-lg-4 col-12 ${styles.cardimg}`}>
                      <Image src={im} alt="" className={styles.imgcard}></Image>
                    </div>
                    <div className={`col-lg-8 col-12 ${styles.cardcont}`}>
                      <h1>LOREM IPSUM</h1>
                      <h4>
                        {" "}
                        <FontAwesomeIcon icon={faClock} /> 12 January 2024 |
                        12:30 pm
                      </h4>
                      <h4>
                        {" "}
                        <FontAwesomeIcon icon={faLocationPin} /> Lorem ipsum,
                        India
                      </h4>
                      <br />
                      <h5>to popupar belife,</h5>
                      <h5>Lorem ipsum</h5>
                      <br />

                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ea, nostrum velit! Cupiditate, nostrum laborum
                        laudantium autem soluta labore placeat quam animi, iure
                        dolorum possimus molestias voluptas dignissimos ut
                        repellat fuga?
                      </p>
                      <div className={styles.icondiv}>logo | logo | logo</div>
                    </div>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className="row">
                    <Link href={"/faculties"}>
                      <div className={styles.btncv}>
                        <h3>Download CV</h3>
                      </div>
                    </Link>

                    <div className={`col-lg-4 col-12 ${styles.cardimg}`}>
                      <Image src={im} alt="" className={styles.imgcard}></Image>
                    </div>
                    <div className={`col-lg-8 col-12 ${styles.cardcont}`}>
                      <h1>LOREM IPSUM</h1>
                      <h4>
                        {" "}
                        <FontAwesomeIcon icon={faClock} /> 12 January 2024 |
                        12:30 pm
                      </h4>
                      <h4>
                        {" "}
                        <FontAwesomeIcon icon={faLocationPin} /> Lorem ipsum,
                        India
                      </h4>
                      <br />
                      <h5>to popupar belife,</h5>
                      <h5>Lorem ipsum</h5>
                      <br />

                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ea, nostrum velit! Cupiditate, nostrum laborum
                        laudantium autem soluta labore placeat quam animi, iure
                        dolorum possimus molestias voluptas dignissimos ut
                        repellat fuga?
                      </p>
                      <div className={styles.icondiv}>logo | logo | logo</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="container">
              <div className="row">
                <div className={styles.card}>
                  <div className="row">
                    <Link href={"/faculties"}>
                      <div className={styles.btncv}>
                        <h3>Download CV</h3>
                      </div>
                    </Link>

                    <div className={`col-lg-4 col-12 ${styles.cardimg}`}>
                      <Image src={im} alt="" className={styles.imgcard}></Image>
                    </div>
                    <div className={`col-lg-8 col-12 ${styles.cardcont}`}>
                      <h1>LOREM IPSUM</h1>
                      <h4>
                        {" "}
                        <FontAwesomeIcon icon={faClock} /> 12 January 2024 |
                        12:30 pm
                      </h4>
                      <h4>
                        {" "}
                        <FontAwesomeIcon icon={faLocationPin} /> Lorem ipsum,
                        India
                      </h4>
                      <br />
                      <h5>to popupar belife,</h5>
                      <h5>Lorem ipsum</h5>
                      <br />

                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ea, nostrum velit! Cupiditate, nostrum laborum
                        laudantium autem soluta labore placeat quam animi, iure
                        dolorum possimus molestias voluptas dignissimos ut
                        repellat fuga?
                      </p>
                      <div className={styles.icondiv}>logo | logo | logo</div>
                    </div>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className="row">
                    <Link href={"/faculties"}>
                      <div className={styles.btncv}>
                        <h3>Download CV</h3>
                      </div>
                    </Link>

                    <div className={`col-lg-4 col-12 ${styles.cardimg}`}>
                      <Image src={im} alt="" className={styles.imgcard}></Image>
                    </div>
                    <div className={`col-lg-8 col-12 ${styles.cardcont}`}>
                      <h1>LOREM IPSUM</h1>
                      <h4>
                        {" "}
                        <FontAwesomeIcon icon={faClock} /> 12 January 2024 |
                        12:30 pm
                      </h4>
                      <h4>
                        {" "}
                        <FontAwesomeIcon icon={faLocationPin} /> Lorem ipsum,
                        India
                      </h4>
                      <br />
                      <h5>to popupar belife,</h5>
                      <h5>Lorem ipsum</h5>
                      <br />

                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ea, nostrum velit! Cupiditate, nostrum laborum
                        laudantium autem soluta labore placeat quam animi, iure
                        dolorum possimus molestias voluptas dignissimos ut
                        repellat fuga?
                      </p>
                      <div className={styles.icondiv}>logo | logo | logo</div>
                    </div>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className="row">
                    <Link href={"/faculties"}>
                      <div className={styles.btncv}>
                        <h3>Download CV</h3>
                      </div>
                    </Link>

                    <div className={`col-lg-4 col-12 ${styles.cardimg}`}>
                      <Image src={im} alt="" className={styles.imgcard}></Image>
                    </div>
                    <div className={`col-lg-8 col-12 ${styles.cardcont}`}>
                      <h1>LOREM IPSUM</h1>
                      <h4>
                        {" "}
                        <FontAwesomeIcon icon={faClock} /> 12 January 2024 |
                        12:30 pm
                      </h4>
                      <h4>
                        {" "}
                        <FontAwesomeIcon icon={faLocationPin} /> Lorem ipsum,
                        India
                      </h4>
                      <br />
                      <h5>to popupar belife,</h5>
                      <h5>Lorem ipsum</h5>
                      <br />

                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ea, nostrum velit! Cupiditate, nostrum laborum
                        laudantium autem soluta labore placeat quam animi, iure
                        dolorum possimus molestias voluptas dignissimos ut
                        repellat fuga?
                      </p>
                      <div className={styles.icondiv}>logo | logo | logo</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
