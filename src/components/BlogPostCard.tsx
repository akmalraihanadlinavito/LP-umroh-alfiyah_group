import { Link } from 'wouter'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'

interface BlogPostCardProps {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  featured?: boolean
  className?: string
}

const BlogPostCard = ({ 
  id, 
  title, 
  excerpt, 
  category, 
  date, 
  readTime, 
  featured = false,
  className = '' 
}: BlogPostCardProps) => {
  return (
    <Card className={`h-full hover:shadow-lg transition-shadow ${className}`}>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant={featured ? "default" : "secondary"}>
            {category}
          </Badge>
          {featured && (
            <Badge variant="outline" className="text-xs">
              Featured
            </Badge>
          )}
        </div>
        <CardTitle className={`leading-tight ${featured ? 'text-xl' : 'text-lg'}`}>
          <Link href={`/blog/${id}`} className="hover:text-primary transition-colors">
            {title}
          </Link>
        </CardTitle>
        <CardDescription className="line-clamp-3">
          {excerpt}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{readTime}</span>
            </div>
          </div>
        </div>
        <Link href={`/blog/${id}`}>
          <div className="flex items-center gap-2 text-primary hover:gap-3 transition-all cursor-pointer">
            <span className="text-sm font-medium">Baca Selengkapnya</span>
            <ArrowRight size={16} />
          </div>
        </Link>
      </CardContent>
    </Card>
  )
}

export default BlogPostCard