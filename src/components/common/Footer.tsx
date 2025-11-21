import React from "react";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";
import Link from "next/link";
import { PiInstagramLogoBold } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import logo from "@/assets/logo/logo (2).png";
import { LuPhoneCall } from "react-icons/lu";

// Constants for better maintainability
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

// Subcomponents for better organization
const CompanyInfo = () => (
  <div className="md:w-1/3 mb-8 md:mb-0 md:mr-6">
    <Image
      src={logo}
      alt={`${FOOTER_DATA.company.name} Logo`}
      width={112}
      height={44}
      quality={100}
      className="mb-4"
      priority={false}
    />
    <p className="text-start max-w-[350px] mb-4">
      {FOOTER_DATA.company.description}
    </p>
    <div className="flex items-start md:items-center gap-6 mt-7">
      <div className="flex items-center justify-center bg-secondary rounded-full p-4">
        <LuPhoneCall className="text-white" size={39} aria-hidden="true" />
      </div>
      <div>
        <p className="font-bold text-gray-400 text-base">Customer Support</p>
        <a
          href={`tel:${FOOTER_DATA.company.phone.replace(/\s/g, "")}`}
          className="font-semibold text-secondary hover:underline"
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
  <div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="hover:text-secondary transition-colors"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const SocialLinks = () => (
  <div className="flex justify-center gap-4">
    {FOOTER_DATA.social.map(({ icon: Icon, href, label, size }) => (
      <Link
        key={label}
        href={href}
        className="w-10 h-10 flex items-center justify-center text-primary bg-white rounded-full hover:bg-primary hover:text-white transition-colors"
        aria-label={label}
      >
        <Icon size={size} aria-hidden="true" />
      </Link>
    ))}
  </div>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#6abcd3] text-primary">
      <div className="container">
        <div className="py-10 flex flex-col md:flex-row">
          <CompanyInfo />

          <nav
            className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full md:w-[70%]"
            aria-label="Footer navigation"
          >
            <FooterLinks title="Products" links={FOOTER_DATA.links.products} />
            <FooterLinks title="Support" links={FOOTER_DATA.links.support} />
            <FooterLinks title="Company" links={FOOTER_DATA.links.company} />
          </nav>
        </div>
      </div>

      <div className="text-sm py-2 bg-secondary text-white">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            © {currentYear} {FOOTER_DATA.company.name}. All rights reserved.
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
