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
import MetadataTemplate from "@/lib/MetaDataTemplate";
import heroImage from "@/public/loc/movers-and-packers-al-ain-hamad-movers.jpg";

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

export const metadata = MetadataTemplate({
  meta: {
    title: "Movers in Al Ain | Get A Quote in 10 Minutes",
    desc: "Reliable movers and packers in Al Ain for homes, villas, and offices. Hamad Movers covers Al Ain and inter-emirate moves to Dubai & Abu Dhabi. Call +971 55 116 5993.",
  },
  image: {
    path: "/loc/movers-and-packers-al-ain-hamad-movers.jpg",
    alt: "Professional movers and packers in Al Ain – Hamad Movers branded truck outside Al Ain villa compound",
  },
  path: "/movers-in-al-ain",
});

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
      <Testimonials cusReviews={cusReviews} />
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
        imageUrl="/loc/al-ain-to-dubai-movers-hamad-movers-inter-emirate.jpg"
        imageAlt="Hamad Movers truck on Al Ain to Dubai highway – inter-emirate moving service UAE"
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
        imageUrl="/loc/villa-movers-al-ain-packing-service-hamad-movers.jpg"
        imageAlt="Hamad Movers packing villa furniture in Al Ain – professional home shifting and relocation UAE"
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

const cusReviews = [
  {
    name: "Saeed Al-Dhaheri",
    time: "4 days ago",
    star: 5,
    review:
      "Moved our family villa in Al Ain (Zakher) and not a single piece of heritage furniture got dinged. The team handled the old stuff with real care and still moved quickly.",
    image: "/ava/32.jpg",
  },
  {
    name: "Chloe Bennett",
    time: "1 week ago",
    star: 5,
    review:
      "Really glad I used them for the move down to Al Ain. My porcelain and garden pots all arrived intact, and they left the place cleaner than I expected.",
    image: "/ava/44.jpg",
  },
  {
    name: "Vikram Malhotra",
    time: "3 days ago",
    star: 5,
    review:
      "Needed a quick apartment move within Falaj Hazzaa and they sorted it without fuss. Pricing was straightforward — no surprise charges at the end.",
    image: "/ava/86.jpg",
  },
  {
    name: "Reem Al-Mheiri",
    time: "2 weeks ago",
    star: 5,
    review:
      "They took apart our massive wardrobes and put them back together properly in the new house. For Al Ain villa moves, these are the people to call.",
    image: "/ava/68.jpg",
  },
  {
    name: "Thomas Wright",
    time: "5 days ago",
    star: 5,
    review:
      "Moved from Dubai to Al Ain and honestly it went better than I thought. Truck showed up right on time and the 2-bedroom was fully loaded in under three hours.",
    image: "/ava/22.jpg",
  },
  {
    name: "Fatma Al-Shamsi",
    time: "1 month ago",
    star: 5,
    review:
      "I was genuinely nervous about my mirrors making it in one piece. They wrapped each one in heavy blankets and bubble wrap — every single one arrived fine.",
    image: "/ava/90.jpg",
  },
  {
    name: "Liam Henderson",
    time: "2 months ago",
    star: 5,
    review:
      "Third time using them for corporate transfers to Al Ain. They still show up on time, still easy to deal with. That kind of consistency is hard to find.",
    image: "/ava/54.jpg",
  },
  {
    name: "Nisha Patel",
    time: "3 weeks ago",
    star: 5,
    review:
      "The move to Al Khabisi went smoother than I hoped. Every box ended up in the right room without me directing anyone — saved a lot of unpacking headache.",
    image: "/ava/29.jpg",
  },
  {
    name: "George Christian",
    time: "6 days ago",
    star: 5,
    review:
      "We moved our retail clinic in Al Ain Free Zone and they handled the sensitive equipment carefully. Finished well inside the window we gave them.",
    image: "/ava/11.jpg",
  },
  {
    name: "Salma Al-Neyadi",
    time: "3 months ago",
    star: 5,
    review:
      "Good rates for Al Ain and the crew didn't treat the fragile items like they were in a rush. Refreshing to get both the price and the care at the same time.",
    image: "/ava/19.jpg",
  },
];
