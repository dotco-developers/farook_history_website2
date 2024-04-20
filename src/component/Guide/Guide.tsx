import styles from "./guide.module.css";
import fac1 from "../../../public/news.jpg";
import { AiFillInstagram } from "react-icons/ai";
import Image from "next/image";
import Students from "../students/Student";
export default function Guide() {
  return (
    <>
      <section className={styles.sec1}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
            <h2 className={styles.head2}>
            RESEARCH GUIDES
            </h2>
            </div>         
            <div className={`col-lg-4 col-12 ${styles.card}`}>
              <div className={styles.faccard}>
                <div className={styles.facimgdiv}>
                  <Image className={styles.facimg1} src={fac1} alt="" />
                </div>
                <div className={styles.facdata}>
                  <h4>Full Name</h4>
                  <h6>Designation</h6>
                </div>
                <div className={styles.facicons}>
                  <AiFillInstagram className={styles.iconimg} />
                  <AiFillInstagram className={styles.iconimg} />
                  <AiFillInstagram className={styles.iconimg} />
                </div>
                <div className={styles.readmore}>
                  <a href="http://">More Info</a>{" "}
                </div>
              </div>
            </div>

            <div className={`col-lg-4 col-12 ${styles.card}`}>
              <div className={styles.faccard}>
                <div className={styles.facimgdiv}>
                  <Image className={styles.facimg1} src={fac1} alt="" />
                </div>
                <div className={styles.facdata}>
                  <h4>Full Name</h4>
                  <h6>Designation</h6>
                </div>
                <div className={styles.facicons}>
                  <AiFillInstagram className={styles.iconimg} />
                  <AiFillInstagram className={styles.iconimg} />
                  <AiFillInstagram className={styles.iconimg} />
                </div>
                <div className={styles.readmore}>
                  <a href="http://">More Info</a>{" "}
                </div>
              </div>
            </div>

            <div className={`col-lg-4 col-12 ${styles.card}`}>
              <div className={styles.faccard}>
                <div className={styles.facimgdiv}>
                  <Image className={styles.facimg1} src={fac1} alt="" />
                </div>
                <div className={styles.facdata}>
                  <h4>Full Name</h4>
                  <h6>Designation</h6>
                </div>
                <div className={styles.facicons}>
                  <AiFillInstagram className={styles.iconimg} />
                  <AiFillInstagram className={styles.iconimg} />
                  <AiFillInstagram className={styles.iconimg} />
                </div>
                <div className={styles.readmore}>
                  <a href="http://">More Info</a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
