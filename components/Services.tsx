import Image from "next/image";
import { ReactNode } from "react";

// Reusable SVG icons designed to match the outline style in the reference image
export const Icons = {
  House: () => (
    <svg
      className="w-12 h-12 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4" />
    </svg>
  ),
  Villa: () => (
    <svg
      className="w-12 h-12 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 21V9a2 2 0 00-2-2h-3m-4 5v7m0-7H7a2 2 0 00-2 2v5m14 0H5m14 0h2m-2 0h-4m-6 0H5m0 0H3m2 0h4m0-12h4a2 2 0 012 2v7m-6-9v9"
      />
    </svg>
  ),
  Office: () => (
    <svg
      className="w-12 h-12 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    </svg>
  ),
  Furniture: () => (
    <svg
      className="w-12 h-12 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    </svg>
  ),
  Packing: () => (
    <svg
      className="w-12 h-12 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
      />
    </svg>
  ),
  Cheap: () => (
    <svg
      className="w-12 h-12 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
      />
    </svg>
  ),
};

const servicesData = [
  {
    title: "House Movers in Dubai",
    description:
      "Full home shifting service — packing, loading, transport, and unloading. We handle studios, apartments, and family homes.",
    linkText: "Contact For House Moving",
    icon: Icons.House,
    name: "/house-movers-dubai-hamad-movers.jpg",
    alt: "Professional house movers in Dubai carrying boxes during a home shifting service by Hamad Movers",
  },
  {
    title: "Villa Movers in Dubai",
    description:
      "Villa moves come with more furniture, more rooms, and heavier items. Our crew is set up for exactly that.",
    linkText: "Contact For Villa Moving",
    icon: Icons.Villa,
    name: "/villa-movers-dubai-hamad-movers.jpg",
    alt: "Hamad Movers crew shifting furniture during a villa moving service in Dubai",
  },
  {
    title: "Office Movers in Dubai",
    description:
      "We work around your schedule, including weekends and evenings, to keep your business running.",
    linkText: "Contact For Office Moving",
    icon: Icons.Office,
    name: "/office-movers-dubai-hamad-movers.jpg",
    alt: "Hamad Movers team handling office relocation in Dubai with professional packing and transport",
  },
  {
    title: "Furniture Movers in Dubai",
    description:
      "Moving a few pieces? We disassemble, wrap, transport, and reassemble — whether it's one sofa or an entire room.",
    linkText: "Contact For Furniture Moving",
    icon: Icons.Furniture,
    name: "/furniture-movers-dubai-hamad-movers.jpg",
    alt: "Hamad Movers professional disassembling and wrapping furniture for moving service in Dubai",
  },
  {
    title: "Packing and Moving Services",
    description:
      "Don't want to pack anything yourself? We bring the boxes, bubble wrap, and stretch film — and do it all for you.",
    linkText: "Contact For Packing Services",
    icon: Icons.Packing,
    name: "/packing-moving-services-dubai-hamad-movers.jpg",
    alt: "Hamad Movers packing team wrapping and boxing household items for a full packing service in Dubai",
  },
  {
    title: "Cheap Movers in Dubai",
    description:
      "Affordable rates with no shortcuts. Same trained crew, same quality packing — just honest pricing.",
    linkText: "Contact For Affordable Moving",
    icon: Icons.Cheap,
    name: "/cheap-movers-dubai-affordable-moving-hamad-movers.jpg",
    alt: "Affordable movers in Dubai loading boxes into truck — budget-friendly moving service by Hamad Movers",
  },
];
export default function Services({
  services,
  title,
  desc,
}: {
  services?: typeof servicesData;
  title?: ReactNode;
  desc?: ReactNode;
}) {
  return (
    <section className=" mt-28 md:px-0 px-4  ">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-foreground md:text-4xl text-3xl mb-4">
            {title ? (
              title
            ) : (
              <>
                Our Moving Services in{" "}
                <span className="text-primary">Dubai</span>
              </>
            )}
          </h2>
          <p className="text-muted-foreground text-base max-w-3xl mx-auto leading-relaxed">
            {desc ? (
              desc
            ) : (
              <>
                We provide a full range of moving services for homes, villas,
                offices, and businesses. Every job is handled by a trained crew
                with proper packing materials and a covered truck.
              </>
            )}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(services ? services : servicesData).map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl  flex flex-col pt-[3px] overflow-hidden"
            >
              {/* Card Content Top */}
              <div className="md:p-8 p-6 flex-grow flex flex-col">
                <div className="mb-5">
                  <service.icon />
                </div>

                <h3 className="text-[22px] font-semibold text-[#3b4652] mb-4">
                  {service.title}
                </h3>

                <p className="text-[#757d85] text-[15px] leading-[1.8] mb-6 flex-grow">
                  {service.description}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center text-primary font-medium text-sm hover:underline mt-auto group"
                >
                  {service.linkText}
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </div>

              {/* Card Image Bottom (White box with 16:9 ratio as requested) */}
              <div className="w-full aspect-video bg-white relative overflow-hidden">
                <Image
                  src={service.name}
                  alt={service.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
