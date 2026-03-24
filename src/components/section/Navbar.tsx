"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import {
  Menu, X, ChevronRight, ChevronDown,
  Code, Layers, Layout, Smartphone, Database,
  Cloud, Cpu, Rocket, Network, Palette, Globe,
  TrendingUp, Search, Share2, Megaphone, Target,
  FileText, Mail, MousePointerClick, Users, BarChart,
  Monitor
} from "lucide-react";
import Image from "next/image";
import BookCallButton from "../ui/BookCallButton";

// 🔹 SAME DATA (unchanged)
// const allServices = [/* your same array */];
const allServices = [
  // IT Services
  { id: "custom-software-development", title: "Custom Software Development", icon: Code, category: "IT" },
  { id: "enterprise-platform-development", title: "Enterprise Platform Development", icon: Layers, category: "IT" },
  { id: "it-consulting-service", title: "IT Consulting Service", icon: Layout, category: "IT" },
  // 
  { id: "laravel-development", title: "Laravel Development", icon: Layout, category: "IT" },
  { id: "java-development", title: "Java Development", icon: Layout, category: "IT" },
  { id: "php-development", title: "PHP Development", icon: Layout, category: "IT" },
  { id: "python-development", title: "Python Development", icon: Layout, category: "IT" },
  { id: "angular-development", title: "Angular Development", icon: Layout, category: "IT" },
  { id: "vue-js-development", title: "Vue Js Development", icon: Layout, category: "IT" },
  { id: "node-js-development", title: "Node Js Development", icon: Layout, category: "IT" },
  { id: "react-js-development", title: "React Js Development", icon: Layout, category: "IT" },
  // 
  // { id: "mobile-app-development", title: "Mobile App Development", icon: Smartphone, category: "IT" },
  
  // 
    { id: "flutter-app-development", title: "Flutter App Developement", icon: Smartphone, category: "IT" },
  { id: "android-app-development", title: "Android App Development", icon: Smartphone, category: "IT" },
  { id: "ios-app-development", title: "IOS App Development", icon: Smartphone, category: "IT" },
  { id: "react-native-app-development", title: "React Native App Development", icon: Smartphone, category: "IT" },
  // 
  { id: "crm-erp-solutions", title: "CRM & ERP Solutions", icon: Database, category: "IT" },
  { id: "cloud-solutions-devops", title: "Cloud Solutions & DevOps", icon: Cloud, category: "IT" },
  // { id: "ai-automation-systems", title: "AI & Automation Systems", icon: Cpu, category: "IT" },
  // 
  { id: "ai-developement", title: "AI Developement", icon: Cpu, category: "IT" },
  { id: "generative-ai-development", title: "Generative AI Developement", icon: Cpu, category: "IT" },
  { id: "ai-agent-development", title: "AI Agent Developement", icon: Cpu, category: "IT" },
  { id: "ai-chatbot-development", title: "AI Chatbot", icon: Cpu, category: "IT" },
  { id: "ml-development", title: "ML Developement", icon: Cpu, category: "IT" },
  // 
  { id: "saas-product-development", title: "SaaS Product Development", icon: Rocket, category: "IT" },
  { id: "system-integration", title: "System Integration", icon: Network, category: "IT" },
  { id: "ui-ux-product-design", title: "UI/UX Product Design", icon: Palette, category: "IT" },
  { id: "website-development-engineering", title: "Website Development & Engineering", icon: Globe, category: "IT" },
  
  // Marketing Services
  { id: "performance-marketing", title: "Performance Marketing", icon: TrendingUp, category: "Marketing" },
  { id: "seo", title: "Search Engine Optimization (SEO)", icon: Search, category: "Marketing" },
  { id: "social-media-management", title: "Social Media Management", icon: Share2, category: "Marketing" },
  { id: "paid-advertising", title: "Paid Advertising (Meta, Google, LinkedIn)", icon: Megaphone, category: "Marketing" },
  { id: "brand-strategy-positioning", title: "Brand Strategy & Positioning", icon: Target, category: "Marketing" },
  { id: "content-marketing", title: "Content Marketing", icon: FileText, category: "Marketing" },
  { id: "email-marketing-funnel-automation", title: "Email Marketing & Funnel Automation", icon: Mail, category: "Marketing" },
  { id: "conversion-rate-optimization", title: "Conversion Rate Optimization", icon: MousePointerClick, category: "Marketing" },
  { id: "lead-generation-campaigns", title: "Lead Generation Campaigns", icon: Users, category: "Marketing" },
  { id: "analytics-growth-strategy", title: "Analytics & Data-Driven Growth Strategy", icon: BarChart, category: "Marketing" },
];


