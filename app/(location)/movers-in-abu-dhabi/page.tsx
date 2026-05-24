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
import { moversAbuDhabiFAQs } from "@/lib/data";
import heroImage from "@/public/loc/movers-and-packers-abu-dhabi-hamad-movers.jpg";

const abuDhabiAreas = [
  "Al Khalidiyah",
  "Al Reem Island",
  "Al Raha Beach",
  "Khalifa City A and B",
  "Mohammed Bin Zayed City (MBZ)",
  "Musaffah",
  "Al Reef",
  "Yas Island",
  "Al Bateen",
  "Al Muroor",
  "Tourist Club Area",
  "Al Zahiyah",
  "Madinat Zayed",
  "Mussafah Industrial Area",
  "Corniche",
];
const page = () => {
  return (
    <main className="overflow-hidden  -mt-6">
      <LocHero
        title={
          <>
            Movers and Packers in{" "}
            <span className="text-primary">Abu Dhabi</span>
          </>
        }
        desc={
          <>
            Hamad Movers and Packers provides moving services across Abu Dhabi —
            home moves, villa relocations, office shifting, and furniture
            transport. Whether you&apos;re moving within Abu Dhabi or relocating
            from Dubai to Abu Dhabi, our crew handles it with the same care and
            process.
            <br />
            Abu Dhabi moves involve longer drives and often more planning,
            especially for large villas. We factor all of this into the quote so
            there are no surprises.
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
            Our Moving Services in{" "}
            <span className="text-primary">Abu Dhabi</span>
          </>
        }
        services={[
          {
            title: "House and Apartment Moving in Abu Dhabi",
            description:
              "We move studios, apartments, and family homes across Abu Dhabi. Full packing service available.",
            linkText: "Contact For House Moving",
            icon: Icons.House,
            name: "/house-movers-dubai-hamad-movers.jpg",
            alt: "Professional house movers in Dubai carrying boxes during a home shifting service by Hamad Movers",
          },
          {
            title: "Villa Moving in Abu Dhabi",
            description:
              "Large villa relocations in Abu Dhabi, covering all areas including Khalidiyah, Al Reem Island, Al Reef, Khalifa City, Mohammed Bin Zayed City, and surrounding communities.",
            linkText: "Contact For Villa Moving",
            icon: Icons.Villa,
            name: "/villa-movers-dubai-hamad-movers.jpg",
            alt: "Hamad Movers crew shifting furniture during a villa moving service in Dubai",
          },
          {
            title: "Office Moving in Abu Dhabi",
            description:
              "Commercial relocations within Abu Dhabi or from Dubai to Abu Dhabi. We work around your schedule to minimize downtime.",
            linkText: "Contact For Office Moving",
            icon: Icons.Office,
            name: "/office-movers-dubai-hamad-movers.jpg",
            alt: "Hamad Movers team handling office relocation in Dubai with professional packing and transport",
          },
          {
            title: "Furniture Moving in Abu Dhabi",
            description:
              "If you need furniture-only transport within Abu Dhabi or from another emirate, we handle single items to full room sets.",
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
        ]}
      />
      <AreasCovered
        title="Areas We Cover in Abu Dhabi."
        subtitle="Comprehensive moving services across the entire emirate. From the bustling islands to the quiet suburbs, we're right around the corner."
        areas={abuDhabiAreas}
        contactNote="If you're in an area not listed, give us a call — our network is constantly expanding and we most likely cover it."
      />
      <div className="-mt-20" />
      <MovingProcess />
      <MovingGallery />
      <ServiceSection
        title={
          <>
            Moving from <span className="text-primary">Dubai to Abu Dhabi</span>
          </>
        }
        paragraphs={[
          "This is one of the most common inter-emirate moves in the UAE. Most families and workers relocate between these two cities regularly, and we've done this route many times.",
          "The drive from Dubai to Abu Dhabi is around 1.5 hours, but loading and unloading time adds to the total. For a 2-bedroom apartment, expect a full day. For a villa, plan for one to two days.",
        ]}
        imageUrl="/loc/furniture-movers-abu-dhabi-packing-service-hamad-movers.jpg"
        imageAlt="Hamad Movers professional packing and furniture wrapping service inside an Abu Dhabi apartment"
        isReversed={true}
        contactButtonText="Get A Instant Quote"
      />
      <div className="-mt-20"></div>
      <ServiceSection
        title={
          <>
            Furniture Movers in <span className="text-primary"> Abu Dhabi</span>
          </>
        }
        paragraphs={[
          "We move all types of furniture in Abu Dhabi — sofas, beds, wardrobes, appliances, and more. If the item needs disassembly, we handle that. Reassembly at the new location is included.",
        ]}
        imageUrl="/loc/villa-moving-service-abu-dhabi-hamad-movers.jpg"
        imageAlt="Hamad Movers team carrying furniture during a villa relocation in Abu Dhabi, UAE"
        isReversed={false}
        contactButtonText="Contact For Furniture Moving"
      />
      <FAQSection title="FAQ — Movers in Abu Dhabi" faqs={moversAbuDhabiFAQs} />
      <CTASection
        first="Book Your "
        second="Abu Dhabi Move"
        para="Call or WhatsApp us. We'll get you a clear price and confirm the crew."
      />
    </main>
  );
};

export default page;
