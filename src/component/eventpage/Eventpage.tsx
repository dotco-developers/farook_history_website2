import styles from "./eventpage.module.css";
import Event from "../event/Event";

export default function Eventpage() {
  return (
    <section className={styles.sec}>
      <div className={styles.bnr}></div>
      <Event></Event>
    </section>
  );
}
