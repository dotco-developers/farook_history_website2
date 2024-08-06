"use client";
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

export default function about() {
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

  const facultydata = [
    {
      name: "Dr. C.A. Anaz",
      designation: "Assistant Professor and Head",
      mail: "anaz@farookcollege.ac.in",
      img: "/caanaz.jpg",
    },
    {
      name: "Dr. Abdul Nisar ",
      designation: "Assistant Professor",
      mail: "dr.mnisar@farookcollege.ac.in",
      img: "/niza.jpg",
    },
    {
      name: " Dr. Shumais U",
      designation: "Assistant Professor",
      mail: "shumais.u@farookcollege.ac.in",
      img: "/shumu.jpg",
    },
  ];

  return (
    <section id={styles.about}>
      <About></About>
      <Mission></Mission>
      <Faculty></Faculty>
      <Programme></Programme>
    </section>
  );
}
