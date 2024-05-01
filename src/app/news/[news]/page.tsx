"use client"
import styles from "./inner.module.css";
import Image from "next/image";
import im from "../../../../public/news.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import share from "../../../../public/icons grey/share.png"
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import path from "path";
import { Url } from "url";
export default function Inner() {

  const [baseurl, setbaseurl] = useState("http://localhost:3000")
  const [url, setUrl] = useState("");
  const param = usePathname();

  useEffect(() => {
    setUrl(param);
  }, [param]);
  return (
    <section className={styles.sec}>
      <div className="container">
        <div className="row" >
          <div className={`col-lg-4 col-12 ${styles.im_out}`}>
            <Image src={im} alt="" className={styles.im}></Image>
          </div>
          <div className={`col-lg-8 col-12 ${styles.c_out}`} >
          <h2 className={styles.n_head}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
              expedita praesentium, fuga, totam esse id itaque laborum, enim
            </h2>
            
            <p> <FontAwesomeIcon icon={faCalendarDays} className={styles.a_ic} />DATE</p> 
            <p className={`${styles.pera}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              minus magni numquam voluptatum incidunt repellendus id possimus
              dolore, quisquam accusantium quia laborum cumque similique, ad
              recusandae sint, quidem quasi minima?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              minus magni numquam voluptatum incidunt repellendus id possimus
              dolore, quisquam accusantium quia laborum cumque similique, ad
              recusandae sint, quidem quasi minima?
             
            </p>
          </div>
    
          <div className="col-lg-12 col-12">
            <a  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                "Department of history" + baseurl + url
              )}`} >
            <Image src={share} alt="" className={styles.sh}></Image>
          </a>
          </div>
        
        </div>
      </div>
    </section>
  );
}
