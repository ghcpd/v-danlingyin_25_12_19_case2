import React from 'react'

const Light: React.FC<{ className?: string; color: string }> = ({ className = '', color }) => (
  <circle className={`tree-light ${className}`} r="6" fill={color} />
)

const ChristmasTree: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-6">
      <svg viewBox="0 0 200 260" width="220" height="280" className="tree-needle">
        <defs>
          <linearGradient id="greenGrad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#16a34a" />
            <stop offset="100%" stopColor="#064e3b" />
          </linearGradient>
        </defs>

        {/* Layers of the tree */}
        <g transform="translate(100,40)">
          <path d="M-60 40 L0 -80 L60 40 Z" fill="url(#greenGrad)" />
          <path d="M-50 70 L0 -40 L50 70 Z" fill="url(#greenGrad)" />
          <path d="M-40 110 L0 0 L40 110 Z" fill="url(#greenGrad)" />

          {/* trunk */}
          <rect x="-12" y="110" width="24" height="30" rx="4" fill="#5a3d2e" />

          {/* lights */}
          <g>
            <g transform="translate(-20,20)">
              <Light className="delay-1" color="#fde047" />
            </g>
            <g transform="translate(10,10)">
              <Light className="delay-2" color="#fb7185" />
            </g>
            <g transform="translate(30,40)">
              <Light className="delay-3" color="#60a5fa" />
            </g>
            <g transform="translate(-5,60)">
              <Light className="delay-1" color="#f97316" />
            </g>
            <g transform="translate(-35,80)">
              <Light className="delay-2" color="#fb7185" />
            </g>
            <g transform="translate(25,90)">
              <Light className="delay-3" color="#34d399" />
            </g>
          </g>

          {/* star */}
          <polygon points="0,-95 8,-80 24,-80 12,-72 18,-56 0,-66 -18,-56 -12,-72 -24,-80 -8,-80" fill="#facc15" />
        </g>
      </svg>
    </div>
  )
}

export default ChristmasTree
