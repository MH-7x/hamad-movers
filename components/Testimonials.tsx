"use client";
import { Star } from "lucide-react";

import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import GoogleReviewCard from "./GoogleReviewCard";

const googleReviews = [
  {
    name: "Omar Al-Farsi",
    time: "2 weeks ago",
    star: 5,
    review:
      "Hamad Movers and Packers made our relocation from Downtown Dubai to Arabian Ranches completely stress-free. The packing crew was punctual and handled our fragile items with great care.",
    image: "/ava/32.jpg",
  },
  {
    name: "Sarah Jenkins",
    time: "1 month ago",
    star: 5,
    review:
      "Fantastic experience with this team for my studio move in Sharjah. Everything was wrapped securely, and they finished the job much faster than quoted.",
    image: "/ava/44.jpg",
  },
  {
    name: "Mohammed Tariq",
    time: "4 days ago",
    star: 5,
    review:
      "Highly recommend Hamad Movers and Packers if you need a reliable team. They dismantled and reassembled my heavy bedroom furniture perfectly without a single scratch.",
    image: "/ava/86.jpg",
  },
  {
    name: "Elena Rodriguez",
    time: "3 months ago",
    star: 5,
    review:
      "I was worried about moving my home office, but they sorted everything out smoothly. The pricing was transparent with absolutely no hidden fees at the end.",
    image: "/ava/68.jpg",
  },
  {
    name: "Hassan K.",
    time: "1 week ago",
    star: 5,
    review:
      "Moved my family from Abu Dhabi to Dubai last weekend and the service was excellent. The guys were polite, hardworking, and placed all boxes exactly where requested.",
    image: "/ava/22.jpg",
  },
  {
    name: "Fatima Al-Mansoori",
    time: "5 days ago",
    star: 5,
    review:
      "Honestly the best moving company I've used in the UAE. Hamad Movers and Packers packed up my entire kitchen in an hour and nothing was broken during transit.",
    image: "/ava/90.jpg",
  },
  {
    name: "David Wright",
    time: "2 months ago",
    star: 5,
    review:
      "Great communication from the booking process right down to the final delivery. The team was super careful with our bulky sofa on the narrow stairs.",
    image: "/ava/54.jpg",
  },
  {
    name: "Aisha S.",
    time: "6 days ago",
    star: 5,
    review:
      "Booked them for a last-minute move in Ajman and they really saved the day. Professional service and very reasonable rates for the quality of work.",
    image: "/ava/29.jpg",
  },
  {
    name: "Michael Chen",
    time: "3 weeks ago",
    star: 5,
    review:
      "We used Hamad Movers and Packers for our corporate office relocation in Business Bay. They were highly organized and minimized our downtime completely.",
    image: "/ava/11.jpg",
  },
  {
    name: "Zainab Abbas",
    time: "2 months ago",
    star: 5,
    review:
      "A truly professional and hassle-free moving experience from start to finish. I will definitely be recommending Hamad Movers and Packers to all my friends and family.",
    image: "/ava/19.jpg",
  },
];

const Testimonials = ({
  cusReviews,
}: {
  cusReviews?: typeof googleReviews;
}) => (
  <section className="mt-16 max-w-6xl md:px-0 px-3 pb-10 mx-auto">
    <div className="flex items-center justify-center text-center flex-col">
      <h2 className=" text-foreground md:text-4xl text-3xl">
        What Our <span className="text-primary">Customers Say</span>
      </h2>
      <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mt-5">
        Thousands of families and businesses across the UAE have trusted us with
        their moves. Here&apos;s what some of them have to say.
      </p>
      <div className="flex items-center justify-center gap-2 mt-4">
        <div className="flex gap-x-1 ">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star
                key={i}
                size={18}
                className="text-yellow-500 fill-yellow-500"
              />
            ))}
        </div>
        <span className="text-foreground font-medium">4.9/5</span>
        <span className="text-foreground font-medium">
          based on 500+ reviews
        </span>
      </div>
    </div>

    <Carousel
      plugins={[
        Autoplay({
          delay: 2500,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="max-w-5xl mx-auto mt-10"
    >
      <CarouselContent>
        {(cusReviews ? cusReviews : googleReviews).map((review, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/3 select-none"
          >
            <GoogleReviewCard review={{ ...review }} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  </section>
);

export default Testimonials;
