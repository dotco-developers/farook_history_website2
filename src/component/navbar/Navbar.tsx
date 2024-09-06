"use client"
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import im from "../../../public/fc-logo.svg";
import "../../app/globals.css"
function NavBar() {
  if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap");
  }
  const [navbar, setNavbar] = useState(false);
  return (
      <nav style={{position:"sticky",top:"0"}} className="w-full bg-white  top-0 left-0 right-0  py-2 z-[99999] ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 ">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/" className=''>
                <Image src={im} alt='' className='w-64 h-auto block m-auto'></Image>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none "
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                   <FontAwesomeIcon icon={faX}  className='text-[#982B35] w-6 h-6'/>
                  ) : (
                    <FontAwesomeIcon icon={faBars} className='text-[#982B35] w-6 h-6' />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className=" h-screen md:h-auto items-center justify-center md:flex  ">
                <li className="mx-1 font-semibold text-[Madimi One]	 pb-6 text-xl text-black py-2 md:px-6 text-center   hover:text-[#982B35] list  ">
                  <Link href="/about" onClick={() => setNavbar(!navbar)} className='text-black hover:text-[#982B35] no-underline w-max'>
                   <p className='hover:text-[#982B35] block m-auto w-max'>About</p> 
                  </Link>
                </li>
                <li className="mx-1 font-semibold text-[Madimi One]	 pb-6 text-xl text-black py-2 md:px-6 text-center   hover:text-[#982B35] list  ">
                  <Link href="/research/guide" onClick={() => setNavbar(!navbar)} className='text-black hover:text-[#982B35] no-underline w-max'>
                   <p className='hover:text-[#982B35] block m-auto w-max'>Research</p> 
                  </Link>
                </li>
                <li className="mx-1 font-semibold text-[Madimi One]	 pb-6 text-xl text-black py-2 md:px-6 text-center   hover:text-[#982B35] list  ">
                  <Link href="/about#programme" onClick={() => setNavbar(!navbar)} className='text-black hover:text-[#982B35] no-underline w-max'>
                   <p className='hover:text-[#982B35] block m-auto w-max'>Programmes</p> 
                  </Link>
                </li>
                <li className="mx-1 font-semibold text-[Madimi One]	 pb-6 text-xl text-black py-2 md:px-6 text-center   hover:text-[#982B35] list  ">
                  <Link href="#about" onClick={() => setNavbar(!navbar)} className='text-black hover:text-[#982B35] no-underline w-max'>
                   <p className='hover:text-[#982B35] block m-auto w-max'>Centres</p> 
                  </Link>
                </li>
                <li className="mx-1 font-semibold text-[Madimi One]	 pb-6 text-xl text-black py-2 md:px-6 text-center   hover:text-[#982B35] list  ">
                  <Link href="/about#faculty" onClick={() => setNavbar(!navbar)} className='text-black hover:text-[#982B35] no-underline w-max'>
                   <p className='hover:text-[#982B35] block m-auto w-max'>Faculty</p> 
                  </Link>
                </li>
                <li className="mx-1 font-semibold text-[Madimi One]	 pb-6 text-xl text-black py-2 md:px-6 text-center   hover:text-[#982B35] list  ">
                  <Link href="/blogs" onClick={() => setNavbar(!navbar)} className='text-black hover:text-[#982B35] no-underline w-max'>
                   <p className='hover:text-[#982B35] block m-auto w-max'>Blogs</p> 
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
  );
}

export default NavBar;