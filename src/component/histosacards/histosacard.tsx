import styles from "./card.module.css"
import activity from "../../../public/icons grey/activity.png"
import commi from "../../../public/icons grey/committe.png"

import rep from "../../../public/icons grey/report.png"
import gl from "../../../public/icons grey/gallery.png"

import Image from "next/image"
import { useState } from "react";
import Link from "next/link"

export default function Histosacard({url}:any){


    return(
        <div className={`${styles.r_out} row`}>
        <div className="col-lg-3 col-md-6 col-12">
          <Link href={"/histosa/executive-member"}>
        <div className={`${styles.card} ${ url=='executive-member' ? styles.click:""} `} >
            <div className={styles.lg}>
            <Image src={commi} alt="" className={styles.mainic} style={{marginLeft:"10px"}}></Image>
            </div>
            <h3>EXECUTIVE COMMITTEE</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              provident debitis, ut minima voluptate deleniti adipisci veniam.
              
            </p>
          </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <Link href={"/histosa/reports"}>
          <div className={`${styles.card} ${ url=='reports' ? styles.click:""} `} >
            <div className={styles.lg}>
            <Image src={rep} alt="" className={styles.mainic} style={{marginLeft:"10px"}}></Image>
            </div>
            <h3>REPORTS</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              provident debitis, ut minima voluptate deleniti adipisci veniam.
              
            </p>
          </div>
          </Link>
     

        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <Link href={"/histosa/activities"}>  
        <div className={`${styles.card} ${ url=='activities' ? styles.click:""} `} >
            <div className={styles.lg}>
            <Image src={activity} alt="" className={styles.mainic} style={{marginLeft:"10px"}}></Image>
            </div>
            <h3>ACTIVITIES</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              provident debitis, ut minima voluptate deleniti adipisci veniam.
              
            </p>
          </div>
          </Link>


        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <Link href={"/histosa/gallery"}>
          
        <div className={`${styles.card} ${ url=='gallery' ? styles.click:""} `}>
            <div className={styles.lg}>
            <Image src={gl} alt="" className={styles.mainic} style={{marginLeft:"10px"}}></Image>
            </div>
            <h3>GALLERY</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              provident debitis, ut minima voluptate deleniti adipisci veniam.
              
            </p>
          </div>
          </Link>
        </div>
      </div>
    )
}