import { Car, Users, Utensils, Package, Plane, MapPin, Phone, CreditCard } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ServiceCard from '@/components/ServiceCard'
import { useLanguage } from '@/contexts/LanguageContext'

const Services = () => {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-padding gradient-accent">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {t('services.page.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('services.page.subtitle')}
            </p>
            <Button size="lg" className="premium-button">
              {t('services.page.cta')}
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon={Plane} 
              title={t('services.transport.title')} 
              description={t('services.transport.desc')}
              price={t('services.transport.price')}
            />
            <ServiceCard 
              icon={Users} 
              title={t('services.guide.title')} 
              description={t('services.guide.desc')}
              price={t('services.guide.price')}
            />
            <ServiceCard 
              icon={MapPin} 
              title={t('services.tour.title')} 
              description={t('services.tour.desc')}
              price={t('services.tour.price')}
            />
            <ServiceCard 
              icon={Utensils} 
              title={t('services.food.title')} 
              description={t('services.food.desc')}
              price={t('services.food.price')}
            />
            <ServiceCard 
              icon={Package} 
              title={t('services.equipment.title')} 
              description={t('services.equipment.desc')}
              price={t('services.equipment.price')}
            />
            <ServiceCard 
              icon={Car} 
              title={t('services.rental.title')} 
              description={t('services.rental.desc')}
              price={t('services.rental.price')}
            />
            <ServiceCard 
              icon={Phone} 
              title={t('services.support.title')} 
              description={t('services.support.desc')}
              price={t('services.support.price')}
            />
            <ServiceCard 
              icon={CreditCard} 
              title={t('services.payment.title')} 
              description={t('services.payment.desc')}
              price={t('services.payment.price')}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services