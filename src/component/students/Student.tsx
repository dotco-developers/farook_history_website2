import styles from "./Student.module.css";
import Card from "../../component/studentcard/card"
export default function Students() {
  return (
    <section className={styles.sec}>
      <div className="">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <div className={`container ${styles.ctn}`}>
              <h6>
                WHAT OUR <br /> STUDENTS SAYS
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
                fugit ratione officiis corrupti 
                
              </p>
            </div>
          </div>
          <div className={`col-lg-12 col-md-12 col-12 ${styles.r_out}`}>
          <div className={styles.rbn} ></div>
            <Card></Card>
          </div>
        </div>
      </div>
    </section>
  );
}
