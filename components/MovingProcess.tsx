import { cn } from "@/lib/utils";
import { Asterisk, CornerDownRight } from "lucide-react";
import { Button } from "./ui/button";

interface Process1Props {
  className?: string;
  cusProcess?: Array<{
    step: string;
    title: string;
    description: string;
  }>;
}

const MovingProcess = ({ className, cusProcess }: Process1Props) => {
  const process = [
    {
      step: "01",
      title: "Call or WhatsApp Us",
      description:
        "Tell us your move date, what you're moving, and where you're going. We'll give you a straightforward quote — no surprises.",
    },
    {
      step: "02",
      title: "We Send a Crew on Moving Day",
      description:
        "Our team arrives at the scheduled time with all the packing materials, tools, and a properly sized truck.",
    },
    {
      step: "03",
      title: "We Pack, Load, and Move",
      description:
        "Everything gets wrapped, loaded carefully, and transported. We drive it directly to your new location.",
    },
    {
      step: "04",
      title: "Unloading and Setup",
      description:
        "We unload everything at your destination and place furniture where you want it. If items were disassembled, we put them back together.",
    },
  ];

  return (
    <section className={cn("mt-28", className)}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-6 lg:gap-20">
          <div className="top-10 col-span-2 h-fit w-fit gap-3 space-y-7 py-8 lg:sticky">
            <div className="relative w-fit md:text-4xl text-3xl">
              {" "}
              <h2 className="w-fit">
                How Our Moving{" "}
                <span className="text-primary">Process Works</span>
              </h2>
              <Asterisk className="absolute -top-2 -right-2 size-5 text-muted md:size-10 lg:-right-14" />
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              Enjoy a seamless and stress-free moving experience. From packing
              to setup, our dedicated team handles every step with care and
              professionalism.
            </p>

            <Button
              variant="ghost"
              className="flex items-center justify-start gap-2"
            >
              <CornerDownRight className="text-orange-500" />
              Ready to Book? Call +971 55 116 5993
            </Button>
          </div>
          <ul className="relative col-span-4 w-full lg:pl-22">
            {(cusProcess ? cusProcess : process).map((step, index) => (
              <li
                key={index}
                className="relative flex flex-col justify-between gap-10 border-t py-8 md:flex-row lg:py-10"
              >
                <Illustration className="absolute top-4 right-0 " />

                <div className="flex size-12 items-center justify-center bg-muted px-4 py-1 tracking-tighter rounded-2xl">
                  0{index + 1}
                </div>
                <div className="">
                  <h3 className="mb-4 text-2xl font-semibold tracking-tighter ">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MovingProcess;

const Illustration = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="0.607422"
        y1="2.57422"
        x2="21.5762"
        y2="2.57422"
        stroke="#ff9500"
        strokeWidth="4"
      />
      <line
        x1="19.5762"
        y1="19.624"
        x2="19.5762"
        y2="4.57422"
        stroke="#ff9500"
        strokeWidth="4"
      />
    </svg>
  );
};
