import { Button } from './ui/button'
import { Smartphone, Apple } from 'lucide-react'

interface AppDownloadButtonsProps {
  className?: string
  variant?: 'default' | 'white'
}

const AppDownloadButtons = ({ className = '', variant = 'default' }: AppDownloadButtonsProps) => {
  const buttonVariant = variant === 'white' ? 'outline' : 'default'
  const buttonClass = variant === 'white' ? 'bg-white text-primary border-white hover:bg-white/90' : ''

  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <Button 
        size="lg" 
        variant={buttonVariant}
        className={`flex items-center gap-2 ${buttonClass}`}
      >
        <Smartphone size={20} />
        Download di Google Play
      </Button>
      <Button 
        size="lg" 
        variant={buttonVariant}
        className={`flex items-center gap-2 ${buttonClass}`}
        disabled
      >
        <Apple size={20} />
        Segera Tersedia
      </Button>
    </div>
  )
}

export default AppDownloadButtons