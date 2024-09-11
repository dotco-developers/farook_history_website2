import styles from "./Student.module.css";
import Card from "../../component/studentcard/card";
import Image from "next/image";
import { testimonials_home_datafetcher } from "../api/route";
export default async function Students() {
  const testimonials = await testimonials_home_datafetcher();
  return (
    <section className={styles.sec}>
      <div className={styles.rbn}></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <div className={`container ${styles.ctn}`}>
              <h6>
                WHAT OUR <br /> STUDENTS SAYS
              </h6>
              <p>
                Hear from our students about their enriching experiences and
                growth at the History Department, Farook College
              </p>
            </div>
          </div>
          <div className={`col-lg-12 col-md-12 col-12 ${styles.r_out}`}>
            <Card data={testimonials}></Card>
          </div>
        </div>
      </div>
    </section>
  );
}
