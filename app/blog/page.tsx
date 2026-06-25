import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

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

const articles = [
  {
    slug: 'gtip-kodu-nedir',
    tag: 'Gümrük',
    title: 'GTİP Kodu Nedir? Nasıl Bulunur?',
    desc: 'İthalat ve ihracatta GTİP kodunun önemi, doğru sınıflandırma yöntemi ve yanlış beyanın riskleri.',
    date: 'Haziran 2026',
  },
  {
    slug: 'ithalat-belgeleri',
    tag: 'İthalat',
    title: 'İthalatta Hangi Belgeler Gerekir?',
    desc: 'Konşimento, menşe şahadetnamesi, CE belgesi ve tüm ithalat belgelerinin eksiksiz listesi.',
    date: 'Haziran 2026',
  },
  {
    slug: 'gumruk-vergisi-hesaplama',
    tag: 'Vergi',
    title: 'Gümrük Vergisi Nasıl Hesaplanır?',
    desc: 'CIF değeri, GV, KDV ve ÖTV dahil gerçek örnekle adım adım gümrük vergisi hesaplama.',
    date: 'Mayıs 2026',
  },
];

export default function BlogListPage() {
  return (
    <div style={{ background: '#0a1628', minHeight: '100vh', color: '#fff' }}>
      <nav className="article-nav">
        <Link href="/" className="logo">
          <Image src="/melz-logo-header-mobile-200x60.png" alt="Melz Logo" width={36} height={36} style={{ objectFit: 'contain' }} />
          <span className="logo-main" style={{ marginLeft: 10 }}>Melz</span>
        </Link>
        <Link href="/" className="nav-back">← Ana Sayfa</Link>
      </nav>

      <div className="blog-hero">
        <div className="blog-hero-inner">
          <p className="section-label">Bilgi Merkezi</p>
          <h1 className="blog-hero" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(42px, 7vw, 72px)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 0.95, marginBottom: 16 }}>
            Gümrük &amp;<br />Dış Ticaret<br />Rehberleri
          </h1>
          <p className="blog-hero-desc">Gümrük mevzuatı, ithalat-ihracat süreçleri ve uluslararası ticaret hakkında uzman içerikler.</p>
        </div>
      </div>

      <div className="blog-list-grid">
        {articles.map((a) => (
          <Link key={a.slug} href={`/blog/${a.slug}`} className="blog-listing-card">
            <div className="blog-listing-card-header">
              <span className="blog-tag">{a.tag}</span>
              <h2>{a.title}</h2>
            </div>
            <p>{a.desc}</p>
            <div className="blog-listing-footer">
              <span className="blog-date">{a.date}</span>
              <span className="blog-read-more">Devamını Oku →</span>
            </div>
          </Link>
        ))}
      </div>

      <footer className="simple-footer">
        © 2026 Melz Gümrük Müşavirliği · <Link href="/" style={{ color: 'var(--accent)', textDecoration: 'none' }}>melzgumruk.com</Link>
      </footer>
    </div>
  );
}
