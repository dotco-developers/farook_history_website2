import Image from "next/image";
import styles from "./department.module.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import im from "../../../public/icons grey/prof.png";
import Link from "next/link";
export default function department() {
  return (
    <section className={styles.department}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12">
            <h6 className={styles.head} id="dep">
              DEPARTMENT
              <br /> PROFILE
            </h6>
            <p className={styles.content}>
              The Department of History, re-designated in 1991, offers
              post-graduate programme in History. The curriculum of the course
              carries specialization in Islamic History enabling the students to
              enjoy the benefits that go along with History and Islamic History
              course structure. The course has conventional form of terminal
              examination and internal evaluations in addition to the submission
              of dissertation by the candidate for the fulfillment of the
              requirements of the University of Calicut.
            </p>
          </div>
          <div className={`col-lg-6 col-md-12 col-12 ${styles.algn}`}>
            <div className={styles.im}>
              <Image src={im} className={styles.im1} alt=""></Image>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-12">
            <Link href="/about">
              <button className={styles.btn}>
                More
                <span>
                  <KeyboardDoubleArrowRightIcon className={styles.ic} />
                </span>{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
