import Image from "next/image";
import styles from "../centers/centers.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faUser } from "@fortawesome/free-solid-svg-icons";
import arr from "../../../public/icons grey/arr.png";
import blog from "../../../public/blog.jpg";
export default function Centers() {
  return (
    <section className={styles.sec}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className={styles.card}>
              <div className={styles.im_out}>
                <Image src={arr} alt="" className={styles.arr}></Image>
                <Image
                  src={blog}
                  alt=""
                  className={styles.im}
                  width={200}
                  height={200}
                ></Image>
              </div>
              <h2>xmaskx</h2>
             
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className={styles.card}>
              <div className={styles.im_out}>
                <Image src={arr} alt="" className={styles.arr}></Image>
                <Image
                  src={blog}
                  alt=""
                  className={styles.im}
                  width={200}
                  height={200}
                ></Image>
              </div>
              <h2>xmaskx</h2>
                    </div>
          </div>
        </div>
      </div>{" "}
    </section>
  );
}
