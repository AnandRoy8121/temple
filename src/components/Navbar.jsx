"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { delay, motion } from "framer-motion";
import { auth } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { removerUser } from "@/utils/redux/userSlice";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const getUser = useSelector((store) => store.user.currentUser);
  const dispatch = useDispatch()
  const router = useRouter()

  const handleLogout = async () => {
    const signOutUser = await signOut(auth);
    dispatch(removerUser);
    router.push('/')
  };

  const links = [
    { url: "/", title: "Home" },
    { url: "/event", title: "Event" },
    { url: "/about", title: "About" },
    { url: "/contact", title: "Contact" },
  ];

  const topVarient = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
    },
  };
  const MiddleVarient = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const BottomVarient = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
    },
  };

  const listVarient = {
    opened: {
      x: "100vw",
    },
    closed: {
      x: "0",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVarient = {
    opened: {
      x: -10,
      opacity: 0,
    },
    closed: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="flex px-6 md:px-8 lg:px-10 h-16 bg-[#f15c1d] items-center justify-between shadow-md shadow-[#f89b74e2] top-0 sticky z-10">
      {/* LOGO */}
      <div className="w-1/3">
        <Link href={"/"}>
          <Image
            className="object-center cursor-pointer"
            src={"/assets/logo.png"}
            alt="logo.png"
            width={70}
            height={70}
          />
        </Link>
      </div>
      {/* Phone Number */}
      <div className=" hidden md:flex items-center gap-2 w-1/3 justify-center">
        <Image src={"/phone.png"} width={30} height={30} />
        <h2 className="text-white text-xl font-semibold">+91 8592-957116</h2>
      </div>
      {/* Menu Item */}
      <div className="hidden md:flex items-center justify-between gap-3 w-2/3 md:w-2/5">
        <ul className="flex md:gap-3 gap-2 text-white font-semibold text-sm md:text-[14px] lg:text-base list-none">
          {links.map((link) => (
            <NavLink key={link.title} link={link} />
          ))}
        </ul>
        {!getUser &&
          <Link href={"/login"}>
            <button className="px-4 py-1 bg-white text-[#f15c1d] rounded-lg font-semibold hover:border-[1px] border-[1px] duration-150 transition hover:border-white hover:bg-[#f15c1d] hover:text-white">Login</button>
          </Link>
        }
      </div>
      {/* Menu Button */}
      <div>
        <div
          className="md:hidden w-10 h-6 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVarient}
            animate={open ? "opened" : "closed"}
            transition={{ delay: 0.2 }}
            className="w-10 h-1 bg-white rounded origin-left"
          ></motion.div>
          <motion.div
            variants={MiddleVarient}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded"
          ></motion.div>
          <motion.div
            variants={BottomVarient}
            animate={open ? "opened" : "closed"}
            transition={{ delay: 0.2 }}
            className="w-10 h-1 bg-white rounded origin-left"
          ></motion.div>
        </div>
        {open && (
          <motion.div
            variants={listVarient}
            initial="opened"
            animate="closed"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white list-none flex items-center justify-center flex-col gap-8"
          >
            {links.map((link) => (
              <motion.div key={link.title} variants={listItemVarient}>
                <Link href={link.url}>
                  <li className="cursor-pointer hover:scale-105 text-3xl font-semibold">
                    {link.title}
                  </li>
                </Link>
              </motion.div>
            ))}
            {!getUser &&
          <Link href={"/login"}>
            <button className="px-4 py-1 bg-white text-[#f15c1d] rounded-lg font-semibold hover:border-[1px] border-[1px] duration-150 transition hover:border-white hover:bg-[#f15c1d] hover:text-white">Login</button>
          </Link>
        }
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
