"use client";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const items = [
  {
    id: 1,
    color: "from-orange-400 to-orange-300",
    title: "ഭദ്രകാളി",
    desc: "കേരളത്തില്‍ ഏറ്റവും കൂടുതൽ ആരാധിക്കുന്ന ഭഗവതിയായ ഭദ്രകാളിക്ക് അതിപ്രശസ്തവും പ്രശസ്തവുമായ ഒട്ടേറെ ക്ഷേത്രങ്ങളുണ്ട്.  ദേവി എന്നല്ല അമ്മേ എന്നാണ് ഭക്തർ ഭദ്രകാളിയെ വിളിക്കുന്നത്. കേരളത്തിൽ ഏറ്റവും കൂടുതൽ കുടുംബ ക്ഷേത്രങ്ങൾ ഉള്ളതും ഭദ്രകാളിക്കാണ്. അതിനാൽ മിക്കവരുടെയും പരദേവതയും ഭദ്രയാണ്. ഭക്തരുമായി ഏറെ ആത്മബന്ധമുള്ള ശിഷ്ട രക്ഷകയായ, അധർമ്മ സംഹാരകയായ  ഭദ്രകാളിയെ ആരാധിക്കുന്നവർക്ക് വളരെ വേഗം ദുരിതങ്ങളും കഷ്ടപ്പാടുകളും ശത്രുദോഷവുമകലും. ഭദ്രകാളിയെ വഴിപാടുകൾ നടത്തി പ്രീതിപ്പെടുത്താൻ കുംഭം 7ആം തീയതി ദിവസം ഏറ്റവും ഉത്തമമാണ്. അന്നേദിവസം ദേവിക്ക് നടത്തുന്ന തോറ്റംപാട്ടും കളവും ദേവിക്ക് പ്രിയപ്പെട്ടതാണ്.ചൊവ്വ, വെള്ളി അഷ്ടമി ദിവസങ്ങളും  ഭദ്രകാളിക്ക് വഴിപാട് നടത്താൻ വിശേഷമാണ്. ",
    img: "/assets/devi.jpg",
  },
  {
    id: 2,
    color: "from-orange-300 to-orange-400",
    title: "മണിനാഗം",
    desc: "ചെറുപറമ്പിൽ തറവാടിന്റെ ഐശ്വര്യംമണിനാഗം പാലും നൂറും കദളിപ്പഴവും ഗുരുസിയും പൂക്കൂലയും ഒരുക്കി ഞാൻ നിന്നെ വിളിക്കുമ്പോൾ കാവിന്റെ അകത്തും എന്റെ ഉള്ളിലും ഉണർന്നു അറുപടികളും താണ്ടി നിറഞ്ഞു അടി തെളിയുക എന്റെ  മണിനാഗം.  ഐശ്വര്യത്തിനും സന്താനലഭ്തിക്കും സമ്പൽസമൃദ്ധിക്കും ആരോഗ്യത്തിനും മണി നാഗത്തിന് പ്രാർത്ഥിക്കുന്നത് നല്ലതാണ്",
    img: "/assets/maninagam.jpg",
    link: "http://localhost:3000",
  },
  {
    id: 3,
    color: "from-orange-400 to-orange-300",
    title: "Our Temple",
    desc: "പുരാതന സാംസ്കാരിക ആചാരങ്ങളും അനുഷ്ഠാനങ്ങളും അങ്ങേയറ്റം ബഹുമാനത്തോടെ സംരക്ഷിക്കപ്പെടുന്ന കാലാതീതമായ സങ്കേതമായ നമ്മുടെ വിശുദ്ധ ക്ഷേത്രത്തിലേക്ക് വരൂ. കാലാതീതമായ പാരമ്പര്യങ്ങളിൽ മുഴുകുകയും, സമൂഹത്തെയും ആത്മീയ വളർച്ചയെയും പ്രോത്സാഹിപ്പിക്കുകയും. നമ്മുടെ പൈതൃകത്തെ ആശ്ലേഷിക്കുന്നത് ബന്ധത്തിന്റെ ഒരു ബോധവും ആഴത്തിലുള്ള വേരുകളും നൽകുന്നു, അത് ആശ്വാസത്തിന്റെയും മനസ്സിലാക്കലിന്റെയും ഒരു അതുല്യമായ യാത്ര വാഗ്ദാനം ചെയ്യുന്നു. ഭൂതകാലം വർത്തമാനകാലത്തെ സമ്പന്നമാക്കുന്ന ഒരു സ്ഥലത്തേക്ക് സ്വാഗതം.",
    img: "/assets/Temple Photo1.jpg",
    link: "http://localhost:3000",
  },
  {
    id: 4,
    color: "from-orange-300 to-orange-200",
    title: "Eco-friendly practices at our temple",
    desc: "We use eco-friendly materials and practices to reduce our impact on the environment and promote sustainability",
    img: "/assets/Temple photo.jpg",
    link: "http://localhost:3000",
  },
];

