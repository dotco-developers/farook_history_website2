import { faCameraRetro, faClone, faX } from "@fortawesome/free-solid-svg-icons";
import styles from "./popup.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Popup({ handle }: any) {
  const [show, setshow] = useState(true);
  const [name, setname] = useState()
  const [showtxt, setshowtxt] = useState(false)

  const handlechange=(e:any)=>{
    const namev=e.target.files[0].name;
    setname(namev)
  }
  const change = () => {
    setshow(!show);
  };
  const texthandle=()=>{
      setshowtxt(!showtxt)
  }
  return (
    <>
      {show ? (
        <div className={styles.c_wr}>
          <div className={styles.x_wr} onClick={handle}>
            <FontAwesomeIcon icon={faX} className={styles.x} />
          </div>
          <div className={styles.content}>
            <h2>LOGIN</h2>
            <input type="text" className={styles.txt} placeholder="Name" />
            <input
              type="password"
              className={styles.ps}
              placeholder="Password"
            />
            <div className={styles.bt_wr}>
              <button className={styles.btn} onClick={change}>
                Submit
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.c_wr}>
          <div className={styles.x_wr} onClick={handle}>
            <FontAwesomeIcon icon={faX} className={styles.x} />
          </div>
          <div className={styles.ct2}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <h2>
                  HEY!<br></br> UPLOAD NOW
                </h2>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <select name="" id="" className={styles.select}>
                  <option value="" disabled selected hidden>
                    Select a category
                  </option>
                  <option >hai</option>
                </select>
              </div>
            </div>

            <input type="text" placeholder="Topic"></input>
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className={styles.txt_up} onClick={texthandle}>
                  <FontAwesomeIcon icon={faClone} className={styles.icar} />
                  <p>paste ur content</p>
                </div>
              </div>
              <div className="col-lg-6 col-12">     
               <label className={styles.im} htmlFor="upload-photo">  
                  <FontAwesomeIcon
                    icon={faCameraRetro}
                    className={styles.icar}
                  />
                  <p>upload image</p>
                </label>
                <label>{name}</label>
                <input type="file" id="upload-photo" name="upload-photo" style={{display:"none"}} onChange={handlechange}/>
              </div>
              {
                showtxt && 
                 <div className="col-lg-12 col-12">
                <textarea placeholder="Write something" className={styles.txt_area}></textarea>
                <button className={styles.send} onClick={()=>setshowtxt(false)}>send</button>
              </div>
              }
             
            </div>
          </div>
        </div>
      )}
    </>
  );
}
