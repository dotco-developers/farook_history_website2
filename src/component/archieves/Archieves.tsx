import Image from "next/image";
import styles from "./archieves.module.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
export default function Archieves() {
  return (
    <section className={styles.sec}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <h6 className={styles.head}>
            MALABAR ARCHIVES
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
          <div className={`col-lg-6 col-md-6 col-12 ${styles.algn}`}>
                <div className={styles.wrap}>
                    <div className={styles.item}>
                        <p>CENTRES</p>
                       
                    </div>
                    <div className={styles.item}>
                    <p>LIBRARY</p>
                       
                    </div>
                    <div className={styles.item}>
                    <p>PDF</p>
                       
                    </div>
                    
                </div>
          </div>
        </div>
      </div>
    </section>
  );
}
