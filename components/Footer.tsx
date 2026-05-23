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
];

export const locationList = [
  { title: "Movers in Sharjah", href: "/" },
  { title: "Movers in Ajman", href: "/" },
  { title: "Movers in Abu Dhabi", href: "/" },
  { title: "Movers in Al Ain", href: "/" },
  { title: "Movers in Ras Al Khaimah", href: "/" },
];

export const otherPagesList = [
  { title: "Home Page", href: "/" },
  { title: "About Us", href: "/" },
  { title: "Contact Us", href: "/" },
  { title: "Sitemap", href: "/" },
  { title: "Web Developer", href: "/" },
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
                <div className="size-9 border border-primary rounded-full flex items-center justify-center"></div>
                <div className="size-9 border border-primary rounded-full flex items-center justify-center"></div>
                <div className="size-9 border border-primary rounded-full flex items-center justify-center"></div>
                <div className="size-9 border border-primary rounded-full flex items-center justify-center"></div>
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
                  <p className="text-zinc-400 text-sm">+1 (555) 123-4567</p>
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
                    hello@arcflow.com
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
                    123 Innovation Drive, San CA 94105, USA
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
              <a href="#" className="hover:text-zinc-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-zinc-300 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
