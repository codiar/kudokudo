import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true, className = '' }) => {
  const sizeClasses = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
<div
        className={`${sizeClasses[size]} shrink-0 rounded-full bg-[#E51E2B] flex flex-col items-center justify-center shadow-sm relative overflow-hidden p-1 border border-white/20`}
      >
<svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
<path
            d="M62 26C65 21 61 17 64 12C66 9 70 8 71 6"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.9"
          />
          <path
            d="M68 28C72 24 70 19 74 15"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.8"
          />
<path
            d="M48 20L44 26H56L52 20C50 17 49 17 48 20Z"
            fill="#FFAA00"
          />
          <path
            d="M50 17L46 22H54L50 17Z"
            fill="#FF4433"
          />
          <rect x="33" y="27" width="34" height="6.5" rx="2" fill="#1A1A1A" />
          <text
            x="50"
            y="25"
            textAnchor="middle"
            fill="white"
            fontSize="4.2"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            BARISTA EDITION
          </text>
<text
            x="50"
            y="54"
            textAnchor="middle"
            fill="white"
            fontSize="18"
            fontWeight="900"
            letterSpacing="-0.5"
            fontFamily="Arial Black, Impact, sans-serif"
            transform="scale(1, 1.25) translate(0, -10)"
          >
            KUDO
          </text>
          <text
            x="50"
            y="76"
            textAnchor="middle"
            fill="white"
            fontSize="18"
            fontWeight="900"
            letterSpacing="-0.5"
            fontFamily="Arial Black, Impact, sans-serif"
            transform="scale(1, 1.25) translate(0, -10)"
          >
            KUDO
          </text>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-tight">
          <span className={`font-black text-[#1A1A1A] tracking-tight ${textSizes[size]}`}>
            كودو كودو كافيه
          </span>
          <span className="text-[11px] font-bold text-[#E51E2B] tracking-wide">
            KUDO KUDO CAFE
          </span>
        </div>
      )}
    </div>
  );
};
