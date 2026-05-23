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
import { FurnitureMovingDubaiFaqs } from "@/lib/data";
import CTASection from "@/components/CTA";
import MovingProcess from "@/components/MovingProcess";
import Testimonials from "@/components/Testimonials";
import { MovingGallery } from "@/components/Gallery";
import heroImage from "@/public/ser/furniture-movers-dubai-hamad-movers.jpg";
import Image from "next/image";
export const metadata = {
  title:
    "Furniture Movers Dubai | Safe Furniture Moving Services | Hamad Movers",
  description:
    "Professional furniture movers in Dubai. We disassemble, wrap, transport, and reassemble all types of furniture. Affordable rates. Call +971 55 116 5993.",
};

const FurnitureMoversPage = () => {
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
                  <Truck size={16} /> Professional Furniture Moving
                </div>
                <h1 className="font-hero text-4xl md:text-5xl text-foreground leading-[1.1] mb-6">
                  Expert Furniture Movers in{" "}
                  <span className="text-primary">Dubai</span>
                </h1>
                <p className="text-lg  text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed ">
                  Sometimes you&apos;re not moving an entire home — you just
                  need furniture moved. Whether it&apos;s one wardrobe or a full
                  living room set, Hamad Movers handles furniture-only moves
                  with care.
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
                  alt="Affordable and professional Hamad Movers team completing a quality home move in Dubai with the same branded truck and trained crew"
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
                  Furniture Moving Made Easy
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  No minimum size requirement — whether it&apos;s one wardrobe
                  or a full living room set, we&apos;ll handle it. We move
                  furniture across Dubai and between emirates. Everything is
                  wrapped, secured, and delivered safely.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "No Minimum Order", icon: Clock },
                  { label: "Expert Wrapping", icon: ShieldCheck },
                  { label: "Disassembly & Reassembly", icon: PackageCheck },
                  { label: "Safe Transport", icon: MapPin },
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
                What We Do
              </h2>
              <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
              <FeatureCard
                icon={<PackageCheck className="text-primary" size={32} />}
                title="Disassembly"
                description="Large wardrobes, beds with storage bases, shelving units, and modular furniture are disassembled at pickup and reassembled at the destination."
              />
              <FeatureCard
                icon={<Wrench className="text-primary" size={32} />}
                title="Proper Wrapping"
                description="Everything gets wrapped — moving blankets for upholstered items, bubble wrap and stretch film for glass and glossy surfaces. Nothing slides around in the truck."
              />
              <FeatureCard
                icon={<Truck className="text-primary" size={32} />}
                title="Loading and Carrying"
                description="Furniture gets heavy fast. We have the team and the lifting equipment to move items out of apartments, down stairs, into trucks, and back up again."
              />
              <FeatureCard
                icon={<MapPin className="text-primary" size={32} />}
                title="Assembly at the New Location"
                description="Anything we took apart, we put back together. Just tell us where you want it."
              />
            </div>
          </div>
        </section>
        <div className="-mt-10"></div>
        <Testimonials />
        <div className="-mt-20"></div>
        <MovingProcess />
        <MovingGallery />
        {/* TYPES OF FURNITURE SECTION */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
              <h2 className="font-hero text-3xl md:text-4xl mb-6 text-foreground">
                Types of Furniture We Move
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Sofas and sectionals (L-shaped and modular)",
                  "King and queen-size beds with storage bases",
                  "Large wardrobes and built-in cabinets",
                  "Dining tables and chairs",
                  "Glass display units and TV units",
                  "Bookshelves and wall units",
                  "Appliances — washing machines, dryers, fridges",
                  "Office desks and chairs",
                ].map((type, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-xl bg-muted/50"
                  >
                    <CheckCircle2
                      className="text-primary"
                      size={20}
                      flex-shrink-0="true"
                    />
                    <span className="font-medium">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FURNITURE MOVING ACROSS DUBAI & UAE */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Dubai Areas */}
              <div>
                <h2 className="font-hero text-3xl mb-8 flex items-center gap-3">
                  <div className="h-10 w-2 bg-primary rounded-full"></div>
                  Furniture Moving Across Dubai
                </h2>
                <div className="space-y-4">
                  {[
                    "Dubai Marina and JVC",
                    "JLT and Business Bay",
                    "DIFC and Downtown Dubai",
                    "Deira and Bur Dubai",
                    "Al Barsha and Mirdif",
                    "Silicon Oasis",
                    "All other Dubai areas",
                  ].map((area, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                    >
                      <CheckCircle2 className="text-primary" size={20} />
                      <span className="font-medium">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emirates Coverage */}
              <div>
                <h2 className="font-hero text-3xl mb-8 flex items-center gap-3">
                  <div className="h-10 w-2 bg-primary rounded-full"></div>
                  Furniture Moving — Abu Dhabi and Sharjah
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  We move furniture to and from Abu Dhabi and Sharjah regularly.
                  If you bought something in Dubai and need it delivered to Abu
                  Dhabi, or if you&apos;re relocating items between these
                  cities, we can organize it.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Abu Dhabi",
                    "Sharjah",
                    "Ajman",
                    "Ras Al Khaimah",
                    "Same-Day Delivery",
                    "Next-Day Delivery",
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
          faqs={FurnitureMovingDubaiFaqs}
          subtitle="Everything you need to know about furniture moving in Dubai"
        />
        {/* CTA BANNER */}
        <CTASection
          first="Book a "
          second="Furniture Move in Dubai"
          para="Tell us what you need moved and where. We'll give you a price and sort the rest."
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

export default FurnitureMoversPage;
