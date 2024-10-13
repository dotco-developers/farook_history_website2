"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./news.module.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import arr from "../../../public/icons grey/arr.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function News_sub({ searchParams, data }: any) {
  const [filteredData, setFilteredData] = useState(data);
  const [searchQuery, setSearchQuery] = useState(searchParams?.search || "");
  const [selectedDate, setSelectedDate] = useState(searchParams?.date || "");

  useEffect(() => {
    let filtered = data;

    if (searchQuery) {
      filtered = filtered.filter((x: any) =>
        x.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedDate) {
      filtered = filtered.filter((x: any) => x.date === selectedDate);
    }

    setFilteredData(filtered);
  }, [searchQuery, selectedDate, data]);

  const dateOptions = Array.from(
    new Set(data.map((x: any) => new Date(x.date).getFullYear()))
  );
  
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = e.currentTarget.search.value;
    setSearchQuery(query);
    window.history.replaceState(
      null,
      "",
      `/news/?search=${query}&date=${selectedDate}`
    );
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const date = e.target.value;
    setSelectedDate(date);
    window.history.replaceState(
      null,
      "",
      `/news/?search=${searchQuery}&date=${date}`
    );
  };

  useEffect(() => {
   
  }, [])
  

  return (
    <section className={styles.sec}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className={styles.n_wrap}>
              <h2 className={styles.head}>NEWS</h2>
              <p className={styles.pera}>
                Stay updated with the latest developments and announcements from
                the History Department at Farook College.
              </p>
              <form onSubmit={handleSearchSubmit}>
                <div className={styles.search}>
                  <input type="text" name="search" defaultValue={searchQuery} />
                  <button className={styles.ic_wr} type="submit">
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      className={styles.ic}
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className={`col-lg-12 col-12 ${styles.out}`}>
            <div className={styles.fl}>
              <p>Filter by :</p>
              <div style={{ display: "flex" }}>
                <select onChange={handleDateChange} value={selectedDate}>
                  <option value="" disabled>
                    DATE
                  </option>
                  {dateOptions.map((date: any, index: number) => (
                    <option key={index} value={date}>
                      {date}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* cards */}
        <div className={`${styles.row_wr} row`}>
          {filteredData?.map(
            (
              {
                image,
                name,
                title,
                id,
              }: { image: string; name: string; title: string; id: string },
              i: number
            ) => {
              return (
                <div className="col-lg-4 col-md-6 col-12" key={i}>
                  <div className={styles.card}>
                    <div className={styles.im_out}>
                      <Link href={`/news/${id}`}>
                        <Image src={arr} alt="" className={styles.arr} />
                      </Link>
                      <img
                        src={image}
                        width={200}
                        height={200}
                        alt="loading"
                        className={styles.im}
                      />
                    </div>
                    <h2>{name}</h2>
                    <p>{title}</p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
