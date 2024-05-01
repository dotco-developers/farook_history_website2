"use client";
import { Component, useEffect, useState } from "react";

import styles from "./about.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { FiTarget } from "react-icons/fi";
import { FaEye } from "react-icons/fa6";
import Image from "next/image";
import fac1 from "../../../public/book.jpg";
import { AiFillInstagram } from "react-icons/ai";
import { FaRegFilePdf } from "react-icons/fa";
import CountUp from "react-countup";

import insta from "../../../public/icons grey/instared.png"
import mail from "../../../public/icons grey/mailred.png"
import lin from "../../../public/icons grey/inred.png"
import { error } from "console";

export default function about(){
 
  const [data, setdata] = useState([]);


  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://farook-college-backend.vercel.app/api/countup/');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const responseData = await response.json();
          setdata(responseData)
      
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } 
    fetchData();
  }, []);

  

    const [first, setfirst] = useState(true);

    function handle() {
      setfirst(!first);
    }
  
  
    useEffect(() => {
      const interval = setInterval(handle, 5000); // Change cards every 5 seconds
  
      return () => clearInterval(interval); // Cleanup function to clear interval on unmount
    }, [first]); // Update the effect whenever isFirstCard changes
  

    return(
      <section id={styles.about}>
      <div className={styles.headmain}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-10 col-12 ${styles.headsub}`}>
              <h1>ABOUT US</h1>
              <br />
              <br />
              <p>
                The Department of History, re-designated in 1991, offers
                post-graduate programme in History. The curriculum of the course
                carries specialization in Islamic History enabling the students
                to enjoy the benefits that go along with History and Islamic
                History course structure. The course has conventional form of
                terminal examination and internal evaluations in addition to the
                submission of dissertation by the candidate for the fulfillment
                of the requirements of the University of Calicut.
              </p>
            </div>
            <div className={styles.counter}>
            {
              
                data.map((x:any)=>(
                    <div className={`col-lg-3 col-12 ${styles.countersub} `}>
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
                    

                ))
                }
               
            </div>
          </div>
        </div>
      </div>

      <div className={styles.div2}>
        <div className={styles.shape1}></div>

        <div className={styles.content}>
          {first ? (
            <div
              className={`${styles.car1}`}
             
            >
              <div className="cotainer">
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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Saepe, id magnam! Itaque dolor a tempore praesentium,
                    delectus ea, nostrum corporis eligendi architecto magnam
                    facere atque dicta! Consequatur nam repellat corporis? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Ut quia,
                    sunt perspiciatis excepturi distinctio natus, error nulla
                    eaque eligendi modi quo in, voluptates quod officiis.
                    Accusantium voluptates dolores doloribus nam?
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.car1}>
              <div className="cotainer">
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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Saepe, id magnam! Itaque dolor a tempore praesentium,
                    delectus ea, nostrum corporis eligendi architecto magnam
                    facere atque dicta! Consequatur nam repellat corporis? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Ut quia,
                    sunt perspiciatis excepturi distinctio natus, error nulla
                    eaque eligendi modi quo in, voluptates quod officiis.
                    Accusantium voluptates dolores doloribus nam?
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

      <div id={styles.faculty}>
        <div className="container">
          <div className={styles.headingfac}>
            <h1>OUR FACULTY</h1>
          </div>

          <div className={styles.facultywrap}>
            <div className="row">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id={styles.programme}>
        <div className={styles.headingfac}>
          <h1>PROGRAMME</h1>
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
                      <button>
                        SYLLABUS <FaRegFilePdf />
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
      </div>
    </section>
    )
}