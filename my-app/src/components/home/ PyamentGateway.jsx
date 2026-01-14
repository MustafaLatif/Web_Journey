import React from "react";
import Image from "next/image";
 
export default function PayementGateway() {
  return (
    <div className="bg-white text-black border border-gray-200 ">

      <div className="flex justify-between items-center bg-[#f5f5f5] px-4 py-8">
        <h2 className="text-sm font-normal flex items-center gap-2">
          <Image src="/car.svg" width={20} height={20} alt="" />
          Doručíme
        </h2>
        <p className="text-gray-400 text-xs">Pon, 19. 8 - Ut, 20. 8.</p>
      </div>

      <div className="flex justify-between items-center px-4 py-4">
        <p className="font-sans text-sm">Akceptujeme platby</p>

        <div className="flex gap-3 text-4xl flex-wrap">
          <Image src="/visa.svg" width={48} height={20} alt="" />
          <Image src="/Payment1.svg" width={48} height={20} alt="" />
          <Image src="/payment2.svg" width={48} height={20} alt="" />
          <Image src="/amex.svg" width={48} height={20} alt="" />
          <Image src="/gpay.svg" width={48} height={20} alt="" />
          <Image src="/pay.svg" width={48} height={20} alt="" />
        </div>
      </div>

      <div className="px-4 py-4 flex items-center justify-between gap-4">
        <p className="font-sans">Voucher</p>
        <input
          type="text"
          placeholder="Zľavový kód"
          className="border border-gray-300 px-3 py-2 rounded"
        />
      </div>

      <div className="px-4 py-4 font-sans">
        <div className="flex justify-between py-1">
          <span>Spolu položky</span>
          <span>3778 €</span>
        </div>

        <div className="flex justify-between py-1">
          <span>Doprava</span>
          <span className="font-semibold text-black">0 €</span>
        </div>

        <hr className="my-4" />

        <div className="flex justify-between font-sans text-black">
          <span>
            Spolu:
            <span className="text-sm text-gray-600"> (vrátane DPH)</span>
          </span>
          <span className="font-extrabold text-4xl">3778 €</span>
        </div>
      </div>

      <div className="px-4 flex items-center gap-3 text-sm text-gray-600">
        <input type="checkbox" className="h-4" />
        <p>Zobraziť cenu bez DPH</p>
      </div>

      <div className="px-8 py-4 flex justify-between gap-4">
        <button className="border-3 border-black py-2 w-full  font-semibold 
                           hover:bg-[#563cd6] hover:text-white transition duration-300 ease-in-out cursor-pointer">
          Pokračovať v nákupe
        </button>

        <button className="bg-black text-white py-2 w-full  font-semibold cursor-pointer 
                           hover:bg-[#563cd6] hover:text-white transition duration-300 ease-in-out">
          Do pokladne
        </button>
      </div>

    </div>
  );
}
