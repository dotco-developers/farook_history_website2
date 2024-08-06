import Link from "next/link";
import styles from "./activity.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import im from "../../../public/news.jpg";
export default function Activity() {
  return (
    <section style={{overflowX:"hidden"}}>
      <div className="row">
        <div className="col-lg-12 col-12">
        <h2 className={styles.head}>ACTIVITIES</h2>
        </div>
        <div className="col-lg-12 col-12">
          <div className={styles.card}>
            <div className="row">
              <Link href={"/faculties"}>
               <button className={styles.btn}>
                REPORT
               </button>
              </Link>
              <div className={`col-lg-12 col-12 ${styles.cardcont}`}>
                <h1>LOREM IPSUM</h1>
                <h4>
                  {" "}
                  <FontAwesomeIcon icon={faClock} className={styles.icc} /> 12
                  January 2024 | 12:30 pm
                </h4>
                <h4>
                  {" "}
                  <FontAwesomeIcon
                    icon={faLocationPin}
                    className={styles.icc}
                  />{" "}
                  Lorem ipsum, India
                </h4>
                <br />
                <h5>to popupar belife,</h5>
                <h5>Lorem ipsum</h5>
                <br />

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
                  nostrum velit! Cupiditate, nostrum laborum laudantium autem
                  soluta labore placeat quam animi, iure dolorum possimus
                  molestias voluptas dignissimos ut repellat fuga? Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit. Maxime ab ipsum
                  voluptas labore pariatur magnam deserunt consequuntur totam
                  non voluptatibus, corrupti, obcaecati nam hic veniam
                  reiciendis, harum molestiae cupiditate provident.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-12">
          <div className={styles.card}>
            <div className="row">
              <Link href={"/faculties"}>
               <button className={styles.btn}>
                REPORT
               </button>
              </Link>
              <div className={`col-lg-12 col-12 ${styles.cardcont}`}>
                <h1>LOREM IPSUM</h1>
                <h4>
                  {" "}
                  <FontAwesomeIcon icon={faClock} className={styles.icc} /> 12
                  January 2024 | 12:30 pm
                </h4>
                <h4>
                  {" "}
                  <FontAwesomeIcon
                    icon={faLocationPin}
                    className={styles.icc}
                  />{" "}
                  Lorem ipsum, India
                </h4>
                <br />
                <h5>to popupar belife,</h5>
                <h5>Lorem ipsum</h5>
                <br />

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
                  nostrum velit! Cupiditate, nostrum laborum laudantium autem
                  soluta labore placeat quam animi, iure dolorum possimus
                  molestias voluptas dignissimos ut repellat fuga? Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit. Maxime ab ipsum
                  voluptas labore pariatur magnam deserunt consequuntur totam
                  non voluptatibus, corrupti, obcaecati nam hic veniam
                  reiciendis, harum molestiae cupiditate provident.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
