import React from "react";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";
import { PiInstagramLogoBold } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { Milk, Droplets, Heart } from "lucide-react";

// Footer Data
const FOOTER_DATA = {
  company: {
    name: "FreshSan Dairy",
    description:
      "Welcome to FreshSan Dairy, where we provide the freshest and highest-quality dairy products to meet your daily needs.",
    phone: "+ 01 234 567 89",
  },
  links: {
    products: [
      { label: "Organic Milk", href: "#" },
      { label: "Flavored Milk", href: "#" },
      { label: "Fresh Yogurt", href: "#" },
      { label: "Cottage Cheese", href: "#" },
      { label: "Butter", href: "#" },
      { label: "Whey Protein", href: "#" },
    ],
    support: [
      { label: "Help Center", href: "#" },
      { label: "Ticket Support", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Forum Community", href: "#" },
    ],
    company: [
      { label: "About Us", href: "#" },
      { label: "Farmers", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Article & News", href: "#" },
      { label: "Environment & Energy", href: "#" },
    ],
  },
  social: [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: PiInstagramLogoBold, href: "#", label: "Instagram" },
    { icon: FaXTwitter, href: "#", label: "Twitter" },
    { icon: FaGooglePlusG, href: "#", label: "Google Plus", size: 20 },
  ],
};

const CompanyInfo = () => (
  <div className="w-full lg:w-1/3 space-y-4">
    {/* Logo - Optimized Size */}
    <div className="flex items-center gap-3 mb-4">
      <div className="bg-white rounded-xl p-2 shadow-lg">
        <Milk size={32} className="text-blue-600" />
      </div>
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">
          {FOOTER_DATA.company.name}
        </h2>
        <p className="text-yellow-300 text-xs font-medium">
          Fresh & Pure Dairy
        </p>
      </div>
    </div>

    {/* Description */}
    <p className="text-white/90 text-sm sm:text-base leading-relaxed">
      {FOOTER_DATA.company.description}
    </p>

    {/* Contact Card */}
    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-xl p-4 hover:bg-white/20 transition-all duration-300 shadow-lg border border-white/20">
      <div className="flex items-center justify-center bg-linear-to-br from-yellow-400 to-yellow-500 rounded-full p-3 shrink-0 shadow-md">
        <LuPhoneCall className="text-blue-600" size={22} aria-hidden="true" />
      </div>
      <div>
        <p className="font-semibold text-yellow-300 text-xs uppercase tracking-wide">
          Customer Support
        </p>
        <a
          href={`tel:${FOOTER_DATA.company.phone.replace(/\s/g, "")}`}
          className="font-bold text-white text-lg hover:text-yellow-300 transition-colors duration-200"
        >
          {FOOTER_DATA.company.phone}
        </a>
      </div>
    </div>
  </div>
);

const FooterLinks = ({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) => (
  <div className="w-full">
    <h3 className="text-lg sm:text-xl font-bold mb-4 text-white relative inline-block">
      {title}
      <span className="absolute bottom-0 left-0 w-12 h-1 bg-yellow-400 rounded-full"></span>
    </h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="text-white/90 text-sm sm:text-base hover:text-yellow-300 transition-all duration-200 inline-flex items-center group"
          >
            <span className="w-0 h-0.5 bg-yellow-300 group-hover:w-4 transition-all duration-200 mr-0 group-hover:mr-2"></span>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialLinks = () => (
  <div className="flex justify-center gap-3">
    {FOOTER_DATA.social.map(({ icon: Icon, href, label, size }) => (
      <a
        key={label}
        href={href}
        className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center text-blue-600 bg-white rounded-full hover:bg-yellow-400 hover:text-blue-700 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl"
        aria-label={label}
      >
        <Icon size={size || 20} aria-hidden="true" />
      </a>
    ))}
  </div>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-linear-to-br from-blue-500 via-blue-600 to-cyan-600">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Floating background icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Milk
          size={80}
          className="absolute top-10 left-[5%] text-white/5 animate-float"
        />
        <Droplets
          size={100}
          className="absolute top-20 right-[10%] text-white/5 animate-float-delayed"
        />
        <Heart
          size={70}
          className="absolute bottom-20 left-[30%] text-white/5 animate-float"
        />
        <Milk
          size={90}
          className="absolute top-[40%] right-[15%] text-white/5 animate-float-delayed"
        />
        <Droplets
          size={60}
          className="absolute bottom-[30%] left-[15%] text-white/5 animate-float"
        />
      </div>

      {/* Footer Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <CompanyInfo />

          <nav
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 w-full lg:w-2/3"
            aria-label="Footer navigation"
          >
            <FooterLinks title="Products" links={FOOTER_DATA.links.products} />
            <FooterLinks title="Support" links={FOOTER_DATA.links.support} />
            <FooterLinks title="Company" links={FOOTER_DATA.links.company} />
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative bg-blue-700/50 backdrop-blur-md border-t border-white/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/90 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} {FOOTER_DATA.company.name}. All rights reserved. |
              Made with <Heart size={14} className="inline text-red-400" /> for
              fresh dairy
            </p>
            <SocialLinks />
          </div>
        </div>
      </div>

      {/* Floating animations */}
      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) rotate(0deg); 
            opacity: 0.5;
          }
          50% { 
            transform: translateY(-30px) rotate(10deg); 
            opacity: 0.8;
          }
        }
        @keyframes float-delayed {
          0%, 100% { 
            transform: translateY(0) rotate(0deg);
            opacity: 0.4;
          }
          50% { 
            transform: translateY(-25px) rotate(-8deg);
            opacity: 0.7;
          }
        }
        .animate-float { 
          animation: float 10s ease-in-out infinite; 
        }
        .animate-float-delayed { 
          animation: float-delayed 12s ease-in-out infinite 2s; 
        }
      `}</style>
    </footer>
  );
}
