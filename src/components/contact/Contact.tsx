import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-orange-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-16 md:py-24 lg:py-32">
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="animate-slide-in-left mb-4 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
              Get In <span className="text-gradient-secondary">Touch</span>
            </h1>
            <p className="animate-slide-in-right delay-200 text-lg text-gray-600 md:text-xl">
              Have questions? We&apos;d love to hear from you. Send us a message
              and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="pointer-events-none absolute left-10 top-20 h-32 w-32 animate-float rounded-full bg-orange-300/30 blur-3xl"></div>
        <div className="pointer-events-none absolute bottom-20 right-10 h-40 w-40 animate-float-slow rounded-full bg-amber-300/30 blur-3xl"></div>
      </section>

      {/* Contact Info Cards */}
      <section className="container relative z-20 mx-auto -mt-16 px-4 pb-12">
        <ContactInfo />
      </section>

      {/* Contact Form + Map Section */}
      <section className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact Form */}
          <div className="animate-slide-in-left order-2 lg:order-1">
            <ContactForm />
          </div>

          {/* Map + Additional Info */}
          <div className="animate-slide-in-right delay-200 order-1 space-y-6 lg:order-2">
            <ContactMap />

            {/* Business Hours */}
            <div className="rounded-2xl bg-white p-6 shadow-lg hover-lift md:p-8">
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                Business Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-semibold text-gray-900">
                    8:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-semibold text-gray-900">
                    9:00 AM - 4:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold text-red-500">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group animate-scale-in rounded-xl bg-white p-6 shadow-md hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900 list-none">
                  <span className="pr-4">{faq.question}</span>
                  <span className="ml-4 shrink-0 text-orange-600 transition-transform duration-300 group-open:rotate-45">
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
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const faqs = [
  {
    question: "What are your delivery hours?",
    answer:
      "We deliver from Monday to Saturday between 6:00 AM and 10:00 AM. Sunday deliveries are available in select areas.",
  },
  {
    question: "How can I modify my subscription?",
    answer:
      "You can modify your subscription anytime through your account dashboard or by contacting our customer support team.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, debit cards, UPI payments, and cash on delivery for your convenience.",
  },
  {
    question: "Do you offer organic products?",
    answer:
      'Yes! We offer a wide range of certified organic dairy products. Look for the "Organic" label in our product catalog.',
  },
  {
    question: "How do I report a quality issue?",
    answer:
      "Please contact us immediately at our customer support number or email. We take quality seriously and will resolve any issues promptly.",
  },
];
