import React from "react";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface BookCallButtonProps {
  className?: string;
  variant?: "primary" | "outline";
  text?: string;
  onClick?: () => void;
  href?: string;
}

const BookCallButton = ({
  className,
  variant = "primary",
  text = "Book A Call",
  onClick,
  href = "https://calendly.com/studiossocialpulse/30min?primary_color=f3356a",
}: BookCallButtonProps) => {
  const isOutline = variant === "outline";

  const baseStyles =
    "relative flex items-center justify-center overflow-hidden rounded-full font-semibold transition-all duration-300 active:scale-95 group";

  const variantStyles = isOutline
    ? "border border-gray-200 text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 shadow-sm hover:shadow-md px-8 py-4 text-lg"
    : "bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#4F46E5] text-white shadow-lg hover:shadow-xl px-8 py-3 text-base";

  const isExternal = href.startsWith('http');

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(baseStyles, variantStyles, className)}
      onClick={onClick}
    >
      {/* Text */}
      <span className="relative z-10 transition-transform duration-300 ease-in-out group-hover:-translate-x-3">
        {text}
      </span>

      {/* Hover Icon */}
      <div className="absolute right-5 opacity-0 translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex items-center justify-center">
        <Phone size={18} className="shrink-0" />
      </div>
    </Link>
  );
};
export default BookCallButton;