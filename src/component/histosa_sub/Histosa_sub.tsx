"use client"
import Image from "next/image";
import styles from "./histosa.module.css";
import { useState } from "react";
import Histosacard from "@/component/histosacards/histosacard";
import Commttee from "@/component/executive committe/Committe";
import Report from "../../component/report/Report"
import Activitygallery from "@/component/histosaactivitygallery/Activitygallery";
import Activity from "@/component/Activity/page";
import im from "../../../public/icons grey/caplarge.png"

export default  function Histosa({histosa,execome,activity,gallery,reports}:any) {
  
  const [item, setitem] = useState("card1")

  const handler =(x:string)=>{
    setitem(x)
  }

  return (
    <>
    <section className={styles.sec}>
      <div className="container">
        <div className="row" style={{position:"relative"}}>
          <Image  src={im}  alt="" className={styles.im}></Image>
          <div className="col-lg-6 col-12">
            <h2 className={styles.head}>HISTOSA</h2>
            {
              histosa?.map((x:any,i:number)=>(
                <div className={styles.pera} key={i} dangerouslySetInnerHTML={{__html:x.main_description}}>               
              </div>
              ))
            }
          </div>
        </div>
        <Histosacard  item={item} handler={handler}></Histosacard>
        {/* <div className={`${styles.r_out2} row`}>
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
        </div> */}
        
      </div>
    </section>
    {
      item==='card1'  ? (<Commttee  data={execome} ></Commttee>):
      item==='card2' ? (<Report data={reports}></Report>) :
      item==='card3' ? (<Activity data={activity}></Activity>):
      item==='card4' ?  (<Activitygallery data={gallery}></Activitygallery>): "" 
    }
    </>
  );
}
