import React from "react";

import {
  Phone,
  Truck,
  PackageCheck,
  Wrench,
  MapPin,
  CheckCircle2,
  MessageSquare,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import QuoteForm from "@/components/QuoteForm";

import { FAQSection } from "@/components/FaqsSection";
import { houseMoversFaqs } from "@/lib/data";
import CTASection from "@/components/CTA";
import MovingProcess from "@/components/MovingProcess";
import Testimonials from "@/components/Testimonials";

import heroImage from "@/public/ser/house-movers-dubai-hamad-movers.jpg";
import Image from "next/image";
import { MovingGallery } from "@/components/Gallery";
import MetadataTemplate from "@/lib/MetaDataTemplate";

export const metadata = MetadataTemplate({
  meta: {
    title: "House Movers in Dubai | Home Shifting Services ",
    desc: "Professional house movers in Dubai for apartments, studios, and family homes. Hamad Movers handles packing, loading, transport & unloading. Call +971 55 116 5993.",
  },
  image: {
    path: "/ser/house-movers-dubai-hamad-movers.jpg",
    alt: "hamad movers house moving services in dubai",
  },
  path: "/house-movers-in-dubai",
});

const HouseMoversPage = () => {
  return (
    <>
      <main className="overflow-hidden">
        {/* HERO SECTION */}
        <section
          className="relative pt-20 
          overflow-hidden"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 border border-primary/20 uppercase tracking-wider">
                  <Truck size={16} /> Best Moving Service in Dubai
                </div>
                <h1 className="font-hero text-4xl md:text-5xl text-foreground leading-[1.1] mb-6">
                  Professional{" "}
                  <span className="text-primary">House Movers</span> in Dubai
                </h1>
                <p className="text-lg  text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed ">
                  Moving house in Dubai is a lot of work. Hamad Movers handles
                  the packing, lifting, and transport so you don&apos;t have to.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Button size="lg" className="w-full sm:w-auto   ">
                    <Phone className="mr-2 h-5 w-5" /> +971 55 116 5993
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full sm:w-auto "
                  >
                    <MessageSquare className="mr-2 h-5 w-5" /> WhatsApp Us
                  </Button>
                </div>
              </div>
              <div className="flex-1 relative w-full aspect-4/3 bg-white">
                <div className="absolute inset-0 bg-primary rounded-4xl -rotate-6 transition-transform hover:rotate-0 duration-500"></div>
                <Image
                  src={heroImage}
                  alt="hamad movers house moving services in dubai"
                  fill
                  className="z-10 w-full h-full object-cover rounded-4xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
        <QuoteForm />
        {/* SUMMARY SECTION */}
        <section className="py-12 bg-muted/30 mt-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-hero text-3xl mb-4 text-foreground">
                  Moving Made Simple
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We move studios, 1-bedroom apartments, 2 and 3 BHKs, and
                  larger family homes across Dubai and the surrounding emirates.
                  Our crew comes with the right materials, the right truck, and
                  enough people to get the job done properly.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "On-time Delivery", icon: Clock },
                  { label: "Safe Handling", icon: ShieldCheck },
                  { label: "Expert Crew", icon: PackageCheck },
                  { label: "Dubai Wide", icon: MapPin },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-card p-4 rounded-2xl border border-border shadow-sm flex flex-col items-center text-center"
                  >
                    <item.icon className="text-primary mb-2" size={24} />
                    <span className="font-semibold text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES INCLUDED */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-hero text-3xl md:text-4xl mb-4">
                What&apos;s Included in Our House Moving Service
              </h2>
              <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
              <FeatureCard
                icon={<PackageCheck className="text-primary" size={32} />}
                title="Professional Packing"
                description="We use bubble wrap, stretch film, and moving blankets for all furniture and fragile items."
              />
              <FeatureCard
                icon={<Wrench className="text-primary" size={32} />}
                title="Disassembly & Reassembly"
                description="Beds, wardrobes, and dining tables are carefully handled by our expert handymen."
              />
              <FeatureCard
                icon={<Truck className="text-primary" size={32} />}
                title="Loading & Unloading"
                description="We handle the heavy lifting into our covered trucks and place items exactly where you want them."
              />
              <FeatureCard
                icon={<MapPin className="text-primary" size={32} />}
                title="Transport"
                description="Safe transit within Dubai or to Abu Dhabi, Sharjah, Ajman, and beyond."
              />
            </div>
          </div>
        </section>
        <div className="-mt-10"></div>
        <Testimonials />
        <div className="-mt-20"></div>
        <MovingProcess />
        <MovingGallery />
        {/* TYPES OF MOVES & AREAS */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Types of Moves */}
              <div>
                <h2 className="font-hero text-3xl mb-8 flex items-center gap-3">
                  <div className="h-10 w-2 bg-primary rounded-full"></div>
                  Types of Home Moves
                </h2>
                <div className="space-y-4">
                  {[
                    "Studio and 1-bedroom apartment moves",
                    "2 and 3 BHK apartment relocations",
                    "Large family home shifting",
                    "Same-building or same-tower moves",
                    "Dubai to Abu Dhabi, Sharjah, Ajman, RAK, Al Ain",
                  ].map((type, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                    >
                      <CheckCircle2 className="text-primary" size={20} />
                      <span className="font-medium">{type}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Neighborhoods */}
              <div>
                <h2 className="font-hero text-3xl mb-8 flex items-center gap-3">
                  <div className="h-10 w-2 bg-primary rounded-full"></div>
                  Neighborhoods We Cover
                </h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    "JBR",
                    "Dubai Marina",
                    "JVC",
                    "JLT",
                    "Business Bay",
                    "Downtown Dubai",
                    "Deira",
                    "Bur Dubai",
                    "Al Barsha",
                    "Mirdif",
                    "Dubai Silicon Oasis",
                    "Al Nahda",
                    "Palm Jumeirah",
                    "DIFC",
                    "Jumeirah",
                    "Al Qusais",
                  ].map((area, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-muted text-muted-foreground rounded-lg text-sm font-semibold hover:bg-primary hover:text-white transition-colors cursor-default"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOUSE MOVERS IN OTHER EMIRATES */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-hero text-3xl md:text-4xl mb-4">
                House Movers Across the{" "}
                <span className="text-primary">UAE</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Moving to another emirate? We provide professional house moving
                services throughout the UAE.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { location: "Abu Dhabi", path: "/movers-in-abu-dhabi" },
                { location: "Sharjah", path: "/movers-in-sharjah" },
                { location: "Ajman", path: "/movers-in-ajman" },
                { location: "Al Ain", path: "/movers-in-al-ain" },
                {
                  location: "Ras Al Khaimah",
                  path: "/movers-in-ras-al-khaimah",
                },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.path}
                  className="group p-6 bg-card rounded-2xl border border-border hover:border-primary hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {item.location}
                    </h3>
                    <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Professional home moving services available
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED SERVICES */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-hero text-3xl md:text-4xl mb-4">
                Other Moving Services We{" "}
                <span className="text-primary">Offer</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Beyond residential moves, we specialize in various types of
                relocations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { service: "Villa Moving", path: "/villa-movers-dubai" },
                { service: "Office Moving", path: "/office-movers-dubai" },
                {
                  service: "Furniture Moving",
                  path: "/furniture-movers-dubai",
                },
                {
                  service: "Packing Services",
                  path: "/packing-and-moving-services",
                },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.path}
                  className="p-5 bg-linear-to-br from-primary/5 to-transparent rounded-xl border border-primary/20 hover:border-primary hover:bg-primary/10 transition-all text-center"
                >
                  <h3 className="font-semibold text-foreground hover:text-primary transition-colors">
                    {item.service}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* QUOTE FORM INTEGRATION */}

        {/* FAQ SECTION */}
        <FAQSection
          faqs={houseMoversFaqs}
          subtitle="Everything you need to know about shifting in Dubai"
        />
        {/* CTA BANNER */}
        <CTASection
          first="Ready to Book "
          second="Your Home Move"
          para="Call us or send a WhatsApp message with your move details. We'll get back to you the same day with a quote."
        />
      </main>
    </>
  );
};

// Helper Components
const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-card p-8 rounded-3xl border border-border hover:shadow-xl hover:shadow-primary/5 transition-all group">
    <div className="mb-6 p-4 bg-primary/5 rounded-2xl w-max group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="font-hero text-xl mb-3 text-foreground">{title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

export default HouseMoversPage;
