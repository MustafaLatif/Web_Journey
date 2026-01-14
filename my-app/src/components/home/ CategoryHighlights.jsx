import React from "react";
import Image from "next/image";

export default function CategoryHighlights() {
  const products = [
    {
      id: 1,
      name: "iPhone 14",
      capacity: "256 GB",
      color: "Silver",
      price: 1299,
      oldPrice: 1799,
      img: "/whitemobile.svg",
    },
    {
      id: 2,
      name: "iPhone 14 PRO",
      capacity: "256 GB",
      color: "Silver",
      price: 1299,
      oldPrice: null,
      img: "17.svg  ",
    },
    {
      id: 3,
      name: "Apple AirPods 2 GEN",
      capacity: "256 GB",
      color: "Silver",
      price: 1299,
      oldPrice: null,
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=512&hei=512&fmt=jpeg&qlt=90&.v=1660803972361",
    },
  ];

  return (
    <div className="bg-white text-black pr-4">
      {products.map((item) => (
        <div key={item.id} className="border-b border-gray-200 py-4">
          <div className="flex items-start gap-6">
  {/* IMAGE */}
  <img
    src={item.img}
    alt={item.name}
    className="h-32 w-30 object-contain"
  />

  {/* TEXT + BUTTON (beside image) */}
  <div className="flex flex-col">
    <h3 className="text-lg font-semibold">{item.name}</h3>

    <p className="text-gray-500 mt-1 text-sm">
      Kapacita: {item.capacity}, Farba: {item.color}
    </p>

    <button
      className="relative inline-flex items-center border-2 border-black
      py-1.5 pl-7 pr-3 text-xs font-semibold cursor-pointer
      hover:bg-[#563cd6] hover:text-white transition mt-3"
    >
      <span className="absolute left-2 top-1/2 -translate-y-1/2">
        <Image src="/brand-5.svg" width={16} height={16} alt="" />
      </span>
      <span className="whitespace-nowrap">Odložiť na neskôr</span>
    </button>
  </div>

  {/* RIGHT SIDE (price & quantity) */}
  <div className="flex flex-col items-end ml-auto">
    <div className="flex items-center gap-3 mb-2">
      <span className="text-lg font-bold">{item.price} €</span>

      {item.oldPrice && (
        <span className="line-through text-gray-400 text-lg">
          {item.oldPrice} €
        </span>
      )}

      <button>
        <Image src="/delete.svg" width={25} height={20} alt="Delete" />
      </button>
    </div>

    {item.id === 1 && (
      <p className="text-pink-600 text-sm font-medium mb-3">
        Ušetríte {item.oldPrice - item.price} €
      </p>
    )}

    <p className="text-gray-600 text-sm font-medium mb-2">
      Zadajte množstvo
    </p>

    <select className="border border-gray-400 px-10 py-2 text-lg">
      <option>1</option>
      <option>2</option>
    </select>
  </div>
</div>

        </div>
      ))}
    </div>
  );
}
