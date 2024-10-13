"use client";
import Link from "next/link";
import styles from "./sidemenu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faX } from "@fortawesome/free-solid-svg-icons";
import "../../app/globals.css";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Management_sidmenu({ data, params, head }: any) {

  const pathname = usePathname();
  return (
    <>
      <ul className={styles.wrap}>
        {head.map((x: any, i: number) => (
          <h6 className={styles.itms_head} key={i}>
            {x.title}
          </h6>
        ))}
        {data.map((x: any, i: number) => (
          <li key={i}>
            <Link
              className={
                pathname == `/centers/${params.id}/${x.id}`
                  ? styles.active
                  : styles.li_item
              }
              href={`/centers/${params.id}/${x.id}`}
            >
              <label>{x.name}</label>
            </Link>
          </li>
        ))}

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
            style={{
              border: "none",
              backgroundColor: "#982B35",
              outline: "none",
            }}
          >
            <FontAwesomeIcon icon={faEllipsis} className={styles.toggle} />
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            style={{ width: "60%", marginTop: "109px" }}
          >
            <div className="offcanvas-header">
              {head.map((x: any, i: number) => (
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel" key={i}>{x.title}</h5>
              ))}

              <FontAwesomeIcon
                icon={faX}
                style={{ color: "black" }}
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul
                className={`navbar-nav justify-content-end flex-grow-1 pe-3 ${styles.wrap2}`}
              >
                {data.map((x: any, i: number) => (
                  <li aria-label="Close" data-bs-dismiss="offcanvas" key={i}>
                    <Link
                      className={
                        pathname == `/centers/${params.id}/${x.id}`
                          ? styles.active
                          : styles.li_item
                      }
                      href={`/centers/${params.id}/${x.id}`}
                    >
                      <label className="">{x.name}</label>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
