"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const images = [
  {
    fileName: "/gallery/hamad-movers-home-villa-moving-dubai.jpg",
    altText:
      "Hamad Movers professional movers carrying furniture outside a luxury Dubai villa with Burj Khalifa skyline in background",
  },
  {
    fileName: "/gallery/hamad-movers-packing-wrapping-service-dubai-villa.jpg",
    altText:
      "Hamad Movers packing team wrapping furniture with bubble wrap inside a modern Dubai villa living room",
  },
  {
    fileName:
      "/gallery/hamad-movers-professional-packing-highrise-apartment-dubai.jpg",
    altText:
      "Hamad Movers team packing and boxing household items inside a modern high-rise apartment in Dubai",
  },
  {
    fileName: "/gallery/hamad-movers-furniture-assembly-service-dubai.jpg",
    altText:
      "Hamad Movers technician assembling a wardrobe inside a modern Dubai villa bedroom",
  },
  {
    fileName: "/gallery/hamad-movers-furniture-assembly-apartment-dubai.jpg",
    altText:
      "Hamad Movers professional assembling a modular sofa set in a newly moved-in Dubai high-rise apartment",
  },
  {
    fileName: "/gallery/hamad-movers-residential-moving-highrise-dubai.jpg",
    altText:
      "Hamad Movers team loading furniture into moving truck outside a modern high-rise residential building in Dubai",
  },
  {
    fileName: "/gallery/hamad-movers-long-distance-moving-uae-highway.jpg",
    altText:
      "Hamad Movers branded truck driving on a UAE desert highway during an inter-emirate relocation",
  },
  {
    fileName: "/gallery/hamad-movers-team-moving-truck-burj-khalifa-dubai.jpg",
    altText:
      "Hamad Movers professional moving team standing in front of branded truck with Burj Khalifa in background Dubai",
  },
];

export function MovingGallery() {
  return (
    <section className="w-full py-12 ">
      <div className="container px-4 mx-auto">
        <Carousel
          plugins={[
            Autoplay({
              delay: 1500,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {images.map((src, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="overflow-hidden rounded-xl border bg-muted group cursor-pointer">
                  <AspectRatio ratio={3 / 4}>
                    <Image
                      src={src.fileName}
                      fill
                      alt={`${src.altText} - Hamad Movers Dubai`}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Subtle Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </AspectRatio>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows positioned for a clean look */}
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0 h-12 w-12 border-2" />
            <CarouselNext className="static translate-y-0 h-12 w-12 border-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
