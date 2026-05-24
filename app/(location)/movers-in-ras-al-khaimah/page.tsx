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
import heroImage from "@/public/loc/movers-and-packers-abu-dhabi-hamad-movers.jpg";

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
      <Testimonials />
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
        imageUrl="/loc/furniture-movers-abu-dhabi-packing-service-hamad-movers.jpg"
        imageAlt="Hamad Movers professional packing and furniture wrapping service inside a Ras Al Khaimah apartment"
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
        imageUrl="/loc/villa-moving-service-abu-dhabi-hamad-movers.jpg"
        imageAlt="Hamad Movers team carrying furniture during a villa relocation in Ras Al Khaimah, UAE"
        isReversed={false}
        contactButtonText="Contact For Furniture Moving"
      />
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
