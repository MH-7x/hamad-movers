import { Button } from "@/components/ui/button";
import { MessageCircle, PhoneCall } from "lucide-react";
import Image from "next/image";
import heroImage from "@/public/hamad-movers-and-packers-in-dubai.jpg";

export const metadata = MetadataTemplate({
  meta: {
    title: "Hamad Movers and Packers Dubai | Trusted Moving Services",
    desc: "Need movers and packers in Dubai? Hamad Movers offers professional home, villa, office & furniture moving services across Dubai and the UAE. Call +971 55 116 5993 for a free quote.",
  },
  image: {
    path: "/hamad-movers-and-packers-in-dubai.jpg",
    alt: "Hamad Movers and Packers in Dubai",
  },
  path: "",
});

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section>
        <div className="mx-auto w-full max-w-7xl px-4 md:py-16 py-10 md:mt-5">
          <div className="mx-auto mb-12 w-full  text-center md:mb-16 lg:mb-20">
            <h1 className="mb-4 text-3xl  md:text-5xl text-foreground">
              Hamad Movers and Packers in Dubai
            </h1>
            <h3 className="mx-auto text-primary md:mb-5 mb-3 leading-tight max-w-4xl md:text-xl ">
              We handle the packing, the heavy lifting, and the transport —{" "}
              <br className="hidden md:block" /> so you don&apos;t have to.
            </h3>
            <p className="mx-auto mb-8 max-w-4xl text-muted-foreground md:text-base text-sm">
              Whether you&apos;re shifting to a new apartment or moving your
              house in dubai or to other emirates, our team handles it properly
              — with the right equipment, proper packing, and no damage.
            </p>

            <div className="flex justify-center gap-x-4">
              <Button size={"lg"}>
                <PhoneCall /> Call Now
              </Button>
              <Button variant={"secondary"} size={"lg"}>
                <MessageCircle /> Quote On WhatsApp
              </Button>
            </div>
          </div>

          <div className="relative max-w-4xl mx-auto aspect-video rounded-2xl bg-white ">
            <Image
              src={heroImage}
              placeholder="blur"
              loading="eager"
              fill
              alt="Hamad Movers and Packers in Dubai"
              className="object-cover rounded-2xl"
            />
            <div className="absolute bottom-0 left-4 right-0 top-4 -z-10 h-full w-full rounded-2xl bg-(--brand-color)"></div>
          </div>
        </div>

        <img
          alt="Line Svg"
          src={"/lines-1.svg"}
          className="absolute hidden  bottom-0 left-0 right-auto top-auto -z-10 sm:inline-block md:bottom-1/2 md:left-0 md:right-auto md:top-auto"
        />
        <img
          alt="Line Svg"
          src={"/lines-1.svg"}
          className="absolute bottom-auto left-auto right-0 top-0 -z-10 hidden sm:inline-block "
        />
      </section>
      <FeatureStats />
      <QuoteForm />
      <Services />
      <CoverageSection />
      <Features />
      <MovingProcess />
      <Testimonials />
      <MovingGallery />
      <FAQSection
        faqs={HomePageFaqs}
        title="Common Questions About Moving in Dubai"
      />
      <CTASection />
    </main>
  );
}

import QuoteForm from "@/components/QuoteForm";

import Services from "@/components/Services";

