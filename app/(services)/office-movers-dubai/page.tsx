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
import { OfficeMoversDubaiFaqs } from "@/lib/data";
import CTASection from "@/components/CTA";
import MovingProcess from "@/components/MovingProcess";
import Testimonials from "@/components/Testimonials";
import heroImage from "@/public/ser/Office-Movers-in-Dubai.jpg";
import Image from "next/image";
import { MovingGallery } from "@/components/Gallery";
import MetadataTemplate from "@/lib/MetaDataTemplate";

export const metadata = MetadataTemplate({
  meta: {
    title: "Office Movers in Dubai | Commercial Relocation Services",
    desc: "Professional office movers in Dubai. Hamad Movers handles commercial relocations — furniture, IT equipment, files — with minimal disruption. Call +971 55 116 5993.",
  },
  image: {
    path: "/ser/Office-Movers-in-Dubai.jpg",
    alt: "office movers in dubai, hamad movers team carefully packing and moving office furniture and equipment in Dubai, showcasing our commercial moving services",
  },
  path: "/office-movers-dubai",
});

const OfficeMoversPage = () => {
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
                  <Truck size={16} /> Professional Office Moving Service
                </div>
                <h1 className="font-hero text-4xl md:text-5xl text-foreground leading-[1.1] mb-6">
                  Office Movers in <span className="text-primary">Dubai</span>{" "}
                  Top Office Relocation Services.
                </h1>
                <p className="text-lg  text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed ">
                  Office moves are more sensitive than home moves. You have IT
                  equipment, filing systems, and tight timelines. A disorganized
                  move can cost you working days. Hamad Movers makes sure it
                  doesn&apos;t.
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
                  alt="office movers in dubai, hamad movers team carefully packing and moving office furniture and equipment in Dubai, showcasing our commercial moving services"
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
                  Commercial Moving Made Simple
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We handle office relocations for small businesses with 5 desks
                  to larger offices with multiple floors. We plan the move
                  carefully and can work evenings or weekends to avoid
                  disrupting your operations.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Evening/Weekend Moves", icon: Clock },
                  { label: "IT Equipment", icon: ShieldCheck },
                  { label: "Zero Downtime", icon: PackageCheck },
                  { label: "Full Planning", icon: MapPin },
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
                What We Move
              </h2>
              <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
              <FeatureCard
                icon={<PackageCheck className="text-primary" size={32} />}
                title="Office Furniture"
                description="Desks, chairs, conference tables, reception counters, filing cabinets, shelving units — all packed and moved properly."
              />
              <FeatureCard
                icon={<Wrench className="text-primary" size={32} />}
                title="IT Equipment"
                description="Computers, monitors, servers (with your team's guidance), printers, and phone systems. We pack these carefully and label everything."
              />
              <FeatureCard
                icon={<Truck className="text-primary" size={32} />}
                title="Documents and Files"
                description="Boxes of files and documents are sealed, labeled, and tracked. Nothing gets mixed up or lost."
              />
              <FeatureCard
                icon={<MapPin className="text-primary" size={32} />}
                title="Kitchen and Fit-Out Items"
                description="Fridges, microwaves, coffee machines, cabinets, glass partitions, storage pods, and shelving from your old office."
              />
            </div>
          </div>
        </section>
        <div className="-mt-10"></div>
        <Testimonials />
        <div className="-mt-20"></div>

        {/* EVENING AND WEEKEND MOVES SECTION */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
              <h2 className="font-hero text-3xl md:text-4xl mb-4 text-foreground">
                Evening and Weekend Office Moves
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Most businesses can&apos;t afford to stop for a full day while
                they move. So we offer after-hours and weekend moving — starting
                in the evening or on Friday and Saturday — so your team walks
                into a fully set-up office on the next working day.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This is something we plan in advance. We&apos;ll confirm with
                you exactly what needs to be in place by Monday morning (or
                whatever your return date is).
              </p>
            </div>
          </div>
        </section>

        {/* OUR OFFICE MOVING PROCESS */}
        <MovingProcess
          cusProcess={[
            {
              step: "01",
              title: "Site Assessment and Planning",
              description:
                "We visit or discuss your current and new office layout. We note what needs disassembly, how many floors are involved, lift access, and the move timeline.",
            },
            {
              step: "02",
              title: "Packing",
              description:
                "We pack and label everything by department or room so unpacking at the new location is straightforward.",
            },
            {
              step: "03",
              title: "Moving",
              description:
                "Our crew loads the truck, transports everything, and unloads at the new office. Items are placed in the correct rooms or areas based on your floor plan.",
            },
            {
              step: "04",
              title: "Setup",
              description:
                "We reassemble furniture, reconnect what we disassembled, and make sure everything is in the right place.",
            },
          ]}
        />
        <MovingGallery />

        {/* OFFICE MOVING IN DUBAI - AREAS */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Areas We Serve */}
              <div>
                <h2 className="font-hero text-3xl mb-8 flex items-center gap-3">
                  <div className="h-10 w-2 bg-primary rounded-full"></div>
                  Office Moving in Dubai — Areas We Serve
                </h2>
                <div className="space-y-4">
                  {[
                    "Business Bay offices",
                    "DIFC and Dubai Internet City",
                    "Dubai Media City",
                    "JLT commercial offices",
                    "Deira and Bur Dubai",
                    "Al Quoz industrial areas",
                    "Tecom and Dubai South",
                    "Sheikh Zayed Road offices",
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

              {/* Emirates Coverage */}
              <div>
                <h2 className="font-hero text-3xl mb-8 flex items-center gap-3">
                  <div className="h-10 w-2 bg-primary rounded-full"></div>
                  Office Moves — Across UAE Emirates
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  We also handle office relocations between Dubai and Abu Dhabi,
                  Sharjah, and other emirates. Whether you&apos;re moving floors
                  in the same building, to the next block, or across the city,
                  we handle it with planning and precision.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Abu Dhabi",
                    "Sharjah",
                    "Ajman",
                    "Same Building Moves",
                    "Cross-City Relocations",
                    "Inter-Emirates Moves",
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

        {/* FAQ SECTION */}
        <FAQSection
          faqs={OfficeMoversDubaiFaqs}
          subtitle="Everything you need to know about office moving in Dubai"
        />
        {/* CTA BANNER */}
        <CTASection
          first="Plan Your "
          second="Office Move"
          para="Tell us about your office and when you need to move. We'll put together a clear plan and quote."
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

export default OfficeMoversPage;
