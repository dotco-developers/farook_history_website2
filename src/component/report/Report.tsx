import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./report.module.css";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function REPORTS({ data }: any) {
  return (
    <section className={styles.sec} style={{ overflowX: "hidden" }}>
      <div className="container">
        <div className={`row `}>
          <div className="col-lg-12 col-12">
            <h2 className={styles.head}>REPORTS</h2>
          </div>
          <div className={`col-lg-12 col-12 ${styles.outerdiv}`}>
            <div className={`row ${styles.main}`}>
              <div className="col-lg-3 col-3">
                <p>#</p>
              </div>
              <div className="col-lg-3  col-3">
                <p>YEAR</p>
              </div>
              <div className="col-lg-3 col-3 ">
                <p>TOPIC</p>
              </div>
              <div className="col-lg-3 col-3 ">
                <p>PDF FILES</p>
              </div>
            </div>
            {/* 2nd */}
            {data.map((x: any, i: number) => (
              <div className={`row ${styles.sub}`} key={i}>
                <div className="col-lg-3 col-3">
                  <p>{i + 1}</p>
                </div>
                <div className="col-lg-3 col-3 ">
                  <p>{x.year}</p>
                </div>
                <div className="col-lg-3 col-3">
                  <p>{x.title}</p>
                </div>
                <div className="col-lg-3 col-3 ">
                  <Link href={`${x.report}`}>
                    <p>
                      <FontAwesomeIcon
                        icon={faFilePdf}
                        className={styles.pdf}
                      />
                    </p>
                  </Link>
                </div>
              </div>
            ))}

            {/* end */}
          </div>
        </div>
      </div>
    </section>
  );
}
