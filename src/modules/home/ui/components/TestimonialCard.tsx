"use client";
import React from "react";
import { Star } from "lucide-react";

interface TestimonialProps {
  name?: string;
  role?: string;
  content?: string;
  avatar?: string;
  stars?: number;
  videoUrl?: string;
}

export const TestimonialCard = ({
  name,
  role,
  content,
  avatar,
  stars = 5,
  videoUrl,
}: TestimonialProps) => {
  const isVideoOnly = videoUrl && !content;

  return (
    <div className="relative h-[240px] w-[360px] overflow-hidden rounded-lg border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-md">
      
      {videoUrl && (
        <div className={`absolute inset-0 z-0 ${!isVideoOnly ? "opacity-10" : "opacity-100"}`}>
          <video
            src={videoUrl}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        </div>
      )}

      {!isVideoOnly && (
        <div className="relative z-10 flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={avatar}
                alt={name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <h4 className="text-base font-semibold text-gray-900">{name}</h4>
            </div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={`${i < stars ? "fill-black text-black" : "fill-gray-200 text-gray-200"}`}
                />
              ))}
            </div>
          </div>

          {/* Body Fix: whitespace-normal + break-words + line-clamp */}
          <div className="mt-4 flex-1">
            <p className="whitespace-normal break-words text-sm leading-relaxed text-gray-700 line-clamp-5">
              {content}
            </p>
          </div>

          {/* Footer: "mt-auto" forces this to the very bottom of the [280px] card */}
          <div className="mt-auto flex items-center justify-end gap-2">
            <span className="h-[1px] w-5 bg-gray-300"></span>
            <p className="text-xs font-bold tracking-wide text-[#1a365d]">
              {role}
            </p>
          </div>
        </div>
      )}

      {isVideoOnly && <div className="absolute inset-0 bg-black/5" />}
    </div>
  );
};