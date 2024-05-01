import Landing from "@/component/landingpage/Landing";
import "../app/globals.css"
import Department from "@/component/department/department";
import Archieves from "@/component/archieves/Archieves";
import News from "@/component/News/News";
import Eventpage from "../component/eventpage/Eventpage"
import Students from "../component/students/Student"
import Image from "next/image";
import immap from "../../public/icons grey/rightmap.png"
import styles from "./home.module.css"
export default function Home() {
  return (
    <>
    <Landing></Landing>
    <Department></Department>
    <Eventpage></Eventpage>
    <div className={styles.bgg}>
      <Image src={immap} className={styles.mapp} alt=""></Image>
    <Archieves></Archieves>
    <Students></Students>
    </div>
    <News></News>
    </>
  );
}
