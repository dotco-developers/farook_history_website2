"use client";
import { Component, useEffect, useState } from "react";
import styles from "./achievements.module.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.css";
import im from "../../../public/icons grey/fac1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import fca1 from "../../../public/icons grey/fca2.png";
import CountUp from "react-countup";

export default function Achivement() {
  const [counterdata, setcounterdata] = useState([])
  const [description_achievement, setdescription_achievement] = useState([]);
  const [studentdata, setstudentdata] = useState([])
  const [facultydata, setfacultydata] = useState([])
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
    const fetchdata = async () => {
      try {
        const response1 = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/achivement`
        );
        const data = await response1.json();
        setdescription_achievement(data);
        const response2 = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/achivementcountup`
        );
        const countup = await response2.json();
        setcounterdata(countup)
        const response3 = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/achivementmember`
        );
        const achivementdata=await response3.json()
        const studentdatatemp=achivementdata.filter((x:any)=>{x.is_student==true})
        const facultydatatemp=achivementdata.filter((x:any)=>{x.is_student==false})
        setstudentdata(studentdatatemp)
        setfacultydata(facultydatatemp)

      } catch (error) {
        console.log("error in fetching achievement data", error);
      }
    };
    fetchdata();
  }, []);

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
              {description_achievement?.map((x: any, i: number) => (
                <div key={i} dangerouslySetInnerHTML={{__html:x.description}}>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.counter}>
        {
          counterdata.map((x:any,i:number)=>(
            <div className={`col-lg-3 col-12 ${styles.countersub} `} key={i}>
            <h3>
              <CountUp start={0} end={x.count} duration={4} decimals={0} suffix="+">
                {({ countUpRef, start }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </h3>
            <h5>{x.name}</h5>
          </div>
          ))
        }
       
      </div>

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
                {
                  studentdata.map((x:any,i:number)=>(
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
                        <h1>{x.name}</h1>
                        <h4>
                          {" "}
                          <FontAwesomeIcon
                            icon={faClock}
                            className="size-[15px]"
                          />{" "}
                          12 January 2024 | 12:30 pm
                        </h4>
                        <h4>
                          {" "}
                          <FontAwesomeIcon
                            icon={faLocationPin}
                            className="size-[15px]"
                          />{" "}
                          Lorem ipsum, India
                        </h4>
                        <br />
                        <h5>to popupar belife,</h5>
                        <h5>Lorem ipsum</h5>
                        <br />
  
                        <div dangerouslySetInnerHTML={{__html:x.description}}>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                  ))
                }
               
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
