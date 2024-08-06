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
        <div className={`row`} style={{overflow:"hidden"}}>
          <div className={`col-lg-12 col-12 ${styles.gg} `}>
            <div className={styles.bg}>
              <Image src={im} alt=""></Image>
            </div>
            <div className={styles.head}>
              <p> DEPARTMENT OF</p>
              <span>HISTORY</span>
            </div>
          </div>
          <div className={`col-lg-12 col-12 ${styles.lower}`}>
            <div className="row">
              <div className="col-lg-3">
                <button className={styles.btn}>Histosa Alumni</button>
              </div>
              <div className="col-lg-6">
                <div className={styles.news}>
                  <button>
                    <FontAwesomeIcon icon={faNewspaper} className={styles.ic} />
                    NEWS
                  </button>
                  <div className={styles.n_wr}>
                    {newsdata?.map((item: any) => (
                      <p key={item.id} className={styles.news_div}>
                        <FontAwesomeIcon
                          icon={faCircle}
                          className={styles.ic3}
                        />
                        {item.title}{" "}
                      </p>
                    ))}

                    <p>
                      <FontAwesomeIcon icon={faCircle} className={styles.ic3} />{" "}
                      Lorem ipsum dolor sit amet consectetur adipisi Lorem ipsum
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faCircle} className={styles.ic3} />{" "}
                      Lorem ipsum dolor sit amet consectetur adipisi Lorem ipsum
                    </p>
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
