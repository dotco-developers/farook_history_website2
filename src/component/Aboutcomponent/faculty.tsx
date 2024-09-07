import fac1 from "../../../public/book.jpg";
import Image from "next/image";
import styles from "./Aboutcomponent.module.css";
import insta from "../../../public/icons grey/instared.png";
import mail from "../../../public/icons grey/mailred.png";
import lin from "../../../public/icons grey/inred.png";
import right from "../../../public/icons grey/rightmap2.png";
import left from "../../../public/icons grey/leftmap22.png";
import Link from "next/link";
import { useEffect, useState } from "react";
export default  function Faculty({data}:any) {
  return (
    <div className="relative ">
      <Image src={left} alt="" className={styles.lefti}></Image>
      <Image src={right} alt="" className={styles.righti}></Image>
      <div className="container" id="faculty">
        <div className={styles.headingfac}  id={styles.faculty}>
          <h1>OUR FACULTY</h1>
        </div>
        <div className={styles.facultywrap}>
          <div className="row">
            {data?.map((x: any, i: number) => (
              <div className={`col-lg-4 ${styles.card}`} key={i}>
                <div className={styles.faccard}>
                  <div className={styles.facimgdiv}>
                    <Image
                      className={styles.facimg1}
                      src={`${x.image}`}
                      width={100}
                      height={100}
                      alt=""
                    />
                  </div>
                  <div className={styles.facdata}>
                    <h4>{x.name}</h4>
                    <h6>{x.designation}</h6>
                  </div>
                  <div className={styles.facicons}>
                    <Link  href={x.instagram==null?"":x.instagram}>
                    <Image
                      src={insta}
                      alt=""
                      className={styles.iconimg}
                    ></Image>
                    </Link>
                    <Link href={x.mail==null?"":x.mail}>
                      <Image
                        src={mail}
                        alt=""
                        className={styles.iconimg}
                      ></Image>
                    </Link>
                    <Link href={x.linkedin==null?"":x.linkedin}>
                    <Image src={lin} alt="" className={styles.iconimg}></Image>
                    </Link>
                  </div>
                  <div className={styles.readmore}>
                    <a href={`/staff/${x.id}`}>More Info</a>{" "}
                  </div>
                </div>
              </div>
            ))}

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
            </div>
            <div className={`col-lg-4 ${styles.card}`}>
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
            </div>
            <div className={`col-lg-4 ${styles.card}`}>
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
        </div>
      </div>
    </div>
  );
}
