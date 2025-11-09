import { Star } from 'lucide-react'
import { Card, CardContent } from './ui/card'

interface TestimonialCardProps {
  quote: string
  name: string
  location: string
  rating?: number
  className?: string
}

const TestimonialCard = ({ 
  quote, 
  name, 
  location, 
  rating = 5, 
  className = '' 
}: TestimonialCardProps) => {
  return (
    <Card className={`h-full hover-lift group glass-effect hover:bg-white/20 transition-all ${className}`}>
      <CardContent className="p-6">
        {/* Rating Stars */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-accent text-accent group-hover:scale-110 transition-transform" style={{ transitionDelay: `${i * 100}ms` }} />
          ))}
        </div>
        
        {/* Quote */}
        <blockquote className="text-sm text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground transition-colors italic">
          "{quote}"
        </blockquote>
        
        {/* Author */}
        <div className="text-sm border-t pt-4">
          <p className="font-medium text-foreground group-hover:text-primary transition-colors">{name}</p>
          <p className="text-muted-foreground group-hover:text-accent transition-colors">{location}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default TestimonialCard