"use client";
import im from "../../../public/news.jpg";
import Image from "next/image";
import styles from "./student_card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import insta from "../../../public/icons grey/insta.png";
import app from "../../../public/icons grey/app.png";
import mail from "../../../public/icons grey/mail.png";
import Link from "next/link";
export default function Card_scrol({ data }: any) {
  // const [value, setvalue] = useState(0)

  // useEffect(() => {
  //   const altdivs=document.getElementsByClassName('alt')
  //   const len=altdivs.length
  //   let currentindex=0
  //  const handle=()=>{
  //   if (currentindex<=len) {
  //     altdivs[currentindex? currentindex:0]?.scrollIntoView({behavior:"smooth",block:"center"})
  //     setvalue(currentindex)
  //     console.log("function called");
  //     currentindex++;
  //   }else{
  //     currentindex=0
  //   }
  //  }

  //  const intervalId = setInterval(handle, 3000);
  //  return () => clearInterval(intervalId);

  // }, [])

  return (
    <>
      <div className={styles.wrap} id="wr">
        {data.map((x: any, i: number) => (
          <div className={`row alt  ${styles.content_wrap}`} key={i}>
            <div className="col-lg-4 col-md-6 col-12">
              <h6>{x.name}</h6>
              <p className={styles.conten}>{x.designation}</p>
              <div className={styles.ic_wr}>
                <Link target="_blank" href={x.email==null?"":`mailto${x.email}`}>
                  <Image
                    src={mail}
                    alt=""
                    className={styles.icc}
                    style={{ marginLeft: "-2px" }}
                  ></Image>
                </Link>
                <Link target="_blank" href={x.instagram==null?"":x.instagram}>
                <Image src={insta} alt="" className={styles.icc}></Image>
                </Link>
                <Link target="_blank" href={x.linkedin==null?"":x.linkedin}>
                <Image src={app} alt="" className={styles.icc}></Image>
                </Link>
              </div>
            </div>
            <div className={`col-lg-3 col-md-6 col-12 ${styles.imalg}`}>
              <Image
                src={x.image}
                width={200}
                height={300}
                alt=""
                className={styles.im}
              ></Image>
            </div>
            <div className={`col-lg-5 col-md-12 col-12 ${styles.col_out}`}>
              <div className={styles.pera}>
                <FontAwesomeIcon icon={faQuoteLeft} className={styles.qute} />
                <br />
                <div
                  className={styles.pera_2}
                  dangerouslySetInnerHTML={{ __html: x.description }}
                ></div>
                <br />
                <FontAwesomeIcon icon={faQuoteRight} className={styles.qute2} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
