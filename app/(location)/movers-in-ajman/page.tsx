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
import { moversAjmanFAQs } from "@/lib/data";
import heroImage from "@/public/loc/movers-and-packers-abu-dhabi-hamad-movers.jpg";

const ajmanAreas = [
  "Al Nuaimia",
  "Al Rashidiya",
  "Al Jurf",
  "Al Rawda",
  "Al Hamidiyah",
  "Al Jerf Industrial",
  "Mushairef",
  "Al Mowaihat",
  "Ajman Corniche",
  "Al Yasmeen",
  "Rumaila",
  "Al Uraibi",
];
const AjmanPage = () => {
  return (
    <main className="overflow-hidden -mt-6">
      <LocHero
        title={
          <>
            Movers and Packers in <span className="text-primary">Ajman</span>
          </>
        }
        desc={
          <>
            Hamad Movers and Packers covers Ajman for all types of moving — home
            shifting, villa moves, office relocation, and furniture transport.
            Ajman is one of the smaller emirates, but moving there has the same
            requirements as anywhere else: proper packing, a trained crew, and a
            reliable truck.
            <br />
            We also handle moves from Ajman to Dubai, Sharjah, and other
            emirates.
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
            Our Moving Services in <span className="text-primary">Ajman</span>
          </>
        }
        services={[
          {
            title: "Home and Apartment Moving in Ajman",
            description:
              "We move studios and apartments across Ajman — same area or to a different part of the city.",
            linkText: "Contact For House Moving",
            icon: Icons.House,
            name: "/house-movers-dubai-hamad-movers.jpg",
            alt: "Professional house movers in Dubai carrying boxes during a home shifting service by Hamad Movers",
          },
          {
            title: "Villa Moving in Ajman",
            description:
              "Larger villas in Ajman require more time and more hands. We plan accordingly.",
            linkText: "Contact For Villa Moving",
            icon: Icons.Villa,
            name: "/villa-movers-dubai-hamad-movers.jpg",
            alt: "Hamad Movers crew shifting furniture during a villa moving service in Dubai",
          },
          {
            title: "Office Moving in Ajman",
            description:
              "Commercial moves within Ajman or between Ajman and neighboring emirates.",
            linkText: "Contact For Office Moving",
            icon: Icons.Office,
            name: "/office-movers-dubai-hamad-movers.jpg",
            alt: "Hamad Movers team handling office relocation in Dubai with professional packing and transport",
          },
          {
            title: "Furniture Moving in Ajman",
            description:
              "Individual items or full sets. Disassembly, wrapping, transport, and reassembly — all included.",
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
            title: "Ajman to Dubai or Sharjah",
            description:
              "Inter-emirate moves to and from Ajman. We do these regularly.",
            linkText: "Contact For Sharjah to Dubai Moving",
            icon: Icons.Cheap,
            name: "/hamad-movers-and-packers-truck.jpg",
            alt: "Hamad Movers packing team wrapping and boxing household items for a full packing service in Dubai",
          },
        ]}
      />
      <AreasCovered
        title="Areas We Cover in Ajman"
        subtitle="We cover all areas of Ajman, including:"
        areas={ajmanAreas}
        contactNote="If you're in an area not listed, give us a call — our network is constantly expanding and we most likely cover it."
      />
      <div className="-mt-20" />
      <MovingProcess />
      <MovingGallery />
      <ServiceSection
        title={
          <>
            Ajman to <span className="text-primary">Dubai / Sharjah Moves</span>
          </>
        }
        paragraphs={[
          "Many people living in Ajman work in Dubai or Sharjah, and relocation between these cities is common. We handle the full move — packing in Ajman, transporting, and delivering to the new location.",
        ]}
        imageUrl="/loc/furniture-movers-abu-dhabi-packing-service-hamad-movers.jpg"
        imageAlt="Hamad Movers professional packing and furniture wrapping service inside an Abu Dhabi apartment"
        isReversed={true}
        contactButtonText="Get A Instant Quote"
      />
      <FAQSection title="FAQ — Movers in Ajman" faqs={moversAjmanFAQs} />
      <CTASection
        first="Book Your "
        second="Ajman Move"
        para="Call or WhatsApp us with your move details."
      />
    </main>
  );
};

export default AjmanPage;
