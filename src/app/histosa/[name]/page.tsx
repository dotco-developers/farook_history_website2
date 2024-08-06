import Image from "next/image";
import styles from "./histosa.module.css";
import { useState } from "react";
import Histosacard from "@/component/histosacards/histosacard";
import Commttee from "@/component/executive committe/Committe";
import Report from "../../../component/report/Report"
import Activitygallery from "@/component/histosaactivitygallery/Activitygallery";
import Activity from "@/component/Activity/page";
import im from "../../../../public/icons grey/caplarge.png"
export default function Histosa({params}:any) {

  return (
    <>
    <section className={styles.sec}>
      <div className="container">
        <div className="row" style={{position:"relative"}}>
          <Image  src={im}  alt="" className={styles.im}></Image>
          <div className="col-lg-6 col-12">
            <h2 className={styles.head}>HISTOSA</h2>
            <p className={styles.pera}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              doloribus aliquid facilis. Veniam magnam ipsam ea accusamus quia
              ad accusantium, quos culpa enim odit laboriosam ducimus
              consectetur incidunt officiis rem?
            </p>
          </div>
        </div>
        <Histosacard url={params.name}></Histosacard>
        <div className={`${styles.r_out2} row`}>
          <h2>ABOUT</h2>
          <p>
            To popular belief, Lorem Ipsum is not simply random text To popular
            bm text To popular belief, Lorem Ipsum is not simply random teTo
            popular belief, Lorem Ipsum is not simply random text To popular bm
            text To popular belief, Lorem Ipsum is not simply random text To
            popular belief, Lorem Ipsum is not simply random text To popular bm
            text To popular belief, Lorem Ipsum is not simply random text To
            popular belief, Lorem Ipsum is not simply random text To popular bm
            text To popular belief, Lorem Ipsum is not simply random text To
            popular belief, Lorem Ipsum is not simply random text To popular bm
            text To popular belief, Lorem Ipsum is not simply ra
          </p>
        </div>
        
      </div>
    </section>
    {
      params.name==='executive-member'  ? (<Commttee  ></Commttee>):
      params.name==='reports' ? (<Report></Report>) :
      params.name==='activities' ? (<Activity></Activity>):
      params.name==='gallery' ?  (<Activitygallery></Activitygallery>): "" 
    }
    </>
  );
}
