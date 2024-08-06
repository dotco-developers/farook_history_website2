import styles from "./eventpage.module.css";
import Event from "../event/Event";
import Image from "next/image";
import im from "../../../public/icons grey/leftmap2.png";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Link from "next/link";

export default function Eventpage({
  eventdata,
}: {
  eventdata: {
    id: number;
    name: string;
    image: string;
    description: string;
    date: string;
    venue: string;
    status: string;
  };
}) {
  return (
    <section className={styles.sec}>
      <Image src={im} alt="" className={styles.im}></Image>
      <div className={styles.bnr}></div>
      <Event eventdata={eventdata}></Event>
      <Link href="/event">
        <button className={styles.view}>
          View all
          <span>
            <KeyboardDoubleArrowRightIcon className={styles.ic} />
          </span>{" "}
        </button>
      </Link>
    </section>
  );
}
