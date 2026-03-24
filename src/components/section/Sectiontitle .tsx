import React from "react";

interface SectionTitleProps {
  title: string;
  description: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export default function SectionTitle({
  title,
  description,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
}: SectionTitleProps) {
  return (
    <div className={`space-y-1 ${className}`}>
      <h2
        className={`font-inter font-bold text-4xl text-center md:text-5xl text-gray-900 leading-normal ${titleClassName}`}
      >
        {title}
      </h2>
      <p
        className={`font-inter text-base text-center md:text-lg text-gray-600 max-w-3xl leading-tight ${descriptionClassName}`}
      >
        {description}
      </p>
    </div>
  );
}
