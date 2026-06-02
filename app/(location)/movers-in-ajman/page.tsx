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
import MetadataTemplate from "@/lib/MetaDataTemplate";
import heroImage from "@/public/loc/movers-and-packers-ajman-hamad-movers.jpg";

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

export const metadata = MetadataTemplate({
  meta: {
    title: "Movers in Ajman | Hamad Movers and Packers Ajman",
    desc: "Professional movers and packers in Ajman. Hamad Movers and Packers offers home, villa & office moving services in Ajman at competitive rates. Call +971 55 116 5993.",
  },
  image: {
    path: "/loc/movers-and-packers-ajman-hamad-movers.jpg",
    alt: "Professional movers and packers in Abu Dhabi – Hamad Movers team loading a truck outside a modern UAE villa",
  },
  path: "/movers-in-ajman",
});

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
          alt: "Professional movers and packers in Abu Dhabi – Hamad Movers and Packers team loading a truck outside a modern UAE villa",
        }}
      />
      <FeatureStats />
      <div className="-mt-10" />
      <QuoteForm />
      <Testimonials cusReviews={cusReview} />
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
            icon: <Icons.House />,
            name: "/house-movers-dubai-hamad-movers.jpg",
            alt: "Professional house movers in Dubai carrying boxes during a home shifting service by Hamad Movers",
          },
          {
            title: "Villa Moving in Ajman",
            description:
              "Larger villas in Ajman require more time and more hands. We plan accordingly.",
            linkText: "Contact For Villa Moving",
            icon: <Icons.Villa />,
            name: "/villa-movers-dubai-hamad-movers.jpg",
            alt: "Hamad Movers crew shifting furniture during a villa moving service in Dubai",
          },
          {
            title: "Office Moving in Ajman",
            description:
              "Commercial moves within Ajman or between Ajman and neighboring emirates.",
            linkText: "Contact For Office Moving",
            icon: <Icons.Office />,
            name: "/office-movers-dubai-hamad-movers.jpg",
            alt: "Hamad Movers team handling office relocation in Dubai with professional packing and transport",
          },
          {
            title: "Furniture Moving in Ajman",
            description:
              "Individual items or full sets. Disassembly, wrapping, transport, and reassembly — all included.",
            linkText: "Contact For Furniture Moving",
            icon: <Icons.Furniture />,
            name: "/furniture-movers-dubai-hamad-movers.jpg",
            alt: "Hamad Movers professional disassembling and wrapping furniture for moving service in Dubai",
          },
          {
            title: "Packing and Moving Services",
            description:
              "Don't want to pack anything yourself? We bring the boxes, bubble wrap, and stretch film — and do it all for you.",
            linkText: "Contact For Packing Services",
            icon: <Icons.Packing />,
            name: "/packing-moving-services-dubai-hamad-movers.jpg",
            alt: "Hamad Movers packing team wrapping and boxing household items for a full packing service in Dubai",
          },
          {
            title: "Ajman to Dubai or Sharjah",
            description:
              "Inter-emirate moves to and from Ajman. We do these regularly.",
            linkText: "Contact For Sharjah to Dubai Moving",
            icon: <Icons.Cheap />,
            name: "/hamad-movers-and-packers-truck.jpg",
            alt: "Hamad Movers packing team wrapping and boxing household items for a full packing service in Dubai",
            link: "/contact-us",
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
        imageUrl="/loc/ajman-to-dubai-movers-hamad-movers-packers.jpg"
        imageAlt="Hamad Movers handling an Ajman to Dubai relocation – professional inter-emirate moving service UAE"
        isReversed={true}
        contactButtonText="Get A Instant Quote"
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
                About Hamad Movers and Packers
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
              href="/house-movers-in-dubai"
              className="group p-8 bg-card rounded-2xl border border-border hover:border-primary hover:shadow-lg transition-all"
            >
              <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors mb-2">
                House Moving & Packing
              </h3>
              <p className="text-sm text-muted-foreground">
                Full moving and packing service available for your Ajman move.
              </p>
            </a>
          </div>
        </div>
      </section>

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

const cusReview = [
  {
    name: "Tariq Mahmood",
    time: "2 days ago",
    star: 5,
    review:
      "Moved my studio from Ajman Corniche to Al Jurf seamlessly. The team packed my electronics with extreme care and delivered everything intact.",
    image: "/ava/32.jpg",
  },
  {
    name: "Emily Carter",
    time: "1 week ago",
    star: 5,
    review:
      "Finding reliable movers in Ajman is tough, but these guys were fantastic. They arrived early, dismantled my heavy bedroom set, and set it up perfectly.",
    image: "/ava/44.jpg",
  },
  {
    name: "Karthik Rajan",
    time: "3 weeks ago",
    star: 5,
    review:
      "Very affordable rates for moving within Ajman. The crew was polite, didn't waste any time, and handled my fragile glass showcase like true experts.",
    image: "/ava/86.jpg",
  },
  {
    name: "Huda Al-Qasimi",
    time: "1 month ago",
    star: 5,
    review:
      "I booked them for a villa move in Al Nuaimia and couldn't be happier. Zero hidden fees at the end and the staff was extremely hardworking.",
    image: "/ava/68.jpg",
  },
  {
    name: "Alex Stanton",
    time: "5 days ago",
    star: 5,
    review:
      "Excellent service from start to finish! They wrapped all the kitchen appliances securely and moved us out of our Ajman apartment in record time.",
    image: "/ava/22.jpg",
  },
  {
    name: "Amira Youssef",
    time: "2 months ago",
    star: 5,
    review:
      "Highly professional moving company in Ajman. They brought all their own high-quality packing materials and didn't leave a single mess behind.",
    image: "/ava/90.jpg",
  },
  {
    name: "Omar Farooq",
    time: "4 days ago",
    star: 5,
    review:
      "We used their service to relocate our small office in Ajman Free Zone. Fast, efficient, and they made sure all our monitors and computers were completely safe.",
    image: "/ava/54.jpg",
  },
  {
    name: "Priya Sharma",
    time: "2 weeks ago",
    star: 5,
    review:
      "Smooth shifting experience from Ajman to Dubai. The truck was clean, the crew was friendly, and absolutely none of my furniture got scratched.",
    image: "/ava/29.jpg",
  },
  {
    name: "Marcus Reid",
    time: "6 days ago",
    star: 5,
    review:
      "Best moving service I’ve used since coming to the UAE. They reassembled my entire IKEA wardrobe perfectly and were very respectful of our home.",
    image: "/ava/11.jpg",
  },
  {
    name: "Laila Hassan",
    time: "3 months ago",
    star: 5,
    review:
      "Really impressed with their punctuality and care. If you need a stress-free move in Ajman, I definitely recommend giving this team a call.",
    image: "/ava/19.jpg",
  },
];
