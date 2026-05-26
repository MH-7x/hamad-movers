import { AreasCovered, ServiceSection } from "@/components/CoverageArea";
import CTASection from "@/components/CTA";
import { FAQSection } from "@/components/FaqsSection";
import FeatureStats from "@/components/FeatureStates";
import { MovingGallery } from "@/components/Gallery";
import LocHero from "@/components/LocHero";
import MovingProcess from "@/components/MovingProcess";
import QuoteForm from "@/components/QuoteForm";
import Services, { Icons } from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { moversSharjahFAQs } from "@/lib/data";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import heroImage from "@/public/loc/movers-and-packers-sharjah-hamad-movers.jpg";

const SharjahAreas = [
  "Al Nahda",
  "Al Qasimia",
  "Muwaileh",
  "Al Khan",
  "Al Taawun",
  "Al Majaz",
  "Al Gharb",
  "Al Jubail",
  "Rolla",
  "Al Yarmook",
  "Industrial Area",
  "Halwan",
  "Al Ramtha",
  "Al Juraina",
];

export const metadata = MetadataTemplate({
  meta: {
    title: "Movers in Sharjah | Moving Company in Sharjah",
    desc: "Reliable movers and packers in Sharjah at honest rates. Hamad Movers handles home, villa & office moves across Sharjah and inter-emirate. Call +971 55 116 5993.",
  },
  image: {
    path: "/loc/movers-and-packers-sharjah-hamad-movers.jpg",
    alt: "Professional movers and packers in Sharjah – Hamad Movers team loading a white branded truck",
  },
  path: "/movers-in-sharjah",
});

const MoversInSharjah = () => {
  return (
    <main className="overflow-hidden -mt-6">
      <LocHero
        title={
          <>
            Movers and Packers in <span className="text-primary">Sharjah</span>
          </>
        }
        desc={
          <>
            Hamad Movers provides moving services across Sharjah — from small
            apartment moves to large villa relocations. We also handle
            Sharjah-to-Dubai moves, which are among the most common
            inter-emirate moves we do.
            <br />
            Our crew comes with all packing materials and the right size truck.
            Sharjah moves are usually priced more affordably than Dubai, and we
            pass that on to you.
          </>
        }
        image={{
          src: heroImage,
          alt: "Professional movers and packers in Sharjah – Hamad Movers team loading a white branded truck",
        }}
      />
      <FeatureStats />
      <div className="-mt-10" />
      <QuoteForm />
      <Testimonials cusReviews={cusReviews} />
      <div className="-mt-20" />
      <Services
        title={
          <>
            Our Moving Services in <span className="text-primary">Sharjah</span>
          </>
        }
        services={[
          {
            title: "Home and Apartment Moving",
            description:
              "Studios, 1, 2, and 3-bedroom apartments, and larger family homes across Sharjah.",
            linkText: "Contact For House Moving",
            icon: Icons.House,
            name: "/house-movers-dubai-hamad-movers.jpg",
            alt: "Professional house movers in Dubai carrying boxes during a home shifting service by Hamad Movers",
          },
          {
            title: "Villa Moving in Sharjah",
            description:
              "Full villa relocations within Sharjah, including packing, disassembly, transport, and setup.",
            linkText: "Contact For Villa Moving",
            icon: Icons.Villa,
            name: "/villa-movers-dubai-hamad-movers.jpg",
            alt: "Hamad Movers crew shifting furniture during a villa moving service in Dubai",
          },

          {
            title: "Furniture Movers in Sharjah",
            description:
              "Individual items or full furniture sets — we move it within Sharjah or between emirates.",
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
            title: "Sharjah to Dubai Moves",
            description:
              "We do this route frequently. Whether you're moving from Al Nahda Sharjah to Al Nahda Dubai, or from any part of Sharjah to any part of Dubai, we handle it smoothly.",
            linkText: "Contact For Sharjah to Dubai Moving",
            icon: Icons.Cheap,
            name: "/hamad-movers-and-packers-truck.jpg",
            alt: "Hamad Movers packing team wrapping and boxing household items for a full packing service in Dubai",
          },
        ]}
      />
      <AreasCovered
        title="Areas We Cover in Sharjah"
        subtitle="We cover all areas of Sharjah, including:"
        areas={SharjahAreas}
        contactNote="If you're in an area not listed, give us a call — our network is constantly expanding and we most likely cover it."
      />
      <div className="-mt-20" />
      <MovingProcess />
      <MovingGallery />
      <ServiceSection
        title={
          <>
            Moving from <span className="text-primary">Sharjah to Dubai</span>
          </>
        }
        paragraphs={[
          "Living in Sharjah and working in Dubai is very common in the UAE. So is moving between the two cities. ",
          "We know the routes, we know the areas, and we know how to time the move to avoid the worst traffic.",
        ]}
        imageUrl="/loc/sharjah-to-dubai-movers-hamad-movers.jpg"
        imageAlt="Hamad Movers team on the Sharjah to Dubai route – professional furniture moving service UAE"
        isReversed={true}
        contactButtonText="Get A Instant Quote"
      />
      <div className="-mt-20" />
      <ServiceSection
        title={
          <>
            Furniture Movers in <span className="text-primary"> Sharjah</span>
          </>
        }
        paragraphs={[
          "Need to move specific furniture pieces in Sharjah? We wrap, transport, and deliver. ",
          "Disassembly and reassembly included. No minimum number of items.",
        ]}
        imageUrl="/loc/furniture-movers-sharjah-packing-service-hamad.jpg"
        imageAlt="Hamad Movers packing and wrapping furniture in Sharjah – professional movers UAE"
        isReversed={false}
        contactButtonText="Contact For Furniture Moving"
      />

      {/* MOVING SERVICES IN OTHER EMIRATES */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Moving Services in{" "}
              <span className="text-primary">Other Emirates</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We provide professional moving services throughout all UAE
              emirates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { location: "Movers in Dubai", path: "/" },
              { location: "Movers in Abu Dhabi", path: "/movers-in-abu-dhabi" },
              { location: "Movers in Ajman", path: "/movers-in-ajman" },
              { location: "Movers in Al Ain", path: "/movers-in-al-ain" },
              {
                location: "Movers in Ras Al Khaimah",
                path: "/movers-in-ras-al-khaimah",
              },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.path}
                className="group p-6 bg-card rounded-2xl border border-border hover:border-primary hover:shadow-lg transition-all text-center"
              >
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                  {item.location}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Professional services
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* LEARN MORE ABOUT HAMAD MOVERS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="/about-us"
              className="group p-8 bg-card rounded-2xl border border-border hover:border-primary hover:shadow-lg transition-all"
            >
              <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors mb-2">
                About Hamad Movers
              </h3>
              <p className="text-sm text-muted-foreground">
                Learn more about our company, experience, and commitment to
                quality service.
              </p>
            </a>
            <a
              href="/contact-us"
              className="group p-8 bg-card rounded-2xl border border-border hover:border-primary hover:shadow-lg transition-all"
            >
              <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors mb-2">
                Contact Us
              </h3>
              <p className="text-sm text-muted-foreground">
                Get in touch for a free quote or to discuss your moving needs.
              </p>
            </a>
            <a
              href="/packing-and-moving-services"
              className="group p-8 bg-card rounded-2xl border border-border hover:border-primary hover:shadow-lg transition-all"
            >
              <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors mb-2">
                Packing Services
              </h3>
              <p className="text-sm text-muted-foreground">
                Full packing service available for your Sharjah move.
              </p>
            </a>
          </div>
        </div>
      </section>

      <FAQSection title="FAQ — Movers in Sharjah" faqs={moversSharjahFAQs} />
      <CTASection
        first="Book Your "
        second="Sharjah Move"
        para="Simple quote, honest pricing. Call or WhatsApp us today."
      />
    </main>
  );
};

