import type { Metadata } from 'next';
import { Barlow, Barlow_Condensed } from 'next/font/google';
import './globals.css';
import LangProvider from '@/components/LangProvider';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-barlow',
  display: 'swap',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800'],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Melz Gümrük Müşavirliği | İstanbul Bakırköy',
  description:
    'İstanbul Bakırköy merkezli Melz Gümrük Müşavirliği — ithalat, ihracat ve lojistik süreçlerinizi uçtan uca yönetiyoruz. 15+ yıl deneyim, 80+ ülke bağlantısı.',
  metadataBase: new URL('https://www.melzgumruk.com'),
  alternates: {
    canonical: 'https://www.melzgumruk.com/',
    languages: {
      'tr': 'https://www.melzgumruk.com/',
      'en': 'https://www.melzgumruk.com/',
      'x-default': 'https://www.melzgumruk.com/',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://www.melzgumruk.com/',
    title: 'Melz Gümrük Müşavirliği | İstanbul',
    description: 'İthalat, ihracat ve lojistik süreçlerinizi uçtan uca yönetiyoruz. 15+ yıl deneyim, 80+ ülke bağlantısı.',
    images: [{ url: '/melz-logo-footer-large-500x160.png' }],
    locale: 'tr_TR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Melz Gümrük Müşavirliği',
    description: 'İstanbul merkezli gümrük müşavirliği ve lojistik çözümleri. 15+ yıl deneyim.',
    images: ['/melz-logo-footer-large-500x160.png'],
  },
  icons: {
    icon: '/melz-logo-header-small-160x50.png',
    apple: '/melz-logo-header-standard-240x75.png',
  },
  verification: {
    google: 'xAE0OqPBM1j3p4AINiCSN7DiqFb1-J8sHmodK7S4LXc',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': 'https://www.melzgumruk.com/#business',
      name: 'Melz Gümrük Müşavirliği',
      description: 'İstanbul Bakırköy merkezli, 15+ yıl deneyimli gümrük müşavirliği ve lojistik hizmetleri firması.',
      url: 'https://www.melzgumruk.com',
      telephone: '+90-212-564-56-58',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'E5 Yanyol Cad, Selenium Retro 9, Daire 102, Kat: 14',
        addressLocality: 'Bakırköy',
        addressRegion: 'İstanbul',
        postalCode: '34144',
        addressCountry: 'TR',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 40.9794, longitude: 28.8573 },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      areaServed: 'Worldwide',
      knowsAbout: ['Gümrük Müşavirliği', 'İthalat', 'İhracat', 'Lojistik', 'Antrepo'],
      logo: 'https://www.melzgumruk.com/melz-logo-footer-large-500x160.png',
      image: 'https://www.melzgumruk.com/melz-logo-footer-large-500x160.png',
      priceRange: '$$',
      currenciesAccepted: 'TRY, USD, EUR',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.melzgumruk.com/#website',
      url: 'https://www.melzgumruk.com',
      name: 'Melz Gümrük Müşavirliği',
      inLanguage: ['tr', 'en'],
      publisher: { '@id': 'https://www.melzgumruk.com/#business' },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.melzgumruk.com/#faq',
      mainEntity: [
        { '@type': 'Question', name: 'GTİP kodu nedir ve neden önemlidir?', acceptedAnswer: { '@type': 'Answer', text: 'GTİP (Gümrük Tarife İstatistik Pozisyonu), her ürünün uluslararası alanda tanımlandığı 12 haneli bir numaradır. İthalat ve ihracatta uygulanacak vergi oranı, yasak ve kısıtlamalar bu koda göre belirlenir.' } },
        { '@type': 'Question', name: 'Gümrük işlemleri ne kadar sürer?', acceptedAnswer: { '@type': 'Answer', text: 'Belgelerin eksiksiz olması ve yeşil hat uygulaması durumunda aynı gün gümrükleme mümkündür. Muayene gerektiren işlemlerde 1-3 iş günü öngörülmektedir.' } },
        { '@type': 'Question', name: 'Gümrük vergisi nasıl hesaplanır?', acceptedAnswer: { '@type': 'Answer', text: 'Gümrük vergisi, ürünün CIF değeri üzerinden GTİP koduna göre belirlenen oran ile hesaplanır. Buna ek olarak KDV (%20), varsa ÖTV ve diğer harçlar uygulanır.' } },
        { '@type': 'Question', name: 'İthalatta hangi belgeler gerekir?', acceptedAnswer: { '@type': 'Answer', text: 'Temel belgeler: ticari fatura, çeki listesi, konşimento veya airway bill, menşe şahadetnamesi. Ürüne göre ek belgeler gerekebilir: CE belgesi, gıda analiz raporu, ithal lisansı.' } },
        { '@type': 'Question', name: 'Antrepo rejiminin avantajı nedir?', acceptedAnswer: { '@type': 'Answer', text: 'Antrepo rejimi, ithal edilen malların gümrük vergileri ödenmeksizin belirlenen süre boyunca gümrüklü antrepoda bekletilmesine olanak tanır. Azami 3 yıl süreyle kullanılabilir.' } },
        { '@type': 'Question', name: 'Gümrükte takılan yük için ne yapılır?', acceptedAnswer: { '@type': 'Answer', text: 'İlk adım takılma nedenini tespit etmektir: belge eksikliği, GTİP ihtilafı veya değer kıymet sorunu. Melz uzmanları sorunun kaynağını hızla tespit ederek çözüm sürecini başlatır.' } },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ fontFamily: 'Barlow, sans-serif' }}>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
