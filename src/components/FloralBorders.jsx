export default function FloralBorders() {
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 10, overflow: 'hidden' }}>
      {/* Top Left Garland */}
      <svg
        style={{ position: 'absolute', top: 0, left: 0, width: '130px', height: '130px', opacity: 0.85 }}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft pink roses & leaves */}
        <path d="M-20 -20 Q40 60 110 20 Q140 10 160 -10" stroke="#C5A059" strokeWidth="1.5" strokeDasharray="3 3" />
        
        {/* Hanging marigold beads */}
        <line x1="20" y1="0" x2="20" y2="70" stroke="#E6A122" strokeWidth="1" strokeDasharray="2 3" />
        <circle cx="20" cy="72" r="7" fill="#E6A122" />
        <circle cx="20" cy="72" r="4" fill="#F7CA44" />
        
        <line x1="50" y1="0" x2="50" y2="105" stroke="#E6A122" strokeWidth="1" strokeDasharray="2 3" />
        <circle cx="50" cy="107" r="9" fill="#E6A122" />
        <circle cx="50" cy="107" r="5" fill="#F7CA44" />
        <circle cx="50" cy="90" r="5" fill="#E67E22" />
        
        <line x1="85" y1="0" x2="85" y2="80" stroke="#E6A122" strokeWidth="1" strokeDasharray="2 3" />
        <circle cx="85" cy="82" r="8" fill="#E6A122" />
        <circle cx="85" cy="82" r="4" fill="#F7CA44" />
        
        <line x1="120" y1="0" x2="120" y2="50" stroke="#E6A122" strokeWidth="1" strokeDasharray="2 3" />
        <circle cx="120" cy="52" r="6" fill="#E6A122" />

        {/* Corner Roses */}
        <circle cx="15" cy="15" r="22" fill="#F8BBD0" opacity="0.9" />
        <circle cx="15" cy="15" r="14" fill="#E91E63" opacity="0.6" />
        <circle cx="15" cy="15" r="7" fill="#C2185B" opacity="0.7" />

        <circle cx="45" cy="20" r="16" fill="#FCE4EC" />
        <circle cx="45" cy="20" r="9" fill="#F06292" opacity="0.8" />
        
        <circle cx="20" cy="45" r="14" fill="#FCE4EC" />
        <circle cx="20" cy="45" r="8" fill="#EC407A" opacity="0.8" />
      </svg>

      {/* Top Right Garland */}
      <svg
        style={{ position: 'absolute', top: 0, right: 0, width: '130px', height: '130px', opacity: 0.85, transform: 'scaleX(-1)' }}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M-20 -20 Q40 60 110 20 Q140 10 160 -10" stroke="#C5A059" strokeWidth="1.5" strokeDasharray="3 3" />
        
        <line x1="20" y1="0" x2="20" y2="70" stroke="#E6A122" strokeWidth="1" strokeDasharray="2 3" />
        <circle cx="20" cy="72" r="7" fill="#E6A122" />
        <circle cx="20" cy="72" r="4" fill="#F7CA44" />
        
        <line x1="50" y1="0" x2="50" y2="105" stroke="#E6A122" strokeWidth="1" strokeDasharray="2 3" />
        <circle cx="50" cy="107" r="9" fill="#E6A122" />
        <circle cx="50" cy="107" r="5" fill="#F7CA44" />
        <circle cx="50" cy="90" r="5" fill="#E67E22" />
        
        <line x1="85" y1="0" x2="85" y2="80" stroke="#E6A122" strokeWidth="1" strokeDasharray="2 3" />
        <circle cx="85" cy="82" r="8" fill="#E6A122" />
        <circle cx="85" cy="82" r="4" fill="#F7CA44" />
        
        <line x1="120" y1="0" x2="120" y2="50" stroke="#E6A122" strokeWidth="1" strokeDasharray="2 3" />
        <circle cx="120" cy="52" r="6" fill="#E6A122" />

        <circle cx="15" cy="15" r="22" fill="#F8BBD0" opacity="0.9" />
        <circle cx="15" cy="15" r="14" fill="#E91E63" opacity="0.6" />
        <circle cx="15" cy="15" r="7" fill="#C2185B" opacity="0.7" />

        <circle cx="45" cy="20" r="16" fill="#FCE4EC" />
        <circle cx="45" cy="20" r="9" fill="#F06292" opacity="0.8" />
        
        <circle cx="20" cy="45" r="14" fill="#FCE4EC" />
        <circle cx="20" cy="45" r="8" fill="#EC407A" opacity="0.8" />
      </svg>
    </div>
  )
}
