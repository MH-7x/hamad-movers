import { PhoneCall, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function CTASection({
  first,
  second,
  para,
}: {
  first?: string;
  second?: string;
  para?: string;
}) {
  return (
    <section className="relative w-full py-20 bg-white ">
      <div className="max-w-5xl mx-auto px-4 lg:px-0">
        {/* Main Grid Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h2 className="md:text-4xl text-3xl mb-6 ">
              {first ? first : "Get a Free"} <br className="hidden sm:block" />
              <span className="relative whitespace-nowrap">
                <span className="relative z-10 text-primary">
                  {second ? second : "Moving Quote"}
                </span>
                {/* Decorative underline */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-secondary z-0"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                  />
                </svg>
              </span>{" "}
              Today.
            </h2>

            <p className="text-lg  text-muted-foreground mb-10 max-w-xl font-normal leading-relaxed">
              {para
                ? para
                : "Call us, WhatsApp us, or fill in the form. We&apos;ll get back to you quickly with a clear, no-obligation price."}
            </p>

            {}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button size={"lg"}>
                <PhoneCall /> Call (055 1165993)
              </Button>
              <Button size={"lg"} variant={"secondary"}>
                Fill out the form <ArrowRight />
              </Button>
            </div>
          </div>

          {}
          <div className="lg:col-span-5 relative">
            {/* Background decorative blob */}
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-60"></div>

            {/* Floating Card */}
            <div className="relative bg-white rounded-3xl border p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300">
              <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle
                  className="w-7 h-7 text-foreground"
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Prefer to text?
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Reach out on WhatsApp for an instant response. Share photos of
                your items for a faster, more accurate quote.
              </p>

              <a
                href="https://wa.me/971551165993"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between w-full p-4 rounded-xl bg-muted text-foreground font-semibold transition-all duration-300 hover:bg-secondary"
              >
                <span className="flex items-center gap-3">
                  <span>Chat on WhatsApp</span>
                </span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
