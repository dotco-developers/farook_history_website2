// components/Carousel.js
"use client";
import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import styles from "./event.module.css"; // Import CSS module
import Image from "next/image";
import im from "../../../public/news2.jpg";
export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: false,
    config: config.gentle,
  };

  slides = [
    {
      key: '1',
      content: (
        <div className={`${styles.outer}`} >
          <div className={` ${styles.c_out}`}>
            <Image src={im} alt="" className={styles.im}></Image>
          </div>
          <div className={styles.c_out2}>
            <h2 className={styles.head}>LOREM3</h2>
            <p className={styles.pera}>
              Lorem ipsum dolor sit amet sdam maiores animi iusto eveniet soluta
            </p>
          </div>
        </div>
      ),
    },
    {
      key: '2',
      content: (
        <div className={`${styles.outer}`}>
          <div className={` ${styles.c_out}`}>
            <Image src={im} alt="" className={styles.im}></Image>
          </div>
          <div className={styles.c_out2}>
            <h2 className={styles.head}>LOREM2</h2>
            <p className={styles.pera}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              deleniti adipisci quibusdam maiores animi iusto eveniet soluta
            </p>
          </div>
        </div>
      ),
    },
    {
      key: '3',
      content: (
        <div className={`${styles.outer}`} style={{zIndex:100}}>
          <div className={` ${styles.c_out}`}>
            <Image src={im} alt="" className={styles.im}></Image>
          </div>
          <div className={styles.c_out2}>
            <h2 className={styles.head}>LOREM1</h2>
            <p className={styles.pera}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              deleniti adipisci quibusdam maiores animi iusto eveniet soluta
            </p>
          </div>
        </div>
      ),
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0,
    });
  };

  render() {
    const selectedSlide = this.state.goToSlide
    return (
      <>
        <div className={`container ${styles.container1}`} style={{zIndex: 10000}}>
          <Carousel
            slides={this.slides}
            goToSlide={this.state.goToSlide}
            offsetRadius={this.state.offsetRadius}
            showNavigation={this.state.showNavigation}
            animationConfig={this.state.config}
          />
        </div>
      </>
    );
  }
}
