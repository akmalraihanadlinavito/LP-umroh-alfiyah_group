import { LucideIcon } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  price?: string
  features?: string[]
  className?: string
}

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  price, 
  features, 
  className = '' 
}: ServiceCardProps) => {
  return (
    <Card className={`h-full hover-lift group islamic-glow hover:islamic-glow ${className}`}>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all">
            <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <CardTitle className="text-lg group-hover:text-primary transition-colors">{title}</CardTitle>
            {price && (
              <p className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{price}</p>
            )}
          </div>
        </div>
        <CardDescription className="group-hover:text-foreground transition-colors">{description}</CardDescription>
      </CardHeader>
      {features && (
        <CardContent>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2 group-hover:text-foreground transition-colors">
                <span className="text-primary group-hover:text-accent transition-colors">•</span>
                {feature}
              </li>
            ))}
          </ul>
          <Button className="w-full mt-4 group-hover:scale-105 transition-transform" size="sm">
            Pesan via Aplikasi
          </Button>
        </CardContent>
      )}
    </Card>
  )
}

export default ServiceCard