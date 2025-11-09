import { createContext, useContext, useState } from 'react'

type Language = 'id' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  id: {
    // Header
    'nav.home': 'Beranda',
    'nav.services': 'Layanan',
    'nav.faq': 'FAQ',
    'nav.blog': 'Blog',
    'nav.download': 'Download Aplikasi',
    
    // Hero
    'hero.trusted': 'Dipercaya oleh 2,500+ Jemaah',
    'hero.title': 'Umrah Mandiri',
    'hero.subtitle': 'Tenang & Terpercaya',
    'hero.description': 'Wujudkan impian umrah Anda dengan layanan ground handling terbaik di Arab Saudi. Fleksibel, transparan, dan selalu siap membantu.',
    'hero.start': 'Mulai Sekarang',
    'hero.services': 'Lihat Layanan',
    
    // Slides
    'slide.makkah.title': 'Makkah Al-Mukarramah',
    'slide.makkah.subtitle': 'Kota suci yang penuh berkah dan kedamaian',
    'slide.nabawi.title': 'Madinah Al-Munawwarah',
    'slide.nabawi.subtitle': 'Kota yang penuh cahaya, kasih, dan di rahmati rasulullah',
    
    // Stats
    'stats.pilgrims': 'Jemaah Terlayani',
    'stats.rating': 'Rating Kepuasan',
    'stats.support': 'Support Saudi',
    
    // Pain Points
    'pain.title': 'Umrah Mandiri Itu Membebaskan, Tapi Bisa Juga Merepotan',
    'pain.subtitle': 'Kami paham 3 kekhawatiran terbesar Anda',
    'pain.time.title': 'Waktu Terbuang',
    'pain.time.desc': 'Mencari transportasi, nego harga, tersesat di jalan. Waktu berharga Anda untuk ibadah malah habis untuk logistik.',
    'pain.logistics.title': 'Logistik Rumit',
    'pain.logistics.desc': 'Bahasa, mata uang, lokasi asing. Semua terasa overwhelming, apalagi jika ini umrah pertama Anda.',
    'pain.uncertainty.title': 'Ketidakpastian',
    'pain.uncertainty.desc': 'Bagaimana jika ada masalah? Siapa yang bisa saya hubungi? Rasa khawatir mengurangi kekhusyukan ibadah.',
    'pain.solution': 'Kami Punya Solusinya',
    
    // Solution
    'solution.title': 'Satu Aplikasi untuk Semua Kebutuhan Umrah Anda',
    'solution.subtitle': 'Dari bandara sampai pulang, semua ada di genggaman Anda',
    'solution.download': 'Download Sekarang',
    'solution.feature.0': 'Pesan Layanan dalam 3 Klik',
    'solution.feature.1': 'Chat Langsung dengan Driver & Mutawwif',
    'solution.feature.2': 'Tracking Real-Time Lokasi & Jadwal',
    'solution.feature.3': 'Pembayaran Aman & Fleksibel',
    'solution.feature.4': 'Panduan Ibadah & Tips Lengkap',
    'solution.feature.5': 'Customer Service 24/7 dalam Bahasa Indonesia',
    
    // Features
    'features.badge': 'Complete Services',
    'features.title': 'Fitur Lengkap',
    'features.subtitle': 'untuk Ibadah Tenang',
    'features.description': 'Semua yang Anda butuhkan untuk umrah yang sempurna, tersedia dalam satu aplikasi',
    'features.explore': 'Jelajahi Semua Layanan',
    
    // App Download
    'download.badge': 'Ready to Start Your Journey?',
    'download.title': 'Siap Merencanakan',
    'download.subtitle': 'Umrah Impian Anda?',
    'download.description': 'Download aplikasi gratis dan mulai pesan layanan yang Anda butuhkan. Ribuan jemaah sudah merasakan kemudahannya!',
    'download.contact': 'Atau hubungi kami langsung via WhatsApp:',
    'download.feature.0': 'Gratis & Tanpa Iklan',
    'download.feature.1': 'Aman & Terpercaya',
    'download.feature.2': 'Support 24/7',
    
    // Services Preview
    'services.title': 'Layanan À La Carte, Sesuai Kebutuhan Anda',
    'services.subtitle': 'Pilih hanya yang Anda butuhkan, bayar sesuai yang Anda pakai',
    'services.view': 'Lihat Semua Layanan & Harga',
    
    // Testimonials
    'testimonials.title': 'Apa Kata Jemaah Kami',
    'testimonials.subtitle': 'Ribuan jemaah sudah merasakan kemudahan umrah mandiri bersama kami',
    
    // Final CTA
    'final.badge': "We're Here to Help",
    'final.title': 'Masih Ada',
    'final.subtitle': 'Pertanyaan?',
    'final.description': 'Tim ahli kami siap membantu Anda merencanakan umrah yang sempurna. Konsultasi gratis kapan saja!',
    'final.download': 'Download Aplikasi',
    'final.contact': 'Hubungi Kami',
    'final.faq': 'Lihat FAQ',
    'final.blog': 'Baca Blog Kami',
    'final.consult': 'Konsultasi Gratis',
    
    // App mockup
    'app.title': 'Alfiyah Group',
    'app.subtitle': 'Umrah Services',
    'app.transport': 'Transportasi',
    'app.transport.desc': 'Jemput Bandara Jeddah',
    'app.transport.status': 'Ready',
    'app.mutawwif': 'Mutawwif',
    'app.mutawwif.desc': 'Bimbingan Ibadah',
    'app.mutawwif.status': 'Available',
    'app.tour': 'Tur Ziarah',
    'app.tour.desc': 'Tempat Bersejarah',
    'app.tour.status': 'Book Now',
    'app.order': 'Pesan Sekarang',
    
    // FAQ Page
    'faq.title': 'Pertanyaan yang Sering Diajukan',
    'faq.subtitle': 'Temukan jawaban untuk pertanyaan umum tentang layanan umrah mandiri kami',
    'faq.question.0': 'Apa itu layanan umrah mandiri?',
    'faq.answer.0': 'Layanan umrah mandiri adalah paket layanan à la carte yang memungkinkan Anda memilih dan memesan layanan sesuai kebutuhan tanpa terikat paket tour.',
    'faq.question.1': 'Bagaimana cara memesan layanan?',
    'faq.answer.1': 'Anda dapat memesan melalui aplikasi mobile kami atau menghubungi customer service 24/7 via WhatsApp.',
    'faq.question.2': 'Apakah harga sudah termasuk visa umrah?',
    'faq.answer.2': 'Tidak, layanan kami fokus pada ground handling di Arab Saudi. Visa umrah perlu diurus terpisah.',
    'faq.question.3': 'Bagaimana sistem pembayaran?',
    'faq.answer.3': 'Kami menerima berbagai metode pembayaran: transfer bank, e-wallet, dan kartu kredit dengan sistem yang aman.',
    'faq.question.4': 'Apakah ada jaminan uang kembali?',
    'faq.answer.4': 'Ya, kami memberikan jaminan uang kembali 100% jika layanan tidak sesuai dengan yang dijanjikan.',
    'faq.question.5': 'Bagaimana jika ada emergency di Saudi?',
    'faq.answer.5': 'Kami menyediakan layanan SOS 24/7 dengan tim lokal yang siap membantu dalam situasi darurat.',
    'faq.question.6': 'Apakah mutawwif berbahasa Indonesia?',
    'faq.answer.6': 'Ya, semua mutawwif kami fasih berbahasa Indonesia dan berpengalaman membimbing jemaah Indonesia.',
    'faq.question.7': 'Berapa lama sebelumnya harus booking?',
    'faq.answer.7': 'Untuk hasil terbaik, kami sarankan booking minimal 2 minggu sebelum keberangkatan.',
    'faq.question.8': 'Apakah bisa cancel atau reschedule?',
    'faq.answer.8': 'Ya, Anda dapat cancel atau reschedule dengan ketentuan yang berlaku sesuai kebijakan masing-masing layanan.',
    'faq.question.9': 'Bagaimana cara menghubungi customer service?',
    'faq.answer.9': 'Customer service kami tersedia 24/7 melalui WhatsApp, chat di aplikasi, atau email support.',
    
    // Services Page
    'services.page.title': 'Layanan Lengkap untuk Umrah Mandiri Anda',
    'services.page.subtitle': 'Pilih layanan sesuai kebutuhan dengan harga transparan dan kualitas terjamin',
    'services.page.cta': 'Konsultasi Gratis',
    'services.transport.title': 'Transportasi',
    'services.transport.desc': 'Antar-jemput bandara dan transportasi dalam kota',
    'services.transport.price': 'Mulai dari Rp 350.000',
    'services.guide.title': 'Mutawwif',
    'services.guide.desc': 'Bimbingan ibadah dari ahli berpengalaman',
    'services.guide.price': 'Mulai dari Rp 500.000',
    'services.tour.title': 'Tur Ziarah',
    'services.tour.desc': 'Kunjungi tempat bersejarah dengan panduan lengkap',
    'services.tour.price': 'Mulai dari Rp 400.000',
    'services.food.title': 'Kuliner Halal',
    'services.food.desc': 'Makanan lezat dan terjamin halal',
    'services.food.price': 'Mulai dari Rp 200.000',
    'services.equipment.title': 'Perlengkapan',
    'services.equipment.desc': 'Sewa perlengkapan umrah berkualitas',
    'services.equipment.price': 'Mulai dari Rp 150.000',
    'services.rental.title': 'Sewa Kendaraan',
    'services.rental.desc': 'Sewa mobil dengan driver berpengalaman',
    'services.rental.price': 'Mulai dari Rp 600.000',
    'services.support.title': 'Support 24/7',
    'services.support.desc': 'Bantuan darurat kapan saja',
    'services.support.price': 'Gratis',
    'services.payment.title': 'Pembayaran Fleksibel',
    'services.payment.desc': 'Berbagai metode pembayaran aman',
    'services.payment.price': 'Tanpa Biaya Admin',
    
    // Blog Page
    'blog.title': 'Blog & Panduan Umrah',
    'blog.subtitle': 'Tips, panduan, dan informasi terkini seputar umrah mandiri',
    'blog.read': 'Baca Selengkapnya',
    'blog.post.0.title': 'Panduan Lengkap Umrah Mandiri untuk Pemula',
    'blog.post.0.excerpt': 'Pelajari langkah-langkah penting untuk merencanakan umrah mandiri yang aman dan nyaman.',
    'blog.post.0.date': '15 Des 2024',
    'blog.post.0.author': 'Tim Alfiyah',
    'blog.post.1.title': 'Tips Hemat Budget Umrah Tanpa Mengurangi Kualitas',
    'blog.post.1.excerpt': 'Strategi cerdas untuk mengatur budget umrah agar lebih efisien namun tetap berkualitas.',
    'blog.post.1.date': '12 Des 2024',
    'blog.post.1.author': 'Ahmad Fauzi',
    'blog.post.2.title': 'Doa dan Amalan Sunnah Selama di Tanah Suci',
    'blog.post.2.excerpt': 'Kumpulan doa dan amalan yang dianjurkan untuk diamalkan selama berada di Makkah dan Madinah.',
    'blog.post.2.date': '10 Des 2024',
    'blog.post.2.author': 'Ustadz Mahmud',
    'blog.post.3.title': 'Tempat Ziarah Wajib di Makkah dan Madinah',
    'blog.post.3.excerpt': 'Panduan lengkap tempat-tempat bersejarah yang wajib dikunjungi saat umrah.',
    'blog.post.3.date': '8 Des 2024',
    'blog.post.3.author': 'Siti Aminah',
    'blog.post.4.title': 'Persiapan Fisik dan Mental Sebelum Umrah',
    'blog.post.4.excerpt': 'Tips mempersiapkan diri secara fisik dan mental untuk menjalani ibadah umrah.',
    'blog.post.4.date': '5 Des 2024',
    'blog.post.4.author': 'Dr. Hasan',
    'blog.post.5.title': 'Etika dan Adab di Masjidil Haram',
    'blog.post.5.excerpt': 'Panduan etika dan adab yang perlu diperhatikan saat beribadah di Masjidil Haram.',
    'blog.post.5.date': '3 Des 2024',
    'blog.post.5.author': 'Ustadzah Fatimah',
    
    // Footer
    'footer.quickLinks': 'Tautan Cepat',
    'footer.services': 'Layanan Kami',
    'footer.contact': 'Hubungi Kami',
    'footer.home': 'Beranda',
    'footer.about': 'Tentang Kami',
    'footer.contactUs': 'Hubungi Kami',
    'footer.transport': 'Transportasi',
    'footer.guide': 'Mutawwif & Tur',
    'footer.food': 'Kuliner & Oleh-Oleh',
    'footer.equipment': 'Perlengkapan',
    'footer.support': 'Customer Support',
    'footer.whatsapp': 'WhatsApp:',
    'footer.email': 'Email:',
    'footer.address': 'Alamat:',
    'footer.hours': 'Jam Operasional:',
    'footer.hours.value': '24/7 (Customer Service)',
    'footer.copyright': 'All Rights Reserved. Built with ❤️ for the umrah community.',
    'footer.terms': 'Syarat & Ketentuan',
    'footer.privacy': 'Kebijakan Privasi',
    
    // Testimonials
    'testimonial.0.quote': 'Alhamdulillah, umrah pertama saya jadi sangat mudah. Driver tepat waktu, mutawwif sabar menjelaskan. Highly recommended!',
    'testimonial.0.name': 'Ibu Siti',
    'testimonial.0.location': 'Jakarta',
    'testimonial.1.quote': 'Harga transparan, no hidden cost. Saya bisa atur budget sesuai kebutuhan. Terima kasih AyoUmrahMandiri!',
    'testimonial.1.name': 'Pak Hendra',
    'testimonial.1.location': 'Surabaya',
    'testimonial.2.quote': 'CS-nya responsif banget, bahkan jam 2 pagi di Mekkah masih dibalas. Berasa punya teman di Saudi!',
    'testimonial.2.name': 'Mbak Ayu',
    'testimonial.2.location': 'Bandung'
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.faq': 'FAQ',
    'nav.blog': 'Blog',
    'nav.download': 'Download App',
    
    // Hero
    'hero.trusted': 'Trusted by 2,500+ Pilgrims',
    'hero.title': 'Independent Umrah',
    'hero.subtitle': 'Safe & Trusted',
    'hero.description': 'Realize your umrah dreams with the best ground handling services in Saudi Arabia. Flexible, transparent, and always ready to help.',
    'hero.start': 'Get Started',
    'hero.services': 'View Services',
    
    // Slides
    'slide.makkah.title': 'Makkah Al-Mukarramah',
    'slide.makkah.subtitle': 'The holy city full of blessings and peace',
    'slide.nabawi.title': 'Madinah Al-Munawwarah',
    'slide.nabawi.subtitle': 'The city full of light, love, and blessed by the Prophet',
    
    // Stats
    'stats.pilgrims': 'Pilgrims Served',
    'stats.rating': 'Satisfaction Rating',
    'stats.support': 'Saudi Support',
    
    // Pain Points
    'pain.title': 'Independent Umrah is Liberating, But Can Also Be Troublesome',
    'pain.subtitle': 'We understand your 3 biggest concerns',
    'pain.time.title': 'Wasted Time',
    'pain.time.desc': 'Looking for transportation, negotiating prices, getting lost. Your precious time for worship is spent on logistics.',
    'pain.logistics.title': 'Complex Logistics',
    'pain.logistics.desc': 'Language, currency, foreign locations. Everything feels overwhelming, especially if this is your first umrah.',
    'pain.uncertainty.title': 'Uncertainty',
    'pain.uncertainty.desc': 'What if there are problems? Who can I contact? Worry reduces the solemnity of worship.',
    'pain.solution': 'We Have the Solution',
    
    // Solution
    'solution.title': 'One App for All Your Umrah Needs',
    'solution.subtitle': 'From airport to home, everything is in your hands',
    'solution.download': 'Download Now',
    'solution.feature.0': 'Book Services in 3 Clicks',
    'solution.feature.1': 'Direct Chat with Driver & Mutawwif',
    'solution.feature.2': 'Real-Time Location & Schedule Tracking',
    'solution.feature.3': 'Safe & Flexible Payment',
    'solution.feature.4': 'Complete Worship Guide & Tips',
    'solution.feature.5': '24/7 Customer Service in Indonesian',
    
    // Features
    'features.badge': 'Complete Services',
    'features.title': 'Complete Features',
    'features.subtitle': 'for Peaceful Worship',
    'features.description': 'Everything you need for the perfect umrah, available in one application',
    'features.explore': 'Explore All Services',
    
    // App Download
    'download.badge': 'Ready to Start Your Journey?',
    'download.title': 'Ready to Plan',
    'download.subtitle': 'Your Dream Umrah?',
    'download.description': 'Download the free app and start booking the services you need. Thousands of pilgrims have experienced the convenience!',
    'download.contact': 'Or contact us directly via WhatsApp:',
    'download.feature.0': 'Free & Ad-Free',
    'download.feature.1': 'Safe & Trusted',
    'download.feature.2': '24/7 Support',
    
    // Services Preview
    'services.title': 'À La Carte Services, According to Your Needs',
    'services.subtitle': 'Choose only what you need, pay according to what you use',
    'services.view': 'View All Services & Prices',
    
    // Testimonials
    'testimonials.title': 'What Our Pilgrims Say',
    'testimonials.subtitle': 'Thousands of pilgrims have experienced the convenience of independent umrah with us',
    
    // Final CTA
    'final.badge': "We're Here to Help",
    'final.title': 'Still Have',
    'final.subtitle': 'Questions?',
    'final.description': 'Our expert team is ready to help you plan the perfect umrah. Free consultation anytime!',
    'final.download': 'Download App',
    'final.contact': 'Contact Us',
    'final.faq': 'View FAQ',
    'final.blog': 'Read Our Blog',
    'final.consult': 'Free Consultation',
    
    // App mockup
    'app.title': 'Alfiyah Group',
    'app.subtitle': 'Umrah Services',
    'app.transport': 'Transportation',
    'app.transport.desc': 'Jeddah Airport Pickup',
    'app.transport.status': 'Ready',
    'app.mutawwif': 'Mutawwif',
    'app.mutawwif.desc': 'Worship Guidance',
    'app.mutawwif.status': 'Available',
    'app.tour': 'Pilgrimage Tour',
    'app.tour.desc': 'Historical Places',
    'app.tour.status': 'Book Now',
    'app.order': 'Order Now',
    
    // FAQ Page
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Find answers to common questions about our independent umrah services',
    'faq.question.0': 'What is independent umrah service?',
    'faq.answer.0': 'Independent umrah service is an à la carte service package that allows you to choose and book services according to your needs without being tied to tour packages.',
    'faq.question.1': 'How to book services?',
    'faq.answer.1': 'You can book through our mobile app or contact our 24/7 customer service via WhatsApp.',
    'faq.question.2': 'Does the price include umrah visa?',
    'faq.answer.2': 'No, our services focus on ground handling in Saudi Arabia. Umrah visa needs to be processed separately.',
    'faq.question.3': 'How is the payment system?',
    'faq.answer.3': 'We accept various payment methods: bank transfer, e-wallet, and credit cards with a secure system.',
    'faq.question.4': 'Is there a money back guarantee?',
    'faq.answer.4': 'Yes, we provide a 100% money back guarantee if the service does not match what was promised.',
    'faq.question.5': 'What if there is an emergency in Saudi?',
    'faq.answer.5': 'We provide 24/7 SOS services with a local team ready to help in emergency situations.',
    'faq.question.6': 'Do mutawwif speak Indonesian?',
    'faq.answer.6': 'Yes, all our mutawwif are fluent in Indonesian and experienced in guiding Indonesian pilgrims.',
    'faq.question.7': 'How far in advance should I book?',
    'faq.answer.7': 'For best results, we recommend booking at least 2 weeks before departure.',
    'faq.question.8': 'Can I cancel or reschedule?',
    'faq.answer.8': 'Yes, you can cancel or reschedule with applicable terms according to each service policy.',
    'faq.question.9': 'How to contact customer service?',
    'faq.answer.9': 'Our customer service is available 24/7 via WhatsApp, in-app chat, or email support.',
    
    // Services Page
    'services.page.title': 'Complete Services for Your Independent Umrah',
    'services.page.subtitle': 'Choose services according to your needs with transparent prices and guaranteed quality',
    'services.page.cta': 'Free Consultation',
    'services.transport.title': 'Transportation',
    'services.transport.desc': 'Airport pickup and city transportation',
    'services.transport.price': 'Starting from $95',
    'services.guide.title': 'Mutawwif',
    'services.guide.desc': 'Worship guidance from experienced experts',
    'services.guide.price': 'Starting from $135',
    'services.tour.title': 'Pilgrimage Tour',
    'services.tour.desc': 'Visit historical places with complete guide',
    'services.tour.price': 'Starting from $110',
    'services.food.title': 'Halal Culinary',
    'services.food.desc': 'Delicious and guaranteed halal food',
    'services.food.price': 'Starting from $55',
    'services.equipment.title': 'Equipment',
    'services.equipment.desc': 'Rent quality umrah equipment',
    'services.equipment.price': 'Starting from $40',
    'services.rental.title': 'Car Rental',
    'services.rental.desc': 'Rent a car with experienced driver',
    'services.rental.price': 'Starting from $165',
    'services.support.title': '24/7 Support',
    'services.support.desc': 'Emergency assistance anytime',
    'services.support.price': 'Free',
    'services.payment.title': 'Flexible Payment',
    'services.payment.desc': 'Various secure payment methods',
    'services.payment.price': 'No Admin Fee',
    
    // Blog Page
    'blog.title': 'Blog & Umrah Guide',
    'blog.subtitle': 'Tips, guides, and latest information about independent umrah',
    'blog.read': 'Read More',
    'blog.post.0.title': 'Complete Guide to Independent Umrah for Beginners',
    'blog.post.0.excerpt': 'Learn important steps to plan a safe and comfortable independent umrah.',
    'blog.post.0.date': 'Dec 15, 2024',
    'blog.post.0.author': 'Alfiyah Team',
    'blog.post.1.title': 'Tips to Save Umrah Budget Without Reducing Quality',
    'blog.post.1.excerpt': 'Smart strategies to manage umrah budget more efficiently while maintaining quality.',
    'blog.post.1.date': 'Dec 12, 2024',
    'blog.post.1.author': 'Ahmad Fauzi',
    'blog.post.2.title': 'Prayers and Sunnah Practices in the Holy Land',
    'blog.post.2.excerpt': 'Collection of prayers and practices recommended to be practiced while in Makkah and Madinah.',
    'blog.post.2.date': 'Dec 10, 2024',
    'blog.post.2.author': 'Ustadz Mahmud',
    'blog.post.3.title': 'Must-Visit Pilgrimage Sites in Makkah and Madinah',
    'blog.post.3.excerpt': 'Complete guide to historical places that must be visited during umrah.',
    'blog.post.3.date': 'Dec 8, 2024',
    'blog.post.3.author': 'Siti Aminah',
    'blog.post.4.title': 'Physical and Mental Preparation Before Umrah',
    'blog.post.4.excerpt': 'Tips to prepare yourself physically and mentally for umrah worship.',
    'blog.post.4.date': 'Dec 5, 2024',
    'blog.post.4.author': 'Dr. Hasan',
    'blog.post.5.title': 'Ethics and Manners at Masjidil Haram',
    'blog.post.5.excerpt': 'Guide to ethics and manners to be observed when worshiping at Masjidil Haram.',
    'blog.post.5.date': 'Dec 3, 2024',
    'blog.post.5.author': 'Ustadzah Fatimah',
    
    // Footer
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Our Services',
    'footer.contact': 'Contact Us',
    'footer.home': 'Home',
    'footer.about': 'About Us',
    'footer.contactUs': 'Contact Us',
    'footer.transport': 'Transportation',
    'footer.guide': 'Mutawwif & Tours',
    'footer.food': 'Culinary & Souvenirs',
    'footer.equipment': 'Equipment',
    'footer.support': 'Customer Support',
    'footer.whatsapp': 'WhatsApp:',
    'footer.email': 'Email:',
    'footer.address': 'Address:',
    'footer.hours': 'Operating Hours:',
    'footer.hours.value': '24/7 (Customer Service)',
    'footer.copyright': 'All Rights Reserved. Built with ❤️ for the umrah community.',
    'footer.terms': 'Terms & Conditions',
    'footer.privacy': 'Privacy Policy',
    
    // Testimonials
    'testimonial.0.quote': 'Alhamdulillah, my first umrah became very easy. Driver was on time, mutawwif patiently explained everything. Highly recommended!',
    'testimonial.0.name': 'Mrs. Siti',
    'testimonial.0.location': 'Jakarta',
    'testimonial.1.quote': 'Transparent pricing, no hidden costs. I can manage my budget according to my needs. Thank you AyoUmrahMandiri!',
    'testimonial.1.name': 'Mr. Hendra',
    'testimonial.1.location': 'Surabaya',
    'testimonial.2.quote': 'The CS is very responsive, even at 2 AM in Mecca they still replied. Feels like having a friend in Saudi!',
    'testimonial.2.name': 'Ms. Ayu',
    'testimonial.2.location': 'Bandung'
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language')
      return (saved as Language) || 'id'
    }
    return 'id'
  })

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang)
    }
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['id']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}