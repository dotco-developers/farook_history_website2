"use client";

import { FaRegFilePdf } from "react-icons/fa6";
import styles from "./Aboutcomponent.module.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import world from "../../../public/icons grey/world.png";
import { useInView } from "framer-motion";

export default function Programme() {
  type ProgrammeData = {
    id: number;
    title: string;
    syllabus: string;
    syllabusIcon: string;
    description: string;
    details: {
      duration: string;
      eligibility: string;
      intake: string;
    };
  };

  const jsondatate: ProgrammeData[] = [
    {
      id: 0,
      title: "MA HISTORY",
      syllabus: "SYLLABUS",
      syllabusIcon: "FaRegFilePdf",
      description:
        "The curriculum of the P.G. course carries specialization in Islamic History enabling the students to enjoy the benefits that go along with History and Islamic History programme structure.",
      details: {
        duration: "4 Semesters",
        eligibility: "Any degree with 45% of marks for part III of CGPA 2",
        intake: "20",
      },
    },
    {
      id: 1,
      title: "Ph. D",
      syllabus: "SYLLABUS",
      syllabusIcon: "FaRegFilePdf",
      description:
        "Admission to Ph.D programme is done as per the guidelines of the University of Calicut. Ph.D.Pprogramme shall be for a minimum duration of three years, including course work and a maximum of six years.",
      details: {
        duration: "    3-5 years  ",
        eligibility: "M.A. History",
        intake: "Subject to Availability",
      },
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref);

  const [load, setload] = useState(true);

  const [first, setfirst] = useState(true);
  const [data, setData] = useState<ProgrammeData | null>(jsondatate[0]);
  const [jsondata, setJsonData] = useState<ProgrammeData[]>(jsondatate);
  const [id, setid] = useState(jsondatate[0].id);
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
                  <h1>{data?.title}</h1>
                </div>
                <div className={styles.icon}>
                  <button className="flex">
                    {data?.syllabus} <FaRegFilePdf className="ml-3 mt-[4px]" />
                  </button>
                </div>
              </div>
              <div className={styles.para}>
                <p>{data?.description}</p>
              </div>
              <div className={styles.prgdatawrap}>
                <div className={styles.headout}>
                  <div className={styles.head1}>Duration</div>
                  <div className={styles.head2}>Eligibility</div>
                  <div className={styles.head3}>Intake</div>
                </div>
                {/* Content Section */}
                <div className={styles.ctnwrap}>
                  <div className={styles.ct1}>{data?.details.duration}</div>
                  <div className={styles.ct2}>{data?.details.eligibility}</div>
                  <div className={styles.ct3}>{data?.details.intake}</div>
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
