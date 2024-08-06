import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./report.module.css";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

export default function REPORTS() {
  return (
  
      <section className={styles.sec} style={{overflowX:"hidden"}}>
        <div className="container">
          <div className={`row `}>
            <div className="col-lg-12 col-12">
              <h2 className={styles.head}>REPORTS</h2>
            </div>
            <div className={`col-lg-12 col-12 ${styles.outerdiv}`}>
              <div className={`row ${styles.main}`}>
                <div className="col-lg-2 col-2">
                  <p>#</p>
                </div>
                <div className="col-lg-3  col-3">
                  <p>YEAR</p>
                </div>
                <div className="col-lg-3 col-3">
                  <p>NAME</p>
                </div>
                <div className="col-lg-2 col-2 ">
                  <p>TOPIC</p>
                </div>
                <div className="col-lg-2 col-2 ">
                  <p>PDF FILES</p>
                </div>
              </div>
              {/* 2nd */}
              <div className={`row ${styles.sub}`}>
                <div className="col-lg-2 col-2">
                  <p>1</p>
                </div>
                <div className="col-lg-3 col-3 ">
                  <p>Lorem</p>
                </div>
                <div className="col-lg-3 col-3">
                  <p>
                    Lorem ipsum dolor
                  </p>
                </div>
                <div className="col-lg-2 col-2">
                  <p>Saheen</p>
                </div>
                <div className="col-lg-2 col-2 ">
                  <p>
                        
                      <FontAwesomeIcon
                        icon={faFilePdf}
                        className={styles.pdf}
                      />
                    </p>
                </div>
              </div>

              {/* 3rd */}
              {/* 2nd */}
              <div className={`row ${styles.sub}`}>
                <div className="col-lg-2 col-2">
                  <p>1</p>
                </div>
                <div className="col-lg-3 col-3 ">
                  <p>Lorem</p>
                </div>
                <div className="col-lg-3 col-3">
                  <p>Network</p>
                </div>
                <div className="col-lg-2 col-2">
                  <p>Saheen</p>
                </div>
                <div className="col-lg-2 col-2 ">
                  <p>
                    <FontAwesomeIcon icon={faFilePdf} className={styles.pdf} />
                  </p>
                </div>
              </div>

              {/* end */}
            </div>
          </div>
        </div>
      </section>
   
  );
}
