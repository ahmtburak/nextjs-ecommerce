'use client';

import Image from "next/image";

const Banner = () => {
  return (
    <div className="h-[310px] items-center justify-center">
      <div className="h-[308px] relative w-full">
        <Image src={"/banner.png"} fill alt="" />
      </div>
    </div>
  )
}

export default Banner
