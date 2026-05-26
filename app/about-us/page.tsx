import React from "react";
import { Button } from "@/components/ui/button"; // Assuming standard shadcn path
import {
  Truck,
  Home,
  Building2,
  PackageCheck,
  MapPin,
  Phone,
  ArrowRight,
  ShieldCheck,
  Clock,
} from "lucide-react";
import Image from "next/image";
import MetadataTemplate from "@/lib/MetaDataTemplate";

export const metadata = MetadataTemplate({
  meta: {
    title: "About Hamad Movers and Packers | Moving Company Dubai",
    desc: "Hamad Movers and Packers is a trusted moving company in Dubai serving homes, villas, offices, and businesses across the UAE, contact us for a free quote.",
  },
  image: {
    path: "/hamad-movers-and-packers-in-dubai.jpg",
    alt: "Hamad Movers and Packers in Dubai",
  },
  path: "",
});

const AboutUsPage = () => {
  return (
    <main className="min-h-screen bg-background font-sans selection:bg-primary/20">
      {/* --- HERO SECTION --- */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <h1 className=" md:text-5xl text-3xl text-foreground leading-[1.1]">
                About Hamad Movers <br />
                <span className="text-primary">and Packers in Dubai</span>
              </h1>
              <p className="text-lg  text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                A professional moving company based in Dubai. We handle home
                moves, villa relocations, office moves, and furniture transport
                across all UAE emirates.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                <Button size="lg" className="rounded-full px-8">
                  Contact Us
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8"
                >
                  WhatsApp Us
                </Button>
              </div>
            </div>
            <div className="flex-1 relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={"/about-hamad-movers-and-packers.jpg"}
                alt="about hamad movers and packers in dubai"
                fill
                loading="eager"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- OUR STORY / APPROACH --- */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-xl aspect-square bg-primary/50 relative overflow-hidden">
                  <Image
                    src={
                      "/loc/furniture-movers-abu-dhabi-packing-service-hamad-movers.jpg"
                    }
                    alt="Professional furniture movers in Abu Dhabi packing a sofa for a villa relocation service by Hamad Movers"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="rounded-xl aspect-3/4 bg-primary/50 relative overflow-hidden">
                  <Image
                    src={
                      "/gallery/hamad-movers-long-distance-moving-uae-highway.jpg"
                    }
                    alt="Hamad Movers long distance moving service in the UAE – a moving truck driving on a highway with desert landscape in the background"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-xl aspect-3/4 bg-primary/50 relative overflow-hidden">
                  <Image
                    src={"/gallery/hamad-movers-home-villa-moving-dubai.jpg"}
                    alt="Hamad Movers home and villa moving service in Dubai – a moving truck parked outside a modern villa with movers carrying boxes"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="rounded-xl aspect-square bg-primary/50 relative overflow-hidden">
                  <Image
                    src={
                      "/loc/villa-movers-rak-furniture-packing-hamad-movers.jpg"
                    }
                    alt="Villa movers in Ras Al Khaimah packing furniture for a relocation service by Hamad Movers"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 space-y-8">
              <h2 className=" text-3xl md:text-4xl text-foreground">
                Our Simple Approach
              </h2>
              <div className="space-y-4">
                <p className="">
                  We started with a simple idea:{" "}
                  <strong>moving should be straightforward.</strong> You pack
                  your things, or we pack them for you. We show up on time,
                  handle everything carefully, and deliver it to your new place
                  in good condition.
                </p>
                <p className="text-muted-foreground">
                  That&apos;s it. No unnecessary complexity, no surprise
                  charges. Before your move, we ask the right questions — what
                  you have, where it&apos;s going, and when you need it done.
                  From there, we give you an honest price and stick to it.
                </p>

                <ul className="space-y-4 pt-4">
                  {[
                    "Honest, upfront pricing with no surprises",
                    "Professional packing and furniture wrapping",
                    "Expert loading and secure transportation",
                    "Full reassembly at your new destination",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 bg-primary/20 p-1 rounded-full">
                        <ShieldCheck className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHAT WE DO (SERVICES) --- */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className=" text-3xl md:text-4xl text-foreground">
              What We Do
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Comprehensive moving services tailored to meet every relocation
              need across the Emirates.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Home className="w-8 h-8" />}
              title="Home & Apartment"
              desc="From studios to 3+ BHK homes, we move your household with absolute care."
            />
            <ServiceCard
              icon={<Building2 className="w-8 h-8" />}
              title="Villa Relocations"
              desc="Full villa moves involving heavy furniture and multiple rooms managed efficiently."
            />
            <ServiceCard
              icon={<Briefcase className="w-8 h-8" />}
              title="Office & Commercial"
              desc="Businesses and corporate offices moved with minimal downtime."
            />
            <ServiceCard
              icon={<PackageCheck className="w-8 h-8" />}
              title="Packing Services"
              desc="Full packing using premium materials if you'd rather not do it yourself."
            />
            <ServiceCard
              icon={<Truck className="w-8 h-8" />}
              title="Furniture-Only"
              desc="Need just a few pieces moved? We handle single items or small batches too."
            />
            <ServiceCard
              icon={<MapPin className="w-8 h-8" />}
              title="Inter-Emirate Moves"
              desc="Moving between Dubai, Abu Dhabi, Sharjah, Ajman, and more."
            />
          </div>
        </div>
      </section>

      {/* --- COVERAGE SECTION --- */}
      <section className="py-20 bg-foreground text-background md:rounded-4xl md:mx-4 md:mb-20 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="space-y-6 flex-1">
              <h2 className=" text-3xl md:text-4xl">Our Coverage</h2>
              <p className="text-background/80 text-lg leading-relaxed">
                Whether you&apos;re moving within Dubai or across emirates, we
                do it regularly and know the routes. We operate 7 days a week
                across the UAE.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { name: "Dubai", path: "/" },
                  { name: "Abu Dhabi", path: "/movers-in-abu-dhabi" },
                  { name: "Sharjah", path: "/movers-in-sharjah" },
                  { name: "Ajman", path: "/movers-in-ajman" },
                  { name: "Ras Al Khaimah", path: "/movers-in-ras-al-khaimah" },
                  { name: "Al Ain", path: "/movers-in-al-ain" },
                ].map((city) => (
                  <a
                    key={city.name}
                    href={city.path}
                    className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg border border-white/10 hover:bg-primary hover:border-primary transition-all"
                  >
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{city.name}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full max-w-md">
              <div className="bg-background/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Availability</h4>
                      <p className="text-sm text-background/60">
                        Available 7 Days a Week
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Contact</h4>
                      <p className="text-sm text-background/60">
                        +971 55 116 5993
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- OUR SERVICES (WITH LINKS) --- */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className=" text-3xl md:text-4xl text-foreground">
              Explore Our Services
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Click on any service to learn more and get a detailed quote.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "House Moving", path: "/house-movers-in-dubai" },
              { name: "Villa Moving", path: "/villa-movers-dubai" },
              { name: "Office Moving", path: "/office-movers-dubai" },
              { name: "Furniture Moving", path: "/furniture-movers-dubai" },
              {
                name: "Packing Services",
                path: "/packing-and-moving-services",
              },
              { name: "Affordable Moving", path: "/cheap-movers-dubai" },
            ].map((service) => (
              <a
                key={service.name}
                href={service.path}
                className="group p-6 rounded-2xl border border-border bg-card hover:bg-primary/5 hover:border-primary transition-all"
              >
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Professional service across all emirates
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 max-w-6xl mx-auto md:px-4 text-center">
        <div className="bg-primary/5 border border-primary/20 md:rounded-3xl py-12 px-6 lg:p-20 relative overflow-hidden">
          <div className="relative z-10 space-y-8">
            <h2 className=" text-3xl md:text-4xl text-foreground">
              Ready for a Stress-Free Move?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions about your move or ready to book? Call us or send a
              WhatsApp message. Our team is standing by to help you plan your
              next journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg">
                Contact Us <ArrowRight />
              </Button>
              <Button variant={"ghost"} size="lg">
                <Phone /> +971 55 116 5993
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

// Sub-component for Service Cards
const ServiceCard = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => {
  return (
    <div className="group p-8 rounded-2xl border border-border bg-card hover:bg-accent/50 transition-all duration-300 hover:-translate-y-1">
      <div className="text-primary mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 inline-block">
        {icon}
      </div>
      <h3 className=" text-xl text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
    </div>
  );
};

const Briefcase = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

export default AboutUsPage;
