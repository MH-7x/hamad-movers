import MetadataTemplate from "@/lib/MetaDataTemplate";

export const metadata = MetadataTemplate({
  meta: {
    title: "Terms and Conditions | Hamad Movers and Packers",
    desc: "Hamad Movers and Packers' terms and conditions — booking, payment, liability, and cancellation policies for our moving services in Dubai and UAE.",
  },
  image: {
    path: "/hamad-movers-and-packers-in-dubai.jpg",
    alt: "Terms and Conditions",
  },
  path: "/terms-and-conditions",
});

export default function TermsAndConditions() {
  return (
    <main className="overflow-hidden">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms and Conditions
            </h1>
            <p className="text-muted-foreground">Last Updated: May 2026</p>
          </div>

          {/* Content */}
          <article className="prose prose-lg max-w-none space-y-8">
            <div>
              <p className="text-base text-foreground leading-relaxed">
                These terms apply when you use our services or make a booking
                with Hamad Movers and Packers. By booking with us, you agree to
                these terms.
              </p>
            </div>

            {/* Bookings and Confirmation */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Bookings and Confirmation
              </h2>
              <p className="text-foreground">
                A booking is confirmed when we have agreed on a date, price, and
                service scope over phone or WhatsApp. We recommend you confirm
                your move date at least 2–3 days in advance.
              </p>
            </div>

            {/* Pricing and Payment */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Pricing and Payment
              </h2>
              <p className="text-foreground mb-4">
                The price we quote covers the agreed scope of work. If the scope
                changes on moving day (additional rooms, additional items not
                mentioned, access issues), we will inform you of any additional
                charges before proceeding.
              </p>
              <p className="text-foreground">
                Payment is typically made at the completion of the move. We
                accept cash and bank transfer.
              </p>
            </div>

            {/* Cancellations and Rescheduling */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Cancellations and Rescheduling
              </h2>
              <p className="text-foreground">
                If you need to cancel or reschedule, please notify us as early
                as possible — ideally at least 24 hours before the scheduled
                move. Late cancellations may be subject to a fee.
              </p>
            </div>

            {/* Liability */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Liability
              </h2>
              <p className="text-foreground mb-4">
                We take great care with your belongings. However, Hamad Movers
                and Packers is not liable for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Pre-existing damage to furniture or items</li>
                <li>Damage to items that were not packed by our crew</li>
                <li>
                  Damage resulting from access issues at the property (narrow
                  staircases, blocked lifts, etc.) where we were not informed in
                  advance
                </li>
              </ul>
              <p className="text-foreground mt-4">
                We will always notify you if we identify a risk before handling
                any item.
              </p>
            </div>

            {/* Customer Responsibilities */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Customer Responsibilities
              </h2>
              <p className="text-foreground mb-4">Please ensure:</p>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Clear access to the property is available on moving day</li>
                <li>
                  Any items not to be moved are clearly marked or removed from
                  the area
                </li>
                <li>
                  Parking or loading space is arranged at both the pickup and
                  delivery locations
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="border-t border-zinc-200 pt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Contact
              </h2>
              <p className="text-foreground mb-4">
                If you have questions about these terms:
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
