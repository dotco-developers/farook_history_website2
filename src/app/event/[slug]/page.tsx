import styles from "./eventinner.module.css";
import im from "../../../../public/imbnr.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { AiFillInstagram } from "react-icons/ai";
import fac1 from "../../../../public/book.jpg"
import Gallery from "@/component/eventgallery/Eventgallery";
import insta from "../../../../public/icons grey/instared.png"
import mail from "../../../../public/icons grey/mailred.png"
import lin from "../../../../public/icons grey/inred.png"

export default function Eventinner() {
  return (
    <section className={styles.sec}>
      <div className={`row ${styles.r_out}`}>
        <div className="col-lg-12 col-12">
          <div className={styles.bg}>
            <Image src={im} alt="" className={styles.bnrim}></Image>
          </div>
        </div>
      </div>
      <div className={styles.popup}>
        <div className={`row ${styles.row1}`}>
          <div className="col-lg-6 col-12">
            <h2>LOREM IPSUM EVENT</h2>
            <p style={{marginTop:"20px"}}>
              <FontAwesomeIcon icon={faClock} className={styles.icc} /> 12
              january | <span>12:00</span>
            </p>
            <p style={{marginBottom:"20px"}}>
            <FontAwesomeIcon icon={faLocationDot} className={styles.icc} />
              Location
            </p>
            <div>
              <label>education</label>
              <label>education</label>
              <label>education</label>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <button className={styles.btn}>upcoming</button>
          </div>
        </div>
        <div className={`row ${styles.row2}`}>
          <h2>SYNOPSIS</h2>
          <p>
            To popular belief, Lorem Ipsum is not simply random text. It has
            roots in a piece of classical Latin literature Lorem Ipsum is not
            simply random text. It has roots To popular belief, Lorem Ipsum is
            not simply random text. It has roots in a piece of classical Latin
            literature Lorem Ipsum is not simply random text. It has roots in a
            piece To popular belief, Lorem Ipsum is not simply random text. It
            has roots in a piece of classical Latin literature Lorem Ipsum is
            not simply random text. It has roots To popular belief, Lorem Ipsum
            is not simply random text. It has roots in a piece of classical
            Latin literature Lorem Ipsum is not simply random text. It has roots
            in a piece To popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature Lorem Ipsum is
            not simply random text. It has roots To popular belief, Lorem Ipsum
            is not simply random text. It has roots in a piece of classical
            Latin literature Lorem Ipsum is not simply random text. It has roots
            in a piece To popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature Lorem Ipsum is
            not simply random text. It has roots To popular belief, Lorem Ipsum
            is not simply random text. It has roots in a piece of classical
            Latin literature Lorem Ipsum is not simply random text. It has roots
            in a piece
          </p>
        </div>
        <div className={`${styles.row3} row`}>
            <h2>EVENT HOST</h2>
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
        <Gallery></Gallery>

      </div>
    </section>
  );
}
