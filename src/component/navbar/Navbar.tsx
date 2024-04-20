"use client"
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import im from "../../../public/fc-logo.svg";
import styles from "./Navbar.module.css"
function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-white fixed top-0 left-0 right-0  py-2 z-[999] ">
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
              <ul className=" h-screen md:h-auto items-center justify-center md:flex ">
                <li className="mx-1 font-semibold text-[Madimi One]	 pb-6 text-xl text-black py-2 md:px-6 text-center   hover:text-[#982B35]  ">
                  <Link href="#about" onClick={() => setNavbar(!navbar)} className='text-black hover:text-[#982B35] no-underline '>
                   <p className='hover:text-[#982B35] block m-auto'>About</p> 
                  </Link>
                </li>
                <li className="mx-1  font-semibold pb-6 text-xl text-black py-2 px-6 text-center    hover:text-[#982B35]   ">
                  <Link href="#blog" onClick={() => setNavbar(!navbar)} className='text-black hover:text-[#982B35] no-underline '>
                  <p className='hover:text-[#982B35] block m-auto'>Research</p> 
                  </Link>
                </li>
                <li className="mx-1  font-semibold pb-6 text-xl text-black py-2 px-6 text-center  hover:text-[#982B35]    ">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)} className='hover:text-[#982B35] no-underline text-black'>
                  <p className='hover:text-[#982B35] block m-auto'>Programmes</p> 
                  </Link>
                </li>
                <li className="mx-1 font-semibold pb-6 text-xl text-black py-2 px-6 text-center    hover:text-[#982B35]    ">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)} className='hover:text-[#982B35] no-underline text-black'>
                  <p className='hover:text-[#982B35] block m-auto'>Centres</p> 
                  </Link>
                </li>
                <li className="mx-1 font-semibold pb-6 text-xl text-black py-2 px-6 text-center    hover:text-[#982B35]    ">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)} className='hover:text-[#982B35] no-underline text-black'>
                  <p className='hover:text-[#982B35] block m-auto'>Faculty</p> 
                  </Link>
                </li>
                <li className="mx-1 font-semibold pb-6 text-xl text-black py-2 px-6 text-center    hover:text-[#982B35]    ">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)} className='hover:text-[#982B35] no-underline text-black'>
                  <p className='hover:text-[#982B35] block m-auto'>Blogs</p> 
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;