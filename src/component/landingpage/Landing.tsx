import Image from "next/image";
import styles from "./landing.module.css";
import im from "../../../public/icons grey/globfour.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCircle,
  faCircleChevronDown,
  faNewspaper,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import Link from "next/link";

interface NewsItem {
  id: number;
  title: string;
  image: string;
  description: string;
  date: string;
}

interface LandingProps {
  newsdata: NewsItem[];
}

export default function Landing({ newsdata }: LandingProps) {
  return (
    <section className={styles.sec}>
      <div className="container">
        <div
          className={`row`}
          style={{ overflow: "hidden", paddingBottom: "30px" }}
        >
          <div className={`col-lg-12 col-12 ${styles.gg} `}>
            <div className={styles.bg}>
              <Image src={im} alt=""></Image>
            </div>
            <div className={styles.head}>
              <p> DEPARTMENT OF</p>
              <span>HISTORY</span>
            </div>
          </div>
          <div
            className={`col-lg-12 col-12 ${styles.lower}`}
            style={{ zIndex: "99" }}
          >
            <div className="row">
              <div className="col-lg-3">
                <Link
                  href={"/histosa/executive-member"}
                  style={{ textDecoration: "none" }}
                >
                  <button style={{ cursor: "pointer" }} className={styles.btn}>
                    Histosa Alumni
                  </button>
                </Link>
              </div>
              <div className="col-lg-6">
                <div className={styles.news}>
                  <Link href={"/news"} style={{ textDecoration: "none" }}>
                    <button style={{color:"black"}}>
                      <FontAwesomeIcon
                        icon={faNewspaper}
                        className={styles.ic}
                        style={{color:"black"}}
                      />
                      NEWS
                    </button>
                  </Link>
                  <div className={styles.n_wr}>
                    <div className={styles.news_out_animate}>
                      {newsdata?.map((item: any, i: number) => (
                        <Link href={`/news/${item.id}`} key={i}>
                          <p className={styles.news_div}>
                            <FontAwesomeIcon
                              icon={faCircle}
                              className={styles.ic3}
                              style={{ marginRight: "5px", marginTop: "10px" ,textDecoration:"none"}}

                            />
                            {item.title}{" "}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className={`col-lg-3 ${styles.c_out}`}>
                <a href="#dep">
                  <div className={styles.wrapp}>
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className={styles.ic2}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
