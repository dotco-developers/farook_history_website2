import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./news.module.css";
import {
  faChevronRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import im from "../../../public/book.jpg";
import arr from "../../../public/icons grey/arr.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { all_news_datafetcher } from "../api/route";
export default async function News() {
  // const [data, setdata] = useState([]);
  // const [imagedata, setimagedata] = useState("");
  // useEffect(() => {
  //   const datafetcher = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://farook-college-backend.vercel.app/api/news/"
  //       );
  //       if (!response.data) {
  //         throw new Error("server request not ok");
  //       }
  //       setdata(response.data);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.log("error in fetching news data" + error);
  //     }
  //   };
  //   datafetcher();
  // }, []);

  const data= await all_news_datafetcher()
  return (
    <section className={styles.sec}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className={styles.n_wrap}>
              <h2 className={styles.head}>NEWS</h2>
              <p className={styles.pera}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                necessitatibus placeat perspiciatis quisquam odio voluptatum
              </p>
              <div className={styles.search}>
                <input type="text"></input>
                <div className={styles.ic_wr}>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className={styles.ic}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={`col-lg-12 col-12 ${styles.out}`}>
            <div className={styles.fl}>
              <p>Filter by :</p>
              <div style={{ display: "flex" }}>
                <select >
                  <option disabled selected className={styles.op}>
                    DATE
                  </option>
                  <option>12</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* cards */}
        <div className={`${styles.row_wr} row`}>
          {data?.map(
            ({image, name, description}: { image: string; name: string; description: string },i:number) => {
              return (
                <div className="col-lg-4 col-md-6 col-12" key={i}>
                  <div className={styles.card}>
                    <div className={styles.im_out}>
                      <Image src={arr} alt="" className={styles.arr}></Image>
                      <img
                        src={image}
                        width={200}
                        height={200}
                        alt="loading"
                        className={styles.im}
                      ></img>
                    </div>
                    <h2>{name}</h2>
                    <p>{description}</p>
                  </div>
                </div>
              )
            }
          )}
        </div>
      </div>
    </section>
  );
}
