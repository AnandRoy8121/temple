import Image from "next/image";
import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex w-full flex-col md:flex-row rounded-lg mt-auto bg-[#f15c1d] text-white px-4 py-2">
      <div className="flex flex-col w-1/2 gap-1 text-sm">
        <h2 className="text-xl font-semibold">Connect With Us</h2>
        <div className="flex items-center gap-2">
          <Image src={"/phone.png"} width={15} height={15} />
          <p>+91 8592-957116</p>
        </div>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <p>info@cheruparambil.com</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <div className="flex gap-2 items-center">
            <p>Follow Us at:</p>
        <ul className="flex gap-2 text-sm">
            <Link className="hover:scale-105" href={'/'}><li><InstagramIcon/></li></Link>
            <Link className="hover:scale-105" href={'/'}><li><FacebookIcon/></li></Link>
            <Link className="hover:scale-105" href={'/'}><li><XIcon/></li></Link>
            <Link className="hover:scale-105" href={'/'}><li><YouTubeIcon/></li></Link>
        </ul>
        </div>
        <p><span>&copy;</span> Cheruparambil Devasthanam</p>
      </div>
    </div>
  );
};

export default Footer;
