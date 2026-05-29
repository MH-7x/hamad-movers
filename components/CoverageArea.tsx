import React, { ReactNode } from "react";
import { CheckCircle2, MessageCircle, PhoneCall } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

interface AreasCoveredProps {
  title: string;
  subtitle?: string;
  areas: string[];
  contactNote?: string;
  contactButtonText?: string;
}

// ----------------------------------------------------------------------
// Refined, Modern Reusable Component
// ----------------------------------------------------------------------
export const AreasCovered: React.FC<AreasCoveredProps> = ({
  title,
  subtitle,
  areas,
  contactNote,
}) => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4  relative z-10">
        {/* Header - Editorial Style */}
        <div className="max-w-2xl mb-10">
          <h2 className="md:text-4xl text-3xl text-foreground mb-6">{title}</h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground ">{subtitle}</p>
          )}
        </div>

        {/* Areas List - Clean, staggered pill design instead of rigid boxes */}
        <div className="flex flex-wrap gap-3 md:gap-4 mb-10">
          {areas.map((area, index) => (
            <div
              key={index}
              className=" flex items-center bg-white px-5 py-3 rounded-2xl "
            >
              <CheckCircle2
                size={18}
                className="text-secondary mr-3 "
                strokeWidth={2.5}
              />
              <span className="text-gray-700 text-sm">{area}</span>
            </div>
          ))}
        </div>

        {/* Elegant Contact Banner */}
        {contactNote && (
          <div className="bg-primary p-10 rounded-3xl max-w-5xl mx-auto">
            <h3 className="text-2xl text-white text-shadow-2xs">
              If you&apos;re in an area not listed, call us — we most likely
              cover it.
            </h3>
            <Button
              callBtn
              variant={"outline"}
              size={"lg"}
              className="mt-5 md:w-60"
            >
              <PhoneCall /> Call Now
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

interface ServiceSectionProps {
  title: ReactNode;
  paragraphs: string[];
  imageUrl: string;
  imageAlt?: string;
  isReversed?: boolean;
  contactButtonText?: string;
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  paragraphs,
  imageUrl,
  imageAlt,
  contactButtonText,
  isReversed = false,
}) => {
  return (
    <section className="py-20 relative overflow-hidden ">
      <div className="max-w-6xl mx-auto px-4 md:px-12 relative z-10">
        <div
          className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 md:gap-24`}
        >
          {/* Visual/Image Container with 4:3 aspect ratio */}
          <div className="w-full md:w-5/12">
            <div className="relative group rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100/50">
              <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
                <Image
                  src={imageUrl}
                  alt={imageAlt || "Service Image"}
                  className="w-full h-full object-cover "
                  fill
                />
              </div>
            </div>
          </div>

          {/* Typography/Content */}
          <div className="w-full md:w-7/12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl  mb-8">{title}</h2>
            <div className="space-y-3">
              {paragraphs.map((text, idx) => (
                <p key={idx} className="text-muted-foreground leading-relaxed ">
                  {text}
                </p>
              ))}
            </div>
            <Button
              quoteBtn
              variant={"outline"}
              size={"lg"}
              className="mt-5 bg-muted"
            >
              <MessageCircle className="mr-2 h-5 w-5" />{" "}
              {contactButtonText || "Contact Us"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
