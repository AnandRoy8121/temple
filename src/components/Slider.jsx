"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Slider = () => {
  const data = [
    {
      id: 1,
      img: "/assets/devi.jpg",
      title:"Devi",
      top:false
    },
    {
      id: 2,
      img: "/assets/Spiritual-Success-Lord-Vishnumaya-Swamy-Importance-and-Temples-PhotoRoom.jpg",
      title:"Lord-Vishnumaya-Swamy",
      top:true
    },
    {
      id: 3,
      img: "/assets/vishumaya.jpg",
      title:"Temple",
      top:false
    },
    {
      id: 3,
      img: "/assets/temple main page-PhotoRoom.jpg",
      title:"Temple",
      top:false
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev == data.length - 1 ? 0 : prev + 1));
    }, 8000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="h-[calc(100vh-40px)]">
        <div className="w-full h-full relative shadow-xl p-2">
        <Image
          src={data[currentSlide].img}
          alt=""
          fill
          className={data[currentSlide].top? "object-cover object-top":"object-cover object-center"}
        />
      </div>
    </div>
  );
};

export default Slider;