const page = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <>
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-full md:w-full md:h-[calc(100vh-4rem)] h-[50vh] flex flex-col md:flex-row font-semibold text-[#f15c1d] md:p-4 gap-4 ">
          <div className="relative w-full md:w-1/2 h-1/2 md:h-full rounded-lg shadow-lg shadow-[#f15c1d]">
            <Image
              className="object-cover rounded-lg"
              src={"/assets/temple photo4.jpg"}
              fill
              alt=""
            />
          </div>
          <div className="flex flex-col md:h-full h-1/2 gap-4 w-full md:w-1/2">
            <h2 className="text-xl md:text-5xl text-center">വിഷ്ണുമായ</h2>
            <p className="md:text-xs px-4">
              ഭഗവാൻ വിഷ്ണുമായ ശാസ്താവിനെയോ മുരുകനെയോ വിഖ്നേശ്വരനെയോ പോലെയാണ്,
              എന്നാൽ ഈ ശിവാനന്ദനെ (ശിവന്റെ കുട്ടി) ആരാധിക്കുന്നത് പൊതുവായല്ല,
              അസാധാരണമായ ഫലം ആവശ്യമുള്ള ഒരു പ്രത്യേക തരം ഭക്തരാണ്. "വിഷ്ണുമായ
              എളുപ്പത്തിൽ പ്രസാദിക്കുന്നു, മനുഷ്യത്വമുള്ളവളാണ്" എന്നാണ് ഭക്തരുടെ
              വാക്കുകൾ. പെരിങ്ങോട്ടുകര ശ്രീ വിഷ്ണുമായയുടെ മഹത്വത്തിലേക്ക്
              നോക്കാം. ദിവ്യമായ വേട്ടയാടലിനുള്ള വഴിയിൽ, ശിവൻ ഒരു ആദിവാസി
              സ്ത്രീയായ കൂളിവാകയെ കാണുന്നു. അവൾ പാർവതി ദേവിയുടെ ഒരു
              ഭക്തയായിരുന്നു. “കഴിഞ്ഞ ജന്മത്തിൽ കൂളിവാക ഗണപതിയെ മുലകുടിക്കാൻ
              ശ്രമിച്ചു. ഇപ്പോൾ അവൾക്ക് ശിവയുടെ മകനെ വളർത്താനുള്ള അവസരം
              ലഭിക്കുകയാണ്, ”ശിവ കൂളിവാകയെ സമീപിച്ച് തന്റെ മകന്റെ അമ്മയാകാൻ
              തയ്യാറാകാൻ അവളോട് ആവശ്യപ്പെട്ടു. കൂളിവാക പാർവതിയുടെ
              ഭക്തയായിരുന്നു. തന്റെ ദുരവസ്ഥ അറിഞ്ഞ പാർവതി കൂളിവാകയുടെ വേഷം
              ധരിച്ച് ശിവനെ വരവേൽക്കാൻ കാത്തുനിന്നു. ശിവയും വേഷംമാറിയ കൂളിവാകയും
              ഒന്നിച്ചതിന്റെ ഫലമായി ഒരു നല്ല കുഞ്ഞ് ജനിച്ചു. ശിവയും പാർവതിയും
              കൂളിവാകയുടെ മുന്നിൽ പ്രത്യക്ഷപ്പെട്ട് കുട്ടിയെ വളർത്താൻ
              നിയോഗിച്ചു. കുറെ വർഷങ്ങൾ കൂളിവാകയുടെ കൂടെ ജീവിച്ച കുട്ടി തന്റെ
              യഥാർത്ഥ മാതാപിതാക്കളുടെ വിശദാംശം അറിയാൻ പക്വത പ്രാപിച്ചു. തുടർന്ന്
              ശിവാനന്ദൻ ശിവന്റെ വാസസ്ഥലത്തേക്ക് പോയി, തന്റെ പ്രിയപ്പെട്ട ഈഴരയെ
              ഊതിക്കൊണ്ട് ഒരു ഭംഗിയുള്ള എരുമയിൽ കയറി.
            </p>
          </div>
        </div>
        <div className="flex sticky top-0 h-screen overflow-hidden py-10 gap-4">
          <motion.div style={{ x }} className="flex">
            <div
              className={`h-screen w-screen flex bg-gradient-to-r from-orange-300 to-orange-400`}
            ></div>
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex md:flex-row flex-col py-8 w-full h-full gap-6 text-white">
                  <div className="relative w-full md:w-1/2 h-1/2 md:h-full p-4 rounded-lg shadow-md shadow-white">
                    <Image
                      src={item.img}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col items-center justify-center">
                    <h1 className="text-xl md:text-2xl font-semibold text-center">
                      {item.title}
                    </h1>
                    <p className="md:text-sm text-xs px-4">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col gap-10 text-center justify-center items-center w-full h-screen md:h-[80vh]">
        <h1 className="text-5xl text-[#f15c1d]">Want to connect with us</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-52 h-52 md:w-[300px] md:h-[300px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#f15c1d">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Om Shree Shree Vishumaya Namah
              </textPath>
            </text>
          </motion.svg>
          <Link
            href={"/contact"}
            className="w-16 h-16 absolute inset-0 flex items-center justify-center m-auto bg-[#f15c1d] text-white rounded-full"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;
