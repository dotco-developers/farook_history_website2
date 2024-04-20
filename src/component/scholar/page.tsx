import styles from "./scholar.module.css";

export default function Scholar() {
  return (
    <>
      <section className={styles.sec}>
        <div className="container">
          <div className={`row `}>
            <div className="col-lg-12 col-12">
              <h2 className={styles.head}>RESEARCH SCHOLARS</h2>
            </div>
            <div className={`col-lg-12 col-12 ${styles.outerdiv}`}>
              <div className={`row ${styles.main}`}>
                <div className="col-lg-1 col-1">
                  <p>#</p>
                </div>
                <div className="col-lg-2  col-2">
                  <p>NAME</p>
                </div>
                <div className="col-lg-3 col-3">
                  <p>TOPIC</p>
                </div>
                <div className="col-lg-2 col-2 ">
                  <p>GUIDE</p>
                </div>
                <div className="col-lg-2 col-2 ">
                  <p>MODE</p>
                </div>
                <div className="col-lg-2 col-2">
                  <p>STATUS</p>
                </div>
              </div>
              {/* 2nd */}
              <div className={`row ${styles.sub}`}>
                <div className="col-lg-1 col-1">
                  <p>1</p>
                </div>
                <div className="col-lg-2 col-2 ">
                  <p>Lorem</p>
                </div>
                <div className="col-lg-3 col-3">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fuga, blanditiis. Harum, accusantium! Corporis, voluptas
                    illo dolore itaque quisquam molestias nam? Facilis at
                    voluptate vero totam pariatur illum sit quo nisi?
                  </p>
                </div>
                <div className="col-lg-2 col-2">
                  <p>Saheen</p>
                </div>
                <div className="col-lg-2 col-2 ">
                  <p>Online</p>
                </div>
                <div className="col-lg-2  col-2">
                  <p>Completed</p>
                </div>
              </div>

              {/* 3rd */}
              {/* 2nd */}
              <div className={`row ${styles.sub}`}>
                <div className="col-lg-1 col-1">
                  <p>1</p>
                </div>
                <div className="col-lg-2 col-2 ">
                  <p>Lorem</p>
                </div>
                <div className="col-lg-3 col-3">
                  <p>Network</p>
                </div>
                <div className="col-lg-2 col-2">
                  <p>Saheen</p>
                </div>
                <div className="col-lg-2 col-2 ">
                  <p>Online</p>
                </div>
                <div className="col-lg-2  col-2">
                  <p>Completed</p>
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
