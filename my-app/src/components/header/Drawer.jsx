"use client";
import Image from "next/image";
import { useState } from "react";

export default function Drawer({ onCloseDrawer }) {
  const [activeCategory, setActiveCategory] = useState(null);

  const categoryIcons = [
     { id: 1, label: "iPhone" },
    { id: 2, label: "Macbook" },
    { id: 3, label: "iPad" },
  ];

  const serviceIcons = [
    { id: 1, label: "Najnovšie", tag: "Novinka" },
    { id: 2, label: "Zľavy", tag: "Výpredaj" },
    { id: 3, label: "Kontakt" },
        { id: 4, label: "Kasto kladena" },
    { id: 5, label: "Blog" },


  ];

  const socialIcons = [
    { id: 1, img: "/whitefacebook.svg" },
    { id: 2, img: "/whiteinstagram.svg" },
    { id: 3, img: "/whiteyoutube.svg" },
    { id: 4, img: "/whitewhatsapp.svg" },
    { id: 5, img: "/whitetik_tok.svg" },
  ];

  const middleCategories = [
    
    { id: "iphone", img: "/whitemobile.svg", label: "iPhone" },
    { id: "airpods", img: "/whitemobile.svg", label: "Apple AirPods" },
    { id: "macbook", img: "/whitemobile.svg", label: "Macbook" },
    { id: "ipad", img: "/whitemobile.svg", label: "iPad" },
    { id: "smarthome", img: "/whitemobile.svg", label: "Smarthome" },
    { id: "accessories", img: "/whitemobile.svg", label: "Príslušenstvo" },
    { id: "gaming", img: "/whitemobile.svg", label: "Herná zóna" },
    { id: "pc", img: "/whitemobile.svg", label: "PC" },
    { id: "electronics", img: "/whitemobile.svg", label: "Elektronika" },
  ];

  const macbookSubmenu = [
    { id: 1, label: "Air" },
    { id: 2, label: "Pro" },
    { id: 3, label: "iMac 24”" },
    { id: 4, label: "Mini" },
    { id: 5, label: "Studio" },
    { id: 6, label: "Mac Pro" },
    { id: 7, label: "Displeje" },
    { id: 8, label: "Doplnky pre Mac" },
  ];

  return (
    <div className="flex w-full relative bg-white">
      {/* CLOSE BUTTON */}
      <button
        onClick={onCloseDrawer}
        className="absolute top-4 right-4 z-50 text-black text-3xl  border-2 px-2 cursor-pointer font-bold"
      >
        ✕
      </button>

      {/* LEFT PURPLE PANEL */}
      <div className="w-110 min-h-screen bg-purple-600 text-white p-4">
        <div className="mb-8">
                    <Image className="cursor-pointer py-2  " src="/logo.svg" width={210} height={10} alt="logo" />
          
          <h2 className="text-xl font-medium  px-2 py-2 mb-3">Všetky kategórie</h2>

          <div className="space-y-6 border-b border-gray-400 px-2">
            {categoryIcons.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setActiveCategory(item.label.toLowerCase())}
              >
                <span className=" font-medium hover:font-semibold hover:underline transition-all duration-200">
                  {item.label}
                </span>
                <span className="text-xl">{">"}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-bold px-2 mb-3">Najpredávanejšie</h2>

          <div className="space-y-6 border-b border-gray-400 px-2 ">
            {serviceIcons.map((item) => (
              <div
                key={item.id}
                className="flex items-center  justify-between cursor-pointer"
              >
                <div className="flex items-center gap-3 ">
                  <span className="font-medium hover:font-semibold hover:underline transition-all duration-200">
                    {item.label}
                  </span>

                  {item.tag && (
  <span
    className={`px-2 text-xs  text-black 
      ${
        item.tag === "Novinka"
          ? "bg-green-300"
          : item.tag === "Výpredaj"
          ? "bg-pink-300"
          : "bg-gray-300"
      }
    `}
  >
    {item.tag}
  </span>
)}

                </div>
                <span className="text-xl">{">"}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-3">Sledujte nás</h2>
          <div className="flex gap-4">
            {socialIcons.map((item) => (
              <Image
                key={item.id}
                src={item.img}
                alt=""
                width={30}
                height={20}
                className="cursor-pointer "
              />
            ))}
          </div>
        </div>
      </div>

      {/* MIDDLE PANEL */}
      <div className="w-100 bg-white p-6 border-r border-gray-200">
        <h2 className="text-lg font-bold mb-4">Všetky kategórie</h2>

        <div className="space-y-4">
          {middleCategories.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setActiveCategory(item.label.toLowerCase())}
            >
              <div className="flex items-center gap-3">
                <Image src={item.img} alt={item.label} width={50} height={20} />
                <span className="font-medium hover:font-semibold hover:underline transition-all duration-300 text-gray-800">
                  {item.label}
                </span>
              </div>

              <span className="text-gray-500">{">"}</span>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <Image src="/Main.svg" width={300} height={80} alt="" />
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-80 bg-white p-6">
        <div className="flex items-center justify-between mb-4">
          {activeCategory && (
            <button
              onClick={() => setActiveCategory(null)}
              className="text-xl font-bold"
            >
              ←
            </button>
          )}

          <h2 className="text-lg font-bold">
            {activeCategory ? activeCategory.toUpperCase() : "MacBook"}
          </h2>

          <div />
        </div>

        <div className="space-y-4">
          {macbookSubmenu.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between cursor-pointer"
            >
              <span className="font-medium hover:font-semibold hover:underline transition-all duration-200 text-gray-800">
                {item.label}
              </span>
              <span className="text-gray-500">{">"}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
