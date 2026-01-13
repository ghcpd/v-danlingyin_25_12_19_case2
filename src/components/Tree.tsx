import React from 'react'

export default function Tree(){
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-56 h-56 mx-auto relative" aria-hidden>
        <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="b" />
              <feBlend in="SourceGraphic" in2="b" />
            </filter>
          </defs>

          {/* trunk */}
          <rect x="92" y="140" width="16" height="30" rx="3" fill="#7a4b2b" />

          {/* three green layers */}
          <path d="M100 20 L40 110 L160 110 Z" fill="#0b6b2b" filter="url(#soft)" />
          <path d="M100 60 L50 130 L150 130 Z" fill="#0f7b36" opacity="0.95" />
          <path d="M100 95 L60 155 L140 155 Z" fill="#178a3d" />

          {/* star */}
          <g transform="translate(100,14)">
            <polygon points="0,-10 3,-2 10,-2 5,2 7,10 0,5 -7,10 -5,2 -10,-2 -3,-2" fill="#facc15" />
          </g>

          {/* lights - small circles with varying animation durations */}
          <circle cx="88" cy="80" r="3.8" fill="#f97316" style={{ animation: 'blink 1.6s infinite ease-in-out' } as React.CSSProperties} />
          <circle cx="112" cy="88" r="3.5" fill="#fb7185" style={{ animation: 'blink 1.2s infinite ease-in-out' } as React.CSSProperties} />
          <circle cx="78" cy="110" r="3.2" fill="#60a5fa" style={{ animation: 'blink 1.8s infinite ease-in-out' } as React.CSSProperties} />
          <circle cx="122" cy="115" r="3.6" fill="#34d399" style={{ animation: 'blink 1.4s infinite ease-in-out' } as React.CSSProperties} />
          <circle cx="100" cy="75" r="2.8" fill="#fde68a" style={{ animation: 'blink 2.2s infinite ease-in-out' } as React.CSSProperties} />
          <circle cx="98" cy="125" r="3.4" fill="#fb7185" style={{ animation: 'blink 1.7s infinite ease-in-out' } as React.CSSProperties} />

          {/* subtle glow behind tree */}
          <circle cx="100" cy="120" r="54" fill="#dcfce7" opacity="0.07" />
        </svg>

        {/* subtle floating */}
        <div className="absolute inset-0 pointer-events-none" style={{ animation: 'floaty 4s ease-in-out infinite' }} />
      </div>

      <div className="mt-4 text-sm text-gray-600">Festive tree with blinking lights — animations run automatically</div>
    </div>
  )
}
