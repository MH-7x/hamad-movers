import { locationList, servicesList } from "@/lib/data";
import { Phone } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white/90 backdrop-blur-lg  px-4 md:px-16 lg:px-24 fixed top-0  py-2 flex items-center justify-between w-full z-50">
        <div className="flex items-center gap-20">
          <a href="https://prebuiltui.com">
            <div className="md:w-[120px] w-[90px] md:h-[55px] h-[41px]  relative">
              <Image
                src={"/logo.svg"}
                alt="Hamad Movers logo"
                fill
                className="object-contain"
              />
            </div>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <div className="flex items-center gap-1.5 text-sm text-zinc-600 cursor-pointer bg-transparent border-0 py-2">
                Services
                <svg
                  className="transition-transform group-hover:rotate-180"
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m1 1 4 4 4-4"
                    stroke="#71717b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-zinc-200 rounded-xl shadow-lg py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {servicesList.map((service, i) => (
                  <a
                    key={i}
                    href={service.href}
                    className="block px-4 py-2 text-sm text-zinc-600 hover:bg-secondary/20"
                  >
                    {service.title}
                  </a>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="flex items-center gap-1.5 text-sm text-zinc-600 cursor-pointer bg-transparent border-0 py-2">
                Areas We Serve
                <svg
                  className="transition-transform group-hover:rotate-180"
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m1 1 4 4 4-4"
                    stroke="#71717b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-zinc-200 rounded-xl shadow-lg py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {locationList.map((service, i) => (
                  <a
                    key={i}
                    href={service.href}
                    className="block px-4 py-2 text-sm text-zinc-600 hover:bg-secondary/20"
                  >
                    {service.title}
                  </a>
                ))}
              </div>
            </div>
            <a href="/about-us" className="text-sm text-zinc-500 hover:text-zinc-800">
              About Us
            </a>
            <a href="#" className="text-sm text-zinc-500 hover:text-zinc-800">
              Contact Us
            </a>
          </div>
        </div>

        <button className="hidden md:flex items-center gap-2.5 bg-linear-90 from-primary to-[#ff8800] text-white font-medium pl-5 pr-2 py-2 rounded-full cursor-pointer border-0 text-sm">
          CALL (055 1165993)
          <span className="size-7 rounded-full bg-white flex items-center justify-center">
            <Phone width={15} height={15} className="text-primary" />
          </span>
        </button>

        <div className="md:hidden flex items-center gap-2">
          <Button size={"sm"}>WhatsApp Us</Button>
          <input
            id="nav-menu-toggle"
            type="checkbox"
            className="sr-only peer"
          />
          <label
            htmlFor="nav-menu-toggle"
            className="flex flex-col gap-1.5 cursor-pointer bg-transparent border-0 p-1"
          >
            <span className="block w-6 h-0.5 bg-zinc-800 transition-transform peer-checked:rotate-45 peer-checked:translate-y-2"></span>
            <span className="block w-6 h-0.5 bg-zinc-800 transition-opacity peer-checked:opacity-0"></span>
            <span className="block w-6 h-0.5 bg-zinc-800 transition-transform peer-checked:-rotate-45 peer-checked:-translate-y-2"></span>
          </label>

          <div className="hidden peer-checked:flex absolute top-full left-0 w-full bg-white border-t border-zinc-200 flex-col p-5 gap-1 z-50">
            <div>
              <input
                id="nav-dropdown-toggle"
                type="checkbox"
                className="sr-only peer"
              />
              <label
                htmlFor="nav-dropdown-toggle"
                className="flex items-center justify-between w-full px-4 py-2 rounded-lg text-sm text-zinc-800 hover:bg-zinc-50 bg-transparent border-0 cursor-pointer"
              >
                Services
                <svg
                  className="transition-transform peer-checked:rotate-180"
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m1 1 4 4 4-4"
                    stroke="#71717b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </label>
              <div className="hidden peer-checked:flex flex-col pl-4">
                {servicesList.map((service, i) => (
                  <a
                    key={i}
                    href={service.href}
                    className="px-4 py-1 rounded-lg text-sm text-zinc-500 hover:bg-zinc-50"
                  >
                    {service.title}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <input
                id="nav-location-toggle"
                type="checkbox"
                className="sr-only peer"
              />
              <label
                htmlFor="nav-location-toggle"
                className="flex items-center justify-between w-full px-4 py-2 rounded-lg text-sm text-zinc-800 hover:bg-zinc-50 bg-transparent border-0 cursor-pointer"
              >
                Areas We Serve
                <svg
                  className="transition-transform peer-checked:rotate-180"
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m1 1 4 4 4-4"
                    stroke="#71717b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </label>
              <div className="hidden peer-checked:flex flex-col pl-4">
                {locationList.map((service, i) => (
                  <a
                    key={i}
                    href={service.href}
                    className="px-4 py-1 rounded-lg text-sm text-zinc-500 hover:bg-zinc-50"
                  >
                    {service.title}
                  </a>
                ))}
              </div>
            </div>
            <a
              href="/about-us"
              className="px-4 py-2 rounded-lg text-sm text-zinc-500 hover:bg-zinc-50"
            >
              About Us
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-lg text-sm text-zinc-500 hover:bg-zinc-50"
            >
              Contact Us
            </a>
            <button className="flex items-center justify-between mt-5 gap-2.5 bg-linear-90 from-primary to-[#ff8800] text-white font-medium pl-5 pr-2 py-2 rounded-full cursor-pointer border-0">
              CALL (055 1165993)
              <span className="size-7 rounded-full bg-white flex items-center justify-center">
                <Phone width={15} height={15} className="text-primary" />
              </span>
            </button>
          </div>
        </div>
      </nav>
      <div className="mb-20" />
    </>
  );
};

export default Navbar;
