import styles from "./eventpage.module.css";
import Event from "../event/Event";
import Image from "next/image";
import im from "../../../public/icons grey/leftmap2.png"
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function Eventpage() {
  return (
    <section className={styles.sec}>
     <Image src={im} alt="" className={styles.im}></Image>
      <div className={styles.bnr}></div>
      <Event></Event>    
      <button className={styles.view}>
             View all
              <span>
                <KeyboardDoubleArrowRightIcon className={styles.ic} />
              </span>{" "}
            </button>
    </section>
  );
}
