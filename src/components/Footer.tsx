import { Link } from 'wouter'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import { APP_TITLE, APP_TAGLINE, APP_DESCRIPTION, CONTACT } from '@/const'
import { useLanguage } from '@/contexts/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{APP_TITLE}</h3>
              <p className="text-sm text-muted-foreground">{t('footer.tagline')}</p>
            </div>
            <p className="text-sm text-muted-foreground">{t('footer.description')}</p>
            <div className="flex space-x-4">
              <Facebook size={20} className="text-muted-foreground hover:text-primary cursor-pointer" />
              <Instagram size={20} className="text-muted-foreground hover:text-primary cursor-pointer" />
              <Twitter size={20} className="text-muted-foreground hover:text-primary cursor-pointer" />
              <Youtube size={20} className="text-muted-foreground hover:text-primary cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">{t('footer.quickLinks')}</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary">{t('footer.home')}</Link>
              <Link href="/layanan" className="text-sm text-muted-foreground hover:text-primary">{t('nav.services')}</Link>
              <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary">{t('nav.faq')}</Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">{t('nav.blog')}</Link>
              <Link href="/kontak" className="text-sm text-muted-foreground hover:text-primary">{t('footer.contactUs')}</Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">{t('footer.services')}</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/layanan#transportasi" className="text-sm text-muted-foreground hover:text-primary">{t('footer.transport')}</Link>
              <Link href="/layanan#mutawwif" className="text-sm text-muted-foreground hover:text-primary">{t('footer.guide')}</Link>
              <Link href="/layanan#kuliner" className="text-sm text-muted-foreground hover:text-primary">{t('footer.food')}</Link>
              <Link href="/layanan#perlengkapan" className="text-sm text-muted-foreground hover:text-primary">{t('footer.equipment')}</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">{t('footer.contact')}</h4>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">{t('footer.whatsapp')}</span><br />
                {CONTACT.whatsapp}
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">{t('footer.email')}</span><br />
                {CONTACT.email}
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">{t('footer.address')}</span><br />
                {CONTACT.address}
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">{t('footer.hours')}</span><br />
                {t('footer.hours.value')}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 {APP_TITLE}. {t('footer.copyright')}
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/syarat-ketentuan" className="text-sm text-muted-foreground hover:text-primary">
              {t('footer.terms')}
            </Link>
            <Link href="/kebijakan-privasi" className="text-sm text-muted-foreground hover:text-primary">
              {t('footer.privacy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer