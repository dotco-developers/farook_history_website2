"use client"
import { useEffect, useState } from "react";
import styles from "./scholar.module.css";

export default function Scholar() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const datafetcher = async () => {
      try {
        const response = await fetch(
         "https://farook-college-backend.vercel.app/api/researchscholars/",
          {
            method: "GET",
          }
        );
        if (!response.ok) {
          throw new Error("server request not ok");
        }
        const res = await response.json();
        setdata(res);
      } catch (error) {
        console.log("error in fetching scholor data" + error);
      }
    };
    datafetcher();
  }, []);

  return (
    <>
      <section className={styles.sec}>
        <div className="container">
          <div className={`row `}>
            <div className="col-lg-12 col-12">
              <h2 className={styles.head}>RESEARCH SCHOLARS</h2>
            </div>
            <div className={`col-lg-12 col-12 ${styles.outerdiv}`}>
              <div className={`row ${styles.main}`}>
                <div className="col-lg-1 col-1">
                  <p>#</p>
                </div>
                <div className="col-lg-2  col-2">
                  <p>NAME</p>
                </div>
                <div className="col-lg-3 col-3">
                  <p>TOPIC</p>
                </div>
                <div className="col-lg-2 col-2 ">
                  <p>GUIDE</p>
                </div>
                <div className="col-lg-2 col-2 ">
                  <p>MODE</p>
                </div>
                <div className="col-lg-2 col-2">
                  <p>STATUS</p>
                </div>
              </div>
              {/* 2nd */}
              {
                data.map((x:any)=>(
                  <div className={`row ${styles.sub}`} key={x.id}>
                  <div className="col-lg-1 col-1">
                    <p>1</p>
                  </div>
                  <div className="col-lg-2 col-2 ">
                    <p>{x.name}</p>
                  </div>
                  <div className="col-lg-3 col-3">
                    <p>
                     {x.topic}
                    </p>
                  </div>
                  <div className="col-lg-2 col-2">
                    <p>{x.guide}</p>
                  </div>
                  <div className="col-lg-2 col-2 ">
                    <p>{x.mode}</p>
                  </div>
                  <div className="col-lg-2  col-2">
                    <p>{x.status}</p>
                  </div>
                </div>

                ))
              }
             
              {/* end */}
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
}
