import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { HiBellAlert } from "react-icons/hi2";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = () => {
  const [Scrolled, setScrolled] = useState(false)

  useEffect( () =>{
    const scrollHandler =  () => {
      if(window.scrollY > 0){
        setScrolled(true)
      } else{
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", scrollHandler)

    return () => window.removeEventListener("scroll", scrollHandler)
  })
  return (
    <header className={`${Scrolled && 'bg-[#E10856] shadow-lg'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          className="cursor-pointer object-contain "
          src={"./logo.svg"}
          alt="logo"
          width={56}
          height={56}
        ></Image>

        <ul className="space-x-4 md:flex hidden">
          <li className="navLink">Home</li>
          <li className="navLink">Movies</li>
          <li className="navLink">TV shows</li>
          <li className="navLink">New</li>
          <li className="navLink">Popular</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 font-light text-sm">
        <IoSearchSharp className="h-6 w-6 cursor-pointer" />
        <p className="hidden lg:inline text-white">Kids</p>
        <HiBellAlert className="h-6 w-6 cursor-pointer"/>
        <Link href={'/account'}>
        <FaRegUser  className="w-6 h-6 cursor-pointer"/>
        </Link>
      </div>
    </header>
  );
};
