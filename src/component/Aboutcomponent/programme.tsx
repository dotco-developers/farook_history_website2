"use client"

import { FaRegFilePdf } from "react-icons/fa6"
import styles from "./Aboutcomponent.module.css"
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import world from "../../../public/icons grey/world.png"
import { useInView } from "framer-motion";

export default function Programme(){
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
        <div className="relative"  id={` ${styles.programme}`}>
        <Image src={world} alt="" className={styles.wrld}></Image>
        <div className={styles.headingfac} >
          <h1 id="programme">PROGRAMME</h1>
        </div>
        <div className={styles.div3}>
          <div className={styles.shape1}></div>

          <div className={styles.content}>
            {first ? (
              <div className={styles.car1}>
                <div className="cotainer">
                  <div className={styles.headwrap}>
                    <div className={styles.title}>
                      <h1>MA HISTORY</h1>
                    </div>
                    <div className={styles.icon}>
                      <button className="flex">
                        SYLLABUS <FaRegFilePdf className="ml-3 mt-[4px]"/>
                      </button>
                    </div>
                  </div>
                  <div className={styles.para}>
                    <p>
                      The curriculum of the P.G. course carries specialization
                      in Islamic History enabling the students to enjoy the
                      benefits that go along with History and Islamic History
                      programme structure.
                    </p>
                  </div>
                  <div className={styles.prgdatawrap}>
                    <div className={styles.prgdatawrap1}>
                      <div className={styles.prgdata}>Duration</div>
                      <div className={styles.prgdata}>Eligibility</div>
                      <div className={styles.prgdata}>Intake</div>
                    </div>
                    <div className={styles.prgdatawrap2}>
                      <div className={styles.prgdata}>4 Semesters</div>
                      <div className={styles.prgdata}>
                        Any degree with 45% of marks for part III of CGPA 2
                      </div>
                      <div className={styles.prgdata}>20</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.car1}>
                <div className="cotainer">
                  <div className={styles.headwrap}>
                    <div className={styles.title}>
                      <h1>Ph. D</h1>
                    </div>
                    <div className={styles.icon}>
                      <button>
                        SYLLABUS{" "}
                        <span>
                          <FaRegFilePdf />
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className={styles.para}>
                    <p>
                      Admission to Ph.D programme is done as per the guidelines
                      of the University of Calicut. Ph.D.Pprogramme shall be for
                      a minimum duration of three years, including course work
                      and a maximum of six years.
                    </p>
                  </div>
                  <div className={styles.prgdatawrap}>
                    <div className={styles.prgdatawrap1}>
                      <div className={styles.prgdata}>Duration</div>
                      <div className={styles.prgdata}>Eligibility</div>
                      <div className={styles.prgdata}>Intake</div>
                    </div>
                    <div className={styles.prgdatawrap2}>
                      <div className={styles.prgdata}>3-5 years</div>
                      <div className={styles.prgdata}> M.A. History</div>
                      <div className={styles.prgdata}>
                        Subject to Availability
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className={styles.btnwrap} >
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
      </div>
    )
}