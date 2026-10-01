import React from 'react';

interface CodiarLogoProps {
  className?: string;
  size?: number;
}

export const CodiarLogo: React.FC<CodiarLogoProps> = ({ className = '', size = 38 }) => {
  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 400 320"
        className="w-full h-full drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
<linearGradient id="blueGrad" x1="50" y1="20" x2="190" y2="300" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0066FF" />
            <stop offset="50%" stopColor="#00B4FF" />
            <stop offset="100%" stopColor="#00F0FF" />
          </linearGradient>
<linearGradient id="blueHighlight" x1="100" y1="20" x2="180" y2="300" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#80E0FF" />
            <stop offset="100%" stopColor="#0055CC" />
          </linearGradient>
<linearGradient id="orangeGrad" x1="210" y1="20" x2="350" y2="300" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFCC00" />
            <stop offset="50%" stopColor="#FF6600" />
            <stop offset="100%" stopColor="#DD2200" />
          </linearGradient>
<linearGradient id="orangeHighlight" x1="220" y1="20" x2="300" y2="300" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFEE77" />
            <stop offset="100%" stopColor="#CC3300" />
          </linearGradient>
<linearGradient id="darkCenter" x1="200" y1="40" x2="200" y2="280" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E232A" />
            <stop offset="100%" stopColor="#0D1117" />
          </linearGradient>
        </defs>
<path
          d="M200 15 L320 60 L360 160 L320 260 L200 305 L80 260 L40 160 L80 60 Z"
          fill="#0B0E14"
          stroke="#1E293B"
          strokeWidth="6"
        />

<path
          d="M178 35 L105 75 L70 160 L105 245 L178 285 L145 285 L75 245 L42 160 L75 75 L145 35 Z"
          fill="#003B80"
        />
<path
          d="M175 42 L112 78 L80 160 L112 242 L175 278 L152 278 L95 242 L65 160 L95 78 L152 42 Z"
          fill="url(#blueGrad)"
          stroke="#00E5FF"
          strokeWidth="3"
        />
<path
          d="M140 105 L105 160 L140 215"
          stroke="url(#blueHighlight)"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

<path
          d="M222 35 L295 75 L330 160 L295 245 L222 285 L255 285 L325 245 L358 160 L325 75 L255 35 Z"
          fill="#801800"
        />
<path
          d="M225 42 L288 78 L320 160 L288 242 L225 278 L248 278 L305 242 L335 160 L305 78 L248 42 Z"
          fill="url(#orangeGrad)"
          stroke="#FFB300"
          strokeWidth="3"
        />
<path
          d="M260 105 L295 160 L260 215"
          stroke="url(#orangeHighlight)"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
<rect
          x="182"
          y="45"
          width="36"
          height="230"
          rx="6"
          fill="url(#darkCenter)"
          stroke="#334155"
          strokeWidth="3"
        />
<g transform="translate(188, 62) scale(1.05)">
<path d="M7 2 C7 0 9 0 9 -2 M11 2 C11 0 13 0 13 -2 M15 2 C15 0 17 0 17 -2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
<path d="M4 4 H18 C18 4 19 12 11 12 C3 12 4 4 4 4 Z" fill="white" />
<path d="M18 6 C20 6 20 10 18 10" stroke="white" strokeWidth="1.5" fill="none" />
<rect x="2" y="14" width="18" height="2" rx="1" fill="white" />
        </g>
<g transform="translate(189, 118) scale(1.05)">
<path d="M5 2 V8 C5 9.5 7 9.5 7 11 V18 H9 V11 C9 9.5 11 9.5 11 8 V2 M7 2 V6 M9 2 V6" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
<path d="M16 2 C13 5 13 10 13 11 V18 H15 V2 Z" fill="white" />
        </g>
<g transform="translate(188, 172) scale(1.05)">
<rect x="5" y="2" width="14" height="10" rx="3" fill="white" />
<rect x="3" y="9" width="18" height="6" rx="2" fill="white" />
<rect x="1" y="6" width="4" height="9" rx="1.5" fill="white" />
          <rect x="19" y="6" width="4" height="9" rx="1.5" fill="white" />
<path d="M4 15 L3 19 M20 15 L21 19" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </g>
<g transform="translate(188, 226) scale(1.05)">
          <path
            d="M3 8 C3 4 7 3 12 3 C17 3 21 4 21 8 C21 13 19 16 16 16 C14 16 13 14 12 14 C11 14 10 16 8 16 C5 16 3 13 3 8 Z"
            fill="white"
          />
<rect x="5.5" y="7" width="4" height="1.5" rx="0.5" fill="#1E232A" />
          <rect x="6.75" y="5.75" width="1.5" height="4" rx="0.5" fill="#1E232A" />
          <circle cx="16.5" cy="6.5" r="0.9" fill="#1E232A" />
          <circle cx="18" cy="8" r="0.9" fill="#1E232A" />
        </g>
      </svg>
    </div>
  );
};
