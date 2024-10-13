import Image from "next/image";
import styles from "./staff.module.css";
import im from "../../../../public/cabg.jpg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import ic1 from "../../../../public/icons grey/mail.png";
import ic2 from "../../../../public/icons grey/insta.png";
import ic3 from "../../../../public/icons grey/lin-grey2.png";

import Link from "next/link";
import { faculty_inner_datafetcher } from "@/component/api/route";

export default async function Staff({ params }: any) {
  const data = await faculty_inner_datafetcher(params.name);
  return (
    <>
      <section className={styles.sec}>
        <div className="">
          {data?.map((x: any, i: number) => (
            <div className="row" key={i}>
              <div
                className={`col-lg-6 col-12${styles.c_out}`}
                style={{ position: "relative" }}
              >
                <div className={styles.wrap}>
                  <h2>{x.name}</h2>
                  <p className={styles.pera1}>{x.designation}</p>
                  <div className={styles.icim}>
                    <Link href={x.email == null ? "" : `mailto:${x.email}`}>
                      <Image src={ic1} alt=""></Image>
                    </Link>
                    <Link href={x.instagram == null ? "" : x.instagram}>
                      <Image src={ic2} alt=""></Image>
                    </Link>
                    <Link href={x.linkedin == null ? "" : x.linkedin}>
                      <Image src={ic3} alt=""></Image>
                    </Link>
                  </div>
                </div>
                <div className={styles.bnr}>
                  <p className={styles.pera2}>
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className={styles.ic}
                      style={{ marginLeft: "-19px", marginBottom: "10px" }}
                    />
                    <br />
                    {x.quote}
                    <br></br>
                    <FontAwesomeIcon
                      icon={faQuoteRight}
                      className={styles.ic}
                      style={{
                        display: "block",
                        float: "right",
                        marginRight: "-19px",
                        marginTop: "10px",
                      }}
                    />
                  </p>
                </div>
              </div>
              <div
                className={`col-lg-6 col-12${styles.c_out}`}
                style={{ position: "relative" }}
              >
                <Image
                  src={x.background_less_image}
                  width={400}
                  height={800}
                  alt=""
                  className={styles.im}
                ></Image>
                <div className={styles.bnr2}></div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* mobile view */}
      {data?.map((x: any, i: number) => (
        <section className={styles.secmob} key={i}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-12">
                <Image src={x.background_less_image} width={400} height={800} alt="" className={styles.imm}></Image>
                <div className={styles.bannerm}>
                  <p>
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className={styles.icm}
                      style={{ marginLeft: "-15px", marginBottom: "10px" }}
                    />
                    <br />
                    {x.quote}
                    <br></br>
                    <FontAwesomeIcon
                      icon={faQuoteRight}
                      className={styles.icm}
                      style={{
                        display: "block",
                        float: "right",
                        marginTop: "5px",
                        marginBottom: "5px",
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="col-12">
                <div className={styles.wrapm}>
                  <h2>{x.name}</h2>
                  <p className={styles.pera1}>{x.designation}</p>
                  <div className={styles.icim}>
                    <Link href={x.email == null ? "" : `mailto:${x.email}`}>
                      <Image src={ic1} alt=""></Image>
                    </Link>
                    <Link href={x.instagram == null ? "" : x.instagram}>
                      <Image src={ic2} alt=""></Image>
                    </Link>
                    <Link href={x.linkedin == null ? "" : x.linkedin}>
                      <Image src={ic3} alt=""></Image>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* mobile view end*/}
      {
        data.map((x:any,i:number)=>(
          <section className={styles.sec2} key={i}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-12 col-12 ${styles.out}`}>
              <h2>Biography</h2>
              <div className={styles.pera} dangerouslySetInnerHTML={{__html:x.biography}}>
              </div>
            </div>
            <div className={`col-lg-12 col-12 ${styles.out}`}>
              <h2>QUALIFICATION</h2>
              <div className={"list-disc list-inside"} dangerouslySetInnerHTML={{__html:x.qualification}}>
              
              </div>
            </div>
            <div className={`col-lg-12 col-12 ${styles.out}`}>
              <h2>SPECIALIZATION</h2>
              <div className={"list-disc list-inside"} dangerouslySetInnerHTML={{__html:x.specialization}}>
              </div>
            </div>
          </div>
        </div>
      </section>
        ))
      }
     
    </>
  );
}
