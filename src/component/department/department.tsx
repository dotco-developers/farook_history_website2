import Image from "next/image";
import styles from "./department.module.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import im from "../../../public/profile.png"
export default function department() {
  return (
    <section className={styles.department} id="dep">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12">
            <h6 className={styles.head}>
              DEPARTMENT
              <br /> PROFILE
            </h6>
            <p className={styles.content}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
              possimus exercitationem deserunt accusantium at repudiandae
              corrupti aut illum unde facilis officiis non itaque nulla quia
              voluptate sint, obcaecati quo suscipit. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Ipsa, quasi laborum officiis
              cum quos, alias eaque error expedita 
             
            </p>
            <button className={styles.btn}>
              More
              <span>
                <KeyboardDoubleArrowRightIcon className={styles.ic} />
              </span>{" "}
            </button>
          </div>
          <div className={`col-lg-6 col-md-12 col-12 ${styles.algn}`}>
            <div className={styles.im}>
                <Image src={im} className={styles.im1} alt=""></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
