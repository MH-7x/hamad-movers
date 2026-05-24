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
import { moversAlAinFAQs } from "@/lib/data";
import heroImage from "@/public/loc/movers-and-packers-abu-dhabi-hamad-movers.jpg";

const alAinAreas = [
  "Al Ain City Centre",
  "Al Muwaiji",
  "Al Mutarad",
  "Al Jimi",
  "Al Qattara",
  "Al Hili",
  "Al Yahar",
  "Zakher",
  "Asharej",
  "Al Markhaniya",
  "Al Towayya",
  "Falaj Al Mualla",
  "Al Khrair",
];

const MoversInAlAin = () => {
  return (
    <main className="overflow-hidden -mt-6">
      <LocHero
        title={
          <>
            Movers and Packers in <span className="text-primary">Al Ain</span>
          </>
        }
        desc={
          <>
            Hamad Movers provides moving services in Al Ain — residential moves,
            villa relocations, office shifting, and furniture transport. Al Ain
            is about 1.5 hours from Dubai and 1 hour from Abu Dhabi, making
            inter-emirate moves a regular part of our work here.
            <br />
            Our crew handles Al Ain moves the same way we handle every other job
            — proper packing, careful loading, on-time delivery, and a price
            that doesn&apos;t change on moving day.
          </>
        }
        image={{
          src: heroImage,
          alt: "Professional movers and packers in Al Ain – Hamad Movers team loading a truck outside a modern UAE villa",
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
            <span className="text-primary md:block inline">Al Ain</span>
          </>
        }
        services={[
          {
            title: "Home and Apartment Moving",
            description:
              "Full home shifting service in Al Ain — from studio apartments to large family homes.",
            linkText: "Contact For House Moving",
            icon: Icons.House,
            name: "/house-movers-dubai-hamad-movers.jpg",
            alt: "Professional house movers in Dubai carrying boxes during a home shifting service by Hamad Movers",
          },
          {
            title: "Villa Moving in Al Ain",
            description:
              "Al Ain has many large villas and compounds. We handle full villa relocations including all furniture, packing, and setup.",
            linkText: "Contact For Villa Moving",
            icon: Icons.Villa,
            name: "/villa-movers-dubai-hamad-movers.jpg",
            alt: "Hamad Movers crew shifting furniture during a villa moving service in Dubai",
          },
          {
            title: "Office Moving in Al Ain",
            description:
              "We relocate offices within Al Ain or between Al Ain and Dubai/Abu Dhabi.",
            linkText: "Contact For Office Moving",
            icon: Icons.Office,
            name: "/office-movers-dubai-hamad-movers.jpg",
            alt: "Hamad Movers team handling office relocation in Dubai with professional packing and transport",
          },
          {
            title: "Furniture Transport",
            description:
              "Moving individual pieces or full sets within Al Ain or to another emirate.",
            linkText: "Contact For Furniture Moving",
            icon: Icons.Furniture,
            name: "/furniture-movers-dubai-hamad-movers.jpg",
            alt: "Hamad Movers professional disassembling and wrapping furniture for moving service in Dubai",
          },
          {
            title: "Al Ain to Dubai / Abu Dhabi",
            description:
              "We do this route regularly. Whether you're heading to Dubai or Abu Dhabi, we plan the move to make it as smooth as possible.",
            linkText: "Contact For Inter-emirate Moving",
            icon: Icons.Packing,
            name: "/packing-moving-services-dubai-hamad-movers.jpg",
            alt: "Hamad Movers packing team wrapping and boxing household items for a full packing service in Dubai",
          },
        ]}
      />
      <AreasCovered
        title="Areas We Cover in Al Ain."
        subtitle="Comprehensive moving services across the entire emirate. From the city centre to outer areas and residential compounds, we've got you covered."
        areas={alAinAreas}
        contactNote="If you're in an area not listed, give us a call — our network is constantly expanding and we most likely cover it."
      />
      <div className="-mt-20" />
      <MovingProcess />
      <MovingGallery />
      <ServiceSection
        title={
          <>
            Moving from{" "}
            <span className="text-primary md:block inline">
              Al Ain to Dubai / Abu Dhabi
            </span>
          </>
        }
        paragraphs={[
          "These are long moves and require early starts. For a full apartment or villa, a same-day move is doable but needs good planning. We'll go through the timeline with you when you book so there are no surprises.",
        ]}
        imageUrl="/loc/furniture-movers-abu-dhabi-packing-service-hamad-movers.jpg"
        imageAlt="Hamad Movers professional packing and furniture wrapping service inside an Al Ain apartment"
        isReversed={true}
        contactButtonText="Get A Instant Quote"
      />
      <div className="-mt-20"></div>
      <ServiceSection
        title={
          <>
            Furniture Movers in{" "}
            <span className="text-primary md:block inline">Al Ain</span>
          </>
        }
        paragraphs={[
          "We move all types of furniture in Al Ain — sofas, beds, wardrobes, appliances, and more. If the item needs disassembly, we handle that. Reassembly at the new location is included.",
        ]}
        imageUrl="/loc/villa-moving-service-abu-dhabi-hamad-movers.jpg"
        imageAlt="Hamad Movers team carrying furniture during a villa relocation in Al Ain, UAE"
        isReversed={false}
        contactButtonText="Contact For Furniture Moving"
      />
      <FAQSection title="FAQ — Movers in Al Ain" faqs={moversAlAinFAQs} />
      <CTASection
        first="Book Your "
        second="Al Ain Move"
        para="Tell us your move details. We'll sort the rest."
      />
    </main>
  );
};

export default MoversInAlAin;
