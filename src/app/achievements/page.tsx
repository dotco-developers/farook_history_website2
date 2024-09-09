import Achivement from "@/component/Achivement_sub/Achivement";
import { achivement_datafetcher } from "@/component/api/route";


export default async function Achivement_main(){
  const data=await achivement_datafetcher()
  return(
    <Achivement data={data}></Achivement>
  )
}