"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const footerData = [
  {
    title: "Solutions",
    links: [
      { name: "Enterprise Platforms", href: "/services" },
      { name: "CRM & ERP Solutions", href: "/services" },
      { name: "Cloud & DevOps", href: "/services" },
      { name: "AI & Automation", href: "/services" },
      { name: "SaaS Development", href: "/services" },
      { name: "System Integration", href: "/services" },
    ],
  },
  {
    title: "Marketing",
    links: [
      { name: "Performance Marketing", href: "/services" },
      { name: "Search Optimization (SEO)", href: "/services" },
      { name: "Social Media Management", href: "/services" },
      { name: "Paid Advertising", href: "/services" },
      { name: "Brand Strategy", href: "/services" },
      { name: "Content Marketing", href: "/services" },
    ],
  },
  {
    title: "Development",
    links: [
      { name: "Custom Software", href: "/services" },
      { name: "Web Applications", href: "/services" },
      { name: "Mobile App Development", href: "/services" },
      { name: "UI/UX Product Design", href: "/services" },
      { name: "Website Engineering", href: "/services" },
      { name: "Flutter Development", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
      { name: "About Us", href: "/about" },
      { name: "Case Studies", href: "/casestudies" },
      { name: "Contact Us", href: "/contact" },
      // { name: "Careers", href: "/contact" },
    ],
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <footer
      className="w-full bg-white px-6 py-6 relative overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.1) 1.5px, transparent 1.5px)`,
        backgroundSize: "30px 30px, cover",
        backgroundPosition: "center, center",
      }}
    >
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
          {footerData.map((section) => (
            <div key={section.title} className="flex flex-col space-y-6">
              <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                {section.title}
              </h3>
              <ul className="flex flex-col space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-gray-500 transition-all hover:text-black hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs font-semibold text-gray-400 hover:text-black transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs font-semibold text-gray-400 hover:text-black transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>

          <p className="text-xs font-medium text-gray-400">
            © {currentYear} Social Pulse Studios. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <Image
              src="/logos/logo.png"
              alt="Logo"
              width={120}
              height={50}
              className=" transition-all duration-300 object-contain h-12 w-auto"
              unoptimized
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
