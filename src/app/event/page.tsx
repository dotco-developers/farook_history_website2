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

export default function Event() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const datafetcher = async () => {
      try {
        const response = await fetch(
          "https://farook-college-backend.vercel.app/api/event/",
          {
            method: "GET",
          }
        );
        if (!response.ok) {
          throw new Error("server request not ok");
        }
        const res = await response.json();
        setdata(res);
      } catch (error) {
        console.log("error in fetching events data" + error);
      }
    };
    datafetcher();
  }, []);

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
          {data.map((x: any) => (
            <div className="col-lg-4 col-md-6 col-12">
              <div className={styles.card}>
                <div className={styles.im_out}>
                  <Image src={arr} alt="" className={styles.arr}></Image>
                  <Image src={x.image} alt="" className={styles.im}></Image>
                </div>
                <h2>{x.name}</h2>
                <div className={styles.auth}></div>
                <p>
                 {x.description}
                </p>
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
