/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import Script from "next/script";

export interface FAQData {
  question: string;
  answer: React.ReactNode;
}

export interface FAQProps {
  title?: string;
  subtitle?: string;
  faqs: FAQData[];
}

export const FAQItem: React.FC<{ faq: FAQData }> = ({ faq }) => {
  return (
    <details className="group border-b border-slate-200 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-start justify-between gap-6 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-4 rounded-sm">
        <span className="text-lg font-medium transition-colors group-hover:text-primary">
          {faq.question}
        </span>

        {/* Chevron Icon Container */}
        <span className="ml-6 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white transition-all duration-300 group-open:rotate-180 group-open:border-slate-300 group-open:bg-slate-50 group-hover:bg-slate-50">
          <svg
            className="h-4 w-4 text-slate-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </summary>

      {/* Answer Content */}
      <div className="pb-8 pr-12 text-muted-foreground space-y-4 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-500">
        {faq.answer}
      </div>
    </details>
  );
};

/**
 * Main Reusable FAQ Section Component
 */
export const FAQSection: React.FC<FAQProps> = ({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about our moving services and processes.",
  faqs,
}) => {
  const FaqsSchema = generateFAQSchema(convertFaqsForSchema(faqs));
  return (
    <>
      <Script
        strategy="beforeInteractive"
        id="FAQSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: FaqsSchema }}
      />
      <section
        id="faq"
        className="pt-10 pb-10 px-4 sm:px-6 lg:px-8 selection:bg-slate-200"
      >
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Support & FAQs
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-muted-foreground max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>

          {/* FAQ List */}
          <div className="border-t border-slate-200">
            {faqs.map((faq, index) => (
              <FAQItem key={`faq-${index}`} faq={faq} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
