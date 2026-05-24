import Image, { StaticImageData } from "next/image";
import { MessageSquareCheck, PhoneCall, Star } from "lucide-react";
import { Button } from "./ui/button";
import { ReactNode } from "react";
const LocHero = ({
  title,
  desc,
  image,
}: {
  title: ReactNode;
  desc: ReactNode;
  image: {
    src: StaticImageData;
    alt: string;
  };
}) => {
  return (
    <section className="h-screen w-full relative  md:-mt-3  flex items-center justify-center">
      {/* Soft Yellow Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(circle at bottom, #373642 10%, #373642 50%)
      `,
          opacity: 0.8,
        }}
      />
      <div
        className="absolute inset-0 "
        style={{
          backgroundImage: `
        linear-gradient(to right, #e7e5e421 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e421 1px, transparent 1px)
      `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,    
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
      <div className="max-w-4xl  mx-auto z-20 md:px-0 px-3 text-center">
        <div className="flex items-center justify-center gap-2 mt-4 bg-muted/80 w-max mx-auto px-2 py-1 rounded-full">
          <div className="flex gap-x-1 ">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star
                  key={i}
                  size={13}
                  className="text-yellow-600 fill-yellow-600"
                />
              ))}
          </div>
          <span className="text-foreground font-medium text-xs">4.9/5</span>
          <span className="text-foreground font-medium text-xs">
            based on 500+ reviews
          </span>
        </div>
        <h1 className="md:text-5xl text-3xl mt-3 text-center text-white">
          {title}
        </h1>
        <p className="text-gray-200 text-center mt-5 leading-relaxed md:text-base text-sm">
          {desc}
        </p>
        <div className="flex items-center gap-3 md:flex-row flex-col mt-5 justify-center">
          <Button size={"lg"} className="md:w-max w-full">
            <PhoneCall /> Call (055 1165993)
          </Button>
          <Button size={"lg"} className="md:w-max w-full" variant={"secondary"}>
            <MessageSquareCheck /> WhatsApp Us
          </Button>
        </div>
      </div>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        loading="eager"
        priority
        placeholder="blur"
        className="object-cover -z-10"
      />
    </section>
  );
};

export default LocHero;
