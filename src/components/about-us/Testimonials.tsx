"use client";

import Image from "next/image";
import { useState } from "react";
import img1 from "@/assets/products/yogurd copy.jpg";
import img2 from "@/assets/products/organic milk.jpg";
import img3 from "@/assets/products/milk.jpg";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Jennifer Smith",
      role: "Happy Customer",
      image: img1,
      content:
        "Fresh Dairy has completely changed how I think about dairy products. The quality is unmatched, and knowing it's organic and sustainable makes it even better!",
      rating: 5,
    },
    {
      name: "Robert Wilson",
      role: "Subscriber Since 2018",
      image: img2,
      content:
        "The convenience of home delivery combined with exceptional quality is unbeatable. My family loves every product, especially the yogurt!",
      rating: 5,
    },
    {
      name: "Maria Garcia",
      role: "Health Enthusiast",
      image: img3,
      content:
        "As someone who cares deeply about what goes into my body, Fresh Dairy gives me peace of mind. Pure, organic, and delicious!",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Testimonials
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            What Our <span className="text-gradient-secondary">Customers</span>{" "}
            Say
          </h2>
          <p className="text-lg text-gray-600">
            Don&apos;t just take our word for it—hear from our happy customers
          </p>
        </div>

        {/* Desktop View - Grid */}
        <div className="hidden gap-8 md:grid md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`animate-scale-in delay-${
                index * 100
              } rounded-2xl bg-white p-8 shadow-lg hover-lift`}
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="mb-6 text-gray-600 italic">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="relative md:hidden">
          <div className="overflow-hidden rounded-2xl bg-white p-8 shadow-xl">
            {/* Stars */}
            <div className="mb-4 flex justify-center gap-1">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <svg
                  key={i}
                  className="h-6 w-6 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Content */}
            <p className="mb-6 text-center text-lg text-gray-600 italic">
              &quot;{testimonials[currentIndex].content}&quot;
            </p>

            {/* Author */}
            <div className="flex flex-col items-center gap-4">
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="h-16 w-16 rounded-full object-cover"
              />
              <div className="text-center">
                <p className="font-bold text-gray-900">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prevTestimonial}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-all hover:bg-primary-dark hover-lift"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-all hover:bg-primary-dark hover-lift"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
