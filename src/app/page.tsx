import Landing from "@/component/landingpage/Landing";
import "../app/globals.css"
import Department from "@/component/department/department";
import Archieves from "@/component/archieves/Archieves";
import News from "@/component/News/News";
import Eventpage from "../component/eventpage/Eventpage"
import Students from "../component/students/Student"

export default function Home() {
  return (
    <>
    <Landing></Landing>
    <Department></Department>
    <Eventpage></Eventpage>
    <Archieves></Archieves>
    <Students></Students>
    <News></News>
    </>
  );
}
