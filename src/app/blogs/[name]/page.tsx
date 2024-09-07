import Image from "next/image";
import im from "../../../../public/blog.jpg";
import styles from "./bloginner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { blog_inner_datafetcher } from "@/component/api/route";

export default async function Bloginner({params}:any) {
  const data=await blog_inner_datafetcher(params.name)
  return (
    <section className={styles.sec}>
      <div className="container">
        {
          data?.map((item:any,i:number)=>(
            <div className="row" key={i}>
            <div className="col-lg-6 col-md-6 col-12">
              <h2 className={styles.head}>
                {item.topic}
              </h2>
            </div>
            <div className="col-lg-12 col-md-12 col-12">
              <p className={styles.date}>
                {" "}
                <FontAwesomeIcon icon={faCalendarDays} className={styles.a_ic} />
                {item.created_date}
              </p>
            </div>
            <div className="col-lg-12 col-12">
              <Image src={item.image} width={1200} height={900} alt="" className={styles.im}></Image>
            </div>
            <div className="col-lg-12 col-12">
              <p className={styles.pera}>
               {item.content}
              </p>
            </div>
            <div className="col-lg-12 col-12">
              <h3 className={styles.name}>{item.author}</h3>
            </div>
          </div>
          ))
        }
       
      </div>
    </section>
  );
}
