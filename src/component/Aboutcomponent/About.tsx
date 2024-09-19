"use client";
import { useEffect, useState } from "react";
import styles from "./Aboutcomponent.module.css";
import CountUp from "react-countup";
export default function About({ data ,countup}: any) {
  const [countupdata, setcountupdata] = useState([]);
  useEffect(() => {
    const fetchdata=async()=>{
      try {
        const response =await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/countup/`)
        const countuptemp=await response.json()
        setcountupdata(countuptemp);
      } catch (error) {
        console.log("error in fetching countup about page ",error);   
      }
    } 
    fetchdata() 
  }, []);

  return (
    <div className={styles.headmain}>
      <div className="container">
        <div className="row">
          <div className={`col-lg-10 col-12 ${styles.headsub}`}>
            <h1>ABOUT US</h1>
            <br />
            <br />
            {data?.map((x: any, i: number) => (
              <div
                dangerouslySetInnerHTML={{ __html: x.description }}
                key={i}
              ></div>
            ))}
          </div>
          {countupdata && countupdata.length > 0 ? (
            <div className={styles.counter}>
              {countupdata.map((x: any, i: number) => (
                <div
                  className={`col-lg-3 col-12 ${styles.countersub}`}
                  key={i}
                >
                  <h3>
                    <CountUp
                      start={x.count}
                      end={x.count}
                      duration={4}
                      decimals={0}
                      suffix="+"
                    >
                      {({ countUpRef, start }) => (
                        <div>
                          <span ref={countUpRef} />
                        </div>
                      )}
                    </CountUp>
                  </h3>
                  <h5>{x.name}</h5>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.counter}>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}