function CoverageSection() {
  const emiratesLocations = [
    "Movers in Dubai",
    "Movers in Abu Dhabi",
    "Movers in Sharjah",
    "Movers in Ajman",
    "Movers in Ras Al Khaimah",
    "Movers in Al Ain",
  ];

  return (
    <section className="mt-28 px-4 ">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="lg:w-1/2 flex flex-col">
            <h2 className=" mb-8  md:text-4xl text-3xl text-foreground">
              <span className="font-light">
                We Provide Moving Across All{" "}
                <span className="text-primary">Emirates in the UAE</span>
              </span>
              <br />
            </h2>

            <div className="w-full aspect-video bg-gray-100 rounded-3xl overflow-hidden relative mt-auto">
              <Image
                src={"/hamad-movers-and-packers-truck.jpg"}
                fill
                alt="hamad movers and packers truck image "
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2 flex flex-col justify-center pt-2">
            <p className="text-[17px] sm:text-[19px] text-foreground leading-[1.6] mb-14">
              Our team covers Dubai and all the surrounding emirates. If
              you&apos;re moving within one city or relocating from one emirate
              to another, we can handle it.
            </p>

            <div className="flex flex-col sm:flex-row gap-8">
              <ul className="flex-1 space-y-4">
                {emiratesLocations.map((location, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <span className="shrink-0 w-6 h-6 bg-foreground  flex items-center justify-center rounded-full">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <a
                      href={`#${location.toLowerCase().replace(/ /g, "-")}`}
                      className="text-[#2b2b2b] font-semibold hover:text-[#d4ad1e] transition-colors text-[15px]"
                    >
                      {location}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Yellow Box */}
              <div className="sm:w-65 rounded-3xl bg-primary p-8 flex flex-col justify-center shrink-0">
                {/* Truck Icon */}
                <svg
                  className="w-12 h-12 text-[#2b2b2b] mb-6 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 6h11v11H3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 8h4.5l3.5 4v5h-8"
                  />
                  <circle cx="7" cy="17" r="2.5" />
                  <circle cx="17" cy="17" r="2.5" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.5 17h5"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 9h5"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12h3"
                  />
                </svg>

                <p className="text-[#2b2b2b] text-[15px] font-bold leading-[1.6] uppercase tracking-wide">
                  We&apos;re trusted by <br />
                  more than <span className="text-[17px]">1000+</span> <br />
                  <span className="border-b-[3px] border-white pb-0.5 inline-block mt-1">
                    Customers
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { cn } from "@/lib/utils";

const features = [
  {
    title: "No Hidden Charges",
    description:
      "The price we quote is the price you pay. No surprise fees when the truck pulls up, and no extra charges added at the end.",
  },
  {
    title: "Trained Crews",
    description:
      "Our team knows how to wrap a glass table, take apart a wardrobe, and move a heavy sofa through a tight stairwell without scratching your walls.",
  },
  {
    title: "Proper Packing Materials",
    description:
      "We use moving blankets, bubble wrap, stretch film, and sturdy carton boxes. Nothing goes into the truck unprotected.",
  },
  {
    title: "On Time, Every Time",
    description:
      "If we schedule your move for 9 AM, we're there at 9 AM. No waiting around.",
  },
  {
    title: "Inter-Emirate Moves",
    description:
      "We cover Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, and Al Ain. Moving across emirates is something we do regularly.",
  },
  {
    title: "Weekend Availability",
    description:
      "We work 7 days a week — including Fridays and public holidays.",
  },
];

function Features() {
  return (
    <div
      className="mx-auto max-w-7xl px-4 mt-28 text-center"
      id="why-choose-us"
    >
      <h2 className="mx-auto mt-5 max-w-4xl md:text-4xl text-3xl">
        Why Customers <span className="text-primary">Choose Us</span>
      </h2>
      <p className="mt-4 text-muted-foreground ">
        Moving companies are everywhere in Dubai. Here&apos;s what makes working
        with us different.
      </p>

      <div className="relative mx-auto mt-16 grid max-w-6xl grid-cols-1 border nth-3:border sm:grid-cols-2 lg:grid-cols-3">
        <div className="mask-y-from-95% absolute -inset-y-14 left-0 -translate-x-px border-s border-dashed" />
        <div className="mask-y-from-95% absolute -inset-y-14 right-0 translate-x-px border-s border-dashed" />
        <div className="mask-x-from-95% absolute -inset-x-14 top-0 -translate-y-px border-t border-dashed" />
        <div className="mask-x-from-95% absolute -inset-x-14 bottom-0 translate-y-px border-b border-dashed" />

        {features.map((feature, index) => (
          <div
            className={cn(
              "relative -mt-px flex w-full flex-col items-center justify-center gap-3 border-t p-6 py-10 odd:bg-muted/40",
              "lg:not-[&:nth-child(3n+1)]:border-e",
              "max-sm:odd:border-e-0 max-lg:odd:border-e",
            )}
            key={index}
          >
            <h3 className="font-medium text-xl tracking-[-0.005em]">
              {feature.title}
            </h3>
            <p className="text-balance text-sm sm:text-base text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTA";
import { FAQSection } from "@/components/FaqsSection";
import { HomePageFaqs } from "@/lib/data";
import MovingProcess from "@/components/MovingProcess";
import FeatureStats from "@/components/FeatureStates";
import { MovingGallery } from "@/components/Gallery";
import MetadataTemplate from "@/lib/MetaDataTemplate";
