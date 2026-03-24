import React from 'react';

type StarBorderProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
  as?: T;
  className?: string;
  color?: string;
  speed?: string;
  children?: React.ReactNode;
};

const StarBorder = <T extends React.ElementType = 'button'>({
  as,
  className = '',
  color = 'white',
  speed = '4s',
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || 'button';

  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-md p-[1px] group ${className}`}
      {...rest}
    >
      {/* 1. The Spinning "Star" (Conic Gradient) - Clockwise Motion */}
      <div
        className="absolute inset-[-100%] animate-star-spin z-0"
        style={{
          background: `conic-gradient(transparent 0deg, transparent 300deg, ${color} 360deg)`,
          animationDuration: speed,
        }}
      />

      {/* 2. The "Full Shine" on Hover - Fades in to cover the border */}
      <div
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: color,
        }}
      />

      {/* 3. The Inner Content - Black background covers the middle */}
      <div className="relative z-10 bg-gradient-to-b from-black to-gray-900 border border-gray-800 text-white text-center text-[16px] py-2.5 px-4 rounded-md">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;