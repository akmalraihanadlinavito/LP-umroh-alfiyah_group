import { useParams, Link } from 'wouter'
import { Calendar, Clock, Share2, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import BlogPostCard from '@/components/BlogPostCard'
import AppDownloadButtons from '@/components/AppDownloadButtons'

const BlogPost = () => {
  const { id } = useParams()

  // Mock data - in real app, this would come from API/CMS
  const post = {
    id: "5-kesalahan-fatal-memilih-hotel-mekkah",
    title: "5 Kesalahan Fatal Saat Memilih Hotel di Mekkah (dan Cara Menghindarinya)",
    category: "Tips & Panduan",
    date: "8 November 2025",
    readTime: "7 menit",
    content: `
# 5 Kesalahan Fatal Saat Memilih Hotel di Mekkah

Memilih hotel yang tepat di Mekkah adalah salah satu keputusan terpenting dalam perjalanan umrah Anda. Lokasi yang strategis tidak hanya menghemat waktu dan tenaga, tetapi juga memungkinkan Anda untuk lebih fokus pada ibadah.

Sayangnya, banyak jemaah umrah mandiri yang terjebak dalam kesalahan-kesalahan umum saat memilih hotel. Akibatnya, pengalaman umrah yang seharusnya khusyuk malah menjadi melelahkan dan penuh stress.

## 1. Terpaku pada Harga Murah Tanpa Mempertimbangkan Lokasi

**Kesalahan:** Memilih hotel termurah tanpa melihat jaraknya dari Masjidil Haram.

**Dampaknya:** 
- Harus berjalan kaki 30-45 menit setiap kali ke Masjidil Haram
- Biaya transportasi tambahan yang tidak terduga
- Kelelahan fisik yang mengurangi kualitas ibadah

**Solusinya:**
> **Tip:** Pilih hotel dalam radius 1 km dari Masjidil Haram, meskipun harganya sedikit lebih mahal. Investasi ini akan terbayar dengan kemudahan dan kenyamanan selama ibadah.

## 2. Tidak Memperhatikan Fasilitas untuk Kebutuhan Khusus

**Kesalahan:** Tidak mengecek fasilitas hotel untuk jemaah lansia atau berkebutuhan khusus.

**Dampaknya:**
- Kesulitan akses untuk kursi roda
- Tidak ada lift atau lift yang terlalu kecil
- Kamar mandi yang tidak ramah lansia

**Solusinya:**
- Hubungi hotel langsung untuk menanyakan fasilitas aksesibilitas
- Minta foto kamar dan fasilitas sebelum booking
- Pertimbangkan hotel dengan sertifikasi ramah disabilitas

## 3. Mengabaikan Review dan Rating dari Jemaah Indonesia

**Kesalahan:** Hanya melihat rating umum tanpa membaca review spesifik dari jemaah Indonesia.

**Dampaknya:**
- Kaget dengan perbedaan budaya dan layanan
- Masalah komunikasi dengan staff hotel
- Fasilitas yang tidak sesuai ekspektasi

**Solusinya:**
- Baca review di platform Indonesia seperti Traveloka atau Tiket.com
- Cari review di grup Facebook jemaah umrah mandiri
- Tanyakan rekomendasi di forum atau grup WhatsApp

## 4. Tidak Mempertimbangkan Waktu Check-in dan Check-out

**Kesalahan:** Booking hotel tanpa mempertimbangkan jadwal penerbangan dan waktu check-in/out.

**Dampaknya:**
- Harus menunggu berjam-jam di lobby hotel
- Biaya tambahan untuk early check-in atau late check-out
- Kerepotan dengan bagasi saat transit

**Solusinya:**
- Koordinasikan jadwal penerbangan dengan waktu check-in hotel
- Booking hotel dari H-1 jika tiba dini hari
- Siapkan budget untuk biaya tambahan jika diperlukan

## 5. Tidak Mengecek Kebijakan Pembatalan dan Perubahan

**Kesalahan:** Booking hotel dengan kebijakan pembatalan yang ketat tanpa mempertimbangkan risiko perubahan rencana.

**Dampaknya:**
- Kehilangan uang jika harus membatalkan atau mengubah booking
- Tidak bisa pindah hotel jika tidak puas dengan layanan
- Stress tambahan jika ada perubahan jadwal mendadak

**Solusinya:**
- Pilih hotel dengan kebijakan pembatalan fleksibel
- Baca syarat dan ketentuan dengan teliti
- Pertimbangkan asuransi perjalanan untuk proteksi ekstra
    `
  }

  const relatedPosts = [
    {
      id: "panduan-visa-umrah-mandiri-2025",
      title: "Panduan Lengkap Mengurus Visa Umrah Mandiri 2025",
      excerpt: "Proses mengurus visa umrah mandiri sebenarnya tidak serumit yang dibayangkan.",
      category: "Visa & Dokumen",
      date: "5 November 2025",
      readTime: "10 menit"
    },
    {
      id: "umrah-mandiri-budget-15-juta",
      title: "Umrah Mandiri dengan Budget 15 Juta? Ini Caranya!",
      excerpt: "Banyak yang berpikir umrah mandiri mahal. Artikel ini akan membuktikan sebaliknya.",
      category: "Budget & Perencanaan",
      date: "1 November 2025",
      readTime: "8 menit"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <section className="py-6 border-b">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <span className="mx-2">›</span>
            <span>{post.title}</span>
          </nav>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog">
              <Button variant="ghost" className="mb-6 -ml-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Blog
              </Button>
            </Link>
            
            <Badge className="mb-4">{post.category}</Badge>
            
            <h1 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-between mb-8 pb-8 border-b">
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-line leading-relaxed">
                {post.content}
              </div>
            </div>

            {/* Mid-Article CTA */}
            <Card className="my-12 bg-primary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">
                  Butuh bantuan memilih hotel atau layanan lain di Saudi?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Tim ahli kami siap membantu Anda merencanakan umrah yang sempurna
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button>Chat dengan Tim Kami</Button>
                  <Button variant="outline">Download Aplikasi</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Siap Merencanakan Umrah Anda?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Download aplikasi AyoUmrahMandiri.id untuk mendapatkan panduan lengkap, 
              booking layanan, dan bantuan 24/7 dari tim asisten kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
                Download Aplikasi
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Lihat Semua Layanan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Artikel Terkait</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((post) => (
                <BlogPostCard key={post.id} {...post} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPost