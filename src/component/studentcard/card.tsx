"use client";
import im from "../../../public/news.jpg";
import Image from "next/image";
import styles from "./student_card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Card_scrol() {

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
        <div className={`row alt  ${styles.content_wrap}`}>
          <div className="col-lg-4 col-md-12 col-12">
            <h6>LOREM</h6>
            <p className={styles.conten}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est,
              rerum ex, minima corrupti quae labore ducimus quam dolor minus hic
              totam modi quod expedita eaque cum quibusdam eos natus delectus?
            </p>
            <div></div>
          </div>
          <div className={`col-lg-3 col-md-12 col-12 `}>
            <Image src={im} alt="" className={styles.im}></Image>
          </div>
          <div className={`col-lg-4 col-md-12 col-12 ${styles.col_out}`}>
            <p className={styles.pera}>
              <FontAwesomeIcon icon={faQuoteLeft} className={styles.qute} />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rem
              rerum reiciendis ipsa iste quae deleniti commodi dignissimos vitae
              distinctio nulla sapiente adipisci reprehenderit, laborum ad, at
              nostrum dolorem asperiores?
              <br />
              <FontAwesomeIcon icon={faQuoteRight} className={styles.qute2} />
            </p>
          </div>
        </div>

        <div className={`row alt  ${styles.content_wrap}`}>
          <div className="col-lg-4 col-md-12 col-12">
            <h6>LOREM</h6>
            <p className={styles.conten}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est,
              rerum ex, minima corrupti quae labore ducimus quam dolor minus hic
              totam modi quod expedita eaque cum quibusdam eos natus delectus?
            </p>
            <div></div>
          </div>
          <div className="col-lg-3 col-md-12 col-12">
            <Image src={im} alt="" className={styles.im}></Image>
          </div>
          <div className={`col-lg-4 col-md-12 col-12 ${styles.col_out}`}>
            <p className={styles.pera}>
              <FontAwesomeIcon icon={faQuoteLeft} className={styles.qute} />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rem
              rerum reiciendis ipsa iste quae deleniti commodi dignissimos vitae
              distinctio nulla sapiente adipisci reprehenderit, laborum ad, at
              nostrum dolorem asperiores?
              <br />
              <FontAwesomeIcon icon={faQuoteRight} className={styles.qute2} />
            </p>
          </div>
        </div>
        <div className={`row alt ${styles.content_wrap}`}>
          <div className="col-lg-4 col-md-12 col-12">
            <h6>LOREM</h6>
            <p className={styles.conten}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est,
              rerum ex, minima corrupti quae labore ducimus quam dolor minus hic
              totam modi quod expedita eaque cum quibusdam eos natus delectus?
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Cupiditate neque mollitia molestiae nihil, natus soluta. Ad
              molestiae sed dicta dolorum expedita cum labore assumenda nobis.
              Minima earum deserunt quis voluptates?
            </p>
            <div></div>
          </div>
          <div className="col-lg-3 col-md-12 col-12">
            <Image src={im} alt="" className={styles.im}></Image>
          </div>
          <div className={`col-lg-4 col-md-12 col-12 ${styles.col_out}`}>
            <p className={styles.pera}>
              <FontAwesomeIcon icon={faQuoteLeft} className={styles.qute} />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rem
              rerum reiciendis ipsa iste quae deleniti commodi dignissimos vitae
              distinctio nulla sapiente adipisci reprehenderit, laborum ad, at
              nostrum dolorem asperiores?
              <br />
              <FontAwesomeIcon icon={faQuoteRight} className={styles.qute2} />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
