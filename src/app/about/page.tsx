import { Component, useEffect, useRef, useState } from "react";

import styles from "./about.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { FiTarget } from "react-icons/fi";
import { FaEye } from "react-icons/fa6";
import Image from "next/image";
import fac1 from "../../../public/book.jpg";
import { AiFillInstagram } from "react-icons/ai";
import { FaRegFilePdf } from "react-icons/fa";
import CountUp from "react-countup";
import { inView, useInView } from "framer-motion";

import insta from "../../../public/icons grey/instared.png";
import mail from "../../../public/icons grey/mailred.png";
import lin from "../../../public/icons grey/inred.png";
import { motion } from "framer-motion";
import Link from "next/link";
import right from "../../../public/icons grey/rightmap2.png";
import left from "../../../public/icons grey/leftmap22.png";
import world from "../../../public/icons grey/world.png";
import About from "@/component/Aboutcomponent/About";
import Mission from "@/component/Aboutcomponent/Mission";
import Faculty from "@/component/Aboutcomponent/faculty";
import Programme from "@/component/Aboutcomponent/programme";
import { About_countup_datafetcher, aboutus_datafetcher, faculty_datafetcher } from "../../component/api/route";

export default async function about() {
  
  const facdata=await faculty_datafetcher()
  const abouutusdata=await aboutus_datafetcher()
  const countup=await About_countup_datafetcher()
  return (
    <section id={styles.about}>
      <About data={abouutusdata} countup={countup}></About>
      <Mission data={abouutusdata}></Mission>
      <Faculty  data={facdata}></Faculty>
      <Programme ></Programme>
    </section>
  );
}
