import React from "react";
import Image from "next/image";

const TopBar = () => {
  return (
    <div className="flex flex-col justify-center w-full mx-auto">

      {/* ROW 1 */}
      <div className="bg-[#171717] text-gray-400 text-xs">
        <div className="mx-auto flex items-center py-1 px-3 w-full">
          <p>Pomoc & kontakt</p>

          <div className="flex items-center gap-3 ml-auto">
            <p>Rastislavova 68, Košice</p>
            <p>+421 919 215 491</p>
          </div>
        </div>
      </div>

      {/* ROW 2 */}
      <div className="bg-[#f5f5f5] text-gray-500 text-xs">
        <div className="mx-auto flex items-center justify-end gap-4 py-1 px-3 w-full">
          <p>Sledovanie zásielok</p>
          <p>Vrátenie tovaru</p>
          <p>O nás</p>
          <p>FAQ</p>
          <p>Blog</p>
        </div>
      </div>

      {/* ROW 3 */}
      <div className="bg-[#f54e80] text-white font-semibold text-sm">
        <div className="mx-auto flex items-center justify-center py-1 px-3 w-full">
          <p>Nové iPhone 14 PRO s 20% zľavou ✨</p>
        </div>
      </div>

      {/* ROW 4 */}
      <div className="bg-black text-white font-medium text-sm">
        <div className="mx-auto flex items-center justify-between py-3 px-3 w-full">

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 cursor-pointer">
              <Image src="/brand-1.svg" width={20} height={20} alt="" />
              <p>Výpredaj</p>
            </div>

            <div className="flex items-center gap-2 cursor-pointer">
              <Image src="/brand-2.svg" width={20} height={20} alt="" />
              <p>Novinky</p>
            </div>

            <div className="flex items-center gap-2 cursor-pointer">
              <Image src="/brand-3.svg" width={20} height={20} alt="" />
              <p>MC Servis</p>
            </div>
          </div>

          <div className="flex items-center lg:mr-60 gap-2">
            <Image className="cursor-pointer" src="/logo.svg" width={200} height={40} alt="logo" />
            <Image className="cursor-pointer border border-gray-400 px-1 py-1 rounded-sm" src="/brand-4.svg" width={60} height={20} alt="" />
          </div>

          <div className="flex items-center gap-4">
            <Image className="cursor-pointer" src="/brand.svg" width={20} height={20} alt="" />
            <Image className="cursor-pointer" src="/brand-5.svg" width={25} height={20} alt="" />
            <Image className="cursor-pointer" src="/brand-6.svg" width={15} height={20} alt="" />
          </div>

        </div>
      </div>

    </div>
  );
};

export default TopBar;
