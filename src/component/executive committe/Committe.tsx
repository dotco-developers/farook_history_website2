import Image from "next/image";
import styles from "./committe.module.css";
import fac1 from "../../../public/book.jpg";
import insta from "../../../public/icons grey/instared.png";
import mail from "../../../public/icons grey/mailred.png";
import lin from "../../../public/icons grey/inred.png";
import Link from "next/link";

export default function Commttee({data}:any) {

  return (
    <section style={{overflowX:"hidden"}}>
      <div className={`${styles.row3} row`}>
        <div className="col-lg-12 col-12">
          <h2 className={styles.head3}>EXECUTIVE COMMITTEE</h2>
        </div>
        {
          data?.map((x:any,i:number)=>(
            <div className={`col-lg-4 ${styles.card}`} key={i}>
            <div className={styles.faccard}>
              <div className={styles.facimgdiv}>
                <Image className={styles.facimg1} src={x.image}  width={200} height={300} alt="" />
              </div>
              <div className={styles.facdata}>
                <h4>{x.name}</h4>
                <h6>{x.designation}</h6>
              </div>
              <div className={styles.facicons}>
                <Link  href={x.instagram==null ? "" :x.instagram}>
                <Image src={insta} alt="" className={styles.iconimg}></Image>
                </Link>
                <Link href={x.mail==null ? '': `mailto:${x.mail}`}>
                <Image src={mail} alt="" className={styles.iconimg}></Image>
                </Link>
                <Link href={x.linkedin==null ? "" :x.linkedin}>
                <Image src={lin} alt="" className={styles.iconimg}></Image>
                </Link>
              </div>
      
            </div>
          </div>
            
          ))
        }
        {/* <div className={`col-lg-4 ${styles.card}`}>
          <div className={styles.faccard}>
            <div className={styles.facimgdiv}>
              <Image className={styles.facimg1} src={fac1} alt="" />
            </div>
            <div className={styles.facdata}>
              <h4>Full Name</h4>
              <h6>Designation</h6>
            </div>
            <div className={styles.facicons}>
              <Image src={insta} alt="" className={styles.iconimg}></Image>
              <Image src={mail} alt="" className={styles.iconimg}></Image>
              <Image src={lin} alt="" className={styles.iconimg}></Image>
            </div>
            <div className={styles.readmore}>
              <a href="http://">More Info</a>{" "}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
