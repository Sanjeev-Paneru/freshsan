import Image from "next/image";
import image from "@/assets/products/cheese.jpg";
export default function OurStory() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left - Image Grid */}
          <div className="animate-slide-in-left relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={image}
                    alt="Farm"
                    className="h-full w-full object-cover transition-transform hover:scale-110"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={image}
                    alt="Cows"
                    className="h-full w-full object-cover transition-transform hover:scale-110"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={image}
                    alt="Milk"
                    className="h-full w-full object-cover transition-transform hover:scale-110"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={image}
                    alt="Products"
                    className="h-full w-full object-cover transition-transform hover:scale-110"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 h-48 w-48 rounded-full bg-accent/20 blur-3xl animate-pulse-soft"></div>
          </div>

          {/* Right - Story Content */}
          <div className="animate-slide-in-right delay-200">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Our Story
            </div>
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              A Legacy of{" "}
              <span className="text-gradient-primary">Quality & Trust</span>
            </h2>
            <div className="space-y-4 text-gray-600">
              <p className="text-lg">
                Founded in 1985 by the Johnson family, Fresh Dairy began as a
                small family-owned farm with just 10 cows and a simple mission:
                to provide the freshest, highest-quality dairy products to our
                local community.
              </p>
              <p>
                Over the past 35 years, we&apos;ve grown from that humble
                beginning into a trusted name serving over 50,000 families
                across the nation. But despite our growth, our commitment to
                quality, sustainability, and community has never wavered.
              </p>
              <p>
                Every bottle of milk, every block of cheese, and every spoonful
                of yogurt is crafted with the same care and attention to detail
                that our founders instilled from day one. We work directly with
                local organic farms, ensuring our cows are grass-fed, healthy,
                and happy.
              </p>
              <p>
                Today, Fresh Dairy stands as a testament to what&apos;s possible
                when you combine traditional farming values with modern
                sustainable practices. We&apos;re not just delivering
                dairy—we&apos;re delivering on a promise to our customers, our
                community, and our planet.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-900">
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="font-semibold">100% Organic</span>
              </div>
              <div className="flex items-center gap-2 text-gray-900">
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="font-semibold">Farm to Door Fresh</span>
              </div>
              <div className="flex items-center gap-2 text-gray-900">
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="font-semibold">Sustainable Practices</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
