import React from "react";

import {
  Phone,
  PackageCheck,
  MapPin,
  CheckCircle2,
  MessageSquare,
  Clock,
  ShieldCheck,
  Package,
  Box,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import QuoteForm from "@/components/QuoteForm";

import { FAQSection } from "@/components/FaqsSection";
import { PackingServicesDubaiFaqs } from "@/lib/data";
import CTASection from "@/components/CTA";

import Testimonials from "@/components/Testimonials";
import heroImage from "@/public/ser/packing-moving-services-dubai-hamad-movers.jpg";
import Image from "next/image";
import { MovingGallery } from "@/components/Gallery";
import MetadataTemplate from "@/lib/MetaDataTemplate";

export const metadata = MetadataTemplate({
  meta: {
    title: "Packing and Moving Services Dubai | Hamad Movers",
    desc: "Full packing and moving services in Dubai and UAE. Hamad Movers packs your home or office using quality materials — boxes, bubble wrap, stretch film. Call +971 55 116 5993.",
  },
  image: {
    path: "/ser/packing-moving-services-dubai-hamad-movers.jpg",
    alt: "packing and moving services in dubai by hamad movers and packers",
  },
  path: "/packing-and-moving-services",
});

const PackingAndMovingPage = () => {
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
                  <PackageCheck size={16} /> Professional Packing & Moving
                </div>
                <h1 className="font-hero text-4xl md:text-5xl text-foreground leading-[1.1] mb-6">
                  Packing and Moving Services{" "}
                  <span className="text-primary"> in Dubai</span>
                </h1>
                <p className="text-lg  text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed ">
                  Packing is usually what takes the most time. Most people
                  underestimate how long it takes to properly pack a 2-bedroom
                  apartment — it&apos;s often a full day&apos;s work, and
                  that&apos;s before anything has moved. If you&apos;d rather
                  not deal with it, we&apos;ll do it for you.
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
                  alt="packing and moving services in dubai by hamad movers and packers"
                  fill
                  className="z-10 w-full h-full object-cover rounded-4xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <QuoteForm />

        <section className="py-12 bg-muted/30 mt-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-hero text-3xl mb-4 text-foreground">
                  Packing and Moving Made Easy
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Hamad Movers offers a complete packing and moving service in
                  Dubai. We supply everything — boxes, bubble wrap, stretch
                  film, tape, and padding — and we pack it all up before moving
                  day (or on the same day).
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

        {/* OUR PACKING OPTIONS */}
        <section className=" mt-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-hero text-3xl md:text-4xl mb-4">
                Our Packing Options
              </h2>
              <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard
                icon={<Package className="text-primary" size={32} />}
                title="Full Packing Service"
                description="You don't pack a single box. Our crew comes in, packs your entire home or office, and has everything ready to load. We label boxes by room."
              />
              <FeatureCard
                icon={<Layers className="text-primary" size={32} />}
                title="Partial Packing"
                description="You pack the easy stuff — clothes, books, everyday items — and we handle the kitchen, fragile items, artwork, and electronics."
              />
              <FeatureCard
                icon={<ShieldCheck className="text-primary" size={32} />}
                title="Fragile Items Only"
                description="If you're comfortable packing most things but want professionals to handle the breakables, we offer a fragile-only packing service."
              />
              <FeatureCard
                icon={<Box className="text-primary" size={32} />}
                title="Packing Materials Supply"
                description="If you'd rather pack yourself but want quality materials, we can supply boxes, tape, bubble wrap, and stretch film."
              />
            </div>
          </div>
        </section>

        {/* PACKING MATERIALS WE USE */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img
                  src="/nice-movers-packing-services-dubai.jpg"
                  alt="Packing Materials"
                  className="rounded-[2rem] shadow-xl"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="font-hero text-3xl mb-6 text-foreground">
                  Packing Materials We Use
                </h2>
                <div className="space-y-4">
                  {[
                    "Double-walled cardboard boxes in different sizes",
                    "Bubble wrap for fragile items, glassware, and electronics",
                    "Stretch film for furniture and appliances",
                    "Moving blankets for upholstered items",
                    "Packing tape — proper strength, not the cheap kind",
                    "Markers for labeling",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2
                        className="text-primary shrink-0"
                        size={20}
                      />
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT GETS SPECIAL ATTENTION */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-hero text-3xl md:text-4xl mb-4">
                What Gets Special Attention
              </h2>
              <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-3xl border border-border">
                <h3 className="font-hero text-xl mb-4 flex items-center gap-2">
                  <div className="h-6 w-1 bg-primary rounded-full"></div>
                  Kitchen Items
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Plates, glasses, pots, appliances, and small gadgets — the
                  kitchen is usually the most time-consuming room. We pack it
                  systematically, wrapping each item and cushioning boxes
                  properly.
                </p>
              </div>
              <div className="bg-card p-8 rounded-3xl border border-border">
                <h3 className="font-hero text-xl mb-4 flex items-center gap-2">
                  <div className="h-6 w-1 bg-primary rounded-full"></div>
                  Artwork and Mirrors
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Flat items are wrapped individually and stored upright in the
                  truck to avoid pressure damage.
                </p>
              </div>
              <div className="bg-card p-8 rounded-3xl border border-border">
                <h3 className="font-hero text-xl mb-4 flex items-center gap-2">
                  <div className="h-6 w-1 bg-primary rounded-full"></div>
                  Electronics
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  TVs and monitors are wrapped in blankets and bubble wrap, then
                  stored in a way that nothing presses against the screen.
                </p>
              </div>
              <div className="bg-card p-8 rounded-3xl border border-border">
                <h3 className="font-hero text-xl mb-4 flex items-center gap-2">
                  <div className="h-6 w-1 bg-primary rounded-full"></div>
                  Clothing and Textiles
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Clothes from wardrobes can be packed in bags or boxes
                  depending on the quantity and your preference.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="-mt-10"></div>
        <Testimonials />
        <div className="-mt-20"></div>
        <MovingGallery />
        {/* UAE-WIDE PACKING AND MOVING */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12 text-center lg:text-left">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="flex-1">
                  <h2 className="font-hero text-3xl md:text-4xl mb-6 text-foreground">
                    UAE-Wide Packing and Moving
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    We pack and move homes and offices across Dubai and all UAE
                    emirates, including Abu Dhabi, Sharjah, Ajman, Ras Al
                    Khaimah, and Al Ain. If you&apos;re relocating between
                    cities, we can do the full packing, loading, transport, and
                    unloading in one job.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    {[
                      "Abu Dhabi",
                      "Sharjah",
                      "Ajman",
                      "Ras Al Khaimah",
                      "Al Ain",
                      "Fujairah",
                      "Umm Al Quwain",
                    ].map((emirate) => (
                      <span
                        key={emirate}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold border border-primary/20"
                      >
                        {emirate}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <img
                    src="/hamad-movers-and-packers-truck.jpg"
                    alt="UAE Moving"
                    className="rounded-3xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <FAQSection
          faqs={PackingServicesDubaiFaqs}
          subtitle="Everything you need to know about packing services in Dubai"
        />

        {/* CTA BANNER */}
        <CTASection
          first="Get a Packing "
          second="and Moving Quote"
          para="Tell us your property size and move date. We'll give you a full price covering packing, loading, transport, and unloading."
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

export default PackingAndMovingPage;
