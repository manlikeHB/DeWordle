"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
// import NavbarLandingPage from "./NavbarLandingPage";

const navigation = [{ name: "How to play", href: "#" }];

const Dewordle = () => {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="w-full h-full relative px-4 m-24 sm:px-10 xl:px-20">
      <div className="w-full h-full max-w-7xl mx-auto">
        <div className="mx-auto justify-between lg:flex gap-10 xl:gap-24 mt-8 ">
          <div className="lg:mx-0 pt-8 sm:pt-10 lg:pb-1 xl:max-w-[548px] ">
            <h1 className=" text-3xl text-[#29296E] font-roboto sm:pr-20 break-words lg:pr-0 sm:text-5xl font-semibold sm:leading-[58px] lg:leading-[70px] tracking-[1.2px]">
              Get 6 Chances to guess a 5-letter word.
            </h1>
            <p className="mt-6 text-lg text-black sm:text-[24px] font-normal break-words leading-[40px] w-full">
              Think fast, you have 6 chances to guess the right 5-letter word.
              Test your skills and challenge yourself with every round.
            </p>
            <div className="lg:mt-16 mt-8 flex items-center gap-5">
              <Link
                href="/signin"
                className="border hover:bg-accent border-[#29296E] font-bold text-[#29296E]  inline-flex items-center justify-center rounded-3xl w-[12rem]  px-4 py-2 text-lg "
              >
                Log In
              </Link>
              <Link
                href="/game"
                className="bg-[#29296E] text-lg font-bold text-white hover:bg-opacity-90 inline-flex items-center justify-center rounded-3xl w-[12rem] px-4 py-2 "
              >
                Play as Guest
              </Link>
            </div>
          </div>
          <div className="relative w-full h-auto min-h-[400px] flex items-center justify-center">
            <div className="relative w-full h-full max-w-[630px] max-h-[630px]">
              <Image
                src="/landingpageImg.svg"
                alt="Word game illustration"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dewordle;
