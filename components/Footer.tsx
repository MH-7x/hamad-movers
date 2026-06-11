import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const servicesList = [
  { title: "House Movers Dubai", href: "/house-movers-in-dubai" },
  { title: "Villa Movers Dubai", href: "/villa-movers-dubai" },
  { title: "Office Movers Dubai", href: "/office-movers-dubai" },
  { title: "Furniture Movers Dubai", href: "/furniture-movers-dubai" },
  { title: "Packing Services Dubai", href: "/packing-and-moving-services" },
  { title: "Cheap Movers Dubai", href: "/cheap-movers-dubai" },
  { title: "نقل اثاث دبي", href: "/نقل-اثاث-دبي" },
];

export const locationList = [
  { title: "Movers in Dubai", href: "/" },
  { title: "Movers in Sharjah", href: "/movers-in-sharjah" },
  { title: "Movers in Ajman", href: "/movers-in-ajman" },
  { title: "Movers in Abu Dhabi", href: "/movers-in-abu-dhabi" },
  { title: "Movers in Al Ain", href: "/movers-in-al-ain" },
  { title: "Movers in Ras Al Khaimah", href: "/movers-in-ras-al-khaimah" },
  { title: "Movers in Fujairah", href: "/movers-in-fujairah" },
];

export const otherPagesList = [
  { title: "Home Page", href: "/" },
  { title: "About Us", href: "/about-us" },
  { title: "Contact Us", href: "/contact-us" },
  { title: "Sitemap", href: "/sitemap.xml" },
  { title: "Movers in UAE", href: "/" },
];

export default function Footer() {
  return (
    <div className=" flex flex-col justify-end">
      {/* This wrapper div simulates a page pushing the footer to the bottom. 
        In your actual app, just use the <footer> element below.
      */}

      <footer className="bg-foreground text-zinc-300 pt-16 pb-8 ">
        <div className="max-w-6xl mx-auto px-4 lg:px-0">
          {/* Top Section: Navigation & Logo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-10  mb-16">
            {/* Logo Column */}
            <div className="lg:col-span-4 lg:pr-8 ">
              <Link href="/">
                <Image
                  src="/logo-white.svg"
                  alt="Logo"
                  width={140}
                  height={140}
                />
              </Link>
              <p className="text-zinc-400 mt-5 text-sm leading-relaxed">
                Hamad Movers and Packers is fast, reliable and affordable moving
                company in dubai provide house, apartment and villa moving
                services across all emirates.
              </p>
              <div className="mt-5 flex gap-3">
                <Link
                  href={"https://web.facebook.com/hamadmoversandpackers"}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="size-9 border border-muted/50 hover:border-primary transition duration-200  rounded-full flex items-center justify-center "
                >
                  <svg
                    fill="#e5e7eb"
                    className="w-6 h-6"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path>
                    </g>
                  </svg>
                </Link>
                <Link
                  href={"https://www.instagram.com/hamadmoversandpackers/"}
                  rel="noopener nofollow"
                  className="size-9 border border-muted/50 hover:border-primary transition duration-200  rounded-full flex items-center justify-center"
                >
                  <svg
                    fill="#e5e7eb"
                    className="w-6 h-6"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"></path>
                      <path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"></path>
                    </g>
                  </svg>
                </Link>
                <div className="size-9 border border-muted/50 hover:border-primary transition duration-200  rounded-full flex items-center justify-center">
                  <svg
                    fill="#e5e7eb"
                    className="w-6 h-6"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M16.292 5C10.536 5 7.48 8.866 7.48 13.077c0 1.955 1.039 4.392 2.707 5.168.253.118.387.064.443-.18.047-.185.273-1.089.373-1.511a.402.402 0 0 0-.095-.386c-.55-.667-.988-1.896-.988-3.041 0-2.942 2.228-5.787 6.021-5.787 3.28 0 5.571 2.23 5.571 5.426 0 3.61-1.82 6.108-4.191 6.108-1.309 0-2.291-1.081-1.978-2.413.378-1.584 1.106-3.298 1.106-4.438 0-1.026-.552-1.883-1.685-1.883-1.341 0-2.415 1.385-2.415 3.241 0 1.182.4 1.978.4 1.978s-1.323 5.593-1.563 6.634c-.413 1.765.051 4.625.094 4.876.021.134.172.18.252.066.129-.175 1.725-2.565 2.174-4.292l.828-3.171c.439.829 1.707 1.531 3.061 1.531 4.021 0 6.923-3.703 6.923-8.299C24.52 8.301 20.92 5 16.292 5z"></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            {/* Services Links */}
            <div className="lg:col-span-2 ">
              <h3 className="text-white text-[15px] font-medium mb-6 ">
                Services
              </h3>
              <ul className="space-y-3.5">
                {servicesList.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations Links */}
            <div className="lg:col-span-2">
              <h3 className="text-white text-[15px] font-medium mb-6">
                Locations
              </h3>
              <ul className="space-y-3.5">
                {locationList.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Other Pages Links */}
            <div className="lg:col-span-2">
              <h3 className="text-white text-[15px] font-medium mb-6">
                Other Pages
              </h3>
              <ul className="space-y-3.5">
                {otherPagesList.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={"https://mashalhuraira.vercel.app"}
                    className="text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    Web Developer Info
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Middle Section: Contact Info Blocks */}
          <div className="border-t border-zinc-300/20 py-6 ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-[15px] mb-1.5">
                    Phone No:
                  </h4>
                  <p className="text-zinc-400 text-sm">+971 551165993</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-[15px] mb-1.5">
                    Email Address:
                  </h4>
                  <a
                    href="mailto:hello@arcflow.com"
                    className="text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    hamadmovers.com@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-[15px] mb-1.5">
                    Location:
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    54 27B Street, Mirdif Dubai
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section: Copyright & Legal */}
          <div className="border-t border-zinc-300/20 pt-6 mt-2 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-400">
            <p className="text-zinc-400">
              © {new Date().getFullYear()} Hamad Movers and Packers. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="/privacy-policy"
                className="hover:text-zinc-300 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-and-conditions"
                className="hover:text-zinc-300 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
