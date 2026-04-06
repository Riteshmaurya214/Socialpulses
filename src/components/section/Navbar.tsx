"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import {
  Menu, X, ChevronRight, ChevronDown,
  Code, Layers, Smartphone, Database,
  Cloud, Cpu, Rocket, Network, Palette, Globe,
  TrendingUp, Search, Share2, Megaphone, Target,
  FileText, Mail, MousePointerClick, Users, BarChart,
  Monitor, Braces, Settings, Bot, Zap
} from "lucide-react";
import Image from "next/image";
import BookCallButton from "../ui/BookCallButton";

type Service = { id: string; title: string; icon: React.ElementType };
type SubCategory = { id: string; title: string; icon: React.ElementType; services: Service[] };
type Category = { id: string; title: string; subtitle: string; icon: React.ElementType; subCategories: SubCategory[] };

const menuData: Category[] = [
  {
    id: "IT", title: "IT Services", subtitle: "Custom Software & Engineering", icon: Monitor,
    subCategories: [
      {
        id: "web-dev", title: "Web Development", icon: Globe,
        services: [
          { id: "laravel-development", title: "Laravel Development", icon: Braces },
          { id: "java-development", title: "Java Development", icon: Braces },
          { id: "php-development", title: "PHP Development", icon: Braces },
          { id: "python-development", title: "Python Development", icon: Braces },
          { id: "angular-development", title: "Angular Development", icon: Braces },
          { id: "vue-js-development", title: "Vue Js Development", icon: Braces },
          { id: "node-js-development", title: "Node Js Development", icon: Braces },
          { id: "react-js-development", title: "React Js Development", icon: Braces },
          { id: "website-development-engineering", title: "Website Development & Engineering", icon: Globe },
        ],
      },
      {
        id: "app-dev", title: "App Development", icon: Smartphone,
        services: [
          { id: "flutter-app-development", title: "Flutter App Development", icon: Smartphone },
          { id: "android-app-development", title: "Android App Development", icon: Smartphone },
          { id: "ios-app-development", title: "iOS App Development", icon: Smartphone },
          { id: "react-native-app-development", title: "React Native App Development", icon: Smartphone },
        ],
      },
      {
        id: "ai-dev", title: "AI Development", icon: Cpu,
        services: [
          { id: "ai-developement", title: "AI Development", icon: Bot },
          { id: "generative-ai-development", title: "Generative AI Development", icon: Bot },
          { id: "ai-agent-development", title: "AI Agent Development", icon: Bot },
          { id: "ai-chatbot-development", title: "AI Chatbot", icon: Bot },
          { id: "ml-development", title: "ML Development", icon: Bot },
        ],
      },
      {
        id: "enterprise", title: "Enterprise Solutions", icon: Layers,
        services: [
          { id: "custom-software-development", title: "Custom Software Development", icon: Code },
          { id: "enterprise-platform-development", title: "Enterprise Platform Development", icon: Layers },
          { id: "saas-product-development", title: "SaaS Product Development", icon: Rocket },
          { id: "crm-erp-solutions", title: "CRM & ERP Solutions", icon: Database },
          { id: "system-integration", title: "System Integration", icon: Network },
          { id: "cloud-solutions-devops", title: "Cloud Solutions & DevOps", icon: Cloud },
        ],
      },
      {
        id: "design-consulting", title: "Design & Consulting", icon: Palette,
        services: [
          { id: "ui-ux-product-design", title: "UI/UX Product Design", icon: Palette },
          { id: "it-consulting-service", title: "IT Consulting Service", icon: Settings },
        ],
      },
    ],
  },
  {
    id: "Marketing", title: "Marketing Services", subtitle: "Growth & Brand Positioning", icon: TrendingUp,
    subCategories: [
      {
        id: "performance", title: "Performance Marketing", icon: TrendingUp,
        services: [
          { id: "performance-marketing", title: "Performance Marketing", icon: TrendingUp },
          { id: "paid-advertising", title: "Paid Advertising (Meta, Google, LinkedIn)", icon: Megaphone },
          { id: "lead-generation-campaigns", title: "Lead Generation Campaigns", icon: Users },
          { id: "conversion-rate-optimization", title: "Conversion Rate Optimization", icon: MousePointerClick },
        ],
      },
      {
        id: "seo-content", title: "SEO & Content", icon: Search,
        services: [
          { id: "seo", title: "Search Engine Optimization (SEO)", icon: Search },
          { id: "content-marketing", title: "Content Marketing", icon: FileText },
        ],
      },
      {
        id: "social-brand", title: "Social Media & Branding", icon: Share2,
        services: [
          { id: "social-media-management", title: "Social Media Management", icon: Share2 },
          { id: "brand-strategy-positioning", title: "Brand Strategy & Positioning", icon: Target },
        ],
      },
      {
        id: "automation-analytics", title: "Automation & Analytics", icon: Zap,
        services: [
          { id: "email-marketing-funnel-automation", title: "Email Marketing & Funnel Automation", icon: Mail },
          { id: "analytics-growth-strategy", title: "Analytics & Data-Driven Growth Strategy", icon: BarChart },
        ],
      },
    ],
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOfferingsOpen, setIsOfferingsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("IT");
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileOfferingsOpen, setMobileOfferingsOpen] = useState(false);
  const [mobileCat, setMobileCat] = useState<string | null>(null);
  const [mobileSubCat, setMobileSubCat] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentCategory = menuData.find((c) => c.id === activeCategory);
  const currentSubCategory = currentCategory?.subCategories.find((s) => s.id === activeSubCategory);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className={`w-full px-6 md:px-12 transition-all duration-300 ${isScrolled ? "py-4 bg-white/90 backdrop-blur-md shadow-sm" : "py-6 bg-transparent"}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Image src="/logos/logo.png" alt="Logo" width={150} height={50} className="h-10 w-auto" />
          </Link>

          {/* DESKTOP */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="/" className="font-semibold text-neutral-800 hover:text-indigo-600 transition-colors">Home</Link>
            <Link href="/about" className="font-semibold text-neutral-800 hover:text-indigo-600 transition-colors">About</Link>

            {/* OFFERINGS MEGA MENU */}
            <div
              className="relative py-2"
              onMouseEnter={() => setIsOfferingsOpen(true)}
              onMouseLeave={() => { setIsOfferingsOpen(false); setActiveSubCategory(null); }}
            >
              <button className="flex items-center gap-1 font-semibold text-neutral-800 hover:text-indigo-600 transition-colors">
                Offerings
                <ChevronDown size={16} className={`transition-transform duration-200 ${isOfferingsOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isOfferingsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="fixed left-1/2 -translate-x-1/2 z-50 cursor-default" style={{ top: "72px" }}
                  >
                    <div className="bg-white shadow-2xl border border-neutral-100 flex overflow-hidden rounded-xl" style={{ width: "60vw", maxWidth: "896px", height: "460px" }}>

                      {/* COLUMN 1 – Main Categories */}
                      <div className="w-56 bg-neutral-50 border-r border-neutral-100 py-5 flex flex-col flex-shrink-0">
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400 px-5 mb-4">Categories</p>
                        {menuData.map((cat) => (
                          <div
                            key={cat.id}
                            onMouseEnter={() => { setActiveCategory(cat.id); setActiveSubCategory(null); }}
                            className={`flex items-center justify-between gap-3 px-5 py-4 cursor-pointer transition-colors duration-150 ${activeCategory === cat.id ? "text-indigo-600" : "text-neutral-600 hover:text-indigo-600"}`}
                          >
                            <div className="flex items-center gap-3">
                              <cat.icon size={17} className="shrink-0" />
                              <span className="text-sm font-semibold whitespace-nowrap">{cat.title}</span>
                            </div>
                            <ChevronRight size={14} className={`shrink-0 transition-opacity duration-150 ${activeCategory === cat.id ? "opacity-60" : "opacity-20"}`} />
                          </div>
                        ))}
                      </div>

                      {/* COLUMN 2 – Sub-Categories */}
                      <div className="w-64 border-r border-neutral-100 py-5 flex flex-col flex-shrink-0">
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400 px-5 mb-4">{currentCategory?.title}</p>
                        {currentCategory?.subCategories.map((sub) => (
                          <div
                            key={sub.id}
                            onMouseEnter={() => setActiveSubCategory(sub.id)}
                            className={`flex items-center justify-between gap-2 px-5 py-3 cursor-pointer transition-all duration-150 ${activeSubCategory === sub.id ? "bg-indigo-50 text-indigo-700" : "text-neutral-600 hover:bg-indigo-50 hover:text-indigo-700"}`}
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <sub.icon size={15} className="shrink-0" />
                              <span className="text-sm font-medium whitespace-nowrap">{sub.title}</span>
                            </div>
                            <ChevronRight size={13} className={`shrink-0 transition-opacity duration-150 ${activeSubCategory === sub.id ? "opacity-60" : "opacity-20"}`} />
                          </div>
                        ))}
                      </div>

                      {/* COLUMN 3 – Services (fixed height, scrollable) */}
                      <div className="flex-1 py-5 flex flex-col min-w-0">
                        {activeSubCategory && currentSubCategory ? (
                          <>
                            <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400 px-5 mb-4 flex-shrink-0">
                              {currentSubCategory.title}
                            </p>
                            <div className="overflow-y-auto flex-1 flex flex-col pr-1"
                              style={{ scrollbarWidth: "thin", scrollbarColor: "#e5e7eb transparent" }}
                            >
                              {currentSubCategory.services.map((service) => (
                                <Link
                                  key={service.id}
                                  href={`/casestudies/${service.id}`}
                                  className="flex items-center gap-3 px-5 py-3 text-neutral-600 hover:text-indigo-600 transition-colors duration-150 group flex-shrink-0"
                                >
                                  <service.icon size={14} className="text-neutral-400 group-hover:text-indigo-500 shrink-0 transition-colors duration-150" />
                                  <span className="text-sm">{service.title}</span>
                                </Link>
                              ))}
                            </div>
                          </>
                        ) : (
                          <div className="flex flex-col items-center justify-center h-full gap-2 text-neutral-300 px-6">
                            <ChevronRight size={28} />
                            <p className="text-xs text-center leading-snug">Hover a sub-category<br/>to see services</p>
                          </div>
                        )}
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/services" className="font-semibold text-neutral-800 hover:text-indigo-600 transition-colors">Services</Link>
            <Link href="/contact" className="font-semibold text-neutral-800 hover:text-indigo-600 transition-colors">Contact</Link>
          </div>

          <div className="hidden md:block">
            <BookCallButton />
          </div>

          <button className="md:hidden p-2 text-neutral-800" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[70px] bg-white z-40 p-6 overflow-y-auto border-t border-neutral-100 shadow-xl"
          >
            <Link href="/" onClick={() => setIsOpen(false)} className="block py-4 text-xl font-semibold border-b border-neutral-100">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block py-4 text-xl font-semibold border-b border-neutral-100">About</Link>

            <div className="border-b border-neutral-100">
              <button
                onClick={() => setMobileOfferingsOpen(!mobileOfferingsOpen)}
                className="w-full flex justify-between items-center py-4 text-xl font-semibold text-left"
              >
                Offerings
                <ChevronDown size={20} className={`transition-transform duration-300 ${mobileOfferingsOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {mobileOfferingsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-4 flex flex-col gap-1">
                      {menuData.map((cat) => (
                        <div key={cat.id}>
                          {/* Level 1 */}
                          <button
                            onClick={() => setMobileCat(mobileCat === cat.id ? null : cat.id)}
                            className="w-full flex items-center justify-between py-3 px-2 text-base font-semibold text-neutral-800"
                          >
                            <div className="flex items-center gap-2">
                              <cat.icon size={18} className="text-indigo-600" />
                              {cat.title}
                            </div>
                            <ChevronDown size={16} className={`transition-transform duration-200 text-neutral-400 ${mobileCat === cat.id ? "rotate-180" : ""}`} />
                          </button>

                          <AnimatePresence>
                            {mobileCat === cat.id && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden pl-4"
                              >
                                {cat.subCategories.map((sub) => (
                                  <div key={sub.id}>
                                    {/* Level 2 */}
                                    <button
                                      onClick={() => setMobileSubCat(mobileSubCat === sub.id ? null : sub.id)}
                                      className="w-full flex items-center justify-between py-2.5 px-2 text-sm font-medium text-neutral-700"
                                    >
                                      <div className="flex items-center gap-2">
                                        <sub.icon size={15} className="text-indigo-500" />
                                        {sub.title}
                                      </div>
                                      <ChevronDown size={14} className={`transition-transform duration-200 text-neutral-400 ${mobileSubCat === sub.id ? "rotate-180" : ""}`} />
                                    </button>

                                    <AnimatePresence>
                                      {mobileSubCat === sub.id && (
                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: "auto", opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          transition={{ duration: 0.18 }}
                                          className="overflow-hidden pl-6 border-l-2 border-indigo-100 ml-2"
                                        >
                                          {sub.services.map((service) => (
                                            <Link
                                              key={service.id}
                                              href={`/casestudies/${service.id}`}
                                              onClick={() => setIsOpen(false)}
                                              className="flex items-center gap-2 py-2 text-sm text-neutral-600 hover:text-indigo-600"
                                            >
                                              <service.icon size={13} className="opacity-50 shrink-0" />
                                              {service.title}
                                            </Link>
                                          ))}
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/services" onClick={() => setIsOpen(false)} className="block py-4 text-xl font-semibold border-b border-neutral-100">Services</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block py-4 text-xl font-semibold border-b border-neutral-100">Contact</Link>

            <div className="mt-8 mb-10">
              <BookCallButton className="w-full py-4 text-lg" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "motion/react";
// import Link from "next/link";
// import { 
//   Menu, X, ChevronRight, ChevronDown, 
//   Code, Layers, Layout, Smartphone, Database, 
//   Cloud, Cpu, Rocket, Network, Palette, Globe, 
//   TrendingUp, Search, Share2, Megaphone, Target, 
//   FileText, Mail, MousePointerClick, Users, BarChart,
//   Monitor
// } from "lucide-react";
// import Image from "next/image";
// import BookCallButton from "../ui/BookCallButton";

// const allServices = [
//   // IT Services
//   { id: "custom-software-development", title: "Custom Software Development", icon: Code, category: "IT" },
//   { id: "enterprise-platform-development", title: "Enterprise Platform Development", icon: Layers, category: "IT" },
//   { id: "it-consulting-service", title: "IT Consulting Service", icon: Layout, category: "IT" },
//   // 
//   { id: "laravel-development", title: "Laravel Development", icon: Layout, category: "IT" },
//   { id: "java-development", title: "Java Development", icon: Layout, category: "IT" },
//   { id: "php-development", title: "PHP Development", icon: Layout, category: "IT" },
//   { id: "python-development", title: "Python Development", icon: Layout, category: "IT" },
//   { id: "angular-development", title: "Angular Development", icon: Layout, category: "IT" },
//   { id: "vue-js-development", title: "Vue Js Development", icon: Layout, category: "IT" },
//   { id: "node-js-development", title: "Node Js Development", icon: Layout, category: "IT" },
//   { id: "react-js-development", title: "React Js Development", icon: Layout, category: "IT" },
//   // 
//   // { id: "mobile-app-development", title: "Mobile App Development", icon: Smartphone, category: "IT" },
  
//   // 
//     { id: "flutter-app-developement", title: "Flutter App Developement", icon: Smartphone, category: "IT" },
//   { id: "android-app-developement", title: "Android App Development", icon: Smartphone, category: "IT" },
//   { id: "ios-app-developement", title: "IOS App Development", icon: Smartphone, category: "IT" },
//   { id: "react-native-app-development", title: "React Native App Development", icon: Smartphone, category: "IT" },
//   // 
//   { id: "crm-erp-solutions", title: "CRM & ERP Solutions", icon: Database, category: "IT" },
//   { id: "cloud-solutions-devops", title: "Cloud Solutions & DevOps", icon: Cloud, category: "IT" },
//   { id: "ai-automation-systems", title: "AI & Automation Systems", icon: Cpu, category: "IT" },
//   // 
//   // { id: "ai-developement", title: "AI Developement", icon: Cpu, category: "IT" },
//   { id: "generative-ai-developement", title: "Generative AI Developement", icon: Cpu, category: "IT" },
//   { id: "ai-agent-developement", title: "AI Agent Developement", icon: Cpu, category: "IT" },
//   { id: "ai-chatbot", title: "AI Chatbot", icon: Cpu, category: "IT" },
//   { id: "ml-developement", title: "ML Developement", icon: Cpu, category: "IT" },
//   // 
//   { id: "saas-product-development", title: "SaaS Product Development", icon: Rocket, category: "IT" },
//   { id: "system-integration", title: "System Integration", icon: Network, category: "IT" },
//   { id: "ui-ux-product-design", title: "UI/UX Product Design", icon: Palette, category: "IT" },
//   { id: "website-development-engineering", title: "Website Development & Engineering", icon: Globe, category: "IT" },
  
//   // Marketing Services
//   { id: "performance-marketing", title: "Performance Marketing", icon: TrendingUp, category: "Marketing" },
//   { id: "seo", title: "Search Engine Optimization (SEO)", icon: Search, category: "Marketing" },
//   { id: "social-media-management", title: "Social Media Management", icon: Share2, category: "Marketing" },
//   { id: "paid-advertising", title: "Paid Advertising (Meta, Google, LinkedIn)", icon: Megaphone, category: "Marketing" },
//   { id: "brand-strategy-positioning", title: "Brand Strategy & Positioning", icon: Target, category: "Marketing" },
//   { id: "content-marketing", title: "Content Marketing", icon: FileText, category: "Marketing" },
//   { id: "email-marketing-funnel-automation", title: "Email Marketing & Funnel Automation", icon: Mail, category: "Marketing" },
//   { id: "conversion-rate-optimization", title: "Conversion Rate Optimization", icon: MousePointerClick, category: "Marketing" },
//   { id: "lead-generation-campaigns", title: "Lead Generation Campaigns", icon: Users, category: "Marketing" },
//   { id: "analytics-growth-strategy", title: "Analytics & Data-Driven Growth Strategy", icon: BarChart, category: "Marketing" },
// ];

// // Left-side category definitions
// const categories = [
//   {
//     id: "IT",
//     title: "IT Services",
//     subtitle: "Custom Software & Engineering",
//     icon: Monitor,
//   },
//   {
//     id: "Marketing",
//     title: "Marketing Services",
//     subtitle: "Growth & Brand Positioning",
//     icon: TrendingUp,
//   }
// ];

// const Navbar = () => {
//   // Desktop States
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeTab, setActiveTab] = useState("IT");
//   const [isOfferingsOpen, setIsOfferingsOpen] = useState(false);

//   // Mobile States
//   const [isOpen, setIsOpen] = useState(false);
//   const [mobileOfferingsOpen, setMobileOfferingsOpen] = useState(false);
//   const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Accordion animation variant
//   const accordionVariants = {
//     hidden: { height: 0, opacity: 0 },
//     visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
//     exit: { height: 0, opacity: 0, transition: { duration: 0.2 } }
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50">
//       {/* Main Navbar */}
//       <div className={`w-full px-6 md:px-12 transition-all duration-300 ${
//         isScrolled ? "py-4 bg-white/90 backdrop-blur-md shadow-sm" : "py-6 bg-transparent"
//       }`}>
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//           <Link href="/"><Image src="/logos/logo.png" alt="Logo" width={150} height={50} className="h-10 w-auto" /></Link>

//           {/* Desktop Links */}
          
//           <div className="hidden md:flex items-center gap-10">
//           <Link
//               href="/"
//               className={`font-semibold text-neutral-800 hover:text-indigo-600 transition-colors ${
//                 isScrolled ? "text-[18px]" : "text-[18px]"
//               }`}
//             >
//               Home
//             </Link>
//             <Link
//               href="/about"
//               className={`font-semibold text-neutral-800 hover:text-indigo-600 transition-colors ${
//                 isScrolled ? "text-[18px]" : "text-[18px]"
//               }`}
//             >
//               About
//             </Link>
            
//             {/* Mega Menu Dropdown */}
//             <div 
//               className="relative group py-2"
//               onMouseEnter={() => setIsOfferingsOpen(true)}
//               onMouseLeave={() => setIsOfferingsOpen(false)}
//             >
//               <button
//                 className={`flex items-center gap-1 font-semibold text-neutral-800 hover:text-indigo-600 transition-colors ${
//                   isScrolled ? "text-[18px]" : "text-[18px]"
//                 }`}
//               >
//                 Offerings <ChevronDown size={16} className={`transition-transform duration-200 ${isOfferingsOpen ? "rotate-180" : ""}`} />
//               </button>

//               <AnimatePresence>
//                 {isOfferingsOpen && (
//                   <motion.div 
//                     initial={{ opacity: 0, y: 10 }} 
//                     animate={{ opacity: 1, y: 0 }} 
//                     exit={{ opacity: 0, y: 10 }}
//                     transition={{ duration: 0.2 }}
//                     className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-full pt-4 cursor-default z-50"
//                   >
//                     {/* Responsive mega menu container */}
//                     <div className="bg-white text-neutral-900 shadow-2xl flex flex-col md:flex-row overflow-hidden border border-neutral-200 w-[92vw] md:w-[60vw] max-w-4xl min-h-[340px] md:min-h-[400px]">
                      
//                       {/* Left Side: Parent Categories */}
//                       <div className="w-full md:w-[40%] bg-neutral-50 p-3 md:p-4 flex flex-col justify-start border-b md:border-b-0 md:border-r border-neutral-200">
//                         {categories.map((cat) => (
//                           <div
//                             key={cat.id}
//                             onMouseEnter={() => setActiveTab(cat.id)}
//                             className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-all duration-200 ${
//                               activeTab === cat.id ? "bg-white shadow-sm" : ""
//                             }`}
//                           >
//                             <div className={`transition-colors ${activeTab === cat.id ? "text-indigo-600" : "text-neutral-500"}`}>
//                               <cat.icon size={22} strokeWidth={1.5} />
//                             </div>
//                             <div className="flex-1">
//                               <h4 className="text-[18px] font-semibold text-neutral-900 leading-tight">{cat.title}</h4>
//                               <p className="text-[14px] text-neutral-500 mt-0.5">{cat.subtitle}</p>
//                             </div>
//                             <ChevronRight size={18} className={`transition-opacity ${activeTab === cat.id ? "opacity-100 text-neutral-400" : "opacity-0"}`} />
//                           </div>
//                         ))}
//                       </div>

//                       {/* Right Side: Service Children Grid */}
//                       <div className="w-full md:w-[60%] p-5 md:p-8 bg-white">
//                         <p className="text-[12px] md:text-[13px] text-neutral-500 font-medium mb-4 md:mb-6 uppercase tracking-wide">Browse by category</p>
                        
//                         <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:gap-y-5">
//                           {allServices
//                             .filter(s => s.category === activeTab)
//                             .map((service, i) => (
//                               <Link 
//                                 key={i} 
//                                 href={`/casestudies/${service.id}`} 
//                                 className="text-[15px] md:text-[16px] text-neutral-700 hover:text-indigo-600 transition-colors flex items-center gap-2 group"
//                               >
//                                 <span className="text-neutral-400 group-hover:text-indigo-500 transition-colors shrink-0">
//                                   <service.icon size={14} />
//                                 </span>
//                                 <span className="truncate">{service.title}</span>
//                               </Link>
//                           ))}
//                         </div>
//                       </div>

//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
            
//             <Link
//               href="/services"
//               className={`font-semibold text-neutral-800 hover:text-indigo-600 transition-colors ${
//                 isScrolled ? "text-[18px]" : "text-[18px]"
//               }`}
//             >
//               Services
//             </Link>
//             <Link
//               href="/contact"
//               className={`font-semibold text-neutral-800 hover:text-indigo-600 transition-colors ${
//                 isScrolled ? "text-[15px]" : "text-[18px]"
//               }`}
//             >
//               Contact
//             </Link>
//           </div>

//           <div className="hidden md:block">
//             <BookCallButton />
//           </div>

//           {/* Mobile Toggle */}
//           <button className="md:hidden p-2 text-neutral-800" onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.2 }}
//             className="fixed inset-0 top-[70px] bg-white z-[40] flex flex-col p-6 overflow-y-auto border-t border-neutral-100 shadow-xl"
//           >
//             <div className="flex flex-col gap-2">
//               <Link href="/about" className="text-xl font-semibold py-4 border-b border-neutral-100">About</Link>
              
//               {/* Offerings Mobile Accordion */}
//               <div className="border-b border-neutral-100">
//                 <button 
//                   onClick={() => setMobileOfferingsOpen(!mobileOfferingsOpen)}
//                   className="w-full flex justify-between items-center py-4 text-xl font-semibold text-left text-neutral-800"
//                 >
//                   Offerings
//                   <ChevronDown size={20} className={`transition-transform duration-300 ${mobileOfferingsOpen ? "rotate-180" : ""}`} />
//                 </button>

//                 <AnimatePresence>
//                   {mobileOfferingsOpen && (
//                     <motion.div 
//                       variants={accordionVariants}
//                       initial="hidden"
//                       animate="visible"
//                       exit="exit"
//                       className="overflow-hidden"
//                     >
//                       <div className="flex flex-col gap-4 pb-6 pt-2 pl-4">
//                         {categories.map((cat) => (
//                           <div key={cat.id} className="space-y-2">
//                             {/* Category Level */}
//                             <button 
//                               onClick={() => setMobileExpandedCat(mobileExpandedCat === cat.id ? null : cat.id)}
//                               className="w-full flex items-center justify-between py-2 text-lg font-medium text-neutral-700"
//                             >
//                               <div className="flex items-center gap-3">
//                                 <cat.icon size={18} className="text-indigo-600" />
//                                 {cat.title}
//                               </div>
//                               <ChevronDown size={16} className={`text-neutral-400 transition-transform duration-300 ${mobileExpandedCat === cat.id ? "rotate-180" : ""}`} />
//                             </button>

//                             {/* Services Level */}
//                             <AnimatePresence>
//                               {mobileExpandedCat === cat.id && (
//                                 <motion.div
//                                   variants={accordionVariants}
//                                   initial="hidden"
//                                   animate="visible"
//                                   exit="exit"
//                                   className="overflow-hidden"
//                                 >
//                                   <div className="pl-8 flex flex-col gap-4 py-2 border-l-2 border-indigo-50 ml-2">
//                                     {allServices
//                                       .filter(s => s.category === cat.id)
//                                       .map((service, i) => (
//                                         <Link key={i} href={`/casestudies/${service.id}`} className="flex items-center gap-2 text-neutral-600 text-[15px] hover:text-indigo-600">
//                                           <service.icon size={14} className="opacity-50 shrink-0" />
//                                           {service.title}
//                                         </Link>
//                                     ))}
//                                   </div>
//                                 </motion.div>
//                               )}
//                             </AnimatePresence>
//                           </div>
//                         ))}
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               <Link href="/services" className="text-xl font-semibold py-4 border-b border-neutral-100">Services</Link>
//               <Link href="/contact" className="text-xl font-semibold py-4 border-b border-neutral-100">Contact</Link>
//             </div>

//             <div className="mt-8 mb-10">
//               <BookCallButton className="w-full py-4 text-lg" />
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;