import Image from "next/image";
import styles from "./histosa.module.css";
import { useState } from "react";
import Histosacard from "@/component/histosacards/histosacard";
import Commttee from "@/component/executive committe/Committe";
import Report from "../../../component/report/Report"
import Activitygallery from "@/component/histosaactivitygallery/Activitygallery";
import Activity from "@/component/Activity/page";
import im from "../../../../public/icons grey/caplarge.png"
import { histosa_activity_datafetcher, histosa_datafetcher, histosa_execome_datafetcher, histosa_gallery_datafetcher, histosa_reports_datafetcher } from "@/app/api/route";
export default async function Histosa({params}:any) {
   const histosa=await histosa_datafetcher()
   const execome=await histosa_execome_datafetcher()
   const activity=await histosa_activity_datafetcher()
   const reports=await histosa_reports_datafetcher()
   const gallery=await histosa_gallery_datafetcher()
  return (
    <>
    <section className={styles.sec}>
      <div className="container">
        <div className="row" style={{position:"relative"}}>
          <Image  src={im}  alt="" className={styles.im}></Image>
          <div className="col-lg-6 col-12">
            <h2 className={styles.head}>HISTOSA</h2>
            {
              histosa.map((x:any,i:number)=>(
                <div className={styles.pera} key={i} dangerouslySetInnerHTML={{__html:x.description}}>
               
              </div>
              ))
            }
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
      params.name==='executive-member'  ? (<Commttee  data={execome} ></Commttee>):
      params.name==='reports' ? (<Report data={reports}></Report>) :
      params.name==='activities' ? (<Activity data={activity}></Activity>):
      params.name==='gallery' ?  (<Activitygallery data={gallery}></Activitygallery>): "" 
    }
    </>
  );
}
