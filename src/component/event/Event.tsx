// components/Carousel.js
"use client";
import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import styles from "./event.module.css"; // Import CSS module
import Image from "next/image";
import im from "../../../public/news2.jpg";
import eve1 from "../../../public/event1.jpg";
import eve2 from "../../../public/event2.jpg";
import eve3 from "../../../public/event3.jpg";

const Example = ({eventdata}:any) => {
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showNavigation, setShowNavigation] = useState(false);
  const [animationConfig, setAnimationConfig] = useState(config.gentle);

  
  const slides = [
    // eventdata?.map((x:any,i:number)=>(
    //   {
    //     key: "1",
    //     content: (
    //       <div className={`${styles.outer} row`}>
    //         <div className={` ${styles.c_out} col-lg-6 col-12`}>
    //           <Image src={eve2} alt="" className={styles.im}></Image>
    //         </div>
    //         <div className={`${styles.c_out2} col-lg-6 col-12`}>
    //           <h2 className={styles.head}>
    //             Lecture on the new citizenship bill{" "}
    //           </h2>
    //           <p className={styles.pera}>
    //             Studies of Kannur University at ………. On 30 January, 2020.
    //           </p>
    //         </div>
    //       </div>
    //     ),
    //   }
    // ))
    {
      key: "1",
      content: (
        <div className={`${styles.outer} row`}>
          <div className={` ${styles.c_out} col-lg-6 col-12`}>
            <Image src={eve2} alt="" className={styles.im}></Image>
          </div>
          <div className={`${styles.c_out2} col-lg-6 col-12`}>
            <h2 className={styles.head}>
              Lecture on the new citizenship bill{" "}
            </h2>
            <p className={styles.pera}>
              Studies of Kannur University at ………. On 30 January, 2020.
            </p>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      content: (
        <div className={`${styles.outer} row`}>
          <div className={` ${styles.c_out} col-lg-6 col-12`}>
            <Image src={eve1} alt="" className={styles.im}></Image>
          </div>
          <div className={`${styles.c_out2} col-lg-6 col-12`}>
            <h2 className={styles.head}>
              The international workshop on Historical Anthropology{" "}
            </h2>
            <p className={styles.pera}>
              Department of Rural and Tribal Sociology at the Mananthavady Campus of
              the Kannur University delivered a lecture on Anthropology and
              Tribal Sociology: A Case Study of Wayanad. He described the
              strategies to be adopted while engaging in a
            </p>
          </div>
        </div>
      ),
    },
    {
      key: "3",
      content: (
        <div className={`${styles.outer} row`}>
          <div className={` ${styles.c_out} col-lg-6 col-12`}>
            <Image src={eve3} alt="" className={styles.im}></Image>
          </div>
          <div className={`${styles.c_out2} col-lg-6 col-12`}>
            <h2 className={styles.head}>
              National Seminar on Advances in History and Archaeology of
              Pre-modern South India{" "}
            </h2>
            <p className={styles.pera}>
              The Department of History has organized a National Seminar on
              Advances in History and Archaeology of Pre-modern South India in
              seminar ended with a valedictory speech by Muhammed Shameer from
              II MA History.
            </p>
          </div>
        </div>
      ),
    },
  ].map((slide, index) => ({
    ...slide,
    onClick: () => setGoToSlide(index),
  }));

  const onChangeInput = (e:any) => {
    setGoToSlide(parseInt(e.target.value, 10) || 0);
  };

  return (
    <div className={`container ${styles.container1}`} style={{ zIndex: 99 }}>
      <Carousel
        slides={slides}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showNavigation}
        animationConfig={animationConfig}
      />
    </div>
  );
};

export default Example;
