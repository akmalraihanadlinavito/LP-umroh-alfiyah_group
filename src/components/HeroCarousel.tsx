import { useState, useEffect } from 'react'
import { Sparkles, Download } from 'lucide-react'
import { Button } from './ui/button'
import { useLanguage } from '@/contexts/LanguageContext'



const HeroCarousel = () => {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      image: 'assets/kakbah.jpg',
      title: t('slide.makkah.title'),
      subtitle: t('slide.makkah.subtitle')
    },
    {
      image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: t('slide.nabawi.title'),
      subtitle: t('slide.nabawi.subtitle')
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])



  return (
    <div className="relative h-[90vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          <div className="relative h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
          </div>
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <div className="mb-6 opacity-0 animate-fade-in" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium border border-white/20 shadow-lg">
                <Sparkles className="h-4 w-4 text-accent" />
                {t('hero.trusted')}
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight opacity-0 animate-fade-in" style={{animationDelay: '0.7s', animationFillMode: 'forwards'}}>
              <span className="bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent">
                {t('hero.title')}
              </span>
              <br />
              <span>{t('hero.subtitle')}</span>
            </h1>
            
            <p className="text-xl mb-8 leading-relaxed opacity-90 opacity-0 animate-fade-in" style={{animationDelay: '0.9s', animationFillMode: 'forwards'}}>
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{animationDelay: '1.1s', animationFillMode: 'forwards'}}>
              <Button size="lg" className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90 shadow-2xl font-semibold">
                <Sparkles className="mr-2 h-5 w-5" />
                {t('hero.start')}
              </Button>
            </div>
          </div>
        </div>
      </div>



      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide 
                ? 'w-8 h-2 bg-white rounded-full' 
                : 'w-2 h-2 bg-white/40 hover:bg-white/60 rounded-full'
            }`}
          />
        ))}
      </div>

      {/* Slide Info */}
      <div className="absolute bottom-8 right-8 text-white text-right backdrop-blur-sm bg-black/20 p-4 rounded-lg">
        <h3 className="text-xl font-bold mb-1">{slides[currentSlide].title}</h3>
        <p className="text-sm opacity-90">{slides[currentSlide].subtitle}</p>
      </div>
    </div>
  )
}

export default HeroCarousel