export default MoversInSharjah;

const cusReviews = [
  {
    name: "Faisal Al-Mansoori",
    time: "3 days ago",
    star: 5,
    review:
      "Hamad Movers shifted our entire flat in Sharjah Al Nahda without any drama. The guys moved fast and didn't put a single scratch on the walls.",
    image: "/ava/32.jpg",
  },
  {
    name: "Sarah Jenkins",
    time: "1 week ago",
    star: 5,
    review:
      "Honestly the best move I've had since coming to the UAE. Every fragile kitchen piece came wrapped properly, and the final bill was exactly what they quoted.",
    image: "/ava/44.jpg",
  },
  {
    name: "Rohan Matthews",
    time: "5 days ago",
    star: 5,
    review:
      "Needed a last-minute villa move inside Sharjah and they pulled it off without a hitch. Crew knew what they were doing — would tell anyone to use them.",
    image: "/ava/86.jpg",
  },
  {
    name: "Fatima Al-Ali",
    time: "2 weeks ago",
    star: 5,
    review:
      "Heavy bedroom sets, big wardrobes — Hamad Movers handled all of it without rushing. They even put everything back together properly in the new place.",
    image: "/ava/68.jpg",
  },
  {
    name: "David Miller",
    time: "4 days ago",
    star: 5,
    review:
      "Really efficient team. They cleared and loaded my 1BR in under three hours — no corners cut, no items thrown around carelessly.",
    image: "/ava/22.jpg",
  },
  {
    name: "Mariam Al-Blooshi",
    time: "1 month ago",
    star: 5,
    review:
      "I was genuinely nervous about my glass dining table, but they wrapped it in so much bubble wrap I stopped worrying. Really solid service here in Sharjah.",
    image: "/ava/90.jpg",
  },
  {
    name: "James Sinclair",
    time: "2 months ago",
    star: 5,
    review:
      "Used Hamad Movers a second time and they were just as good. Finding movers who actually show up when they say they will isn't easy — these guys do.",
    image: "/ava/54.jpg",
  },
  {
    name: "Aisha Siddiqua",
    time: "3 weeks ago",
    star: 5,
    review:
      "Polite guys, didn't cut corners. Every box landed in the right room without me repeating myself twice. Moving day was way less stressful than I expected.",
    image: "/ava/29.jpg",
  },
  {
    name: "Michael Fernandes",
    time: "6 days ago",
    star: 5,
    review:
      "Had them move our small office to Muwaileh. Everything stayed organized and labeled throughout, and they wrapped up well before I thought they would.",
    image: "/ava/11.jpg",
  },
  {
    name: "Zainab Malik",
    time: "3 months ago",
    star: 5,
    review:
      "Moved from Sharjah to Ajman without any issues. Their rate was noticeably fairer than other quotes I got, and they actually picked up the phone when I called.",
    image: "/ava/19.jpg",
  },
];
