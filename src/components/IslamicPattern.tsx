interface IslamicPatternProps {
  className?: string
  opacity?: number
}

const IslamicPattern = ({ className = '', opacity = 0.1 }: IslamicPatternProps) => {
  return (
    <div className={`absolute inset-0 ${className}`} style={{ opacity }}>
      <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
        <defs>
          <pattern id="islamic-star" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            {/* 8-pointed Islamic star */}
            <g transform="translate(40,40)">
              <path 
                d="M0,-20 L5,-5 L20,0 L5,5 L0,20 L-5,5 L-20,0 L-5,-5 Z" 
                fill="currentColor" 
                className="text-primary"
              />
              <circle cx="0" cy="0" r="3" fill="currentColor" className="text-accent"/>
            </g>
          </pattern>
          
          <pattern id="islamic-geometric" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <g transform="translate(30,30)">
              <polygon 
                points="-15,-15 15,-15 15,15 -15,15" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1"
                className="text-primary"
              />
              <polygon 
                points="-10,-10 10,-10 10,10 -10,10" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="0.5"
                className="text-accent"
              />
            </g>
          </pattern>
        </defs>
        
        <rect width="400" height="400" fill="url(#islamic-star)"/>
        <rect width="400" height="400" fill="url(#islamic-geometric)" opacity="0.5"/>
      </svg>
    </div>
  )
}

export default IslamicPattern