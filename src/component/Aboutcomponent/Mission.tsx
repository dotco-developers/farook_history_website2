"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Aboutcomponent.module.css";
import { useInView } from "framer-motion";
import { FiTarget } from "react-icons/fi";
import { FaEye } from "react-icons/fa6";

export default function Mission({ data }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const [load, setload] = useState(true);

  const [first, setfirst] = useState(true);

  function handle() {
    setfirst(!first);
    setload(!load);
  }

  useEffect(() => {
    const interval = setInterval(handle, 5000); // Change cards every 5 seconds
    return () => clearInterval(interval); // Cleanup function to clear interval on unmount
  }, [first]);

  return (
    <div className={styles.div2}>
      <div className={styles.shape1}></div>

      <div className={styles.content}>
        {first ? (
          <div className={`${styles.car1} ${load ? "" : styles.animation}`}>
            <div ref={ref} style={{}}>
              <div className={styles.headwrap}>
                <div className={styles.title}>
                  <h1>OUR MISSION</h1>
                </div>
                <div className={styles.icon}>
                  <FiTarget className={styles.icon1} />
                </div>
              </div>
              {data?.map((x: any, i: number) => (
                <div
                  key={i}
                  className={styles.para}
                  dangerouslySetInnerHTML={{ __html: x.mission }}
                ></div>
              ))}
            </div>
          </div>
        ) : (
          <div
            className={`${styles.car1} ${load ? styles.animation : ""}`}
            id="animate"
          >
            <div ref={ref}>
              <div className={styles.headwrap}>
                <div className={styles.title}>
                  <h1>OUR VISION</h1>
                </div>
                <div className={styles.icon}>
                  <FaEye className={styles.icon1} />
                </div>
              </div>
              {data?.map((x: any, i: number) => (
                <div
                 key={i}
                  className={styles.para}
                  dangerouslySetInnerHTML={{ __html: x.vision }}
                ></div>
              ))}
            </div>
          </div>
        )}
        <div className={styles.btnwrap}>
          <button
            className={styles.btn1}
            onClick={handle}
            style={{ backgroundColor: first ? "#982B35" : "#515151" }}
          ></button>
          <button
            className={styles.btn1}
            onClick={handle}
            style={{ backgroundColor: first ? "#515151" : "#982B35" }}
          ></button>
        </div>
      </div>
    </div>
  );
}
