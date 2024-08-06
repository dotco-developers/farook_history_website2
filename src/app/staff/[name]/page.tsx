import Image from "next/image";
import styles from "./staff.module.css";
import im from "../../../../public/cabg.jpg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import ic1 from "../../../../public/icons grey/mail.png";
import ic2 from "../../../../public/icons grey/insta.png";
import ic3 from "../../../../public/icons grey/app.png";

export default function Staff() {
  return (
    <>
      <section className={styles.sec}>
        <div className="">
          <div className="row">
            <div
              className={`col-lg-6 col-12${styles.c_out}`}
              style={{ position: "relative" }}
            >
              <div className={styles.wrap}>
                <h2>Dr. C.A. Anaz</h2>
                <p className={styles.pera1}>Assistant Professor and Head</p>
                <div className={styles.icim}>
                  <Image src={ic1} alt=""></Image>
                  <Image src={ic2} alt=""></Image>
                  <Image src={ic3} alt=""></Image>
                </div>
              </div>
              <div className={styles.bnr}>
                <p className={styles.pera2}>
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    className={styles.ic}
                    style={{ marginLeft: "-19px", marginBottom: "10px" }}
                  />
                  <br />
                  A good teacher is like a candle—it consumes itself to light the way for others.
                  <br></br>
                  <FontAwesomeIcon
                    icon={faQuoteRight}
                    className={styles.ic}
                    style={{
                      display: "block",
                      float: "right",
                      marginRight: "-19px",
                      marginTop: "10px",
                    }}
                  />
                </p>
              </div>
            </div>
            <div
              className={`col-lg-6 col-12${styles.c_out}`}
              style={{ position: "relative" }}
            >
              <Image src={im} alt="" className={styles.im}></Image>
              <div className={styles.bnr2}></div>
            </div>
          </div>
        </div>
      </section>
      {/* mobile view */}
      <section className={styles.secmob}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-12">
              <Image src={im} alt="" className={styles.imm}></Image>
              <div className={styles.bannerm}>
                <p>
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    className={styles.icm}
                    style={{ marginLeft: "-15px", marginBottom: "10px" }}
                  />
                  <br />
                  A good teacher is like a candle—it consumes itself to light the way for others.
                  <br></br>
                  <FontAwesomeIcon
                    icon={faQuoteRight}
                    className={styles.icm}
                    style={{
                      display: "block",
                      float: "right",
                      marginTop: "5px",
                      marginBottom: "5px",
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="col-12">
              <div className={styles.wrapm}>
                <h2>LOREM IPSUM</h2>
                <p className={styles.pera1}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                </p>
                <div className={styles.icim}>
                  <Image src={ic1} alt=""></Image>
                  <Image src={ic2} alt=""></Image>
                  <Image src={ic3} alt=""></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* mobile view end*/}
      <section className={styles.sec2}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-12 col-12 ${styles.out}`}>
              <h2>Biography</h2>
              <p className={styles.pera}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                quasi nisi nemo assumenda magni provident possimus iure. Est
                beatae quidem odio laudantium labore! Earum, ratione? Distinctio
                dignissimos illum dolores officiis?
              </p>
            </div>
            <div className={`col-lg-12 col-12 ${styles.out}`}>
              <h2>QUALIFICATION</h2>
              <ul className={"list-disc list-inside"}>
                <li>M.A.</li>
                <li>M.Phil</li>
                <li>Ph.D.</li>
              </ul>
            </div>
            <div className={`col-lg-12 col-12 ${styles.out}`}>
              <h2>SPECIALIZATION</h2>
              <ul className={"list-disc list-inside"}>
                <li>Intellectual Movements in Kerala</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
