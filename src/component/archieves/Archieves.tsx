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
              The Malabar Archives is a dedicated repository at the Centre for
              Social History of Malabar, established by the Department of
              History, Farook College. It houses an extensive collection of
              historical documents, manuscripts, and records related to the
              social, cultural, and political history of Malabar. This archive
              preserves and makes accessible invaluable primary sources,
              offering researchers the opportunity to engage directly with
              original materials. The archives aim to safeguard Malabar's
              historical legacy for future generations.
            </p>
            <Link href={"/centers"}>
            <button className={styles.btn}>
              More
              <span>
                <KeyboardDoubleArrowRightIcon className={styles.ic} />
              </span>{" "}
            </button>  
            </Link>
          </div>
          <div className={`col-lg-6 col-md-6 col-12 ${styles.algn}`}>
            <div className={styles.wrap}>
              <Link href={"/center"} style={{ textDecoration: "none" }}>
                <div className={styles.item}>
                  <p>CENTRES</p>
                </div>
              </Link>
              <Link href={"centers/1/13"} style={{ textDecoration: "none" }}>
                <div className={styles.item}>
                  <p>LIBRARY</p>
                </div>
              </Link>
              <Link href={"centers/1/16"} style={{ textDecoration: "none" }}>
                <div className={styles.item}>
                  <p>PUBLICATIONS</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
