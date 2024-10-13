import Image from "next/image";
import Link from "next/link";
import styles from "./former-faculty.module.css"
import { faculty_datafetcher, Research_guide_datafetcher } from "@/component/api/route";
import insta from "../../../public/icons grey/instared.png";
import mail from "../../../public/icons grey/mailred.png";
import lin from "../../../public/icons grey/inred.png";
export default async function Former_faculty() {
    const facdata=await faculty_datafetcher()
    return (
    <section>
      <div className="container">
        <div className="row" style={{display:"flex"}}>
          <div className="col-lg-12 col-12 ">
            <h4 className={styles.head}>
                Former faculties
            </h4>
          </div>
          {
              facdata?.former?.map((x:any,i:number)=>(
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
                    <Link href={x.email==null ? "" : `mailto:${x.email}`}>
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
  );
}
