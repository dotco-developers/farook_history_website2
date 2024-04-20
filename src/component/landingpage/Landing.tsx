import Image from "next/image";
import styles from "./landing.module.css";
import im from "../../../public/four.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCircle,
  faCircleChevronDown,
  faNewspaper,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export default function Landing() {
 
  
 
  return (
    <section className={styles.sec}>
      <div className="container">
        <div className={`row`}>
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
                <button className={styles.btn}>Malabar Archives</button>
              </div>
              <div className="col-lg-6">
                <div className={styles.news}>
                  <button>
                    <FontAwesomeIcon icon={faNewspaper} className={styles.ic} />
                    NEWS
                  </button>
                  <div className={styles.n_wr}>
                  <p className={styles.news_div}>
                  <FontAwesomeIcon icon={faCircle} className={styles.ic3}/>Lorem ipsum dolor sit amet consectetur adipisi Lorem ipsum
                  </p>
                  <p>
                  <FontAwesomeIcon icon={faCircle} className={styles.ic3} /> Lorem ipsum dolor sit amet consectetur adipisi Lorem ipsum
                  </p>
                  <p>
                  <FontAwesomeIcon icon={faCircle} className={styles.ic3}/> Lorem ipsum dolor sit amet consectetur adipisi Lorem ipsum
                  </p>
                  </div>
                </div>
              </div>
              <div className={`col-lg-3 ${styles.c_out}`}>
              <a href="#dep">
                <div className={styles.wrapp}>
                
                  <FontAwesomeIcon icon={faCaretDown} className={styles.ic2}  />
                 
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
