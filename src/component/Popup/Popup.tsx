import { faCameraRetro, faClone, faX } from "@fortawesome/free-solid-svg-icons";
import styles from "./popup.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

interface PopupProps {
  handle: () => void;
}

export default function Popup({ handle }: PopupProps) {
  const [show, setShow] = useState(true);
  const [name, setName] = useState<string | undefined>();
  const [showTxt, setShowTxt] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [catdata, setcatdata] = useState([]);
  const [usernamestate, setusernamestate] = useState("")
  const [passwordstate, setpasswordstate] = useState("")
  const [categoryselected, setcategoryselected] = useState<string | undefined>(
    undefined
  );
  const [cred, setcred] = useState([]);

  const usernameref = useRef<HTMLInputElement>(null);
  const passwordref = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
      setName(file.name);
    }
  };

  const toggleShow = () => {
    setShow(!show);
  };

  const toggleTextArea = () => {
    setShowTxt(!showTxt);
  };

  const handleData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (file !== null) {
      handle();
    } else {
      alert("Some of fields are missing check again");
    }

    const formData = new FormData(e.currentTarget);

    if (file) {
      formData.append("image", file);
    }

    formData.append("category", categoryselected as string);

    const topic = formData.get("topic");
    const author = formData.get("author");
    const content = formData.get("content");

    formData.append("topic", topic as string);
    formData.append("author", author as string);
    formData.append("content", content as string);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/blog/`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send data");
      }

      console.log("Data successfully sent");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const fetchcategory = async () => {
      const category = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/category`,
        {
          method: "GET",
        }
      );
      const cred = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/blog_passwords`,
        {
          method: "GET",
        }
      );
      const categorydata = await category.json();
      const creddata = await cred.json();
      setcred(creddata);
      setcatdata(categorydata);
    };
    fetchcategory();
  }, []);

  const handlefirstsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const username = usernameref.current?.value || "";
    const password = passwordref.current?.value || "";
  
    let matchingUser = cred.find(
      (user: any) => user.username === username && user.password === password
    );
  
    if (matchingUser) {
      setusernamestate("");
      setpasswordstate("");
      toggleShow();
    } else {
      alert("Invalid username or password");
      setusernamestate("");
      setpasswordstate("");
    }
  };
  
  return (
    <>
      {show ? (
        <div className={styles.c_wr}>
          <div className={styles.x_wr} onClick={handle}>
            <FontAwesomeIcon icon={faX} className={styles.x} />
          </div>
          <div className={styles.content}>
            <h2>LOGIN</h2>
            <form onSubmit={handlefirstsubmit}>
              <input
                name="username"
                type="text"
                className={styles.txt}
                placeholder="Name"
                autoComplete="off"
                onChange={(e)=>{setusernamestate(e.target.value)}}
                value={usernamestate}
                ref={usernameref}
              />
              <input
                name="password"
                type="password"
                className={styles.ps}
                placeholder="Password"
                autoComplete="off"
                onChange={(e)=>{setpasswordstate(e.target.value)}}
                value={passwordstate}
                ref={passwordref}
              />
              <div className={styles.bt_wr}>
                <button type="submit" className={styles.btn}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className={styles.c_wr}>
          <div className={styles.x_wr} onClick={handle}>
            <FontAwesomeIcon icon={faX} className={styles.x} />
          </div>
          <form className={styles.ct2} onSubmit={handleData}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <h2>
                  HEY!
                  <br /> UPLOAD NOW
                </h2>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <select
                  name="category"
                  className={styles.select}
                  onChange={(e) => setcategoryselected(e.target.value)}
                >
                  <option disabled selected hidden>
                    Select a category
                  </option>
                  {catdata?.map((x: any, i: number) => (
                    <option value={x.id} key={i}>
                      {x.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <input type="text" name="topic" placeholder="Topic" required />
            <input type="text" name="author" placeholder="Author" required />

            <div className="row">
              <div className="col-lg-6 col-6">
                <div className={styles.txt_up} onClick={toggleTextArea}>
                  <FontAwesomeIcon icon={faClone} className={styles.icar} />
                  <p>Paste your content</p>
                </div>
              </div>
              <div className="col-lg-6 col-6">
                <label className={styles.im} htmlFor="upload-photo">
                  <FontAwesomeIcon
                    icon={faCameraRetro}
                    className={styles.icar}
                  />
                  <p>Upload image</p>
                </label>
                <input
                  type="file"
                  id="upload-photo"
                  name="upload-photo"
                  style={{ display: "none" }}
                  onChange={handleChange}
                />
                {name && <label>{name}</label>}
              </div>
              {showTxt && (
                <div className="col-lg-12 col-12">
                  <textarea
                    placeholder="Write something"
                    name="content"
                    className={styles.txt_area}
                  ></textarea>
                  <button className={styles.send} type="submit">
                    Send
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      )}
    </>
  );
}
