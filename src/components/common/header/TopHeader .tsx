import Link from "next/link";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { HiOutlinePrinter } from "react-icons/hi";

export default function TopHeader() {
  return (
    <section id="top-header" className="w-full bg-primary text-white py-2">
      <div className="container  mx-auto">
        <div className="flex justify-center md:justify-between items-center flex-wrap">
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-secondary " />
            <span className="text-sm hover:underline">
              Nuwakot, Belkotgadhi-13
            </span>
          </div>

          <div className=" flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-2">
              <HiOutlinePrinter className="text-secondary" />
              <Link href="/contact" className="text-sm hover:underline">
                +1 (234) 567-890
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <FaEnvelope className="text-secondary" />
              <Link href="/contact" className="text-sm hover:underline">
                info@FreshSan.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
