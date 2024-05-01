import styles from "./card.module.css"
import activity from "../../../public/icons grey/activity.png"
import commi from "../../../public/icons grey/committe.png"

import rep from "../../../public/icons grey/report.png"
import gl from "../../../public/icons grey/gallery.png"

import Image from "next/image"
import { useState } from "react";

export default function Histosacard({handler,content}:{handler:any,content:any}){


    return(
        <div className={`${styles.r_out} row`}>
        <div className="col-lg-3 col-md-6 col-12">
        <div className={`${styles.card} ${ content=='card1' ? styles.click:""} `} onClick={()=>{handler('card1')}}>
            <div className={styles.lg}>
            <Image src={commi} alt="" className={styles.mainic} style={{marginLeft:"10px"}}></Image>
            </div>
            <h3>EXECUTIVE COMMITTEE</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              provident debitis, ut minima voluptate deleniti adipisci veniam.
              
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
        <div className={`${styles.card} ${ content=='card2' ? styles.click:""} `} onClick={()=>{handler('card2')}}>
            <div className={styles.lg}>
            <Image src={rep} alt="" className={styles.mainic} style={{marginLeft:"10px"}}></Image>
            </div>
            <h3>REPORTS</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              provident debitis, ut minima voluptate deleniti adipisci veniam.
              
            </p>
          </div>

        </div>
        <div className="col-lg-3 col-md-6 col-12">
        <div className={`${styles.card} ${ content=='card3' ? styles.click:""} `} onClick={()=>{handler('card3')}}>
            <div className={styles.lg}>
            <Image src={activity} alt="" className={styles.mainic} style={{marginLeft:"10px"}}></Image>
            </div>
            <h3>ACTIVITIES</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              provident debitis, ut minima voluptate deleniti adipisci veniam.
              
            </p>
          </div>

        </div>
        <div className="col-lg-3 col-md-6 col-12">
        <div className={`${styles.card} ${ content=='card4' ? styles.click:""} `} onClick={()=>{handler('card4')}}>
            <div className={styles.lg}>
            <Image src={gl} alt="" className={styles.mainic} style={{marginLeft:"10px"}}></Image>
            </div>
            <h3>GALLERY</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              provident debitis, ut minima voluptate deleniti adipisci veniam.
              
            </p>
          </div>

        </div>
      </div>
    )
}