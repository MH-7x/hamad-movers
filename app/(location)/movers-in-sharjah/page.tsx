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
import heroImage from "@/public/loc/movers-and-packers-abu-dhabi-hamad-movers.jpg";

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
          alt: "Professional movers and packers in Abu Dhabi – Hamad Movers team loading a truck outside a modern UAE villa",
        }}
      />
      <FeatureStats />
      <div className="-mt-10" />
      <QuoteForm />
      <Testimonials />
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
        imageUrl="/loc/furniture-movers-abu-dhabi-packing-service-hamad-movers.jpg"
        imageAlt="Hamad Movers professional packing and furniture wrapping service inside an Abu Dhabi apartment"
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
        imageUrl="/loc/villa-moving-service-abu-dhabi-hamad-movers.jpg"
        imageAlt="Hamad Movers team carrying furniture during a villa relocation in Abu Dhabi, UAE"
        isReversed={false}
        contactButtonText="Contact For Furniture Moving"
      />
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
