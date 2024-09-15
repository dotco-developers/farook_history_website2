"use client";

import { FaRegFilePdf } from "react-icons/fa6";
import styles from "./Aboutcomponent.module.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import world from "../../../public/icons grey/world.png";
import { useInView } from "framer-motion";
import Link from "next/link";

export default function Programme({programdata}:any) {
  type ProgrammeData = {
    id: number;
    course: string;
    syllabus: string;
    syllabusIcon: string;
    description: TrustedHTML;
    duration: string;
    eligibility: string;
    intake: string;
  };

  // const jsondatate: ProgrammeData[] = [
  //   {
  //     id: 0,
  //     title: "MA HISTORY",
  //     syllabus: "SYLLABUS",
  //     syllabusIcon: "FaRegFilePdf",
  //     description:
  //       "The curriculum of the P.G. course carries specialization in Islamic History enabling the students to enjoy the benefits that go along with History and Islamic History programme structure.",
  //     details: {
  //       duration: "4 Semesters",
  //       eligibility: "Any degree with 45% of marks for part III of CGPA 2",
  //       intake: "20",
  //     },
  //   },
  //   {
  //     id: 1,
  //     title: "Ph. D",
  //     syllabus: "SYLLABUS",
  //     syllabusIcon: "FaRegFilePdf",
  //     description:
  //       "Admission to Ph.D programme is done as per the guidelines of the University of Calicut. Ph.D.Pprogramme shall be for a minimum duration of three years, including course work and a maximum of six years.",
  //     details: {
  //       duration: "    3-5 years  ",
  //       eligibility: "M.A. History",
  //       intake: "Subject to Availability",
  //     },
  //   },
  // ];

  const ref = useRef(null);
  const isInView = useInView(ref);

  const [load, setload] = useState(true);

  const [first, setfirst] = useState(true);
  const [data, setData] = useState<ProgrammeData | null>(programdata[0]);
  const [jsondata, setJsonData] = useState<ProgrammeData[]>(programdata);
  const [id, setid] = useState(programdata[0].id);
  const [active, setactive] = useState(false)
  function handle(id_: number) {
    const temp = jsondata.find((x) => x.id === id_);
    if (temp) {
      setData(temp);
    }
    setload(!load);
  }
  let i = 0;
  const autochange = () => {
    if (i < jsondata.length) {
      setData(jsondata[i]);
      setid(jsondata[i]?.id)
      i++;
    } else {
      i = 0; 
    }
  };

  useEffect(() => {
    const interval = setInterval(autochange, 5000); // Change cards every 5 seconds
    return () => clearInterval(interval); // Cleanup function to clear interval on unmount
  }, [first]);

  return (
    <div className={styles.outer_main}  id={`programme`}>
      <Image src={world} alt="" className={styles.wrld}></Image>
      <div className={styles.peogrammehead}>
        <h1 >PROGRAMME</h1>
      </div>
      <div className={styles.div3}>
        <div className={styles.shape1}></div>
        <div className={styles.content}>
          <div className={styles.car1}>
            <div className="container">
              <div className={styles.headwrap}>
                <div className={styles.title}>
                  <h1>{data?.course}</h1>
                </div>
                <div className={styles.icon}>
                  <Link href={`${data?.syllabus}`} style={{textDecoration:"none"}}>
                  <button style={{display:"flex"}}>
                    Syllabus <FaRegFilePdf style={{marginLeft:"8px"}} />
                  </button>
                  </Link>
                </div>
              </div>
              <div className={styles.para}>
                <div dangerouslySetInnerHTML={{__html:data?.description || ""}}></div>
              </div>
              <div className={styles.prgdatawrap}>
                <div className={styles.headout}>
                  <div className={styles.head1}>Duration</div>
                  <div className={styles.head2}>Eligibility</div>
                  <div className={styles.head3}>Intake</div>
                </div>
                {/* Content Section */}
                <div className={styles.ctnwrap}>
                  <div className={styles.ct1}>{data?.duration}</div>
                  <div className={styles.ct2}>{data?.eligibility}</div>
                  <div className={styles.ct3}>{data?.intake}</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.btnwrap}>
            {jsondata.map((x: any, index: number) => (
              <button
                key={index}
                className={styles.btn1}
                onClick={() => {
                  handle(x.id);
                  setid(x.id);
                }}
                style={{ backgroundColor:id===x.id ?"#982B35" : "#515151" }}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
