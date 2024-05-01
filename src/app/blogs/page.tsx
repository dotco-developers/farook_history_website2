
"use client"
import { faCalendarDays, faFilter, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./blogs.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import im from "../../../public/book.jpg";
import Popup from "@/component/Popup/Popup";
import { useEffect, useState } from "react";
import { useRef } from "react";
import arr from "../../../public/icons grey/arr.png"
export default function Blogs() {

   const [data, setdata] = useState([])


    const [show, setshow] = useState(false)

    const bref=useRef(document.body)

   const handle=()=>{
        setshow(!show)
        console.log("clck");
        
    }
    useEffect(() => { 
    const datafetcher=async()=>{
      try {
        const response =await fetch("https://farook-college-backend.vercel.app/api/blog/",{
          method:"GET"
        })
        if (!response.ok) {
          throw new Error("error in fetching blog data")
        }
        const res =  await response.json();
          setdata(res)
          console.log(data);
          
      }catch (error) {
        console.log(`error`+error);

      }
    }
      datafetcher();   
    }, [])
    

    useEffect(() => {
        if (show) {
            const popupElement = document.getElementById('popup');
            if (popupElement) {
                const scrollOptions = {
                    behavior: 'smooth' as ScrollBehavior,
                    top: popupElement.getBoundingClientRect().top + window.pageYOffset - window.innerHeight / 2 + popupElement.clientHeight / 2,
                };
                
                
                window.scrollTo(scrollOptions);        
                bref.current.classList.add(styles.blackout)
            }
                      
        }else{
            bref.current.classList.remove(styles.blackout)

        }
    }, [show]);
  return (
    <section  className={styles.sc}>
        {
            show &&
            <div className={styles.wr} id='popup'>
                <Popup handle={handle} ></Popup>
            </div>
        }
      <div className="container">
        <div className="row">
          <div className={`col-lg-12 col-12 ${styles.upload}`}>
            <button className={styles.btn} onClick={handle}>UPLOAD</button>
          </div>
          <div className="col-lg-6 col-12 ">
            <h2 className={styles.head}>
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <div className={styles.wr_course}>
              <input
                type="text"
                placeholder="Search"
                name="search"
                className={styles.in}
                style={{paddingLeft:"12px"}}
              />
              <div className={styles.ic_wr}>
                <div className={styles.bg}>
                  <FontAwesomeIcon icon={faFilter} className={styles.ic} />
                </div>
                <div className={styles.bg}>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className={styles.ic}
                  />
                </div>
              </div>
            </div>
            <p className={styles.pera}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias quibusdam quasi illum tempora itaque velit reprehenderit
            </p>
          </div>
        </div>
        <div className="row">
          {
            data.map((x:any)=>(
              <div className="col-lg-4 col-md-6 col-12">
              <div className={styles.card}>
                <div className={styles.im_out}>
                  <Image src={arr} alt="" className={styles.arr}></Image>
                <Image src={x.image} alt="" className={styles.im}></Image>
                </div>
                <h2>{x.name}</h2>
                <div className={styles.auth}>
                  <p> <FontAwesomeIcon icon={faCalendarDays} className={styles.a_ic} />{x.created_date}</p> 
                  <p style={{marginLeft:"10px"}}><FontAwesomeIcon icon={faUser} className={styles.a_ic}/>{x.author}</p>
                </div>
                <p>
                 {x.content}
                </p>
              </div>
            </div>

            ))
          }
      
          
        </div>
      </div>
    </section>

  );
}
