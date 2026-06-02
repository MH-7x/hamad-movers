import {
  Phone,
  MapPin,
  CheckCircle2,
  MessageSquare,
  Banknote,
  Scale,
  Calendar,
  Box,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import QuoteForm from "@/components/QuoteForm";

import { FAQSection } from "@/components/FaqsSection";
import { AffordableMoversDubaiFaqs } from "@/lib/data";
import CTASection from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import MovingProcess from "@/components/MovingProcess";
import { MovingGallery } from "@/components/Gallery";
import heroImage from "@/public/ser/affordable-movers-dubai-hamad-movers.jpg";
import Image from "next/image";
import MetadataTemplate from "@/lib/MetaDataTemplate";

export const metadata = MetadataTemplate({
  meta: {
    title: "Cheap Movers Dubai | Affordable Moving Company UAE",
    desc: "Affordable movers and packers in Dubai with transparent pricing and no hidden fees. Hamad Movers and Packers offers quality moving at honest rates. Call +971 55 116 5993.",
  },
  image: {
    path: "/ser/affordable-movers-dubai-hamad-movers.jpg",
    alt: "Affordable and professional Hamad Movers and Packers team completing a quality home move in Dubai with the same branded truck and trained crew",
  },
  path: "/cheap-movers-dubai",
});

const CheapMoversPage = () => {
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
                  <Banknote size={16} /> Honest & Affordable Rates
                </div>
                <h1 className="font-hero text-4xl md:text-5xl text-foreground leading-[1.1] mb-6">
                  Cheap Movers and Packers in{" "}
                  <span className="text-primary">Dubai</span>
                </h1>
                <p className="text-lg  text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed ">
                  Affordable moving in Dubai doesn&apos;t have to mean a bad
                  experience. Hamad Movers and Packers gives you a fixed price
                  before the move starts. What we quote is what you pay.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Button callBtn size="lg" className="w-full sm:w-auto   ">
                    <Phone className="mr-2 h-5 w-5" /> +971 55 116 5993
                  </Button>
                  <Button
                    whatsappBtn
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
                  alt="Affordable and professional Hamad Movers and Packers team completing a quality home move in Dubai with the same branded truck and trained crew"
                  fill
                  loading="eager"
                  placeholder="blur"
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
                  Quality Moving at Honest Rates
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  The issue with a lot of cheap moving companies is that the low
                  price you see upfront isn&apos;t what you end up paying. Extra
                  charges appear on moving day — fuel surcharges, stair charges,
                  packing charges that weren&apos;t mentioned. By the end, the
                  &quot;cheap&quot; move costs more than expected.
                </p>
              </div>
              <div className="bg-card p-6 rounded-3xl border border-border shadow-sm">
                <p className="text-foreground font-medium leading-relaxed italic">
                  &quot;We do things differently. Our rates are competitive, and
                  we don&apos;t pad the bill at the end. We discuss the full
                  scope of your move upfront and give you one price that covers
                  it.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT AFFECTS THE COST */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-hero text-3xl md:text-4xl mb-4">
                What Affects the Cost of Moving
              </h2>
              <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard
                icon={<Scale className="text-primary" size={32} />}
                title="Property Size"
                description="A studio costs less to move than a 3-bedroom apartment. More furniture, more rooms, more packing — it all adds up."
              />
              <FeatureCard
                icon={<MapPin className="text-primary" size={32} />}
                title="Distance"
                description="Moving within JVC to another community costs less than moving from Dubai to Abu Dhabi or Ras Al Khaimah."
              />
              <FeatureCard
                icon={<Box className="text-primary" size={32} />}
                title="Packing"
                description="If you pack yourself, the cost is lower. If you want us to pack everything, that's an additional service."
              />
              <FeatureCard
                icon={<Calendar className="text-primary" size={32} />}
                title="Date and Timing"
                description="Weekday morning moves are often easier to schedule and can be more cost-effective than peak weekend slots."
              />
            </div>
          </div>
        </section>

        {/* ROUGH PRICE GUIDE */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-hero text-3xl md:text-4xl mb-4">
                Rough Price Guide (Dubai Moves)
              </h2>
              <p className="text-muted-foreground">
                These are general ranges to give you an idea. Your actual quote
                may vary.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
              <table className="w-full text-left">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-4 font-hero text-lg">Move Type</th>
                    <th className="px-6 py-4 font-hero text-lg">
                      Approx. Price Range
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    {
                      type: "Studio / 1 BHK apartment",
                      price: "AED 300 – 600",
                    },
                    { type: "2 BHK apartment", price: "AED 600 – 1,000" },
                    { type: "3 BHK apartment", price: "AED 900 – 1,400" },
                    { type: "Small villa (3 BR)", price: "AED 1,200 – 2,000" },
                    {
                      type: "Large villa (5 BR+)",
                      price: "AED 2,000 – 3,500+",
                    },
                    {
                      type: "Furniture only (few items)",
                      price: "AED 150 – 400",
                    },
                    { type: "Office (small)", price: "AED 600 – 1,500" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 font-medium">{row.type}</td>
                      <td className="px-6 py-4 text-primary font-bold">
                        {row.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-center text-sm text-muted-foreground italic">
              These are estimates. Contact us for a specific quote based on your
              move.
            </p>
          </div>
        </section>

        {/* NO HIDDEN FEES SECTION */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
              <h2 className="font-hero text-3xl md:text-4xl mb-6 text-foreground">
                No Hidden Fees
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We mention this because it&apos;s a genuine issue in the Dubai
                moving industry. Common surprise charges we&apos;ve heard about
                from customers who came to us after a bad experience:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  '"Stair charges" added on arrival',
                  "Extra fuel fees not in the original quote",
                  "Charges for packing materials that were supposed to be included",
                  "Extra crew fees when the driver showed up alone",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border"
                  >
                    <CheckCircle2 className="text-primary shrink-0" size={20} />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                None of these apply to us. We discuss the full scope of your
                move upfront — stairs, packing, distance, number of items — and
                give you one price that covers it.
              </p>
            </div>
          </div>
        </section>

        <div className="-mt-10"></div>
        <Testimonials />
        <div className="-mt-20"></div>
        <MovingProcess />
        <MovingGallery />
        <div className="-mt-20"></div>
        {/* AFFORDABLE MOVING ACROSS UAE */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-hero text-3xl md:text-4xl mb-4">
                Affordable Moving{" "}
                <span className="text-primary">Across UAE</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Honest rates without hidden charges throughout all UAE emirates.
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
                    Transparent pricing available
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* OTHER MOVING SERVICES */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-hero text-3xl md:text-4xl mb-4">
                All Types of Moving{" "}
                <span className="text-primary">Services</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From house to office to furniture moves, all at competitive
                rates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { service: "House Moving", path: "/house-movers-in-dubai" },
                { service: "Villa Moving", path: "/villa-movers-dubai" },
                { service: "Office Moving", path: "/office-movers-dubai" },
                {
                  service: "Furniture Moving",
                  path: "/furniture-movers-dubai",
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
          faqs={AffordableMoversDubaiFaqs}
          subtitle="Everything you need to know about affordable moving in Dubai"
        />
        {/* CTA BANNER */}
        <CTASection
          first="Get an Honest "
          second="Moving Quote "
          para="No ranges. No depends on the day answers. Call or WhatsApp us with your move details and we'll give you a straight price."
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

export default CheapMoversPage;
