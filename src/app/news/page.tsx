import News_sub from "@/component/news_sub/News_sub.page";
import { all_news_datafetcher } from "../api/route";


export default async function NEWS_MAIN({searchParams}:any){
  const data = await all_news_datafetcher();
  return(
    <News_sub data={data} searchParams={searchParams}></News_sub>
  )
}