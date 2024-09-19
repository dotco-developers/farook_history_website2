import Image from "next/image";
import styles from "./faculty.module.css";
import insta from "../../../public/icons grey/instared.png";
import mail from "../../../public/icons grey/mailred.png";
import lin from "../../../public/icons grey/inred.png";
import right from "../../../public/icons grey/rightmap2.png";
import left from "../../../public/icons grey/leftmap22.png";
import Link from "next/link";

export default function Faculty({ data }: any) {
  return (
    <div className={styles.outer_main_final} id="faculty">
      <Image src={left} alt="" className={styles.lefti_final}></Image>
      <Image src={right} alt="" className={styles.righti_final}></Image>
      <div className={styles.headingfac_final}>
        <h1>OUR FACULTY</h1>
      </div>
      <div className={styles.facultywrap_final}>
        <div className="row" style={{ width: "100%" }}>
          {data?.map((x: any, i: number) => (
            <div className={`col-lg-4 col-12 ${styles.card_final}`} key={i}>
              <div className={styles.faccardmain_final}>
                <div className={styles.facimgdiv_final}>
                  <Image
                    className={styles.facimg1_final}
                    src={`${x.image}`}
                    width={100}
                    height={100}
                    alt=""
                  />
                </div>
                <div className={styles.facdata_final}>
                  <h4>{x.name}</h4>
                  <h6>{x.designation}</h6>
                </div>
                <div className={styles.facicons_final}>
                  <Link href={x.instagram == null ? "" : x.instagram}>
                    <Image
                      src={insta}
                      alt=""
                      className={styles.iconimg_final}
                    ></Image>
                  </Link>
                  <Link href={x.email == null ? "" : `mailto:${x.email}`}>
                    <Image
                      src={mail}
                      alt=""
                      className={styles.iconimg_final}
                    ></Image>
                  </Link>
                  <Link href={x.linkedin == null ? "" : x.linkedin}>
                    <Image src={lin} alt="" className={styles.iconimg_final}></Image>
                  </Link>
                </div>
                <div className={styles.readmore_final}>
                  <a href={`/staff/${x.id}`}>More Info</a>{" "}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
