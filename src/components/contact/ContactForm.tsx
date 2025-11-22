"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-xl md:p-8 lg:p-10">
      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl">
          Send Us a Message
        </h2>
        <p className="text-gray-600">
          Fill out the form below and we&apos;ll get back to you within 24
          hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="John Doe"
          />
        </div>

        {/* Email & Phone */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="+1 (555) 000-0000"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Subject <span className="text-red-500">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="">Select a subject</option>
            <option value="general">General Inquiry</option>
            <option value="subscription">Subscription Support</option>
            <option value="delivery">Delivery Issue</option>
            <option value="quality">Product Quality</option>
            <option value="billing">Billing Question</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Tell us how we can help you..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="
    group relative flex items-center justify-center gap-3
    bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700
    px-5 py-2 md:px-5 md:py-3
    text-white text-lg md:text-xl font-semibold
    rounded-full shadow-lg hover:shadow-2xl
    transition-all duration-300 hover:scale-105
    focus:ring-4 focus:ring-blue-300
    overflow-hidden
  "
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {isSubmitting ? (
              <>
                <div className="spinner h-5 w-5 border-2"></div>
                Sending...
              </>
            ) : (
              <>
                Send Message
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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </>
            )}
          </span>
        </button>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="animate-scale-in rounded-lg bg-green-50 border border-green-200 p-4 text-green-800">
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">
                Thank you! Your message has been sent successfully.
              </span>
            </div>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="animate-scale-in rounded-lg bg-red-50 border border-red-200 p-4 text-red-800">
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">
                Oops! Something went wrong. Please try again.
              </span>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
