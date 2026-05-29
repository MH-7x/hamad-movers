"use client";
import { Loader, Send } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { SendMail } from "@/lib/FormSubmission";

const cities = [
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ajman",
  "Ras Al Khaimah",
  "Fujairah",
  "Umm Al Quwain",
  "Al Ain",
];

export type FormDataType = {
  name: string;
  email?: string;
  phone: string;
  date?: string;
  movingFrom: string;
  movingTo: string;
  message?: string;
};

export default function QuoteForm() {
  const [loading, setLoading] = useState(false);
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    setLoading(true);
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as FormDataType;

    if (!data.name || !data.phone || !data.movingFrom || !data.movingTo) {
      toast.error("Please fill in all required fields.", {
        action: {
          label: "close",
          onClick: () => {
            toast.dismiss();
          },
        },
      });
      setLoading(false);
      return;
    }
    try {
      const response = await SendMail({ data });

      if (!response.success) {
        toast.error(
          response.error || "Failed to send quote request. Please try again.",
          {
            action: {
              label: "close",
              onClick: () => {
                toast.dismiss();
              },
            },
          },
        );
        setLoading(false);
      } else {
        toast.success(
          "Quote request sent successfully! We'll get back to you within 10 minutes.",
          {
            action: {
              label: "ok",
              onClick: () => {
                toast.dismiss();
              },
            },
          },
        );
        setLoading(false);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "An unexpected error occurred. Please try again.",
        {
          action: {
            label: "close",
            onClick: () => {
              toast.dismiss();
            },
          },
        },
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "w-full bg-foreground border border-white/30 text-gray-300  placeholder-[#9ca3af]  px-4 py-[14px] text-[15px] focus:outline-none focus:border-primary transition-colors rounded-2xl";

  const selectArrowSvg = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'><path d='M7 10l5 5 5-5z'/></svg>`;

  return (
    <div className="bg-foreground mt-28 max-w-6xl mx-auto h-max flex items-center justify-center py-10 px-4 sm:p-12 relative md:rounded-4xl">
      {/* Dashed Top Fade Grid */}
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

      <div className="w-full max-w-[850px] z-10">
        {/* Header Section */}
        <div className="mb-8">
          <h3 className="text-primary text-[13px] font-bold tracking-[0.15em] uppercase mb-3">
            Book Now
          </h3>
          <h2 className="text-white md:text-4xl text-3xl  tracking-wide">
            Get A Free Moving Quote.
          </h2>
        </div>

        {/* Form Section */}
        <form className="flex flex-col gap-[14px]" onSubmit={handleSubmit}>
          {/* Row 1: Name & Email */}
          <div className="flex flex-col sm:flex-row gap-[14px]">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className={inputClasses}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={inputClasses}
              required
            />
          </div>

          {/* Row 2: Phone & Date */}
          <div className="flex flex-col sm:flex-row gap-[14px]">
            <input
              required
              name="phone"
              type="tel"
              placeholder="Phone"
              className={inputClasses}
            />
            {/* Using text type to match the exact placeholder look in the image, 
                though type="date" would be used functionally */}
            <input
              type="date"
              name="date"
              placeholder="Date"
              className={`${inputClasses} `}
            />
          </div>

          {/* Row 3: Select Dropdowns */}
          <div className="flex flex-col sm:flex-row gap-[14px] empty:text">
            <select
              required
              name="movingFrom"
              className={`${inputClasses} appearance-none cursor-pointer bg-no-repeat`}
              style={{
                backgroundImage: `url("${selectArrowSvg}")`,
                backgroundPosition: "right 1rem center",
                backgroundSize: "1.5em",
              }}
              defaultValue=""
            >
              <option value="" disabled hidden className="text-[#9ca3af]">
                Moving from
              </option>
              {cities.map((city, i) => (
                <option
                  key={i}
                  value={city}
                  className="text-foreground bg-white"
                >
                  {city}
                </option>
              ))}
            </select>

            <select
              required
              name="movingTo"
              className={`${inputClasses} appearance-none cursor-pointer bg-no-repeat`}
              style={{
                backgroundImage: `url("${selectArrowSvg}")`,
                backgroundPosition: "right 1rem center",
                backgroundSize: "1.5em",
              }}
              defaultValue=""
            >
              <option value="" disabled hidden className="text-gray-400">
                Moving to
              </option>
              {cities.map((city, i) => (
                <option
                  key={i}
                  value={city}
                  className="text-foreground bg-white"
                >
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Row 4: Message Textarea */}
          <div>
            <textarea
              placeholder="Message"
              name="message"
              rows={8}
              className={`${inputClasses} resize-y block`}
            ></textarea>
          </div>

          {/* Row 5: Submit Button */}
          <div className="flex md:justify-end justify-center mt-1">
            <Button disabled={loading} className="w-56" size={"lg"}>
              {loading ? (
                <>
                  {" "}
                  Sending <Loader className="animate-spin " />{" "}
                </>
              ) : (
                <>
                  {" "}
                  Send Now <Send />
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
