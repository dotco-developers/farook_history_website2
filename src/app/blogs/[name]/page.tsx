import Image from "next/image";
import im from "../../../../public/blog.jpg";
import styles from "./bloginner.module.css";

export default function Bloginner() {
  return (
    <section className={styles.sec}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-6">
            <h2 className={styles.head}>LOREM IPSUM <br/> BLOG</h2>
          </div>
        
          <div className="col-lg-12 col-12">
            <Image src={im} alt="" className={styles.im}></Image>
          </div>
          <div className="col-lg-12 col-12">
            <p className={styles.pera}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              magnam! Nostrum aperiam sapiente necessitatibus earum illo fugiat,
              repudiandae voluptate esse. Ducimus ullam dignissimos facilis?
              Fugit, nulla? Natus repellendus ex distinctio. Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Perferendis quam similique
              culpa laboriosam, repellendus cum libero excepturi facere, at
              tenetur nam, quas reprehenderit magnam eveniet earum ipsum aut
              optio quae.<br></br>
              <br></br>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              magnam! Nostrum aperiam sapiente necessitatibus earum illo fugiat,
              repudiandae voluptate esse. Ducimus ullam dignissimos facilis?
              Fugit, nulla? Natus repellendus ex distinctio. Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Perferendis quam similique
              culpa laboriosam, repellendus cum libero excepturi facere, at
              tenetur nam, quas reprehenderit magnam eveniet earum ipsum aut
              optio quae.<br></br>
              <br></br>

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              magnam! Nostrum aperiam sapiente necessitatibus earum illo fugiat,
              repudiandae voluptate esse. Ducimus ullam dignissimos facilis?
              Fugit, nulla? Natus repellendus ex distinctio. Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Perferendis quam similique
              culpa laboriosam, repellendus cum libero excepturi facere, at
              tenetur nam, quas reprehenderit magnam eveniet earum ipsum aut
              optio quae.<br></br>
              <br></br>

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              magnam! Nostrum aperiam sapiente necessitatibus earum illo fugiat,
              repudiandae voluptate esse. Ducimus ullam dignissimos facilis?
              Fugit, nulla? Natus repellendus ex distinctio. Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Perferendis quam similique
              culpa laboriosam, repellendus cum libero excepturi facere, at
              tenetur nam, quas reprehenderit magnam eveniet earum ipsum aut
              optio quae.
            </p>
          </div>
          <div  className="col-lg-12 col-12">
            <h3 className={styles.name}>~name</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
