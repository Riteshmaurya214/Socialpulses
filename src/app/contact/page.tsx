"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  MessageCircle,
  MapPin,
  Phone,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4 md:p-8 font-sans"
      style={{
        // Using an off-black with 15% opacity for the dots
        backgroundImage: `radial-gradient(rgba(26, 26, 26, 0.15) 2px, transparent 1px)`,
        backgroundSize: "30px 30px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-[1200px] bg-white rounded-[32px] shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[650px] mt-8 md:mt-12"
      >
        {/* LEFT COLUMN: Contact Information */}
        <div className="w-full lg:w-[40%] p-8 md:p-12 flex flex-col justify-between bg-white relative">
          <div>
            {/* Logo */}
            <div className="mb-12">
              <Image
                src="/logos/logo.png"
                alt="PixelLab Logo"
                width={240}
                height={120}
                className="h-16 w-auto object-contain"
                unoptimized
              />
            </div>

            {/* Info Items */}
            <div className="space-y-8">
              {/* Chat */}
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <MessageCircle className="w-5 h-5 text-gray-900" />
                  <h3 className="font-montserrat font-bold text-gray-900 text-lg">
                    Chat to us
                  </h3>
                </div>
                <p className="font-inter text-gray-500 text-sm mb-1">
                  Our friendly team is here to help.
                </p>
                <a
                  href="mailto:hello@ignite.com"
                  className="font-inter font-semibold text-gray-900 text-sm hover:underline"
                >
                  support@socialpulsestudios.in
                </a>
              </div>

              {/* Visit */}
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <MapPin className="w-5 h-5 text-gray-900" />
                  <h3 className="font-montserrat font-bold text-gray-900 text-lg">
                    Location
                  </h3>
                </div>
                {/* <p className="font-inter text-gray-500 text-sm mb-1">
                  Come say hello at our office HQ.
                </p> */}
                <p className="font-inter font-semibold text-gray-900 text-sm leading-relaxed">
                 Amaya Complex, Sector 62,
                  <br />
                  Noida, U.P.
                </p>
              </div>

              {/* Call */}
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <Phone className="w-5 h-5 text-gray-900" />
                  <h3 className="font-montserrat font-bold text-gray-900 text-lg">
                    Call us
                  </h3>
                </div>
                <p className="font-inter text-gray-500 text-sm mb-1">
                  Mon-Fri from 09:00 AM to 07:00 PM.
                </p>
                <a
                  href="tel:+91 9263542292"
                  className="font-inter font-semibold text-gray-900 text-sm hover:underline"
                >
                  +91 9263542292,+91 8423702770                </a>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-12 lg:mt-0">
            <SocialIcon icon={<Linkedin size={20} />} href="https://www.linkedin.com/company/social-pulse-studios/" />
            {/* <SocialIcon icon={<Twitter size={20} />} href="#" /> */}
            <SocialIcon icon={<Instagram size={20} />} href="https://www.instagram.com/socialpulse.studios/" />
            {/* <SocialIcon icon={<Facebook size={20} />} href="#" /> */}
          </div>
        </div>

        {/* RIGHT COLUMN: Form with Brand Gradient */}
        <div className="w-full lg:w-[60%] p-8 md:p-12 lg:p-16 relative bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#4F46E5]">
          <div className="relative z-10 h-full flex flex-col justify-center max-w-lg mx-auto lg:mx-0">
            <div className="mb-10 text-white">
              <h2 className="font-montserrat text-3xl md:text-4xl lg:text-[42px] font-bold leading-[1.1] mb-4">
                Got ideas? We've got the skills. Let's team up.
              </h2>
              <p className="font-inter text-white/90 text-lg">
                Tell us more about yourself and what you've got in mind.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Minimalist Underline Inputs */}
              <div className="space-y-6">
                <div>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/40 py-3 text-lg text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/40 py-3 text-lg text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    rows={1}
                    required
                    placeholder="Tell us a little about the project..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/40 py-3 text-lg text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-6 bg-gray-900 text-white font-montserrat font-bold py-4 px-8 rounded-lg w-full shadow-lg hover:bg-black transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Let's get started!"}
              </button>

              {/* Success Message */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-white/20 backdrop-blur-sm rounded-lg text-white text-center font-medium"
                >
                  Message sent! We'll be in touch soon.
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const SocialIcon = ({
  icon,
  href,
}: {
  icon: React.ReactNode;
  href: string;
}) => (
  <a
    href={href}
    className="text-gray-400 hover:text-gray-900 transition-colors p-2 -ml-2 rounded-full hover:bg-gray-50"
  >
    {icon}
  </a>
);
