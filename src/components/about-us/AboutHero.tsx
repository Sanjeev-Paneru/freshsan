import Image from "next/image";
import Ll from "@/assets/banner/Are.jpg";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32 lg:py-40">
      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              🥛 Est. 1985
            </div>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
              Delivering{" "}
              <span className="text-gradient-secondary">Freshness</span> For
              Over 35 Years
            </h1>
            <p className="mb-8 text-lg text-gray-600 md:text-xl">
              From our family farm to your table, were committed to providing
              the highest quality dairy products with sustainability and care at
              the heart of everything we do.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">100% Organic</p>
                  <p className="font-bold text-gray-900">Certified Farms</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Fresh Daily</p>
                  <p className="font-bold text-gray-900">Before 8 AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="animate-slide-in-right delay-200 relative">
            <div className="relative">
              {/* Main Image */}
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={Ll}
                  alt="Fresh dairy farm"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl animate-float lg:-left-12">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary text-2xl font-bold text-white">
                    50K+
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Happy Customers</p>
                    <p className="font-bold text-gray-900">Nationwide</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-secondary/20 blur-2xl animate-pulse-soft"></div>
              <div className="absolute -left-8 top-1/2 h-32 w-32 rounded-full bg-accent/20 blur-3xl animate-float-slow"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="pointer-events-none absolute left-0 top-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="pointer-events-none absolute right-0 bottom-20 h-56 w-56 rounded-full bg-secondary/5 blur-3xl"></div>
    </section>
  );
}
