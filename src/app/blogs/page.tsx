import Blogs from "@/component/bog_sub/Blog_sub";
import { blog__datafetcher, blog_inner_datafetcher } from "../api/route";



export default async function Blog({searchParams}:any){
  const data=await blog__datafetcher()
  
  return(
    <Blogs data={data} searchParams={searchParams}></Blogs>
  )
}