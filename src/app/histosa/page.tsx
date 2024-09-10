
import { histosa_activity_datafetcher, histosa_datafetcher, histosa_execome_datafetcher, histosa_gallery_datafetcher, histosa_reports_datafetcher } from "@/component/api/route"
import Histosa_sub from "../../component/histosa_sub/Histosa_sub"

export default async function Histosa_main(){
  const histosa=await histosa_datafetcher()
  const execome=await histosa_execome_datafetcher()
  const activity=await histosa_activity_datafetcher()
  const reports=await histosa_reports_datafetcher()
  const gallery=await histosa_gallery_datafetcher()
  return(
    <Histosa_sub histosa={histosa} execome={execome} activity={activity} reports={reports} gallery={gallery}>
    </Histosa_sub>
  )
}