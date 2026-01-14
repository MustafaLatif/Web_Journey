import Image from "next/image";
import Link from "next/link";

export default function NavigationBar({ onOpenDrawer }) {
  const menuItems = [
    { name: "iPhone", href: "/iphone" },
    { name: "iPad", href: "/ipad" },
    { name: "MacBook", href: "/macbook" },
    { name: "Apple AirPods", href: "/airpods" },
    { name: "SmartHome", href: "/smarthome" },
    { name: "Príslušenstvo", href: "/accessories" },
  ];

  return (
    <div className="bg-black text-white text-lg font-bold">
      <div className="mx-auto flex items-center justify-between py-4 px-6 w-full">

        {/* Drawer Button */}
        <button
          onClick={onOpenDrawer}
          className="bg-white text-black px-2 flex gap-2 items-center 
                     hover:bg-[#563cd6] hover:text-white transition duration-300 ease-in-out 
                     hover:scale-105 py-2 cursor-pointer "
        >
          Všetky kategórie
          <Image src="/burgermenu.svg" width={20} height={20} alt="" />
        </button>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="
                cursor-pointer relative overflow-visible
                transition-all duration-300 ease-in-out
                hover:text-[#563cd6] hover:scale-105

                 
              "
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Search */}
        <div className="bg-white text-[#999] px-4 py-2 truncate font-normal flex cursor-pointer">
          <Image className="mr-2" src="/searchbar.svg" width={20} height={20} alt="" />
          Zadajte názov produktu
        </div>

      </div>
    </div>
  );
}
