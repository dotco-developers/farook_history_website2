
import About from "@/component/Aboutcomponent/About";
import Mission from "@/component/Aboutcomponent/Mission";
import Faculty from "@/component/Aboutcomponent/faculty";
import Programme from "@/component/Aboutcomponent/programme";
import { About_countup_datafetcher, aboutus_datafetcher, faculty_datafetcher, programme_datafetcher } from "../../component/api/route";

export default async function about() {
  
  const facdata=await faculty_datafetcher()
  const abouutusdata=await aboutus_datafetcher()
  const countup=await About_countup_datafetcher()
  const programm=await programme_datafetcher()
  return (
    <section id="about">
      <About data={abouutusdata} countup={countup}></About>
      <Mission data={abouutusdata}></Mission>
      <Faculty  data={facdata}></Faculty>
      <Programme programdata={programm} ></Programme>
    </section>
  );
}
