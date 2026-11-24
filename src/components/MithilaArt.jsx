// Mithila / Madhubani SVG Art Components

export const MithilaLotus = ({ className = '', size = 80, color = '#D4AF37' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="lotusGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#F5E06A" />
        <stop offset="100%" stopColor={color} />
      </radialGradient>
    </defs>
    {/* Center */}
    <circle cx="50" cy="50" r="12" fill="url(#lotusGrad)" stroke={color} strokeWidth="1" />
    {/* Petals */}
    {[0,45,90,135,180,225,270,315].map((angle, i) => (
      <ellipse key={i} cx="50" cy="50" rx="6" ry="22"
        fill={i % 2 === 0 ? `${color}CC` : `${color}88`}
        stroke={color} strokeWidth="0.5"
        transform={`rotate(${angle} 50 50) translate(0 -18)`}
      />
    ))}
    {/* Inner ring */}
    <circle cx="50" cy="50" r="8" fill="none" stroke={color} strokeWidth="1" strokeDasharray="3,2" />
  </svg>
)

export const MithilaPeacock = ({ className = '', size = 120 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="peacockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#15803D" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#580B18" />
      </linearGradient>
    </defs>
    {/* Tail feathers */}
    {[0,20,40,-20,-40,10,-10,30,-30].map((angle, i) => (
      <ellipse key={i} cx="100" cy="140" rx="8" ry="55"
        fill="none" stroke={i%3===0?"#D4AF37":i%3===1?"#15803D":"#580B18"}
        strokeWidth="2"
        transform={`rotate(${angle} 100 160)`}
        opacity="0.8"
      />
    ))}
    {/* Eye spots on feathers */}
    {[[-20,90],[0,80],[20,90],[-35,100],[35,100]].map(([x,y], i) => (
      <ellipse key={i} cx={100+x} cy={y} rx="5" ry="7" fill="#D4AF37" opacity="0.9" />
    ))}
    {/* Body */}
    <ellipse cx="100" cy="135" rx="18" ry="28" fill="url(#peacockGrad)" />
    {/* Neck */}
    <ellipse cx="100" cy="108" rx="9" ry="18" fill="#15803D" />
    {/* Head */}
    <circle cx="100" cy="90" r="12" fill="#15803D" />
    {/* Crest */}
    {[-15,-5,5,15].map((x, i) => (
      <line key={i} x1="100" y1="78" x2={100+x} y2={65+i%2*5}
        stroke="#D4AF37" strokeWidth="1.5" />
    ))}
    {[-15,-5,5,15].map((x, i) => (
      <circle key={i} cx={100+x} cy={63+i%2*5} r="3" fill="#D4AF37" />
    ))}
    {/* Eye */}
    <circle cx="104" cy="88" r="3" fill="white" />
    <circle cx="104" cy="88" r="1.5" fill="#1a1a1a" />
    {/* Beak */}
    <path d="M 110 92 L 118 94 L 110 96 Z" fill="#D4AF37" />
  </svg>
)

export const MandalaRing = ({ className = '', size = 300, opacity = 0.3 }) => (
  <svg width={size} height={size} viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg" opacity={opacity}>
    <defs>
      <radialGradient id="mandalaGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#F5E06A" stopOpacity="0.9" />
        <stop offset="60%" stopColor="#D4AF37" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#B8942A" stopOpacity="0.1" />
      </radialGradient>
    </defs>
    <circle cx="150" cy="150" r="148" fill="none" stroke="#D4AF37" strokeWidth="1" strokeDasharray="4,3" />
    <circle cx="150" cy="150" r="130" fill="none" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="2,4" />
    <circle cx="150" cy="150" r="110" fill="none" stroke="#D4AF37" strokeWidth="1" />
    <circle cx="150" cy="150" r="80" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
    <circle cx="150" cy="150" r="50" fill="none" stroke="#D4AF37" strokeWidth="1" />
    <circle cx="150" cy="150" r="20" fill="url(#mandalaGrad)" />
    {/* Spokes */}
    {Array.from({length: 24}, (_, i) => {
      const angle = (i * 15 * Math.PI) / 180
      const x1 = 150 + 25 * Math.cos(angle)
      const y1 = 150 + 25 * Math.sin(angle)
      const x2 = 150 + 145 * Math.cos(angle)
      const y2 = 150 + 145 * Math.sin(angle)
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#D4AF37" strokeWidth="0.5" opacity="0.6" />
    })}
    {/* Petal shapes at each ring */}
    {Array.from({length: 12}, (_, i) => {
      const angle = (i * 30 * Math.PI) / 180
      const cx = 150 + 95 * Math.cos(angle)
      const cy = 150 + 95 * Math.sin(angle)
      return <ellipse key={i} cx={cx} cy={cy} rx="8" ry="14"
        fill="#D4AF37" opacity="0.4"
        transform={`rotate(${i*30+90} ${cx} ${cy})`}
      />
    })}
    {Array.from({length: 8}, (_, i) => {
      const angle = (i * 45 * Math.PI) / 180
      const cx = 150 + 60 * Math.cos(angle)
      const cy = 150 + 60 * Math.sin(angle)
      return <ellipse key={i} cx={cx} cy={cy} rx="5" ry="10"
        fill="#F5E06A" opacity="0.5"
        transform={`rotate(${i*45+90} ${cx} ${cy})`}
      />
    })}
  </svg>
)

export const GoldenDivider = ({ className = '' }) => (
  <svg viewBox="0 0 400 40" className={`w-full max-w-sm mx-auto ${className}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="divGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
        <stop offset="30%" stopColor="#D4AF37" stopOpacity="1" />
        <stop offset="50%" stopColor="#F5E06A" stopOpacity="1" />
        <stop offset="70%" stopColor="#D4AF37" stopOpacity="1" />
        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
      </linearGradient>
    </defs>
    <line x1="0" y1="20" x2="160" y2="20" stroke="url(#divGrad)" strokeWidth="1" />
    <polygon points="190,12 200,20 190,28 185,20" fill="#D4AF37" />
    <circle cx="200" cy="20" r="5" fill="#F5E06A" stroke="#D4AF37" strokeWidth="1" />
    <polygon points="210,12 200,20 210,28 215,20" fill="#D4AF37" />
    <line x1="240" y1="20" x2="400" y2="20" stroke="url(#divGrad)" strokeWidth="1" />
    {/* Small diamonds */}
    <polygon points="130,16 135,20 130,24 125,20" fill="#D4AF37" opacity="0.7" />
    <polygon points="265,16 270,20 265,24 260,20" fill="#D4AF37" opacity="0.7" />
  </svg>
)

export const PaisleyBorder = ({ className = '', color = '#D4AF37' }) => (
  <svg viewBox="0 0 400 60" className={`w-full ${className}`} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
    {Array.from({length: 8}, (_, i) => {
      const x = i * 50 + 25
      return (
        <g key={i} transform={`translate(${x}, 30) ${i%2===1?'scale(1,-1)':''}`}>
          <path d={`M 0 0 C -10 -15, -15 -20, -8 -25 C -2 -30, 8 -25, 10 -15 C 12 -5, 5 5, 0 0 Z`}
            fill="none" stroke={color} strokeWidth="1" opacity="0.6" />
          <circle cx="-5" cy="-20" r="2" fill={color} opacity="0.8" />
          <circle cx="0" cy="-8" r="1.5" fill={color} opacity="0.6" />
        </g>
      )
    })}
    <line x1="0" y1="58" x2="400" y2="58" stroke={color} strokeWidth="0.5" opacity="0.4" />
    <line x1="0" y1="2" x2="400" y2="2" stroke={color} strokeWidth="0.5" opacity="0.4" />
  </svg>
)

export const CornerOrnament = ({ className = '', size = 80, flip = false }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" className={className}
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: flip ? 'scaleX(-1)' : 'none' }}>
    <defs>
      <linearGradient id="cornerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5E06A" />
        <stop offset="100%" stopColor="#D4AF37" />
      </linearGradient>
    </defs>
    <path d="M 5 5 Q 5 40 40 40" fill="none" stroke="url(#cornerGrad)" strokeWidth="1.5" />
    <path d="M 5 5 Q 40 5 40 40" fill="none" stroke="url(#cornerGrad)" strokeWidth="1" strokeDasharray="3,2" />
    <circle cx="5" cy="5" r="3" fill="#D4AF37" />
    <circle cx="40" cy="40" r="4" fill="#F5E06A" stroke="#D4AF37" strokeWidth="1" />
    <path d="M 15 5 Q 15 30 40 30" fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.5" />
    <path d="M 5 15 Q 30 15 30 40" fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.5" />
    {/* Small decorative dots */}
    <circle cx="22" cy="12" r="2" fill="#D4AF37" opacity="0.7" />
    <circle cx="12" cy="22" r="2" fill="#D4AF37" opacity="0.7" />
  </svg>
)

export const FloralArchSVG = ({ className = '' }) => (
  <svg viewBox="0 0 400 200" className={`w-full ${className}`} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
    <defs>
      <linearGradient id="archGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#D4AF37" />
        <stop offset="50%" stopColor="#F5E06A" />
        <stop offset="100%" stopColor="#D4AF37" />
      </linearGradient>
    </defs>
    {/* Main arch */}
    <path d="M 20 200 Q 20 20 200 10 Q 380 20 380 200"
      fill="none" stroke="url(#archGrad)" strokeWidth="3" />
    <path d="M 35 200 Q 35 35 200 25 Q 365 35 365 200"
      fill="none" stroke="#D4AF37" strokeWidth="1" strokeDasharray="4,3" opacity="0.5" />
    {/* Lotus flowers on arch top */}
    {[0.25, 0.5, 0.75].map((t, i) => {
      // parametric point on arch
      const x = 20 + (380-20)*t
      const y = 200 - 180*Math.sin(Math.PI*t) + 10
      return (
        <g key={i} transform={`translate(${x}, ${y})`}>
          <circle cx="0" cy="0" r="8" fill="#D4AF37" opacity="0.9" />
          <circle cx="0" cy="0" r="4" fill="#F5E06A" />
        </g>
      )
    })}
    {/* Side hanging flowers */}
    {[30, 60, 100, 300, 340, 370].map((x, i) => {
      const y = i < 3 ? 200 - 160*Math.sin(Math.PI*(x-20)/360) : 200 - 160*Math.sin(Math.PI*(x-20)/360)
      return (
        <circle key={i} cx={x} cy={y} r="5" fill="#580B18" opacity="0.6" />
      )
    })}
  </svg>
)

export const GaneshaMotif = ({ size = 64, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ganeshaGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5E06A" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#B8942A" />
      </linearGradient>
    </defs>
    {/* Crown (Mukut) */}
    <path d="M 40 22 L 50 8 L 60 22 Z" fill="url(#ganeshaGold)" />
    <circle cx="50" cy="8" r="3" fill="#F59E0B" />
    <path d="M 36 24 L 64 24 L 60 29 L 40 29 Z" fill="url(#ganeshaGold)" />
    {/* Forehead & Tilak */}
    <ellipse cx="50" cy="36" rx="14" ry="9" fill="url(#ganeshaGold)" opacity="0.9" />
    <path d="M 47 30 Q 50 38 53 30" stroke="#580B18" strokeWidth="2" fill="none" />
    <circle cx="50" cy="33" r="2" fill="#580B18" />
    {/* Ears */}
    <path d="M 36 33 C 24 33, 22 48, 35 52 C 37 46, 38 40, 38 36 Z" fill="url(#ganeshaGold)" />
    <path d="M 64 33 C 76 33, 78 48, 65 52 C 63 46, 62 40, 62 36 Z" fill="url(#ganeshaGold)" />
    {/* Trunk (Sund) */}
    <path d="M 47 42 Q 46 58 54 64 Q 60 67 63 62 Q 65 56 59 58 Q 54 58 52 46 Z" fill="url(#ganeshaGold)" />
    {/* Tusk */}
    <path d="M 44 48 L 40 54 L 46 51 Z" fill="#FFF" />
    {/* Modak in trunk */}
    <circle cx="63" cy="62" r="4" fill="#F59E0B" stroke="#D4AF37" strokeWidth="1" />
    {/* Lotus Base */}
    <ellipse cx="50" cy="82" rx="20" ry="5" fill="#D4AF37" opacity="0.6" />
    <path d="M 34 82 Q 50 90 66 82 Q 50 78 34 82" fill="url(#ganeshaGold)" />
  </svg>
)

export const RoyalDiya = ({ size = 48, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="flameGrad" x1="50%" y1="100%" x2="50%" y2="0%">
        <stop offset="0%" stopColor="#580B18" />
        <stop offset="30%" stopColor="#F59E0B" />
        <stop offset="70%" stopColor="#FDE047" />
        <stop offset="100%" stopColor="#FFFFFF" />
      </linearGradient>
      <radialGradient id="diyaGlow" cx="50%" cy="40%" r="50%">
        <stop offset="0%" stopColor="#FDE047" stopOpacity="0.8" />
        <stop offset="60%" stopColor="#F59E0B" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="brassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5E06A" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#8a6e1a" />
      </linearGradient>
    </defs>
    {/* Aura glow */}
    <circle cx="40" cy="34" r="22" fill="url(#diyaGlow)" />
    {/* Animated flame */}
    <path d="M 40 16 Q 47 28 44 38 Q 40 44 36 38 Q 33 28 40 16 Z" fill="url(#flameGrad)">
      <animate attributeName="d"
        values="M 40 16 Q 47 28 44 38 Q 40 44 36 38 Q 33 28 40 16 Z;
                M 40 14 Q 49 26 45 38 Q 40 45 35 38 Q 31 26 40 14 Z;
                M 40 16 Q 47 28 44 38 Q 40 44 36 38 Q 33 28 40 16 Z"
        dur="1.8s" repeatCount="indefinite" />
    </path>
    {/* Diya Clay/Brass Pot */}
    <path d="M 20 44 C 20 60, 60 60, 60 44 C 55 48, 25 48, 20 44 Z" fill="url(#brassGrad)" stroke="#580B18" strokeWidth="1" />
    {/* Base stand */}
    <path d="M 32 58 L 48 58 L 52 64 L 28 64 Z" fill="url(#brassGrad)" />
  </svg>
)


