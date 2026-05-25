import MetadataTemplate from "@/lib/MetaDataTemplate";

export const metadata = MetadataTemplate({
  meta: {
    title: "Privacy Policy | Hamad Movers and Packers",
    desc: "Read Hamad Movers and Packers' privacy policy — how we collect, use, and protect your personal information when you use our website or request a quote.",
  },
  image: {
    path: "/hamad-movers-and-packers-in-dubai.jpg",
    alt: "Privacy Policy",
  },
  path: "/privacy-policy",
});

export default function PrivacyPolicy() {
  return (
    <main className="overflow-hidden">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">Last Updated: May 2026</p>
          </div>

          {/* Content */}
          <article className="prose prose-lg max-w-none space-y-8">
            <div>
              <p className="text-base text-foreground leading-relaxed">
                Hamad Movers and Packers (&quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;) operates the website hamadmovers.ae. This page
                explains what information we collect, how we use it, and what
                your rights are.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Information We Collect
              </h2>
              <p className="text-foreground mb-4">
                When you contact us through the website, we collect:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Your name</li>
                <li>Your phone number</li>
                <li>Your email address (if provided)</li>
                <li>
                  Move details you share in the form (locations, property size,
                  dates)
                </li>
              </ul>
              <p className="text-foreground mt-4">
                We collect this information only when you voluntarily provide it
                by filling in our contact form or calling us.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                How We Use Your Information
              </h2>
              <p className="text-foreground mb-4">
                We use the information you provide to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Contact you with a moving quote</li>
                <li>Answer your questions about our services</li>
                <li>Confirm and manage your booking</li>
              </ul>
              <p className="text-foreground mt-4">
                We do not sell, rent, or share your personal information with
                third parties for marketing purposes.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Cookies
              </h2>
              <p className="text-foreground">
                Our website may use basic cookies to understand how visitors use
                the site (pages visited, time spent, device type). This
                information is used in aggregate and is not personally
                identifiable. You can turn off cookies in your browser settings.
              </p>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Data Retention
              </h2>
              <p className="text-foreground">
                We keep your contact information for as long as it is needed to
                provide the service or as required by law. If you&apos;d like
                your information removed from our records, contact us and
                we&apos;ll delete it.
              </p>
            </div>

            {/* Contact Us */}
            <div className="border-t border-zinc-200 pt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Contact Us
              </h2>
              <p className="text-foreground mb-4">
                If you have questions about this privacy policy or how we handle
                your data:
              </p>
              <div className="bg-zinc-50 p-6 rounded-lg">
                <p className="text-foreground font-semibold">
                  Phone / WhatsApp:{" "}
                  <a
                    href="tel:+971551165993"
                    className="text-primary hover:underline"
                  >
                    +971 55 116 5993
                  </a>
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
