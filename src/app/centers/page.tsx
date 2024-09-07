import Image from "next/image";
import styles from "../centers/centers.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faUser } from "@fortawesome/free-solid-svg-icons";
import arr from "../../../public/icons grey/arr.png";
import blog from "../../../public/blog.jpg";
import { center_datafetcher, center_for_navbar_datafetcher } from "../api/route";
import Link from "next/link";
export default async function Centers() {
  const data = await center_datafetcher();
  const head=await center_for_navbar_datafetcher()
  return (
    <section className={styles.sec}>
      <div className="container">
        <div className="row">
          {data.map((x: any, i: number) => (
            <div className="col-lg-4 col-md-6 col-12" key={i}>
              <div className={styles.card} >
                <div className={styles.im_out}>
                  <Link href={`/centers/${x.id}/${head}`}>
                  <Image src={arr} alt="" className={styles.arr}></Image>
                  </Link>
                  <Image
                    src={x.image}
                    alt=""
                    className={styles.im}
                    width={200}
                    height={300}
                  ></Image>
                </div>
                <h2>{x.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>{" "}
    </section>
  );
}
