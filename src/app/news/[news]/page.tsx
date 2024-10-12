"use client";
import styles from "./inner.module.css";
import Image from "next/image";
import im from "../../../../public/news.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import share from "../../../../public/icons grey/share.png";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import path from "path";
import { Url } from "url";
import { news_inner_datafetcher } from "@/component/api/route";
export default async function Inner({ params }: any) {
  const data = await news_inner_datafetcher(params.news);
  // const [baseurl, setbaseurl] = useState("http://localhost:3000")
  // const [url, setUrl] = useState("");
  // const param = usePathname();

  // useEffect(() => {
  //   setUrl(param);
  // }, [param]);
  var urlmain = "https://fchistory.in";
  return (
    <section className={styles.sec}>
      <div className="container">
        {data?.map((x: any, i: number) => (
          <div className="row" key={i}>
            <div className={`col-lg-4 col-12 ${styles.im_out}`}>
              <Image width={300} height={400}  src={x.image} alt="" className={styles.im}></Image>
            </div>
            <div className={`col-lg-8 col-12 ${styles.c_out}`}>

              <h2 className={styles.n_head}>
                {x.title}
              </h2>

              <p>
                {" "}
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className={styles.a_ic}
                />
                {x.date}
              </p>
              <div className={`${styles.pera}`} dangerouslySetInnerHTML={{__html:x.description}}>
                
              </div>
            </div>

            <div className="col-lg-12 col-12">
              <a
                target="blank"
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                  `${x.title} : ` + urlmain + "/news/" + params.news 
                )}`}
              >
                <Image src={share} alt="" className={styles.sh}></Image>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
