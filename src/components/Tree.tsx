import React from 'react'

export default function Tree() {
  return (
    <div className="tree-wrapper">
      <svg
        className="tree"
        viewBox="0 0 200 260"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Decorative Christmas tree with blinking lights"
      >
        <defs>
          <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#0f8a5a" />
            <stop offset="100%" stopColor="#0b6f44" />
          </linearGradient>
        </defs>

        {/* tree layers */}
        <g className="tree-shape">
          <polygon points="100,10 30,120 170,120" fill="url(#g1)" />
          <polygon points="100,70 15,180 185,180" fill="url(#g1)" />
          <polygon points="100,140 0,250 200,250" fill="url(#g1)" />
        </g>

        {/* trunk */}
        <rect x="86" y="245" width="28" height="12" fill="#6b3b17" rx="2" />

        {/* lights (animated by CSS class .light) */}
        <g>
          <circle className="light light-1" cx="95" cy="90" r="5" fill="#fef08a" />
          <circle className="light light-2" cx="122" cy="110" r="5" fill="#f97316" />
          <circle className="light light-3" cx="72" cy="120" r="5" fill="#ef4444" />
          <circle className="light light-4" cx="110" cy="160" r="5" fill="#60a5fa" />
          <circle className="light light-5" cx="82" cy="150" r="5" fill="#34d399" />
        </g>

        {/* star */}
        <g transform="translate(100,4)">
          <polygon points="0,-8 3,3 10,3 4,7 6,18 0,11 -6,18 -4,7 -10,3 -3,3" fill="#facc15" />
        </g>
      </svg>
    </div>
  )
}
