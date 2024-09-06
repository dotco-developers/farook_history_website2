"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./event.module.css";
import {
  faCalendarDays,
  faFilter,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import im from "../../../public/book.jpg";
import Image from "next/image";
import arr from "../../../public/icons grey/arr.png";
import { useEffect, useState } from "react";
import { event_datafetcher } from "../api/route";
import Link from "next/link";

export default async function Event() {
  const data =await event_datafetcher()  
  return (
    <section className={styles.sec}>
      <div className="container">
        
        <div className="row">
          <div className="col-lg-12 col-12">
            <h2 className={styles.head}>RECENT EVENTS </h2>
          </div>

          <div className="col-lg-12 col-12">
            <div className={styles.wr_course}>
              <input
                type="text"
                placeholder="Search"
                name="search"
                className={styles.in}
                style={{ paddingLeft: "12px" }}
              />
              <div className={styles.ic_wr}>
                <div className={styles.bg}>
                  <FontAwesomeIcon icon={faFilter} className={styles.ic} />
                </div>
                <div className={styles.bg}>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className={styles.ic}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`row ${styles.r_sec}`}>
          {data.map((x: any,i:number) => (
            <div className="col-lg-4 col-md-6 col-12" key={i}>
              <div className={styles.card}>
                <div className={styles.im_out}>
                  <Link href={`/event/${x.id}`}>
                  <Image src={arr} alt="" className={styles.arr}></Image>
                  </Link>
                  <Image src={x.image} alt="" className={styles.im} width={300} height={400} ></Image>
                </div>
                <h2>{x.title}</h2>
                <div className={styles.auth}></div>
                <div className={styles.content_in} dangerouslySetInnerHTML={{__html:x.description}}>

                </div>
                <label className={styles.wr_ic}>
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className={styles.a_ic}
                  />
                 {x.date}
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
