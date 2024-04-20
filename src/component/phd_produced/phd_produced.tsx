import styles from "./phd.module.css";

export default function Scholar() {
  return (
    <>
      <section className={styles.sec}>
        <div className="container">
          <div className={`row `}>
            <div className="col-lg-12 col-12">
              <h2 className={styles.head}>PHDS PRODUCED</h2>
            </div>
            <div className={`col-lg-12 col-12 ${styles.outerdiv}`}>
              <div className={`row ${styles.main}`}>
                <div className="col-lg-2 col-2">
                  <p>#</p>
                </div>
                <div className="col-lg-2  col-2">
                  <p>YEAR</p>
                </div>
                <div className="col-lg-3 col-3">
                  <p>NAME</p>
                </div>
                <div className="col-lg-3 col-3 ">
                  <p>TOPIC</p>
                </div>
                <div className="col-lg-2 col-2 ">
                  <p>GUIDE</p>
                </div>
              </div>
              {/* 2nd */}
              <div className={`row ${styles.sub}`}>
                <div className="col-lg-2 col-2">
                  <p>1</p>
                </div>
                <div className="col-lg-2 col-2 ">
                  <p>Lorem</p>
                </div>
                <div className="col-lg-3 col-3">
                  <p>
                    ate vero totam pariatur
                  </p>
                </div>
                <div className="col-lg-3 col-3">
                  <p>Saheen</p>
                </div>
                <div className="col-lg-2 col-2 ">
                  <p>Online</p>
                </div>
               
              </div>

              {/* 3rd */}
              {/* 2nd */}
              <div className={`row ${styles.sub}`}>
                <div className="col-lg-2 col-2">
                  <p>1</p>
                </div>
                <div className="col-lg-2 col-2 ">
                  <p>Lorem</p>
                </div>
                <div className="col-lg-3 col-3">
                  <p>
                    ate vero totam pariatur
                  </p>
                </div>
                <div className="col-lg-3 col-3">
                  <p>Saheen</p>
                </div>
                <div className="col-lg-2 col-2 ">
                  <p>Online</p>
                </div>
               
              </div>


              {/* end */}
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
}
