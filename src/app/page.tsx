import Landing from "@/component/landingpage/Landing";
import "../app/globals.css"
import Department from "@/component/department/department";
import Archieves from "@/component/archieves/Archieves";
import News from "@/component/AchievementsHome/Acheivement";
import Eventpage from "../component/eventpage/Eventpage"
import Students from "../component/students/Student"
import Image from "next/image";
import immap from "../../public/icons grey/rightmap.png"
import styles from "./home.module.css"
import {achivement_home_datafetcher, event_home_datafetcher, news_home_datafetcher} from "../component/api/route"
export default async function Home() {
  const data =await event_home_datafetcher()
  const newsdata=await news_home_datafetcher()
  const achivementdata=await achivement_home_datafetcher()
  return (
    <>
    <Landing newsdata={newsdata}></Landing>
    <Department></Department>
    <Eventpage eventdata={data}></Eventpage>
    <div className={styles.bgg}>
      <Image src={immap} className={styles.mapp} alt=""></Image>
    <Archieves></Archieves>
    <Students></Students>
    </div>
    <News achivementdata={achivementdata}></News>
    </>
  );
}
