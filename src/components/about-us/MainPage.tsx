import type { Metadata } from "next";
import AboutHero from "./AboutHero";
import AboutStats from "./AboutStats";
import OurStory from "./OurStory";
import TeamSection from "./TeamSection";
import Timeline from "./Timeline";
import Testimonials from "./Testimonials";

export const metadata: Metadata = {
  title: "About Us | Fresh Dairy",
  description:
    "Learn about our journey, values, and commitment to delivering the freshest dairy products to your doorstep.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <AboutHero />

      {/* Stats Section */}
      <AboutStats />

      {/* Our Story */}
      <OurStory />

      {/* Timeline/Journey */}
      <Timeline />

      {/* Team Section */}
      <TeamSection />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-primary py-16 md:py-24">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Join Our Journey
            </h2>
            <p className="mb-8 text-lg text-white/90 md:text-xl">
              Experience the difference of fresh, quality dairy products
              delivered with care to your doorstep every day.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="/products"
                className="group rounded-lg bg-white px-8 py-4 font-semibold text-primary shadow-lg transition-all hover:shadow-xl hover-lift"
              >
                <span className="flex items-center justify-center gap-2">
                  Explore Products
                  <svg
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </a>
              <a
                href="/contact"
                className="group rounded-lg border-2 border-white bg-transparent px-8 py-4 font-semibold text-white transition-all hover:bg-white hover:text-primary"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="pointer-events-none absolute left-0 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl animate-float"></div>
        <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl animate-float-slow"></div>
      </section>
    </main>
  );
}
