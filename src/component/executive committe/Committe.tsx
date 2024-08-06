import Image from "next/image";
import styles from "./committe.module.css";
import fac1 from "../../../public/book.jpg";
import insta from "../../../public/icons grey/instared.png";
import mail from "../../../public/icons grey/mailred.png";
import lin from "../../../public/icons grey/inred.png";

export default function Commttee() {
  return (
    <section style={{overflowX:"hidden"}}>
      <div className={`${styles.row3} row`}>
        <div className="col-lg-12 col-12">
          <h2 className={styles.head3}>EXECUTIVE COMMITTEE</h2>
        </div>
        <div className={`col-lg-4 ${styles.card}`}>
          <div className={styles.faccard}>
            <div className={styles.facimgdiv}>
              <Image className={styles.facimg1} src={fac1} alt="" />
            </div>
            <div className={styles.facdata}>
              <h4>Full Name</h4>
              <h6>Designation</h6>
            </div>
            <div className={styles.facicons}>
              <Image src={insta} alt="" className={styles.iconimg}></Image>
              <Image src={mail} alt="" className={styles.iconimg}></Image>
              <Image src={lin} alt="" className={styles.iconimg}></Image>
            </div>
            <div className={styles.readmore}>
              <a href="http://">More Info</a>{" "}
            </div>
          </div>
        </div>
        <div className={`col-lg-4 ${styles.card}`}>
          <div className={styles.faccard}>
            <div className={styles.facimgdiv}>
              <Image className={styles.facimg1} src={fac1} alt="" />
            </div>
            <div className={styles.facdata}>
              <h4>Full Name</h4>
              <h6>Designation</h6>
            </div>
            <div className={styles.facicons}>
              <Image src={insta} alt="" className={styles.iconimg}></Image>
              <Image src={mail} alt="" className={styles.iconimg}></Image>
              <Image src={lin} alt="" className={styles.iconimg}></Image>
            </div>
            <div className={styles.readmore}>
              <a href="http://">More Info</a>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
