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
import { VillaMoversDubaiFaqs } from "@/lib/data";
import CTASection from "@/components/CTA";
import MovingProcess from "@/components/MovingProcess";
import Testimonials from "@/components/Testimonials";
import heroImage from "@/public/ser/villa-movers-dubai-hamad-movers.jpg";
import Image from "next/image";
import { MovingGallery } from "@/components/Gallery";
import MetadataTemplate from "@/lib/MetaDataTemplate";

export const metadata = MetadataTemplate({
  meta: {
    title: "Villa Movers Dubai | Villa Shifting Services UAE",
    desc: "Professional villa movers in Dubai. Hamad Movers and Packers handles full villa relocations — heavy furniture, multiple rooms, packing included. Get a free quote today.",
  },
  image: {
    path: "/ser/villa-movers-dubai-hamad-movers.jpg",
    alt: "hamad movers and packers villa moving services in dubai",
  },
  path: "/villa-movers-dubai",
});

const VillaMoversPage = () => {
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
                  <Truck size={16} /> Best Villa Moving Service in Dubai
                </div>
                <h1 className="font-hero text-4xl md:text-5xl text-foreground leading-[1.1] mb-6">
                  Professional{" "}
                  <span className="text-primary">Villa Movers</span> in Dubai
                </h1>
                <p className="text-lg  text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed ">
                  Moving a villa is a different job from moving an apartment.
                  You&apos;re dealing with more rooms, heavier furniture, often
                  outdoor items, and a lot more volume. Hamad Movers and Packers
                  handles full villa relocations with the right equipment and
                  crew.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Button size="lg" className="w-full sm:w-auto   " callBtn>
                    <Phone className="mr-2 h-5 w-5" /> +971 55 116 5993
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full sm:w-auto "
                    whatsappBtn
                  >
                    <MessageSquare className="mr-2 h-5 w-5" /> WhatsApp Us
                  </Button>
                </div>
              </div>
              <div className="flex-1 relative w-full aspect-4/3 bg-white">
                <div className="absolute inset-0 bg-primary rounded-4xl -rotate-6 transition-transform hover:rotate-0 duration-500"></div>
                <Image
                  src={heroImage}
                  alt="hamad movers and packers villa moving services in dubai"
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
                  Villa Moving Made Easy
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We move 2, 3, 4, and 5+ bedroom villas across Dubai and the
                  surrounding emirates. A typical 4-bedroom villa move is a
                  full-day job, and we plan for it accordingly. We handle heavy
                  furniture, outdoor items, and everything in between with a
                  crew that knows villas.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Full-Day Planning", icon: Clock },
                  { label: "Heavy Furniture", icon: ShieldCheck },
                  { label: "Outdoor Items", icon: PackageCheck },
                  { label: "Multi-Truck Moves", icon: MapPin },
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
                What We Handle in a Villa Move
              </h2>
              <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
              <FeatureCard
                icon={<PackageCheck className="text-primary" size={32} />}
                title="All Furniture — Including Heavy Pieces"
                description="Solid wood wardrobes, king-size beds, dining sets, L-shaped sofas, heavy appliances. Items that need disassembly are taken apart and reassembled at your new villa."
              />
              <FeatureCard
                icon={<Wrench className="text-primary" size={32} />}
                title="Full Packing Service"
                description="We pack everything — kitchen items, closets, shelves, artwork, mirrors, and fragile decoratives. All items are wrapped properly before loading."
              />
              <FeatureCard
                icon={<Truck className="text-primary" size={32} />}
                title="Outdoor and Garden Items"
                description="BBQ sets, patio furniture, garden planters — if it's in your villa, we move it. No item is too bulky or unusual."
              />
              <FeatureCard
                icon={<MapPin className="text-primary" size={32} />}
                title="Multiple Truck Loads if Needed"
                description="Large villas sometimes need more than one truck run. We plan for this from the start so there are no delays on moving day."
              />
            </div>
          </div>
        </section>
        <div className="-mt-10"></div>
        <Testimonials />
        <div className="-mt-20"></div>

        {/* OUR VILLA MOVING PROCESS */}
        <MovingProcess
          cusProcess={[
            {
              step: "01",
              title: "Survey and Quote",
              description:
                "We ask about the villa size, number of rooms, special items (pianos, heavy gym equipment, chandeliers), and the move distance. We give you an accurate price upfront.",
            },
            {
              step: "02",
              title: "Pre-Move Packing (Optional)",
              description:
                "If you&apos;d like us to start packing a day before, we can send a crew the day before the move to handle the smaller items.",
            },
            {
              step: "03",
              title: "Moving Day",
              description:
                "The main crew arrives early. We work through the villa room by room — packing, wrapping, disassembling, and loading. Once everything is on the truck, we head to the new villa.",
            },
            {
              step: "04",
              title: "Delivery and Setup",
              description:
                "We unload carefully, carry everything to the right rooms, and put furniture back together.",
            },
          ]}
        />
        <MovingGallery />
        {/* TYPES OF VILLAS & AREAS */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Types of Villa Moves */}
              <div>
                <h2 className="font-hero text-3xl mb-8 flex items-center gap-3">
                  <div className="h-10 w-2 bg-primary rounded-full"></div>
                  Dubai Villas We Regularly Move
                </h2>
                <div className="space-y-4">
                  {[
                    "Arabian Ranches villas",
                    "Jumeirah and Emirates Hills villas",
                    "Al Barsha and Mirdif compounds",
                    "Damac Hills villas",
                    "The Springs and The Meadows",
                    "Al Furjan villas",
                    "Jumeirah Village Circle and Triangle",
                    "Dubai Hills villas",
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
                  Villa Movers — Across All UAE Emirates
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  We also handle villa moves between Dubai and Abu Dhabi,
                  Sharjah, Ajman, Ras Al Khaimah, and Al Ain. Long-distance
                  villa moves are planned carefully to make sure everything
                  arrives in the same condition it left.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Abu Dhabi",
                    "Sharjah",
                    "Ajman",
                    "Ras Al Khaimah",
                    "Al Ain",
                    "Fujairah",
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

        {/* STORAGE OPTION SECTION */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
              <h2 className="font-hero text-3xl md:text-4xl mb-4 text-foreground">
                Storage Option Available
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                If your new villa isn&apos;t ready yet, we can arrange secure
                storage for your belongings until you&apos;re ready. We&apos;ll
                keep your furniture and boxes safe in our climate-controlled
                facility, then deliver everything when your villa is prepared.
              </p>
            </div>
          </div>
        </section>
        {/* VILLA MOVERS IN OTHER EMIRATES */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-hero text-3xl md:text-4xl mb-4">
                Villa Moving Services{" "}
                <span className="text-primary">Across UAE</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Moving your villa to another emirate? We handle large villa
                relocations throughout the UAE.
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
                { location: "Fujairah", path: "/movers-in-fujairah" },
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
                    Professional villa moving services available
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
                We specialize in various types of relocations to meet your
                specific needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { service: "House Moving", path: "/house-movers-in-dubai" },
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
        {/* FAQ SECTION */}
        <FAQSection
          faqs={VillaMoversDubaiFaqs}
          subtitle="Everything you need to know about villa moving in Dubai"
        />
        {/* CTA BANNER */}
        <CTASection
          first="Book Your "
          second="Villa Move in Dubai"
          para="Get a straight quote — no estimates, no ranges. Call or WhatsApp us with your villa details."
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

export default VillaMoversPage;
