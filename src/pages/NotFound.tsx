import { Link } from 'wouter'
import { Home, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-primary/20">404</h1>
            <h2 className="text-3xl font-bold mb-4">Halaman Tidak Ditemukan</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Maaf, halaman yang Anda cari tidak dapat ditemukan. 
              Mungkin halaman telah dipindahkan atau URL yang Anda masukkan salah.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" className="flex items-center gap-2">
                <Home size={20} />
                Kembali ke Beranda
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => window.history.back()}
              className="flex items-center gap-2"
            >
              <ArrowLeft size={20} />
              Halaman Sebelumnya
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t">
            <h3 className="text-lg font-semibold mb-4">Halaman Populer</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/layanan" className="text-primary hover:underline">Layanan Kami</Link>
              <Link href="/faq" className="text-primary hover:underline">FAQ</Link>
              <Link href="/blog" className="text-primary hover:underline">Blog & Tips</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound