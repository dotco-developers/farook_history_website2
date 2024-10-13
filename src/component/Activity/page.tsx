import Link from "next/link";
import styles from "./activity.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import im from "../../../public/news.jpg";
export default function Activity({ data }: any) {
  return (
    <section style={{ overflowX: "hidden" }}>
      <div className="row">
        <div className="col-lg-12 col-12">
          <h2 className={styles.head}>ACTIVITIES</h2>
        </div>
        {data.map((x: any, i: number) => (
          <div className="col-lg-12 col-12" key={i}>
            <div className={styles.card}>
              <div className="row">
                <Link href={`${x.pdf}`} target="_blank">
                  <button className={styles.btn}>REPORT</button>
                </Link>
                <div className={`col-lg-12 col-12 ${styles.cardcont}`}>
                  <h1>{x.topic}</h1>
                  <h4>
                    {" "}
                    <FontAwesomeIcon icon={faClock} className={styles.icc} /> 
                  {x.date}
                  </h4>
                  <br />
                  <div dangerouslySetInnerHTML={{__html:x.description}}>

                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
