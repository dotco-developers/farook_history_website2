"use client"
import { useEffect, useRef, useState } from "react";
import styles from "./Aboutcomponent.module.css"
import { useInView } from "framer-motion";
import { FiTarget } from "react-icons/fi";
import { FaEye } from "react-icons/fa6";

export default function Mission(){

    const ref = useRef(null);
    const isInView = useInView(ref);
    const [data, setdata] = useState([]);
  
    const [load, setload] = useState(true);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://farook-college-backend.vercel.app/api/countup/"
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const responseData = await response.json();
          setdata(responseData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []);
  
    const [first, setfirst] = useState(true);
  
    function handle() {
      setfirst(!first);
      setload(!load);
    }
  
    useEffect(() => {
      const interval = setInterval(handle, 5000); // Change cards every 5 seconds
      return () => clearInterval(interval); // Cleanup function to clear interval on unmount
    }, [first]);
  
    return(
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
                <div className={styles.para}>
                  <p>
                    Our mission is to cultivate a profound understanding of the
                    past, empowering students to become historians and engaged
                    global citizens. We encourage a learning environment that
                    embraces historical richness and inspires critical thinking,
                    research expertise, and cultural appreciation. Our mission
                    is to equip students with the knowledge and skills to
                    navigate complexities, contribute to academia, and impact
                    the society positively.
                  </p>
                </div>
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
                <div className={styles.para}>
                  <p>
                    We aspire to be a globally recognized center of academic
                    excellence and interdisciplinary research in historical
                    studies. Our aim is to foster a community of scholars,
                    educators, and learners who will shape future leaders, adept
                    in historical studies and dedicated to promoting
                    understanding, tolerance, and dialogue among different
                    cultures.
                  </p>
                </div>
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

    )
}