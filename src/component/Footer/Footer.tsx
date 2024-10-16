import Image from "next/image";
import styles from "./footer.module.css";
import im from "../../../public/map.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import im2 from "../../../public/logo.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import app from "../../../public/icons grey/f-app.png";
import mail from "../../../public/icons grey/f-mail.png";
import youtube from "../../../public/icons grey/youtube.png";

import insta from "../../../public/icons grey/fi-nsta.png";
import x from "../../../public/icons grey/x2.png";

import facebook from "../../../public/icons grey/f3.png";

import Link from "next/link";

export default function Footer() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svg1}
        viewBox="0 0 1440 320"
      >
        <path
          fill="#262428"
          fill-opacity="1"
          d="M0,160L80,170.7C160,181,320,203,480,208C640,213,800,203,960,186.7C1120,171,1280,149,1360,138.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <footer className={styles.ftr}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <h6>Quick Links</h6>
              <div className="row">
                <div className="col-lg-6 col-6">
                  <Link href="/about" style={{ textDecoration: "none" }}>
                    <p>About</p>
                  </Link>
                  <Link
                    href="/research/guide"
                    style={{ textDecoration: "none" }}
                  >
                    <p>Research</p>
                  </Link>
                  <Link href="/centers" style={{ textDecoration: "none" }}>
                    <p>Centres</p>
                  </Link>
                </div>
                <div className="col-lg-6 col-6">
                  <Link href="/blogs" style={{ textDecoration: "none" }}>
                    <p>Blogs</p>
                  </Link>
                  <Link
                    href="/about/#faculty"
                    style={{ textDecoration: "none" }}
                  >
                    <p>Faculty</p>
                  </Link>
                  <Link
                    href="/about/#programme"
                    style={{ textDecoration: "none" }}
                  >
                    <p>Programmes</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <h6>Address</h6>
              <div>
                <p>
                  Farook college
                  <br /> (Autonomous)
                </p>
                <p>
                  P.O. Farook College
                  <br /> Kozhikode Dist.
                </p>
                <p>PIN 673 632, Kerala, India</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <h6>Contact Us</h6>
              <div>
                <p>
                  <span>
                    <FontAwesomeIcon icon={faPhone} className={styles.ic} />
                  </span>
                  +91 94955 39708
                </p>
                <p>
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faPhone} className={styles.ic} />
                  </span>
                  +91 495 244 0661
                </p>
                <p>
                  <span>
                    <FontAwesomeIcon icon={faEnvelope} className={styles.ic} />
                  </span>
                  hodhistory@<br></br>farookcollege.ac.in
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <Link
                target="_blank"
                href={"https://maps.app.goo.gl/qHwh1AF5WVcp8H998"}
                style={{ textDecoration: "none" }}
              >
                <Image src={im} alt="" className={styles.im}></Image>
              </Link>
            </div>
          </div>

          <div className={`row ${styles.r_out}`}>
            <div className="col-lg-6 col-md-6 col-12">
              <div>
                <Image src={im2} alt="" className={styles.logo}></Image>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className={styles.wrap_ic}>
                <Link
                  target="_blank"
                  href={"mailto: hodhistory@farookcollege.ac.in "}
                >
                  <div className={styles.outer}>
                    <Image src={mail} alt="" className={styles.l_ic}></Image>
                  </div>
                </Link>
                {/* <div className={styles.outer}>
              <Image src={app} alt="" className={styles.l_ic}></Image>
              </div> */}
                <Link
                  target="_blank"
                  href={"https://www.facebook.com/history.farookcollege/"}
                >
                  <div className={styles.outer}>
                    <Image src={insta} alt="" className={styles.l_ic}></Image>
                  </div>
                </Link>
                <Link
                  target="_blank"
                  href={
                    "https://youtube.com/@historyfrkclg?si=dNVjllbh2QAaP86q"
                  }
                >
                  <div className={styles.outer}>
                    <Image src={youtube} alt="" className={styles.l_ic}></Image>
                  </div>
                </Link>
                <Link
                  target="_blank"
                  href={
                    "https://x.com/historyfrkclg?t=pvABkat7yUfPgrJCDSq2UA&s=08"
                  }
                >
                  <div className={styles.outer}>
                    <Image src={x} alt="" className={styles.l_ic}></Image>
                  </div>
                </Link>
                <Link
                  target="_blank"
                  href={
                    "https://www.facebook.com/share/V64FiC4P3LLMAvmS/?mibextid=qi2Omg"
                  }
                >
                  <div className={styles.outer}>
                    <Image
                      src={facebook}
                      alt=""
                      className={styles.l_ic}
                    ></Image>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-12">
              <p className={styles.dotco}>
                developed by team{" "}
                <Link
                  target="_blank"
                  href={"https://www.teamdotco.com/"}
                  style={{ textDecoration: "none" }}
                >
                  <span>dotco</span>
                </Link>
              </p>
              <p className={styles.dotco}>
                © {new Date().getFullYear()} History Department Farook College
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
