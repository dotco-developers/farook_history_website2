"use client"
import Guide from "@/component/Guide/Guide";
import styles from "./research.module.css";
import Scholar  from "@/component/scholar/page";
import Phd from "@/component/phd_produced/phd_produced"
import Image from "next/image";
import cap from "../../../public/icons grey/cap.png"
import book from "../../../public/icons grey/book.png"
import tick from "../../../public/icons grey/tick.png"
import { useState } from "react";
import { document } from "postcss";

export default function Research() {
    const [content, setcontent] = useState<string>('card1'); // Ensure content is initialized as a string

    const  handler=(v:string)=>{
        setcontent(v) 
    }

  return (
    <>
     <section className={styles.sec}>
      <div className="container">
        <div className="row">
            <div className="col-lg-12 col-12"><h2 className={styles.head}>Research</h2></div>
          <div className="col-lg-4 col-12">
            <div className={`${styles.card} ${ content=='card1' ? styles.click:""} `} onClick={()=>{handler('card1')}} >
              <div className={styles.lg}>
                <Image src={book} alt="" className={styles.mainic}></Image> 
              </div>
              <h3>RESEARCH GUIDES</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                provident debitis, ut minima voluptate deleniti adipisci veniam.
                
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className={`${styles.card} ${ content=='card2' ? styles.click:""} `} onClick={()=>{handler('card2')}}>
              <div className={styles.lg}>
              <Image src={cap} alt="" className={styles.mainic} style={{marginLeft:"10px"}}></Image>
              </div>
              <h3>RESEARCH SCHOLARS</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                provident debitis, ut minima voluptate deleniti adipisci veniam.
                
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className={`${styles.card} ${ content=='card3' ? styles.click:""} `}onClick={()=>{handler('card3')}}>
              <div className={styles.lg}>
              <Image src={tick} alt="" className={styles.mainic}></Image>
              </div>
              <h3>PHDS PRODUCED</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                provident debitis, ut minima voluptate deleniti adipisci veniam.
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {content === 'card1' ? (
                <Guide />
            ) : content === 'card2' ? (
                <Scholar />
            ) : content === 'card3' ? (
                <Phd />
            ) : (
                ""
            )}
    </>
   

  );
}
