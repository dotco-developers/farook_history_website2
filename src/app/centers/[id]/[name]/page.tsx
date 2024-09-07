import Image from "next/image";
import styles from "./inner_center.module.css";
import Sidemenu from "../../../../component/sidemenu/Sidemenu";
import {
  center_datafetcher,
  center_head_datafetcher,
  center_inner_datafetcher,
  center_sidebar_datafetcher,
} from "@/app/api/route";
export default async function Management_in({ params }: any) {
  const sidebardata = await center_sidebar_datafetcher(params.id);
  const head = await center_head_datafetcher(params.id);
  const data = await center_inner_datafetcher(params.name);
  return (
    <>
      <section className={styles._sec}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-12">
              <Sidemenu
                data={sidebardata}
                params={params}
                head={head}
              ></Sidemenu>
            </div>
            {data?.map((x: any, i: number) => (
              <div className="col-lg-9 col-md-8 col-12" key={i}>
                <h6 className={styles.head_main}>{x.name}</h6>
                <div style={{marginTop:"10px",marginLeft:"10px",marginRight:"10px"}} dangerouslySetInnerHTML={{__html:x.description}}>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