const categories = [
  { id: "IT", title: "IT Services", subtitle: "Custom Software & Engineering", icon: Monitor },
  { id: "Marketing", title: "Marketing Services", subtitle: "Growth & Brand Positioning", icon: TrendingUp }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("IT");
  const [isOfferingsOpen, setIsOfferingsOpen] = useState(false);

  // ✅ MOBILE STATES (added)
  const [isOpen, setIsOpen] = useState(false);
  const [mobileOfferingsOpen, setMobileOfferingsOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const accordionVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
    exit: { height: 0, opacity: 0, transition: { duration: 0.2 } }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">

      {/* NAVBAR */}
      <div className={`w-full px-6 md:px-12 transition-all duration-300 ${
        isScrolled ? "py-4 bg-white/90 backdrop-blur-md shadow-sm" : "py-6 bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          <Link href="/">
            <Image src="/logos/logo.png" alt="Logo" width={150} height={50} className="h-10 w-auto" />
          </Link>

          {/* ✅ DESKTOP (UNCHANGED) */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="/" className="font-semibold text-neutral-800 hover:text-indigo-600">Home</Link>
            <Link href="/about" className="font-semibold text-neutral-800 hover:text-indigo-600">About</Link>

            <div
              className="relative group py-2"
              onMouseEnter={() => setIsOfferingsOpen(true)}
              onMouseLeave={() => setIsOfferingsOpen(false)}
            >
              <button className="flex items-center gap-1 font-semibold text-neutral-800 hover:text-indigo-600">
                Offerings <ChevronDown size={16} />
              </button>

              <AnimatePresence>
                {isOfferingsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-4 z-50"
                  >
                    <div className="bg-white shadow-2xl flex w-[60vw] max-w-4xl min-h-[400px]">

                      {/* LEFT */}
                      <div className="w-[40%] bg-neutral-50 p-4 border-r">
                        {categories.map(cat => (
                          <div
                            key={cat.id}
                            onMouseEnter={() => setActiveTab(cat.id)}
                            className={`p-4 rounded cursor-pointer ${
                              activeTab === cat.id ? "bg-white" : ""
                            }`}
                          >
                            {cat.title}
                          </div>
                        ))}
                      </div>

                      {/* RIGHT (SCROLLABLE) */}
                      <div className="w-[60%] p-6">
                        <div className="h-[500px] overflow-y-auto pr-2">
                          <div className="flex flex-col gap-y-4">
                            {allServices
                              .filter(s => s.category === activeTab)
                              .map((service, i) => (
                                <Link key={i} href={`/casestudies/${service.id}`}
                                  className="flex items-center gap-2 text-neutral-700 hover:text-indigo-600">
                                  <service.icon size={14} />
                                  {service.title}
                                </Link>
                              ))}
                          </div>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="hidden md:block">
            <BookCallButton />
          </div>

          {/* ✅ MOBILE TOGGLE */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ✅ MOBILE MENU (ADDED) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[70px] bg-white z-40 p-6 overflow-y-auto"
          >
            <Link href="/" className="block py-4 text-xl font-semibold">Home</Link>
            <Link href="/about" className="block py-4 text-xl font-semibold">About</Link>

            {/* MOBILE OFFERINGS */}
            <div>
              <button
                onClick={() => setMobileOfferingsOpen(!mobileOfferingsOpen)}
                className="w-full flex justify-between py-4 text-xl font-semibold"
              >
                Offerings <ChevronDown />
              </button>

              <AnimatePresence>
                {mobileOfferingsOpen && (
                  <motion.div variants={accordionVariants} initial="hidden" animate="visible" exit="exit">
                    {categories.map(cat => (
                      <div key={cat.id}>
                        <button
                          onClick={() => setMobileExpandedCat(mobileExpandedCat === cat.id ? null : cat.id)}
                          className="w-full text-left py-2 font-medium"
                        >
                          {cat.title}
                        </button>

                        {mobileExpandedCat === cat.id && (
                          <div className="pl-4">
                            {allServices
                              .filter(s => s.category === cat.id)
                              .map((service, i) => (
                                <Link key={i} href={`/casestudies/${service.id}`} className="block py-2 text-sm">
                                  {service.title}
                                </Link>
                              ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/services" className="block py-4 text-xl font-semibold">Services</Link>
            <Link href="/contact" className="block py-4 text-xl font-semibold">Contact</Link>

            <div className="mt-6">
              <BookCallButton className="w-full" />
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