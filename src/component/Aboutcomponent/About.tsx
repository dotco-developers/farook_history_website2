"use client";
import { useEffect, useState } from "react";
import styles from "./Aboutcomponent.module.css";
import CountUp from "react-countup";
export default function About({ data, countup }: any) {
  const [countupdata, setcountupdata] = useState([]);
  useEffect(() => {
    setcountupdata(countup);
  }, [countup]);

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
          {countupdata ? (
            <div className={styles.counter}>
              {countupdata?.map((x: any, i: number) => (
                <div
                  className={`col-lg-3 col-12 ${styles.countersub} `}
                  key={i}
                >
                  <h3>
                    <CountUp
                      start={0}
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
            ""
          )}
        </div>
      </div>
    </div>
  );
}
