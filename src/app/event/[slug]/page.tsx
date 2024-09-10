import styles from "./eventinner.module.css";
import im from "../../../../public/imbnr.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { AiFillInstagram } from "react-icons/ai";
import fac1 from "../../../../public/book.jpg"
import Gallery from "@/component/eventgallery/Eventgallery";
import insta from "../../../../public/icons grey/instared.png"
import mail from "../../../../public/icons grey/mailred.png"
import lin from "../../../../public/icons grey/inred.png"
import Link from "next/link";
import { event_innner_datafetcher, eventhost_datafetcher, eventimages_datafetcher, eventvideo_datafetcher } from "@/component/api/route";

export default async function Eventinner({params}:any) {
  const data=await event_innner_datafetcher(params.slug)
  const eventhost=await eventhost_datafetcher()
  const image =await eventimages_datafetcher(params.slug)
  const video =await eventvideo_datafetcher()

  const dateoptions: Intl.DateTimeFormatOptions = {
    year: "numeric",  
    month: "long",    
    day: "numeric",   
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  return (
    <section className={styles.sec}>
      <div className={`row ${styles.r_out}`}>
        <div className="col-lg-12 col-12">
          <div className={styles.bg}>
            <Image src={im} alt="" className={styles.bnrim}></Image>
          </div>
        </div>
      </div>
      {
        data.map((x:any,i:number)=>(
          <div className={styles.popup} key={i}>
          <div className={`row ${styles.row1}`}>
            <div className="col-lg-6 col-12">
              <h2>{x.title}</h2>
              <p style={{marginTop:"20px"}}>
                <FontAwesomeIcon icon={faClock} className={styles.icc} /> 
                {new Date(x.date).toLocaleString("en-US",dateoptions)}
                </p>
              <p style={{marginBottom:"20px"}}>
              <FontAwesomeIcon icon={faLocationDot} className={styles.icc} />
                {x.venue}
              </p>
              <div>
                <label>education</label>
                <label>education</label>
                <label>education</label>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <button className={styles.btn}>{x.status}</button>
            </div>
          </div>
          <div className={`row ${styles.row2}`}>
            <h2>SYNOPSIS</h2>
            <div dangerouslySetInnerHTML={{__html:x.description}}>
              
            </div>
          </div>
          <div className={`${styles.row3} row`}>
              <h2>EVENT HOST</h2>
              {
                eventhost.map((item:any,index:number)=>(
                  <div className={`col-lg-4 ${styles.card}`} key={index}>
                  <div className={styles.faccard}>
                    <div className={styles.facimgdiv}>
                      <Image className={styles.facimg1} width={200} height={200} src={x.image} alt="" />
                    </div>
                    <div className={styles.facdata}>
                      <h4>{item.name}</h4>
                      <h6>{item.designation}</h6>
                    </div>
                    <div className={styles.facicons}>
                      <Link href={x.instagram==null ? "" :x.instagram}>
                      <Image src={insta} alt="" className={styles.iconimg}></Image>
                      </Link>
                      <Link href={x.email==null ? "" : `mailto:${x.email}`}>
                      <Image src={mail} alt="" className={styles.iconimg}></Image>
                      </Link>
                      <Link href={x.linkedin==null ? "" : x.linkedin}> 
                      <Image src={lin} alt="" className={styles.iconimg}></Image>
                      </Link>
                    </div>
                  </div>
                </div>
                ))
              }
          
          </div>
          <Gallery image={image} video={video}></Gallery>
  
        </div>
        ))
      }
     
    </section>
  );
}
