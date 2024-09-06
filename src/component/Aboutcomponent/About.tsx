
import styles from "./Aboutcomponent.module.css"
import CountUp from "react-countup";
export default function About(){
    return(
        <div className={styles.headmain}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-10 col-12 ${styles.headsub}`}>
              <h1>ABOUT US</h1>
              <br />
              <br />
              <p>
                The Department of History at Farooq College offers a
                post-graduate program in Islamic History. The program provides a
                panoramic view of Islamic history, covering its inception to its
                influence on contemporary societies worldwide. Students develop
                analytical skills and research proficiency through engaging
                lectures, interactive seminars, and immersive fieldwork
                experiences. The program&apos;s esteemed faculty members guide
                students to traverse the assortment of Islamic civilization,
                drawing profound insights into the interplay of faith, politics,
                and culture. The course has the conventional form of terminal
                examination and internal evaluations in addition to the
                submission of the dissertation by the candidate for the
                fulfilment of the requirements of the University of Calicut.
              </p>
            </div>
            <div className={styles.counter}>
              {/* {data.map((x: any) => (
                <div
                  className={`col-lg-3 col-12 ${styles.countersub} `}
                  key={x.id}
                >
                  <h3>
                    <CountUp
                      start={0}
                      end={x.count}
                      duration={4}
                      decimals={0}
                      suffix="+"
                    >
                      {({ countUpRef, start }) => (
                        <div>
                          <span ref={countUpRef} />
                        </div>
                      )}
                    </CountUp>
                  </h3>
                  <h5>{x.name}</h5>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    )
}