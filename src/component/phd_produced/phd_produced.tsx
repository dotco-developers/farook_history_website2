import {
  phdproduced_datafetcher,
  Research_guide_datafetcher,
} from "@/app/api/route";
import styles from "./phd.module.css";
export default async function Scholar() {
  const data = await phdproduced_datafetcher();
  const guidedata = await Research_guide_datafetcher();
  return (
    <>
      <section className={styles.sec}>
        <div className="container">
          <div className={`row `}>
            <div className="col-lg-12 col-12">
              <h2 className={styles.head}>PHDS PRODUCED</h2>
            </div>
            <div className={`col-lg-12 col-12 ${styles.outerdiv}`}>
              <div className={`row ${styles.main}`}>
                <div className="col-lg-2 col-2">
                  <p>#</p>
                </div>
                <div className="col-lg-2  col-2">
                  <p>YEAR</p>
                </div>
                <div className="col-lg-3 col-3">
                  <p>NAME</p>
                </div>
                <div className="col-lg-3 col-3 ">
                  <p>TOPIC</p>
                </div>
                <div className="col-lg-2 col-2 ">
                  <p>GUIDE</p>
                </div>
              </div>
              {/* 2nd */}
              {data.map((x: any,i:number) => (
                <div className={`row ${styles.sub}`} key={i}>
                  <div className="col-lg-2 col-2">
                    <p>{x.id}</p>
                  </div>
                  <div className="col-lg-2 col-2 ">
                    <p>{x.year}</p>
                  </div>
                  <div className="col-lg-3 col-3">
                    <p>{x.name}</p>
                  </div>
                  <div className="col-lg-3 col-3">
                    <p>{x.topic}</p>
                  </div>
                  <div className="col-lg-2 col-2 ">
                    {guidedata.map(
                      (item: any, index: number) =>
                        item.id == x.guide && <p key={index}>{item.name}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* end */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
