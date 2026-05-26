import { APP } from "@/lib/App";
import { MetadataRoute } from "next";
const pages: MetadataRoute.Sitemap = [
  {
    url: "",
    changeFrequency: "weekly",
    priority: 1.0,
    images: ["/hamad-movers-and-packers-in-dubai.jpg"],
    lastModified: "2026-05-26",
  },
  {
    url: "/about-us",
    changeFrequency: "yearly",
    priority: 0.6,
    images: ["/hamad-movers-and-packers-in-dubai.jpg"],
    lastModified: "2026-05-26",
  },
  {
    url: "/contact-us",
    changeFrequency: "monthly",
    priority: 0.8,
    images: ["/hamad-movers-and-packers-in-dubai.jpg"],
    lastModified: "2026-05-26",
  },
  {
    url: "/privacy-policy",
    changeFrequency: "yearly",
    priority: 0.3,
    images: ["/hamad-movers-and-packers-in-dubai.jpg"],
    lastModified: "2026-05-26",
  },
  {
    url: "/terms-and-conditions",
    changeFrequency: "yearly",
    priority: 0.3,
    images: ["/hamad-movers-and-packers-in-dubai.jpg"],
    lastModified: "2026-05-26",
  },
  {
    url: "/movers-in-abu-dhabi",
    changeFrequency: "monthly",
    priority: 0.8,
    images: ["/loc/movers-and-packers-abu-dhabi-hamad-movers.jpg"],
    lastModified: "2026-05-26",
  },
  {
    url: "/movers-in-ajman",
    changeFrequency: "monthly",
    priority: 0.8,
    images: ["/loc/movers-and-packers-ajman-hamad-movers.jpg"],
    lastModified: "2026-05-26",
  },
  {
    url: "/movers-in-al-ain",
    changeFrequency: "monthly",
    priority: 0.8,
    images: ["/loc/movers-and-packers-al-ain-hamad-movers.jpg"],
    lastModified: "2026-05-26",
  },
  {
    url: "/movers-in-ras-al-khaimah",
    changeFrequency: "monthly",
    priority: 0.8,
    images: ["/loc/movers-and-packers-ras-al-khaimah-hamad-movers.jpg"],
    lastModified: "2026-05-26",
  },
  {
    url: "/movers-in-sharjah",
    changeFrequency: "monthly",
    priority: 0.8,
    images: ["/loc/movers-and-packers-sharjah-hamad-movers.jpg"],
    lastModified: "2026-05-26",
  },
  {
    url: "/cheap-movers-dubai",
    changeFrequency: "weekly",
    priority: 0.9,
    images: ["/ser/affordable-movers-dubai-hamad-movers.jpg"],
    lastModified: "2026-05-26",
  },
  {
    url: "/furniture-movers-dubai",
    changeFrequency: "weekly",
    priority: 0.9,
    images: ["/ser/furniture-movers-dubai-hamad-movers.jpg"],
    lastModified: "2026-05-26",
  },
  {
    url: "/house-movers-in-dubai",
    changeFrequency: "weekly",
    priority: 0.9,
    images: ["/ser/house-movers-dubai-hamad-movers.jpg"],
    lastModified: "2026-05-26",
  },
  {
    url: "/office-movers-dubai",
    changeFrequency: "weekly",
    priority: 0.9,
    images: ["/ser/Office-Movers-in-Dubai.jpg"],
    lastModified: "2026-05-26",
  },
  {
    url: "/packing-and-moving-services",
    changeFrequency: "weekly",
    priority: 0.9,
    images: ["/ser/packing-moving-services-dubai-hamad-movers.jpg"],
    lastModified: "2026-05-26",
  },
  {
    url: "/villa-movers-dubai",
    changeFrequency: "weekly",
    priority: 0.9,
    images: ["/ser/villa-movers-dubai-hamad-movers.jpg"],
    lastModified: "2026-05-26",
  },
];
export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    ...page,
    url: `${APP.url}${page.url}`,
    images: page.images ? page.images.map((img) => `${APP.url}${img}`) : [],
    lastModified: page.lastModified,
  }));
}
