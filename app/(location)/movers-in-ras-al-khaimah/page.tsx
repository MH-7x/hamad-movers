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
import { moversRAKFAQs } from "@/lib/data";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import heroImage from "@/public/loc/movers-and-packers-ras-al-khaimah-hamad-movers.jpg";

const rasAlKhaimahAreas = [
  "Al Nakheel",
  "Al Dhait",
  "Al Hamra",
  "Khuzam",
  "Al Uraibi",
  "Manar",
  "Al Rams",
  "Al Qawasim Corniche",
  "Dafan Al Nakheel",
  "Julphar",
  "Al Ma'awah",
  "Al Seer",
];

export const metadata = MetadataTemplate({
  meta: {
    title: "Movers in Ras Al Khaimah | Moving Company RAK ",
    desc: "Professional movers and packers in Ras Al Khaimah. Hamad Movers offers home, villa & office moving in RAK and inter-emirate moves. Call +971 55 116 5993.",
  },
  image: {
    path: "/loc/movers-and-packers-ras-al-khaimah-hamad-movers.jpg",
    alt: "Professional movers and packers in Al Ain – Hamad Movers branded truck outside Al Ain villa compound",
  },
  path: "/movers-in-ras-al-khaimah",
});

const MoversInRasAlKhaimah = () => {
  return (
    <main className="overflow-hidden -mt-6">
      <LocHero
        title={
          <>
            Movers and Packers in{" "}
            <span className="text-primary md:block inline">Ras Al Khaimah</span>
          </>
        }
        desc={
          <>
            Hamad Movers provides moving services in Ras Al Khaimah — home
            moves, villa relocations, furniture transport, and office shifting.
            We also handle moves between RAK and other UAE emirates, including
            Dubai and Abu Dhabi.
            <br />
            RAK is further north than most other emirates, and long-distance
            moves require more planning and coordination. We factor in drive
            time, crew scheduling, and any overnight needs for large villa
            moves.
          </>
        }
        image={{
          src: heroImage,
          alt: "Professional movers and packers in Ras Al Khaimah – Hamad Movers team loading a truck outside a modern UAE villa",
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
            Our Moving Services in{" "}
            <span className="text-primary">Ras Al Khaimah</span>
          </>
        }
        services={[
          {
            title: "Home and Apartment Moving",
            description:
              "Full home shifting service — packing, loading, transport, and unloading.",
            linkText: "Contact For House Moving",
            icon: Icons.House,
            name: "/house-movers-dubai-hamad-movers.jpg",
            alt: "Professional house movers in Dubai carrying boxes during a home shifting service by Hamad Movers",
          },
          {
            title: "Villa Moving in RAK",
            description:
              "Large villa moves in Ras Al Khaimah, including properties in gated communities and coastal areas.",
            linkText: "Contact For Villa Moving",
            icon: Icons.Villa,
            name: "/villa-movers-dubai-hamad-movers.jpg",
            alt: "Hamad Movers crew shifting furniture during a villa moving service in Dubai",
          },
          {
            title: "Office Relocation in RAK",
            description:
              "Commercial moves within RAK or between RAK and Dubai/Sharjah.",
            linkText: "Contact For Office Moving",
            icon: Icons.Office,
            name: "/office-movers-dubai-hamad-movers.jpg",
            alt: "Hamad Movers team handling office relocation in Dubai with professional packing and transport",
          },
          {
            title: "Furniture Transport",
            description:
              "Single items to full furniture sets. Disassembly and reassembly included.",
            linkText: "Contact For Furniture Moving",
            icon: Icons.Furniture,
            name: "/furniture-movers-dubai-hamad-movers.jpg",
            alt: "Hamad Movers professional disassembling and wrapping furniture for moving service in Dubai",
          },
          {
            title: "RAK to Dubai / Other Emirates",
            description:
              "We handle inter-emirate moves from Ras Al Khaimah to Dubai, Abu Dhabi, Sharjah, and beyond.",
            linkText: "Contact For Inter-emirate Moving",
            icon: Icons.Packing,
            name: "/packing-moving-services-dubai-hamad-movers.jpg",
            alt: "Hamad Movers packing team wrapping and boxing household items for a full packing service in Dubai",
          },
        ]}
      />
      <AreasCovered
        title="Areas We Cover in Ras Al Khaimah."
        subtitle="Comprehensive moving services across the entire emirate. From coastal areas to gated communities, we're right around the corner."
        areas={rasAlKhaimahAreas}
        contactNote="If you're in an area not listed, give us a call — our network is constantly expanding and we most likely cover it."
      />
      <div className="-mt-20" />
      <MovingProcess />
      <MovingGallery />
      <ServiceSection
        title={
          <>
            Moving from <span className="text-primary">RAK to Dubai</span>
          </>
        }
        paragraphs={[
          "Moving between RAK and Dubai takes longer than most inter-emirate moves — plan for 2+ hours of driving. For a full apartment, expect the whole day. We coordinate timing carefully so the move is completed without needing an overnight stop.",
        ]}
        imageUrl="/loc/ras-al-khaimah-to-dubai-movers-hamad-movers.jpg"
        imageAlt="Hamad Movers truck on Ras Al Khaimah to Dubai route – long distance inter-emirate moving UAE"
        isReversed={true}
        contactButtonText="Get A Instant Quote"
      />
      <div className="-mt-20"></div>
      <ServiceSection
        title={
          <>
            Furniture Movers in{" "}
            <span className="text-primary">Ras Al Khaimah</span>
          </>
        }
        paragraphs={[
          "We move all types of furniture in Ras Al Khaimah — sofas, beds, wardrobes, appliances, and more. If the item needs disassembly, we handle that. Reassembly at the new location is included.",
        ]}
        imageUrl="/loc/villa-movers-rak-furniture-packing-hamad-movers.jpg"
        imageAlt="Hamad Movers carefully packing and wrapping villa furniture in Ras Al Khaimah – professional moving service"
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
              { location: "Movers in Sharjah", path: "/movers-in-sharjah" },
              { location: "Movers in Ajman", path: "/movers-in-ajman" },
              { location: "Movers in Al Ain", path: "/movers-in-al-ain" },
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
                Full packing service available for your RAK move.
              </p>
            </a>
          </div>
        </div>
      </section>

      <FAQSection title="FAQ — Movers in Ras Al Khaimah" faqs={moversRAKFAQs} />
      <CTASection
        first="Book Your "
        second="Ras Al Khaimah Move"
        para="Get a clear quote. No estimates — an actual price based on your move."
      />
    </main>
  );
};

export default MoversInRasAlKhaimah;

const cusReviews = [
  {
    name: "Sultan Al-Ali",
    time: "3 days ago",
    star: 5,
    review:
      "Moved our villa to Mina Al Arab and everything got there in one piece. Outdoor furniture, heavy gym equipment — none of it got scratched or banged up.",
    image: "/ava/32.jpg",
  },
  {
    name: "Jessica Vance",
    time: "1 week ago",
    star: 5,
    review:
      "Moved from Dubai to Ras Al Khaimah and it went without a hitch. They showed up right on time and took real care wrapping my glass cabinets.",
    image: "/ava/44.jpg",
  },
  {
    name: "Anand Krishnan",
    time: "4 days ago",
    star: 5,
    review:
      "Used them for a RAK move and the price they quoted was the price I paid. No add-ons at the end, polite crew throughout — no complaints at all.",
    image: "/ava/86.jpg",
  },
  {
    name: "Mona Al-Zaabi",
    time: "2 weeks ago",
    star: 5,
    review:
      "They dismantled the master bedroom wardrobes and rebuilt everything in the new house without me having to ask twice. Solid work from start to finish.",
    image: "/ava/68.jpg",
  },
  {
    name: "Oliver Hudson",
    time: "5 days ago",
    star: 5,
    review:
      "Moved to Al Hamra Village and the crew clearly knew what they were doing. Truck was fully loaded in under two hours — no chaos, no wasted time.",
    image: "/ava/22.jpg",
  },
  {
    name: "Mariam Al-Nuaimi",
    time: "1 month ago",
    star: 5,
    review:
      "I was genuinely anxious about my artwork surviving the move. They wrapped each piece in bubble wrap and blankets and everything arrived exactly as it left.",
    image: "/ava/90.jpg",
  },
  {
    name: "Robert Downey",
    time: "2 months ago",
    star: 5,
    review:
      "Had them handle our office shift in RAKEZ. IT equipment was packed properly, nothing got jumbled, and the whole thing ran without any delays.",
    image: "/ava/54.jpg",
  },
  {
    name: "Divya Nair",
    time: "3 weeks ago",
    star: 5,
    review:
      "Move to Khuzam went about as smoothly as I could've hoped. Every box ended up in the right room without me having to redirect anyone — unpacking was easy.",
    image: "/ava/29.jpg",
  },
  {
    name: "Christian Wolff",
    time: "6 days ago",
    star: 5,
    review:
      "They got straight to work, brought decent packing boxes, and didn't rush through the fragile stuff. Nothing to fault really.",
    image: "/ava/11.jpg",
  },
  {
    name: "Salama Al-Qasimi",
    time: "3 months ago",
    star: 5,
    review:
      "Fair price for RAK and the team was respectful throughout. They slowed down with the kitchen items rather than just throwing everything in boxes.",
    image: "/ava/19.jpg",
  },
];
