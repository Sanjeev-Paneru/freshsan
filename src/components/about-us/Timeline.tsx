import Image from "next/image";
import React from "react";

// Import local images
import img1985 from "@/assets/products/butter.jpg";
import img1995 from "@/assets/products/cheese.jpg";
import img2005 from "@/assets/products/cottage cheese.jpg";
import img2015 from "@/assets/products/cream milk.jpg";
import img2020 from "@/assets/products/ice cream.jpg";
import img2024 from "@/assets/products/organic milk.jpg";

export default function Timeline() {
  const milestones = [
    {
      year: "1985",
      title: "The Beginning",
      description:
        "Started with a small family farm and 10 cows, delivering milk to 50 local families.",
      image: img1985,
    },
    {
      year: "1995",
      title: "Going Organic",
      description:
        "Transitioned to 100% organic farming practices and received USDA Organic certification.",
      image: img1995,
    },
    {
      year: "2005",
      title: "Regional Expansion",
      description:
        "Expanded operations to serve 5 states, reaching 10,000 happy customers.",
      image: img2005,
    },
    {
      year: "2015",
      title: "Tech Innovation",
      description:
        "Launched our mobile app and subscription service for convenient doorstep delivery.",
      image: img2015,
    },
    {
      year: "2020",
      title: "Sustainability Award",
      description:
        "Received the National Sustainability Award for our green farming initiatives.",
      image: img2020,
    },
    {
      year: "2024",
      title: "Future Forward",
      description:
        "Serving 50,000+ families nationwide with carbon-neutral delivery fleet.",
      image: img2024,
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Our Journey
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            35 Years of{" "}
            <span className="text-gradient-primary">Excellence</span>
          </h2>
          <p className="text-lg text-gray-600">
            From a small family farm to a nationwide trusted brand
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-linear-to-b from-primary via-accent to-secondary md:block lg:left-1/2"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`animate-slide-in-${
                  index % 2 === 0 ? "left" : "right"
                } delay-${index * 100} relative`}
              >
                <div
                  className={`flex flex-col gap-8 md:flex-row md:items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 md:pl-16 lg:pl-0">
                    <div
                      className={`rounded-2xl bg-white p-6 shadow-lg hover-lift md:p-8 ${
                        index % 2 === 0 ? "lg:mr-12" : "lg:ml-12"
                      }`}
                    >
                      <div className="mb-3 inline-block rounded-full bg-gradient-primary px-4 py-1 text-sm font-bold text-white">
                        {milestone.year}
                      </div>
                      <h3 className="mb-3 text-2xl font-bold text-gray-900">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-8 hidden h-16 w-16 md:block lg:left-1/2 lg:-translate-x-1/2">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-primary shadow-lg">
                      <div className="h-8 w-8 rounded-full bg-white"></div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="flex-1 md:pr-16 lg:pr-0">
                    <div className="overflow-hidden rounded-2xl shadow-lg">
                      <Image
                        src={milestone.image}
                        alt={milestone.title}
                        className="h-64 w-full object-cover transition-transform hover:scale-110"
                        layout="responsive"
                        width={400}
                        height={300}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
