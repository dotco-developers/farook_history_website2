import Image from "next/image";
import styles from "./archieves.module.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Link from "next/link";
export default function Archieves() {
  return (
    <section className={styles.sec} id="archieve">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <h6 className={styles.head}>MALABAR ARCHIVES</h6>
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
              <Link href={"/center"} style={{textDecoration:"none"}}>
              <div className={styles.item}>
                <p>CENTRES</p>
              </div>
              </Link>
              <Link href={"centers/1/13"} style={{textDecoration:"none"}}>
              <div className={styles.item}>
                <p>LIBRARY</p>
              </div>
              </Link>
              <Link href={"centers/1/16"} style={{textDecoration:"none"}}>
              <div className={styles.item}>
                <p>PDF</p>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
