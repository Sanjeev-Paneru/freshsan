import Image from "next/image";
import React from "react";
import image from "@/assets/products/butter.jpg";
import image1 from "@/assets/products/cream milk.jpg";
import image2 from "@/assets/products/milk.jpg";
import image3 from "@/assets/products/yogurd.jpg";

export default function TeamSection() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: image,
      bio: "Third-generation dairy farmer with a passion for sustainable agriculture.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image: image1,
      bio: "Ensuring quality and efficiency in every step of our production process.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Emily Rodriguez",
      role: "Chief Sustainability Officer",
      image: image2,
      bio: "Leading our environmental initiatives and carbon-neutral goals.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "David Thompson",
      role: "Head of Quality Assurance",
      image: image3,
      bio: "Maintaining the highest standards across all our dairy products.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ];

  return (
    <section className="bg-gradient-cream py-16 md:py-24">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Our Team
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Meet the <span className="text-gradient-secondary">People</span>{" "}
            Behind Fresh Dairy
          </h2>
          <p className="text-lg text-gray-600">
            Passionate individuals dedicated to bringing you the best dairy
            products
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <div
              key={index}
              className={`animate-scale-in delay-${
                index * 100
              } group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl hover-lift`}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-110"
                  layout="fill"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>

                {/* Social Links */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                  <a
                    href={member.social.linkedin}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-primary transition-all hover:bg-white"
                  >
                    {/* LinkedIn SVG */}
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href={member.social.twitter}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-primary transition-all hover:bg-white"
                  >
                    {/* Twitter SVG */}
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="mb-3 text-sm font-semibold text-primary">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
