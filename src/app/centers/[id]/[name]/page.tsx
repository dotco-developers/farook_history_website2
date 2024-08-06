import Image from "next/image";
import styles from "./inner_center.module.css"
import Sidemenu from "../../../../component/sidemenu/Sidemenu"
export default  function Management_in() {
  return (
    <>
      <section className={styles._sec}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-12">
                <Sidemenu></Sidemenu>

            </div>
            <div className="col-lg-9 col-md-8 col-12">
                <h6 className={styles.head_main}>
                    heading 
                </h6>
                <div>
                    <details></details>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
