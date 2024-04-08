import Landing from "@/component/landingpage/Landing";
import "../app/globals.css"
import Department from "@/component/department/department";
import Archieves from "@/component/archieves/Archieves";
import News from "@/component/News/News";
import Event from "../component/event/Event"
export default function Home() {
  return (
    <>
    <Landing></Landing>
    <Department></Department>
    <Event></Event>
    <Archieves></Archieves>
    <News></News>
    </>
  );
}
