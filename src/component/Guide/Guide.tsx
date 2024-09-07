import styles from "./guide.module.css";
import fac1 from "../../../public/news.jpg";
import { AiFillInstagram } from "react-icons/ai";
import Image from "next/image";
import Students from "../students/Student";
import Link from "next/link";
import insta from "../../../public/icons grey/instared.png";
import mail from "../../../public/icons grey/mailred.png";
import lin from "../../../public/icons grey/inred.png";
import { Research_guide_datafetcher } from "../api/route";
export default async function Guide() {
  const data=await Research_guide_datafetcher()
  return (
    <>
      <section className={styles.sec1}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <h2 className={styles.head2}>RESEARCH GUIDES</h2>
            </div>
            {
              data?.map((x:any,i:number)=>(
                <div className={`col-lg-4 col-12 ${styles.card}`} key={i}>
                <div className={styles.faccard}>
                  <div className={styles.facimgdiv}>
                    <Image className={styles.facimg1} src={x.image} width={150} height={150} alt="" />
                  </div>
                  <div className={styles.facdata}>
                    <h4>{x.name}</h4>
                    <h6>{x.designation}</h6>
                  </div>
                  <div className={styles.facicons}>
                    <Link href={x.instagram==null ? "" : x.instagram}>
                    <Image src={insta} alt="" className={styles.iconimg}></Image>
                    </Link>
                    <Link href={x.email==null ? "" : x.email}>
                      <Image src={mail} alt="" className={styles.iconimg}></Image>
                    </Link>
                    <Link href={x.linkedin==null ? "" : x.linkedin}>
                    <Image src={lin} alt="" className={styles.iconimg}></Image>
                    </Link>
                  </div>
                  <div className={styles.readmore}>
                    <a href={`/staff/${x.id}`}>More Info</a>{" "}
                  </div>
                </div>
              </div>
              ))
            }
         
          </div>
        </div>
      </section>
    </>
  );
}
