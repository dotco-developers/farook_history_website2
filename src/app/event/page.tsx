
import { event_datafetcher } from "@/component/api/route"
import Event_sub from "../../component/event_sub/Event_sub"

export default async function Event_main({searchParams}:any){
  const data=await event_datafetcher()
  return (
    <Event_sub data={data} searchParams={searchParams}></Event_sub>
  )
}