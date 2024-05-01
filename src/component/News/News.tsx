import Image from "next/image";
import styles from "./News.module.css";
import im from "../../../public/news.jpg"
import im1 from "../../../public/news2.jpg"
import glob from "../../../public/icons grey/globfour.png"
export default function News() {
  return (
    <section className={styles.sec}>
        <div className={styles.rbn}></div>
      <div className="container">
        <div className={`row ${styles.rowe}`}>
          <Image src={glob} alt="" className={styles.gl}></Image>
          <h6 className={styles.head}>NEWS</h6>
          <div className="col-lg-4 col-md-6 col-12">
            <div className={styles.card}>
              <Image src={im} alt="" className={styles.im}></Image>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className={styles.card}>
              <Image src={im1} alt="" className={styles.im}></Image>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className={styles.card}>
              <Image src={im} alt="" className={styles.im}></Image>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
