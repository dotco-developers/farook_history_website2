import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./news.module.css";
import { faChevronRight, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import im from "../../../public/book.jpg";
import arr from "../../../public/icons grey/arr.png"
import Image from "next/image";

export default function News() {
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
                <input type="text">

                </input>
                <div className={styles.ic_wr}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.ic}/>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-lg-12 col-12 ${styles.out}`}>
            <div className={styles.fl}>
                <p>Filter by :</p>
                <div style={{display:"flex"}}>
                <select>
                   <option disabled selected className={styles.op}>Name</option>
                    <option >Date</option>
                </select>
                <select>
                    <option disabled selected className={styles.op}>Name</option>
                    <option>first</option>
                </select>
                </div>
            </div>
          </div>
        </div>
        {/* cards */}
        <div className={`${styles.row_wr} row`}>
        <div className="col-lg-4 col-md-6 col-12">
            <div className={styles.card}>
            <div className={styles.im_out}>
                <Image src={arr} alt="" className={styles.arr}></Image>
              <Image src={im} alt="" className={styles.im}></Image>
              </div>
              <h2>LOREM</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure a
                atque, officiis quia itaque impedit modi corporis hic placeat
                quidem necessitatibus consequatur rem veritatis id, eum, ipsum
                accusantium perspiciatis corrupti?
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className={styles.card}>
              <Image src={im} alt="" className={styles.im}></Image>
              <h2>LOREM</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure a
                atque, officiis quia itaque impedit modi corporis hic placeat
                quidem necessitatibus consequatur rem veritatis id, eum, ipsum
                accusantium perspiciatis corrupti?
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className={styles.card}>
              <Image src={im} alt="" className={styles.im}></Image>
              <h2>LOREM</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure a
                atque, officiis quia itaque impedit modi corporis hic placeat
                quidem necessitatibus consequatur rem veritatis id, eum, ipsum
                accusantium perspiciatis corrupti?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
