const KaabahVisual = () => {
  return (
    <div className="relative w-full h-96 flex items-center justify-center overflow-hidden">
      {/* Background with Islamic pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/20 rounded-3xl">
        <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-primary/10"></div>
      </div>

      {/* Kaabah Image */}
      <div className="relative z-10">
        <div className="relative group">
          <img 
            src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Kaabah"
            className="w-80 h-64 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>
          
          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i} 
                className="absolute w-1.5 h-1.5 bg-accent rounded-full animate-pulse"
                style={{
                  top: `${15 + (i * 15)}%`,
                  left: `${10 + (i * 15)}%`,
                  animationDelay: `${i * 0.8}s`,
                  animationDuration: `${2.5 + (i * 0.2)}s`
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Decorative circles */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
          <div className="w-96 h-96 border border-primary/15 rounded-full animate-spin" style={{animationDuration: '40s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-accent/10 rounded-full animate-spin" style={{animationDuration: '30s', animationDirection: 'reverse'}}></div>
        </div>
      </div>
    </div>
  )
}

export default KaabahVisual