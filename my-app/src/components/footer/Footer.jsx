import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-8">
      {/* MAIN GRID */}
      <div className="mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT COLUMN */}
        <div className="space-y-16">
          {/* LOGO */}
          <Image
            className="cursor-pointer"
            src="/logo.svg"
            width={350}
            height={60}
            alt="Mobilecare logo"
          />

          {/* TEXT */}
          <div className="space-y-3 ml-8">
            <h2 className="text-3xl font-bold">Postaráme sa o vás.</h2>
            <p className="text-gray-300 text-lg max-w-md">
              Odomknite nekonečné možnosti s naším prémiovým výberom Apple
              produktov.
            </p>
          </div>

          {/* CONTACT */}
          <div className="space-y-1 ml-8">
            <p className="mb-4 font-semibold">Kontaktné údaje</p>
            <p className="text-sm cursor-pointer text-gray-300">+421 919 215 491</p>
            <p className="text-sm cursor-pointer text-gray-300">Rastislavova 68, Košice</p>
          </div>

          {/* SOCIALS */}
          <div className="flex gap-3 text-gray-300 ml-8 cursor-pointer">
            <Image src="/facebook.svg" width={50} height={20} alt="Facebook" />
            <Image src="/instagram.svg" width={50} height={20} alt="Instagram" />
            <Image src="/youtube.svg" width={50} height={20} alt="YouTube" />
            <Image src="/whatsapp.svg" width={50} height={20} alt="WhatsApp" />
            <Image src="/tik_tok.svg" width={50} height={20} alt="TikTok" />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-12">

          {/* PROMO */}
          <div className="relative bg-[#6C55E3] px-10 py-8 ">
            <div className="absolute top-4 right-4 bg-pink-500 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
              %
            </div>

            <h2 className="text-2xl font-bold mb-2">Získaj 10% zľavu</h2>

            <p className="text-white/80 text-sm mb-5 max-w-md leading-relaxed">
              Ušetrite 10% na ďalšom nákupe produktov Apple, ak sa ešte dnes
              pripojíte k našej komunite.
            </p>

            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Vaša e-mailová adresa"
                className="flex-1 px-4 py-3 bg-white text-black text-sm outline-none"
              />
              <button className="bg-black px-6 py-3  text-sm font-semibold hover:bg-[#6C55E3]  transition duration-200">
                Odoslať
              </button>
            </div>
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-20">
            <div className="space-y-2 text-lg">
              <h3 className="font-semibold">Customer service</h3>
              <p className="text-gray-500 cursor-pointer hover:text-white">Kontaktujte nás</p>
              <p className="text-gray-500 cursor-pointer hover:text-white">FAQs</p>
              <p className="text-gray-500 cursor-pointer hover:text-white">Vrátenie zásielky</p>
              <p className="text-gray-500 cursor-pointer hover:text-white">Doručenie</p>
              <p className="text-gray-500 cursor-pointer hover:text-white">Sledovanie zásielky</p>
            </div>

            <div className="space-y-2 text-lg">
              <h3 className="font-semibold">Iné</h3>
              <p className="text-gray-500 cursor-pointer hover:text-white">Iné a niečo iné</p>
              <p className="text-gray-500 cursor-pointer hover:text-white">Iné iné iné</p>
              <p className="text-gray-500 cursor-pointer hover:text-white">Iné iné a iné</p>
            </div>

            <div className="space-y-2 text-lg">
              <h3 className="font-semibold">Mobilecare</h3>
              <p className="text-gray-500 cursor-pointer hover:text-white">O nás</p>
              <p className="text-gray-500 cursor-pointer hover:text-white">Blog</p>
              <p className="text-gray-500 cursor-pointer hover:text-white">Kariéra</p>
            </div>

            <div className="space-y-2 text-lg">
              <h3 className="font-semibold">Členstvo, zľavy</h3>
              <p className="text-gray-500 cursor-pointer hover:text-white">
                Odporuč získaj
              </p>
              <p className="text-gray-500 cursor-pointer hover:text-white">
                Vernostný program
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* COUNTRIES */}
      <div className="flex justify-center gap-100 mt-16 text-gray-800 text-3xl">
        <span className="cursor-pointer hover:text-white duration-300">Slovensko</span>
        <span className="cursor-pointer hover:text-white duration-300">Česká republika</span>
        <span className="cursor-pointer hover:text-white duration-300">Romania</span>
        <span className="cursor-pointer hover:text-white duration-300">Polska</span>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between max-w-8xl mx-auto ">
        <p>Podmienky používania • GDPR • Ochrana osobných údajov</p>

        <div className="flex gap-3 mt-4 md:mt-0">
          <Image src="/visa.svg" width={40} height={20} alt="Visa" />
          <Image src="/Payment1.svg" width={40} height={20} alt="Mastercard" />
          <Image src="/payment2.svg" width={40} height={20} alt="Payment" />
          <Image src="/amex.svg" width={40} height={20} alt="Amex" />
          <Image src="/gpay.svg" width={40} height={20} alt="Google Pay" />
          <Image src="/pay.svg" width={40} height={20} alt="Apple Pay" />
        </div>
      </div>
    </footer>
  );
}
