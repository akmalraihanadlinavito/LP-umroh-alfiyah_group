import { Link } from 'wouter'
import { 
  Clock, 
  MapPin, 
  AlertCircle, 
  CheckCircle, 
  Plane, 
  Users, 
  ShoppingBag, 
  Utensils, 
  Package, 
  Phone, 
  CreditCard,
  Car,
  ArrowRight,
  Star,
  Shield,
  Heart,
  Sparkles,
  Download,
  Search,
  MessageCircle,
  Smartphone,
  HelpCircle,
  BookOpen,
  PhoneCall
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import AppDownloadButtons from '@/components/AppDownloadButtons'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'
import HeroCarousel from '@/components/HeroCarousel'
import { STATS, CONTACT } from '@/const'
import { useLanguage } from '@/contexts/LanguageContext'

const Home = () => {
  const { t } = useLanguage()
  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Trust Stats Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="text-center group cursor-pointer">
              <div className="flex items-center justify-center mb-4">
                <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors soft-shadow">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <p className="text-2xl sm:text-4xl font-bold text-primary group-hover:scale-110 transition-transform">{STATS.jemaah}</p>
              <p className="text-muted-foreground font-medium mt-2">{t('stats.pilgrims')}</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="flex items-center justify-center mb-4">
                <div className="p-4 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors soft-shadow">
                  <Star className="h-8 w-8 text-accent fill-current" />
                </div>
              </div>
              <p className="text-4xl font-bold text-primary group-hover:scale-110 transition-transform">{STATS.rating}</p>
              <p className="text-muted-foreground font-medium mt-2">{t('stats.rating')}</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="flex items-center justify-center mb-4">
                <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors soft-shadow">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
              </div>
              <p className="text-4xl font-bold text-primary group-hover:scale-110 transition-transform">{STATS.support}</p>
              <p className="text-muted-foreground font-medium mt-2">{t('stats.support')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="section-padding bg-muted/30 dark:bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              {t('pain.title')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              {t('pain.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <Card className="luxury-card hover-lift group">
              <CardHeader className="text-center">
                <div className="mx-auto p-4 rounded-full bg-gradient-to-br from-destructive/10 to-destructive/20 w-fit mb-4 group-hover:scale-110 transition-all shadow-lg">
                  <Clock className="h-8 w-8 text-destructive" />
                </div>
                <CardTitle className="group-hover:text-destructive transition-colors text-xl">{t('pain.time.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  {t('pain.time.desc')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="luxury-card hover-lift group">
              <CardHeader className="text-center">
                <div className="mx-auto p-4 rounded-full bg-gradient-to-br from-destructive/10 to-destructive/20 w-fit mb-4 group-hover:scale-110 transition-all shadow-lg">
                  <MapPin className="h-8 w-8 text-destructive" />
                </div>
                <CardTitle className="group-hover:text-destructive transition-colors text-xl">{t('pain.logistics.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  {t('pain.logistics.desc')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="luxury-card hover-lift group">
              <CardHeader className="text-center">
                <div className="mx-auto p-4 rounded-full bg-gradient-to-br from-destructive/10 to-destructive/20 w-fit mb-4 group-hover:scale-110 transition-all shadow-lg">
                  <AlertCircle className="h-8 w-8 text-destructive" />
                </div>
                <CardTitle className="group-hover:text-destructive transition-colors text-xl">{t('pain.uncertainty.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  {t('pain.uncertainty.desc')}
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/layanan">
              <Button size="lg" className="premium-button font-semibold">
                {t('pain.solution')} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              {t('solution.title')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              {t('solution.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Elegant App Mockup */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 sm:w-80 h-80 sm:h-96 bg-white dark:bg-card rounded-2xl shadow-xl border border-border overflow-hidden mx-auto">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-4 border-b border-border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                          <Heart className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground text-sm">{t('app.title')}</h3>
                          <p className="text-xs text-muted-foreground">{t('app.subtitle')}</p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
                        <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 space-y-3">
                    {/* Service Item 1 */}
                    <div className="bg-gradient-to-r from-primary/5 to-transparent p-3 rounded-lg border border-primary/10">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Plane className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm text-foreground">{t('app.transport')}</p>
                          <p className="text-xs text-muted-foreground">{t('app.transport.desc')}</p>
                        </div>
                        <div className="text-xs text-primary font-medium">{t('app.transport.status')}</div>
                      </div>
                    </div>
                    
                    {/* Service Item 2 */}
                    <div className="bg-gradient-to-r from-accent/5 to-transparent p-3 rounded-lg border border-accent/10">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                          <Users className="h-4 w-4 text-accent" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm text-foreground">{t('app.mutawwif')}</p>
                          <p className="text-xs text-muted-foreground">{t('app.mutawwif.desc')}</p>
                        </div>
                        <div className="text-xs text-accent font-medium">{t('app.mutawwif.status')}</div>
                      </div>
                    </div>
                    
                    {/* Service Item 3 */}
                    <div className="bg-gradient-to-r from-primary/5 to-transparent p-3 rounded-lg border border-primary/10">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <MapPin className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm text-foreground">{t('app.tour')}</p>
                          <p className="text-xs text-muted-foreground">{t('app.tour.desc')}</p>
                        </div>
                        <div className="text-xs text-primary font-medium">{t('app.tour.status')}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Footer Button */}
                  <div className="p-4 pt-0">
                    <button className="w-full bg-primary text-white font-medium py-3 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/90 transition-all duration-200">
                      {t('app.order')}
                    </button>
                  </div>
                </div>
                
                {/* Subtle decoration */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent/20 rounded-full"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-primary/20 rounded-full"></div>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-lg">{t(`solution.feature.${index}`)}</span>
                </div>
              ))}
              
              <div className="pt-6">
                <Button size="lg" className="premium-button font-semibold">
                  <Download className="mr-2 h-5 w-5" />
                  {t('solution.download')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding gradient-accent relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-primary rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-accent rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-primary rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full glass-luxury mb-6">
              <Star className="h-4 w-4 text-accent mr-2" />
              <span className="text-sm font-medium text-primary">{t('features.badge')}</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t('features.title')}
              </span>
              <br />
              {t('features.subtitle')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('features.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <ServiceCard icon={Plane} title={t('features.service.0.title')} description={t('features.service.0.desc')} />
            <ServiceCard icon={Users} title={t('features.service.1.title')} description={t('features.service.1.desc')} />
            <ServiceCard icon={MapPin} title={t('features.service.2.title')} description={t('features.service.2.desc')} />
            <ServiceCard icon={ShoppingBag} title={t('features.service.3.title')} description={t('features.service.3.desc')} />
            <ServiceCard icon={Utensils} title={t('features.service.4.title')} description={t('features.service.4.desc')} />
            <ServiceCard icon={Package} title={t('features.service.5.title')} description={t('features.service.5.desc')} />
            <ServiceCard icon={Phone} title={t('features.service.6.title')} description={t('features.service.6.desc')} />
            <ServiceCard icon={CreditCard} title={t('features.service.7.title')} description={t('features.service.7.desc')} />
          </div>

          <div className="text-center">
            <Link href="/layanan">
              <Button size="lg" className="premium-button text-lg px-10 py-4">
                <Search className="mr-2 h-5 w-5" />
                {t('features.explore')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* App Download CTA */}
      <section className="section-padding gradient-primary text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 rounded-full glass-luxury mb-8">
              <Sparkles className="h-5 w-5 text-accent mr-2" />
              <span className="text-lg font-medium">{t('download.badge')}</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('download.title')}
              <br />
              <span className="text-accent">{t('download.subtitle')}</span>
            </h2>
            <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">
              {t('download.description')}
            </p>
            
            <AppDownloadButtons variant="white" className="justify-center mb-12" />
            
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="p-3 rounded-full bg-white/20 w-fit mx-auto mb-3">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <p className="text-sm opacity-90 font-medium">{t('download.feature.0')}</p>
              </div>
              <div className="text-center">
                <div className="p-3 rounded-full bg-white/20 w-fit mx-auto mb-3">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <p className="text-sm opacity-90 font-medium">{t('download.feature.1')}</p>
              </div>
              <div className="text-center">
                <div className="p-3 rounded-full bg-white/20 w-fit mx-auto mb-3">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <p className="text-sm opacity-90 font-medium">{t('download.feature.2')}</p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-sm opacity-75">
                {t('download.contact')} 
                <span className="font-semibold text-accent">{CONTACT.whatsapp}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Catalog Preview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {t('services.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <ServiceCard 
              icon={Car} 
              title={t('services.catalog.0.title')} 
              description={t('services.catalog.0.desc')}
              price={t('services.catalog.0.price')}
            />
            <ServiceCard 
              icon={Users} 
              title={t('services.catalog.1.title')} 
              description={t('services.catalog.1.desc')}
              price={t('services.catalog.1.price')}
            />
            <ServiceCard 
              icon={Utensils} 
              title={t('services.catalog.2.title')} 
              description={t('services.catalog.2.desc')}
              price={t('services.catalog.2.price')}
            />
            <ServiceCard 
              icon={Package} 
              title={t('services.catalog.3.title')} 
              description={t('services.catalog.3.desc')}
              price={t('services.catalog.3.price')}
            />
          </div>

          <div className="text-center">
            <Link href="/layanan">
              <Button size="lg" className="premium-button font-semibold">
                <Search className="mr-2 h-5 w-5" />
                {t('services.view')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted/30 dark:bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {t('testimonials.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('testimonials.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <TestimonialCard 
              quote={t('testimonial.0.quote')}
              name={t('testimonial.0.name')}
              location={t('testimonial.0.location')}
            />
            <TestimonialCard 
              quote={t('testimonial.1.quote')}
              name={t('testimonial.1.name')}
              location={t('testimonial.1.location')}
            />
            <TestimonialCard 
              quote={t('testimonial.2.quote')}
              name={t('testimonial.2.name')}
              location={t('testimonial.2.location')}
            />
          </div>


        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding gradient-cta text-white relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent via-white to-accent opacity-50"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 rounded-full glass-luxury mb-8">
              <Heart className="h-5 w-5 text-accent mr-2" />
              <span className="text-lg font-medium">{t('final.badge')}</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {t('final.title')}
              <span className="text-accent"> {t('final.subtitle')}</span>
            </h2>
            <p className="text-xl mb-12 opacity-90 leading-relaxed">
              {t('final.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-4 shadow-xl">
                <Smartphone className="mr-2 h-5 w-5" />
                {t('final.download')}
              </Button>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-4 shadow-xl">
                <MessageCircle className="mr-2 h-5 w-5" />
                {t('final.contact')}
              </Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <Link href="/faq" className="group cursor-pointer">
                <div className="p-3 rounded-full bg-white/20 w-fit mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <HelpCircle className="h-6 w-6 text-white" />
                </div>
                <p className="font-medium group-hover:text-accent transition-colors">{t('final.faq')}</p>
              </Link>
              <Link href="/blog" className="group cursor-pointer">
                <div className="p-3 rounded-full bg-white/20 w-fit mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <p className="font-medium group-hover:text-accent transition-colors">{t('final.blog')}</p>
              </Link>
              <div className="group cursor-pointer">
                <div className="p-3 rounded-full bg-white/20 w-fit mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <PhoneCall className="h-6 w-6 text-white" />
                </div>
                <p className="font-medium group-hover:text-accent transition-colors">{t('final.consult')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home