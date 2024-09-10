"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./event.module.css";
import {
  faCalendarDays,
  faFilter,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import im from "../../../public/book.jpg";
import Image from "next/image";
import arr from "../../../public/icons grey/arr.png";
import { useEffect, useRef, useState } from "react";
import { event_datafetcher } from "../../component/api/route";
import Link from "next/link";

export default  function Event({ searchParams,data }:any) {
  
  const [filteredData, setFilteredData] = useState(data);
  const [searchQuery, setSearchQuery] = useState(searchParams?.search || "");
  const [selectedoption, setselectedoption] = useState(searchParams?.status || "");

  
  useEffect(() => {
    let filteredData = data;

    if (searchQuery) {
      filteredData = filteredData.filter((x: any) =>
        x.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedoption) {
      filteredData = filteredData.filter((x: any) => x.status === selectedoption);
    }

    setFilteredData(filteredData);
  }, [searchQuery, selectedoption, data]);


  const options = Array.from(new Set(data.map((x: any) => x.status)));
  
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = e.currentTarget.search.value;
    setSearchQuery(query);
    window.history.replaceState(
      null,
      "",
      `/news/?search=${query}&status=${selectedoption}`
    );
  };

  const handlestatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const status = e.target.value;
    setselectedoption(status)
    window.history.replaceState(
      null,
      "",
      `/events/?search=${searchQuery}&status=${status}`
    );
  };


  const dateoptions: Intl.DateTimeFormatOptions = {
    year: "numeric",  
    month: "long",    
    day: "numeric",   
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  

  return (
    <section className={styles.sec}>
      <div className="container">
        
        <div className="row">
          <div className="col-lg-12 col-12">
            <h2 className={styles.head}>RECENT EVENTS </h2>
          </div>


          <div className="col-lg-12 col-12">
          <form onSubmit={handleSearchSubmit}>
            <div className={styles.wr_course}>
              <input
                type="text"
                placeholder="Search"
                name="search"
                className={styles.in}
                style={{ paddingLeft: "12px" }}
                defaultValue={searchQuery}
                              />
              <div className={styles.ic_wr}>
                <button className={styles.bg} type="submit">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className={styles.ic}
                  />
                </button>
              </div>
            </div>
            </form>
          </div>
        </div>
        <div className={`col-lg-12 col-12 ${styles.out}`}>
            <div className={styles.fl}>
              <p>Filter by :</p>
              <div style={{ display: "flex" }}>
                <select onChange={handlestatusChange} defaultValue={selectedoption}>
                  <option value="" disabled>
                    Status
                  </option>
                  {options.map((date: any, index: number) => (
                    <option key={index} value={date}>
                      {date}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        <div className={`row ${styles.r_sec}`}>
          {filteredData?.map((x: any,i:number) => (
            <div className="col-lg-4 col-md-6 col-12" key={i}>
              <div className={styles.card}>
                <div className={styles.im_out}>
                  <Link href={`/event/${x.id}`}>
                  <Image src={arr} alt="" className={styles.arr}></Image>
                  </Link>
                  <Image src={x.image} alt="" className={styles.im} width={300} height={400} ></Image>
                </div>
                <h2>{x.title}</h2>
                <div className={styles.auth}></div>
                <div className={styles.content_in} dangerouslySetInnerHTML={{__html:x.description}}>

                </div>
                <label className={styles.wr_ic}>
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className={styles.a_ic}
                  />
                 {new Date(x.date).toLocaleString("en-US",dateoptions)}
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
