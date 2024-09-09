import Guide from "@/component/Guide/Guide";
import styles from "./research.module.css";
import Scholar from "@/component/scholar/page";
import Phd from "@/component/phd_produced/phd_produced";
import Image from "next/image";
import cap from "../../../../public/icons grey/cap.png";
import book from "../../../../public/icons grey/book.png";
import tick from "../../../../public/icons grey/tick.png";
import { useState } from "react";
import { document } from "postcss";
import wrld from "../../../../public/icons grey/world.png";
import Link from "next/link";

export default function Research({params}:any) {
  // const [content, setcontent] = useState<string>("card1"); // Ensure content is initialized as a string

  // const handler = (v: string) => {
  //   setcontent(v);
  // };

  return (
    <>
      <section className={styles.sec}>
        <Image src={wrld} alt="" className={styles.wr}></Image>
        <div className="container">
          <div className="row">
            <div className="col-lg-12  col-12">
              <h2 className={styles.head}>Research</h2>
            </div>
            <div className="col-lg-4 col-md-12 col-12">
              <Link href={"/research/guide"} style={{textDecoration:"none"}}>
              
              <div
                className={`${styles.card} ${
                  params.name == "guide" ? styles.click : ""
                } `}
             
              >
                <div className={styles.lg}>
                  <Image src={book} alt="" className={styles.mainic}></Image>
                </div>
                <h3>RESEARCH GUIDES</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  provident debitis, ut minima voluptate deleniti adipisci
                  veniam.
                </p>
              </div>
              </Link>

            </div>
            <div className="col-lg-4 col-md-12 col-12">
              <Link href={"/research/scholars"} style={{textDecoration:"none"}}>
              <div
                className={`${styles.card} ${
                  params.name == "scholars" ? styles.click : ""
                } `}
              
              >
                <div className={styles.lg}>
                  <Image
                    src={cap}
                    alt=""
                    className={styles.mainic}
                    style={{ marginLeft: "10px" }}
                  ></Image>
                </div>
                <h3>RESEARCH SCHOLARS</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  provident debitis, ut minima voluptate deleniti adipisci
                  veniam.
                </p>
              </div>
              </Link>
            </div>
            <div className="col-lg-4  col-md-12  col-12">
              <Link href={"/research/produced"} style={{textDecoration:"none"}}>
              <div
                className={`${styles.card} ${
                  params.name == "produced" ? styles.click : ""
                } `}
               
              >
                <div className={styles.lg}>
                  <Image src={tick} alt="" className={styles.mainic}></Image>
                </div>
                <h3>PHDS PRODUCED</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  provident debitis, ut minima voluptate deleniti adipisci
                  veniam.
                </p>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {params.name === "guide" ? (
        <Guide />
      ) : params.name === "scholars" ? (
        <Scholar />
      ) : params.name === "produced" ? (
        <Phd />
      ) : (
        ""
      )}
    </>
  );
}
