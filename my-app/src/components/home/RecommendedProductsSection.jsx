"use client";

import Image from "next/image";
import { useState } from "react";

const products = [
  {
    id: 1,
    title: "iPhone 17 PRO (2023)",
    price: "1299 €",
    category: "Smartfóny",
    img: "/iphone17.svg",
    isNew: true,
    colors: ["#E4D3A1", "#D1C8C4", "#5A5A5A", "#000000"],
         specs: ["64 GB", "128 GB", "256 GB", "512 GB", "1 TB"],

  },
  {
    id: 2,
    title: "MacBook Pro (2023)",
    price: "1299 €",
    category: "Smartfóny",
    img: "/MacBook.svg",
    isNew: true,
    colors: ["#E4D3A1", "#D1C8C4", "#5A5A5A", "#000000"],
    specs: ["64 GB", "128 GB", "256 GB", "512 GB", "1 TB"],
  },
  {
    id: 3,
    title: "Airpods Pro (2023)",
    price: "1299 €",
    category: "Smartfóny",
    img: "/airpods.svg",
    isNew: false,
    colors: ["#E4D3A1", "#D1C8C4", "#5A5A5A", "#000000"],
    specs: null,
    },
  {
    id: 4,
    title: "iPhone 17 PRO (2023)",
    price: "1299 €",
    category: "Smartfóny",
    img: "/iphone17.svg",
    isNew: false,
    colors: ["#E4D3A1", "#D1C8C4", "#5A5A5A", "#000000"],
    specs: ["64 GB", "128 GB", "256 GB", "512 GB", "1 TB"],
  },
  {
    id: 5,
    title: "Samsung Galaxy S23",
    price: "1099 €",
    category: "Smartfóny",
    img: "/MacBook.svg",
    isNew: false,
    colors: ["#E4D3A1", "#D1C8C4", "#5A5A5A", "#000000"],
    specs: ["128 GB", "256 GB", "512 GB"],
  },
  {
    id: 6,
    title: "Google Pixel 8",
    price: "999 €",
    category: "Smartfóny",
    img: "/airpods.svg",
    isNew: true,
    colors: ["#E4D3A1", "#D1C8C4", "#5A5A5A", "#000000"],
    specs: ["128 GB", "256 GB"],
  },
];

export default function RecommendedProductsSection() {
  const [openSpecsId, setOpenSpecsId] = useState(null);

  return (
    <div className="mx-auto py-10 px-4">
      {/* Heading */}
      <h2 className="text-4xl text-black font-bold flex items-center gap-2">
        <Image src="/blackstart.svg" alt="" width={28} height={28} />
        Mohlo by vás zaujímať
      </h2>

      {/* Products */}
      <div className="flex gap-6 overflow-x-auto hide-scrollbar py-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="relative group cursor-pointer shrink-0 w-[25%]
            transition-transform duration-300 hover:scale-105"
          >
            {/* Favorite */}
            <button className="absolute right-2 top-2 z-20">
              <Image
                src="/blackheart.svg"
                width={30}
                height={22}
                alt="favorite"
              />
            </button>

            {/* New badge */}
            {p.isNew && (
              <span className="absolute left-2 top-2 bg-lime-400 text-black text-[11px] font-bold px-2 py-0.5 rounded z-20">
                Novinka
              </span>
            )}

            {/* Image */}
            <div className="flex justify-center w-[220px] h-[220px] mx-auto overflow-hidden">
              <Image
                src={p.img}
                alt={p.title}
                width={220}
                height={220}
                className="object-contain"
              />
            </div>

            {/* Quick buy button */}
            <div className="absolute left-0 right-0 bottom-16 opacity-0 group-hover:opacity-100 transition duration-300 z-20">
              <button
                onClick={() =>
                  setOpenSpecsId(openSpecsId === p.id ? null : p.id)
                }
                className="w-full bg-black text-white py-2 text-center font-semibold"
              >
                + Rýchly nákup
              </button>
            </div>

            {/* Specs */}
            {openSpecsId === p.id && p.specs && (
              <div className="absolute left-0 right-0 bottom-16 z-30">
                <div className="bg-black text-white px-4 py-3 text-xs grid grid-cols-3 gap-2">
                  {p.specs.map((s, i) => (
                    <span
                      key={i}
                      className="text-center border border-white/20 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <div className="relative z-10 mt-2">
              <p className="font-bold  text-sm">{p.title}</p>
              <p className="text-gray-500 text-xs">{p.category}</p>
              <p className="font-bold mt-1 text-sm">{p.price}</p>
            </div>

            {/* Colors */}
            <div className="flex gap-2 mt-2">
              {p.colors.map((c, i) => (
                <span
                  key={i}
                  className="w-3.5 h-3.5 rounded-full border"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
