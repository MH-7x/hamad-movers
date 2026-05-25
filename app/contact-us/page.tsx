import { Mail, MapPin, Phone } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import CTASection from "@/components/CTA";

export const metadata = MetadataTemplate({
  meta: {
    title: "Contact Hamad Movers | Get Your Free Moving Quote",
    desc: "Get in touch with Hamad Movers today. Call us, WhatsApp, or fill out the quote form for professional moving services in Dubai and the UAE.",
  },
  image: {
    path: "/hamad-movers-and-packers-in-dubai.jpg",
    alt: "Contact Hamad Movers",
  },
  path: "/contact-us",
});

export default function ContactUs() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className=" pb-12 md:py-20 pt-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="mb-4 text-3xl md:text-5xl font-bold text-foreground">
              Let&apos;s Get Your{" "}
              <span className="text-primary">Move Started</span>
            </h1>
            <p className="mx-auto mb-6 max-w-2xl text-base md:text-lg text-muted-foreground">
              Whether you have questions about our services or you&apos;re ready
              for a quote, we&apos;re here to help. Reach out using your
              preferred method below.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:mb-20">
            {/* Phone Card */}
            <div className="p-6 md:p-8 bg-white border border-zinc-200 rounded-2xl hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Call Us
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Speak directly with our moving experts
              </p>
              <a
                href="tel:+971551165993"
                className="text-primary font-semibold hover:underline"
              >
                +971 55 116 5993
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="p-6 md:p-8 bg-white border border-zinc-200 rounded-2xl hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                WhatsApp
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Quick response with photo support
              </p>
              <a
                href="https://wa.me/971551165993"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                Message on WhatsApp
              </a>
            </div>

            {/* Location Card */}
            <div className="p-6 md:p-8 bg-white border border-zinc-200 rounded-2xl hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Service Area
              </h3>
              <p className="text-sm text-muted-foreground">
                We serve Dubai, Abu Dhabi, Sharjah, Ajman, Al Ain, Ras Al
                Khaimah, and all Emirates.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-zinc-200 mb-12 md:mb-16"></div>

          {/* Form Section */}
        </div>
      </section>
      <div>
        <div className="text-center md:px-0 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Get Your Free Moving Quote
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Fill out the form below with your moving details. We&apos;ll review
            your request and get back to you within 10 minutes.
          </p>
        </div>

        {/* Quote Form */}
        <div className="-mt-10"></div>
        <QuoteForm />
      </div>
      {/* Additional Info Section */}
      <section className="py-16 ">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Why Choose Hamad Movers?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                  </span>
                  <span className="text-muted-foreground">
                    Professional, trained moving specialists
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                  </span>
                  <span className="text-muted-foreground">
                    Fast response time – typically within 10 minutes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                  </span>
                  <span className="text-muted-foreground">
                    Competitive, transparent pricing with no hidden fees
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                  </span>
                  <span className="text-muted-foreground">
                    Full range of services – packing, moving, storage &amp; more
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                What to Expect
              </h3>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-lg flex-shrink-0">
                    1
                  </span>
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      Submit Your Details
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Tell us about your move – locations, items, date, and any
                      special requirements.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-lg flex-shrink-0">
                    2
                  </span>
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      Get a Free Quote
                    </p>
                    <p className="text-sm text-muted-foreground">
                      We&apos;ll provide a detailed, no-obligation quote within
                      10 minutes.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-lg flex-shrink-0">
                    3
                  </span>
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      Confirm Your Booking
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Once you&apos;re happy with the quote, confirm your moving
                      date and we&apos;ll handle the rest.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
