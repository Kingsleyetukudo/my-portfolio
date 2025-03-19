import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react"; // Update import
import ReviewCard from "./ReviewCard";
import people1 from "../images/people-1.jpg";
import people2 from "../images/people-2.jpg";
import people3 from "../images/people-3.jpg";
import people4 from "../images/people-4.jpg";
import people5 from "../images/people-5.jpg";
import people6 from "../images/people-6.jpg";

const reviews = [
  {
    content:
      "Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.",
    name: "Sophia Ramirez",
    imgSrc: people1,
    company: "PixelForge",
  },
  {
    content:
      "Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.",
    name: "Ethan Caldwell",
    imgSrc: people2,
    company: "NexaWave",
  },
  {
    content:
      "Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.",
    name: "Liam Bennett",
    imgSrc: people3,
    company: "CodeCraft",
  },
  {
    content:
      "Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.",
    name: "Noah Williams",
    imgSrc: people4,
    company: "BrightWeb",
  },
  {
    content:
      "Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.",
    name: "Ava Thompson",
    imgSrc: people5,
    company: "TechMosaic",
  },
  {
    content:
      "Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.",
    name: "Jonathan",
    imgSrc: people6,
    company: "Skyline Digital",
  },
];

const Review = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // Navigation functions
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="reviews" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-18 reveal-up">What our customers say</h2>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex gap-3">
            {reviews.map(({ content, name, imgSrc, company }, index) => (
              <div className="embla__slide" key={index}>
                <ReviewCard
                  content={content}
                  name={name}
                  imgSrc={imgSrc}
                  company={company}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-4 mt-4">
          <button
            onClick={scrollPrev}
            className="bg-zinc-800 hover:bg-zinc-600 cursor-pointer text-white px-4 py-2 rounded-xl"
          >
            ← Prev
          </button>
          <button
            onClick={scrollNext}
            className="bg-zinc-800 hover:bg-zinc-600 cursor-pointer text-white px-4 py-2 rounded-xl"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Review;
