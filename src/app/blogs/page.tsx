"use client";
import {
  faCalendarDays,
  faFilter,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./blogs.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import im from "../../../public/book.jpg";
import Popup from "@/component/Popup/Popup";
import { useEffect, useState } from "react";
import { useRef } from "react";
import arr from "../../../public/icons grey/arr.png";
import { Linefont } from "next/font/google";
import Link from "next/link";
export default function Blogs() {
  const [data, setdata] = useState([]);

  const [show, setshow] = useState(false);

  const bref = useRef(document.body);

  const handle = () => {
    setshow(!show);
  };
  useEffect(() => {
    const datafetcher = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/blog/`,
          {
            method: "GET",
          }
        );
        if (!response.ok) {
          throw new Error("error in fetching blog data");
        }
        const res = await response.json();
        setdata(res);
        console.log(data);
      } catch (error) {
        console.log(`error` + error);
      }
    };
    datafetcher();
  }, []);

  useEffect(() => {
    if (show) {
      const popupElement = document.getElementById("popup");
      if (popupElement) {
        const scrollOptions = {
          behavior: "smooth" as ScrollBehavior,
          top:
            popupElement.getBoundingClientRect().top +
            window.pageYOffset -
            window.innerHeight / 2 +
            popupElement.clientHeight / 2,
        };

        window.scrollTo(scrollOptions);
        bref.current.classList.add(styles.blackout);
      }
    } else {
      bref.current.classList.remove(styles.blackout);
    }
  }, [show]);
  return (
    <section className={styles.sc}>
      {show && (
        <div className={styles.wr} id="popup" style={{zIndex:"999999"}}>
          <Popup handle={handle}></Popup>
        </div>
      )}
      <div className="container">
        <div className="row">
          <div className={`col-lg-12 col-12 ${styles.upload}`}>
            <button className={styles.btn} onClick={handle}>
              UPLOAD
            </button>
          </div>
          <div className="col-lg-6 col-12 ">
            <h2 className={styles.head}>
              Lorem ipsum dolor sit amet consectetur
            </h2>
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
            <p className={styles.pera}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias quibusdam quasi illum tempora itaque velit reprehenderit
            </p>
          </div>
        </div>
        <div className="row">
          {data.map((x: any,i:number) => (
            <div className="col-lg-4 col-md-6 col-12" key={i}>
              <div className={styles.card}>
                <div className={styles.im_out}>
                  <Link href={`/blogs/${x.id}`}>
                  <Image style={{cursor:"pointer"}} src={arr} alt="" className={styles.arr}></Image>
                  </Link>
                  <Image
                    src={x.image}
                    alt=""
                    className={styles.im}
                    width={400}
                    height={600}
                  ></Image>
                </div>
                <h2>{x.name}</h2>
                <div className={styles.auth}>
                  <p>
                    {" "}
                    <FontAwesomeIcon
                      icon={faCalendarDays}
                      className={styles.a_ic}
                    />
                    {x.created_date}
                  </p>
                  <p style={{ marginLeft: "10px" }}>
                    <FontAwesomeIcon icon={faUser} className={styles.a_ic} />
                    {x.author}
                  </p>
                </div>
                <p>{x.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
