import type { Metadata } from 'next';
import BlogListClient from '@/components/BlogListClient';

export const metadata: Metadata = {
  title: 'Blog | Gümrük ve Dış Ticaret Rehberi | Melz Gümrük Müşavirliği',
  description: 'Gümrük mevzuatı, ithalat-ihracat süreçleri ve dış ticaret hakkında güncel makaleler. Melz Gümrük Müşavirliği Bilgi Merkezi.',
  alternates: { canonical: 'https://www.melzgumruk.com/blog/' },
  openGraph: {
    title: 'Blog | Melz Gümrük Müşavirliği',
    description: 'Gümrük ve dış ticaret rehberleri, güncel mevzuat bilgileri.',
    url: 'https://www.melzgumruk.com/blog/',
    type: 'website',
  },
};

export default function BlogListPage() {
  return <BlogListClient />;
}
