import Image from "next/image";
import styles from "./landing.module.css";
import im from "../../../public/globl.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretDown,
  faCircleChevronDown,
  faNewspaper,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";

export default function Landing() {
  return (
    <section className={styles.sec}>
      <div className="container">
        <div className={`row`}>
          <div className={`col-lg-12 col-12 `}>
            <div className={styles.bg}>
            <div className={styles.head}>
              <p> DEPARTMENT OF</p>
              <span>HISTORY</span>
            </div>
            </div>
          </div>
          <div className={`col-lg-9 col-12 ${styles.lower}`}>
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
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisi...
                  </p>
                </div>
              </div>
              <div className={`col-lg-3 ${styles.c_out}`} >
                <div className={styles.wrapp}>
                <FontAwesomeIcon icon={faCaretDown} className={styles.ic2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
