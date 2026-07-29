import type { Metadata } from 'next';
import AboutClient from '@/components/AboutClient';

export const metadata: Metadata = {
  title: 'Hakkımızda | Melz Gümrük Müşavirliği',
  description: 'Melz Gümrük Müşavirliği hakkında: 15+ yıl deneyim, 80+ ülke bağlantısı, 500+ memnun müşteri. İstanbul Bakırköy merkezli gümrük ve lojistik çözüm ortağınız.',
  alternates: { canonical: 'https://www.melzgumruk.com/hakkimizda/' },
  openGraph: {
    title: 'Hakkımızda | Melz Gümrük Müşavirliği',
    description: '15+ yıl deneyim, 80+ ülke bağlantısı ile gümrük ve lojistik çözüm ortağınız.',
    url: 'https://www.melzgumruk.com/hakkimizda/',
    type: 'website',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
