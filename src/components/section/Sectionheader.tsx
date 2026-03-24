import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  className?: string;
}

export default function SectionHeader({ icon: Icon, title, className = '' }: SectionHeaderProps) {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-white/50 backdrop-blur-sm ${className}`}>
      <Icon className="w-4 h-4 text-gray-700" strokeWidth={2} />
      <span className="font-inter font-medium text-sm text-gray-700">
        {title}
      </span>
    </div>
  );
}