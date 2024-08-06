"use client";
import Link from "next/link";
import styles from "./sidemenu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faX } from "@fortawesome/free-solid-svg-icons";
import "../../app/globals.css";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Management_sidmenu(props: any) {
  const pathname = usePathname();
  return (
    <>
      <ul className={styles.wrap}>
      <h6 className={styles.itms_head}>Management</h6>
       
      
        <li>
          <Link
            className={
              pathname == "/chairman"
                ? styles.active
                : styles.li_item
            }
            href="/chairman"
          >
            <label>Chairman</label>
          </Link>
        </li>
        <li>
          <Link
            className={
              pathname == "/manager"
                ? styles.active
                : styles.li_item
            }
            href="/manager"
          >
            <label>Manager</label>
          </Link>
        </li>
        <li>
          <Link
            className={
              pathname == "/principal"
                ? styles.active
                : styles.li_item
            }
            href="/principal"
          >
            <label>Principal</label>
          </Link>
        </li>
        <li>
          <Link
            className={
              pathname == "/director-board"
                ? styles.active
                : styles.li_item
            }
            href="/director-board"
          >
            <label>Director Board</label>
          </Link>
        </li>
       
        {/* remaining maps */}
      </ul>
      {/* *****mobile menu***** */}
      <nav className={`navbar  fixed-top ${styles.show_menu}`}>
        <div className="container-fluid">
          <div></div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
            style={{border:"none",backgroundColor:"#982B35",outline:"none"}}
          >
            <FontAwesomeIcon icon={faEllipsis} className={styles.toggle} />
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            style={{width:"60%",marginTop:"109px"}}

          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Management
              </h5>
              <FontAwesomeIcon icon={faX} 
               style={{color:"black"}}
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close" />
            </div>
            <div className="offcanvas-body">
              <ul
                className={`navbar-nav justify-content-end flex-grow-1 pe-3 ${styles.wrap2}`}
              >
              
                
                <li aria-label="Close" data-bs-dismiss="offcanvas">
                  <Link
                    className={
                      pathname == "/chairman"
                        ? styles.active
                        : styles.li_item
                    }
                    href="/chairman"
                  >
                    <label className="">Chairman</label>
                  </Link>
                </li>
                <li aria-label="Close" data-bs-dismiss="offcanvas">
                  <Link
                    className={
                      pathname == "/manager"
                        ? styles.active
                        : styles.li_item
                    }
                    href="/manager"
                  >
                    <label className="">Manager</label>
                  </Link>
                </li>
                <li aria-label="Close" data-bs-dismiss="offcanvas">
                  <Link
                    className={
                      pathname == "/principal"
                        ? styles.active
                        : styles.li_item
                    }
                    href="/principal"
                  >
                    <label className="">Principal</label>
                  </Link>
                </li>
                <li aria-label="Close" data-bs-dismiss="offcanvas">
                  <Link
                    className={
                      pathname == "/director-board"
                        ? styles.active
                        : styles.li_item
                    }
                    href="/director-board"
                  >
                    <label className="">Director Board</label>
                  </Link>
                </li>

              </ul>
              
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
