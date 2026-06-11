import { AreasCovered } from "@/components/CoverageArea";
import CTASection from "@/components/CTA";
import { FAQSection } from "@/components/FaqsSection";
import FeatureStats from "@/components/FeatureStates";
import { MovingGallery } from "@/components/Gallery";
import LocHero from "@/components/LocHero";
import MovingProcess from "@/components/MovingProcess";
import QuoteForm from "@/components/QuoteForm";
import Services, { Icons } from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { FujairahFAQs } from "@/lib/data";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import heroImage from "@/public/loc/professional-movers-packers-fujairah-hamad-movers.jpg";

export const metadata = MetadataTemplate({
  meta: {
    title: "Movers in Fujairah | Best Movers and Packers in Fujairah",
    desc: "Looking for professional movers in Fujairah? Hamad Movers offers expert house, villa, and office shifting with no hidden charges. Call +971 55 116 5993 today!",
  },
  image: {
    path: "/loc/professional-movers-packers-fujairah-hamad-movers.jpg",
    alt: "Professional movers and packers in Fujairah — Hamad Movers & Packers team loading belongings with the Hajar Mountains in the background, UAE East Coast relocation service",
  },
  path: "/movers-in-fujairah",
});

const MoversInFujairah = () => {
  return (
    <main className="overflow-hidden -mt-6">
      <LocHero
        title={
          <>
            Professional Movers and Packers in{" "}
            <span className="text-primary">Fujairah</span>
          </>
        }
        desc={
          <>
            Moving to a new home should be an exciting chapter, not a stressful
            chore. If you are looking for reliable movers in fujairah, Hamad
            Movers and Packers is here to handle the heavy lifting for you. We
            provide a full-service relocation experience, ensuring your
            furniture and belongings are transported safely across the East
            Coast or to any other emirate in the UAE.
            <br />
            From professional packing to expert furniture assembly, our team is
            known as the best movers and packers in fujairah because we combine
            affordable rates with 5-star service.
          </>
        }
        image={{
          src: heroImage,
          alt: "Professional movers and packers in Fujairah — Hamad Movers & Packers team loading belongings with the Hajar Mountains in the background, UAE East Coast relocation service",
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
            Our Specialized Moving Services in{" "}
            <span className="text-primary md:block inline">Fujairah</span>
          </>
        }
        desc="We understand that every move is unique. Whether you are shifting from a studio apartment or a large commercial warehouse, we have the equipment and manpower to get it done."
        services={[
          {
            title: "House Movers and Packers in Fujairah",
            description:
              "We are experts in residential relocations. Our house movers and packers in fujairah service includes everything from packing your kitchen cabinets to disassembling your bed frames. We make sure your transition to a new apartment in Sakamkam or Al Faseel is seamless.",
            linkText: "Contact For House Moving",
            icon: <Icons.House />,
            name: "/house-movers-dubai-hamad-movers.jpg",
            alt: "Professional house movers in Fujairah carrying boxes during a home shifting service by Hamad Movers",
          },
          {
            title: "Professional Villa Movers",
            description:
              "Villa moves require extra care due to the volume of furniture and outdoor items. Our crew is trained to move heavy garden furniture, gym equipment, and large wardrobes without scratching your walls or floors.",
            linkText: "Contact For Villa Moving",
            icon: <Icons.Villa />,
            name: "/villa-movers-dubai-hamad-movers.jpg",
            alt: "Hamad Movers crew shifting furniture during a villa moving service in Fujairah",
          },
          {
            title: "Office Shifting & Commercial Moving",
            description:
              "Minimize your business downtime with our efficient office moving service. We handle IT equipment, servers, and office workstations with extreme precision, ensuring you can resume operations as quickly as possible.",
            linkText: "Contact For Office Moving",
            icon: <Icons.Office />,
            name: "/office-movers-dubai-hamad-movers.jpg",
            alt: "Hamad Movers team handling office relocation in Fujairah with professional packing and transport",
          },
        ]}
      />
      <AreasCovered
        title="Areas We Serve in Fujairah"
        subtitle="We provide local moving expertise across all major neighborhoods and surrounding areas of the Fujairah emirate:"
        areas={FujairahAreas}
        contactNote="If you're in an area not listed, give us a call — our network is constantly expanding and we most likely cover it."
      />
      <MovingProcess />
      <MovingGallery />

      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-hero text-3xl md:text-4xl mb-4">
              How Much Do Movers in Fujairah Cost?
            </h2>
            <p className="text-muted-foreground">
              We believe in honest pricing. While every job depends on the
              volume of items, here is a general guide to our rates for movers
              in Fujairah:
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
            <table className="w-full text-left">
              <thead className="bg-muted">
                <tr>
                  <th className="px-6 py-4 font-hero text-lg">Property Size</th>
                  <th className="px-6 py-4 font-hero text-lg">
                    Estimated Price (AED)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { type: "Studio Apartment", price: "AED 350 – 550" },
                  { type: "1 BHK Apartment", price: "AED 600 – 900" },
                  { type: "2 BHK Apartment", price: "AED 900 – 1,400" },
                  { type: "3 BR Villa", price: "AED 1,500 – 2,500" },
                  { type: "Office Move", price: "Contact for Quote" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 font-medium">{row.type}</td>
                    <td className="px-6 py-4 text-primary font-bold">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground italic">
            These are estimates. Contact us for a specific quote based on your
            move.
          </p>
        </div>
      </section>

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
                Full moving and packing service available for your Al Ain move.
              </p>
            </a>
          </div>
        </div>
      </section>

      <FAQSection title="FAQ — Movers in Fujairah" faqs={FujairahFAQs} />
      <CTASection
        first="Book Your "
        second="Fujairah Move"
        para="Don't settle for cheap movers who lack experience. Choose the best movers and packers in fujairah for a stress-free experience. Contact Hamad Movers and Packers today for a 100% free, no-obligation quote!"
      />
    </main>
  );
};

export default MoversInFujairah;

const FujairahAreas = [
  "Al Faseel",
  "Sakamkam",
  "Al Sharyah",
  "Dibba Al-Fujairah",
  "Al Aqah",
  "Sharm",
  "Bidiyah",
  "Masafi",
  "Al Bithnah",
  "Hajar mountain routes",
  "Fujairah Port",
  "Creative City",
  "Fujairah to Dubai",
  "Fujairah to Abu Dhabi",
  "Fujairah to Sharjah",
];

const cusReviews = [
  {
    name: "Ahmed Al-Mismari",
    time: "2 days ago",
    star: 5,
    review:
      "Moved our whole villa to Al Faseel — heavy garden furniture included — and not a single scratch on anything. Fast crew, knew what they were doing, and actually polite about it.",
    image: "/ava/32.jpg",
  },
  {
    name: "Sarah Jenkins",
    time: "5 days ago",
    star: 5,
    review:
      "Moving to Dibba in this heat, I was worried about dust getting into everything. Their closed trucks sorted that — stuff arrived clean. Also, the WhatsApp quote matched the final bill exactly, which never happens.",
    image: "/ava/44.jpg",
  },
  {
    name: "Rahul Sharma",
    time: "1 week ago",
    star: 5,
    review:
      "Needed a same-weekend move within Sakamkam and they made it happen without drama. Pricing was upfront — what they said is what I paid, nothing tacked on at the end.",
    image: "/ava/86.jpg",
  },
  {
    name: "Mariam Al-Ali",
    time: "4 days ago",
    star: 5,
    review:
      "Those built-in bedroom wardrobes are always a nightmare, but they took them apart and put them back together in the new place without any missing pieces or crooked panels. Best movers I've used in Fujairah.",
    image: "/ava/68.jpg",
  },
  {
    name: "David Miller",
    time: "3 days ago",
    star: 5,
    review:
      "Dubai to Fujairah City Center and honestly it went better than I expected. Crew was on time, wrapped everything fragile properly, and nothing shifted in transit.",
    image: "/ava/22.jpg",
  },
  {
    name: "Fatima Al-Kaabi",
    time: "2 weeks ago",
    star: 5,
    review:
      "I had a lot of kitchen glassware going to Masafi and was bracing for breakage. They wrapped every single piece in bubble wrap — nothing broke, nothing chipped. Would use their packing service again without hesitation.",
    image: "/ava/90.jpg",
  },
  {
    name: "Marcus Vance",
    time: "3 weeks ago",
    star: 5,
    review:
      "We moved our regional office near Fujairah Port over a weekend so we'd lose as little work time as possible. They handled the servers and workstations carefully and we were back up Monday morning without issues.",
    image: "/ava/54.jpg",
  },
  {
    name: "Priyanka Naidu",
    time: "1 month ago",
    star: 5,
    review:
      "Moved my 1 BHK to Al Sharyah and every box ended up in the right room. Sounds basic but it made unpacking so much less painful — didn't have to drag anything across the flat.",
    image: "/ava/29.jpg",
  },
  {
    name: "George Harrison",
    time: "6 days ago",
    star: 5,
    review:
      "Lots of stuff to move from the beach villa down to Al Aqah, and they didn't rush or cut corners despite the volume. Good rates too for the distance.",
    image: "/ava/11.jpg",
  },
  {
    name: "Sultan Al-Sharqi",
    time: "2 months ago",
    star: 5,
    review:
      "Fair prices for Fujairah and the crew took their time with anything fragile. Hard to find a local mover that doesn't make you choose between cheap and careful — these guys manage both.",
    image: "/ava/19.jpg",
  },
];
