import Image from "next/image";
import styles from "./achievement.module.css";
import im from "../../../public/news.jpg";
import im1 from "../../../public/news2.jpg";
import glob from "../../../public/icons grey/globfour.png";
import Link from "next/link";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

interface achivementprop {
  id: number;
  name: string;
  designation: string;
  image: string;
  is_student: boolean;
  description: string;
  cv: string;
  email: string;
  instagram: string;
  linkedin: string;
}

export default function News({
  achivementdata,
}: {
  achivementdata: achivementprop[];
}) {
  return (
    <section className={styles.sec}>
      <div className={styles.rbn}></div>
      <div className="container">
        <div className={`row ${styles.rowe}`}>
          <Image src={glob} alt="" className={styles.gl}></Image>
          <h6 className={styles.head}>Achievements</h6>
          {achivementdata?.map((item: any, i: number) => (
            <div className="col-lg-4 col-md-6 col-12" key={i}>
              <div className={styles.card}>
                <Image
                  src={item.image}
                  width={300}
                  height={400}
                  alt=""
                  className={styles.im}
                ></Image>
                <div className="px-4 mt-1">
                  <p className=" text-black font-medium ">{item.name}</p>
                  <p className="text-[13px] mt-2">{item.designation}</p>
                  <div
                    className={styles.p4}
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></div>
                </div>
              </div>
            </div>
          ))}

          {/* <div className="col-lg-4 col-md-6 col-12">
            <div className={styles.card}>
              <Image src={im1} alt="" className={styles.im}></Image>
              <div className="px-4 mt-1">
                <p className=" text-black font-medium ">Samshar</p>
                <p className="text-[13px] mt-2">Dept. of History</p>
                <p className="text-[13px] mb-2">Batch 2020-25 (Integrated)</p>
                <p className={styles.p4}>
                  Got selected for Summer Internship Programme 2024 at Indian
                  Institute of Space and Technology (IIST), Thiruvananthapuram.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className={styles.card}>
              <Image src={im} alt="" className={styles.im}></Image>
              <div className="px-4 mt-1">
                <p className=" text-black font-medium ">Saheen</p>
                <p className="text-[13px] mt-2">Dept. of History</p>
                <p className="text-[13px] mb-2">Batch 2020-25 (Integrated)</p>
                <p className={styles.p4}>
                  Got selected for Summer Internship Programme 2024 at Indian
                  Institute of Space and Technology (IIST), Thiruvananthapuram.
                </p>
              </div>
            </div>
          </div> */}
        </div>
        <div className="row mt-4">
          <Link href="/achievements">
            <button className={styles.view}>
              View all
              <span>
                <KeyboardDoubleArrowRightIcon className={styles.ic} />
              </span>{" "}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
