"use client";
import React, { useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import styles from "./event.module.css"; // Import CSS module
import Image from "next/image";
import Link from "next/link";

const Example = ({ eventdata }: any) => {
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showNavigation, setShowNavigation] = useState(false);
  const [animationConfig, setAnimationConfig] = useState(config.gentle);
  
  // Function to handle auto-sliding
  const autoSlide = () => {
    setGoToSlide((prev) => (prev + 1) % eventdata.length);
  };

  // Auto-slide effect every 7 seconds
  useEffect(() => {
    const interval = setInterval(autoSlide, 5000); // Change slide every 7 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [eventdata.length]); // Run effect when eventdata.length changes

  // Corrected slides array definition
  const slides = eventdata?.map((x: any, i: number) => ({
    key: i + 1,
    content: (
      <div className={`${styles.outer} row`} key={i}>
        <div className={` ${styles.c_out} col-lg-6 col-12`}>
          <Image
            src={x.image}
            width={300}
            height={300}
            alt=""
            className={styles.im}
          />
        </div>
        <div className={`${styles.c_out2} col-lg-6 col-12`}>
          <h2 className={styles.head}>{x.title}</h2>
          <div
            className={styles.pera}
            dangerouslySetInnerHTML={{ __html: x.description }}
          ></div>
          <Link href={`/event/${x.id}`}>
            <button className={styles.inner_view}>view</button>
          </Link>
        </div>
      </div>
    ),
    onClick: () => setGoToSlide(i),
  }));

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
