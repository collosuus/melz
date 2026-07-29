'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from './LangProvider';

const articles = [
  {
    slug: 'gtip-kodu-nedir',
    tagTr: 'Gümrük', tagEn: 'Customs', tagZh: '报关',
    titleTr: 'GTİP Kodu Nedir? Nasıl Bulunur?',
    titleEn: 'What is an HS Code? How to Find It?',
    titleZh: 'HS编码是什么？如何查询？',
    descTr: 'İthalat ve ihracatta GTİP kodunun önemi, doğru sınıflandırma yöntemi ve yanlış beyanın riskleri.',
    descEn: 'The importance of the HS code in import and export, the correct classification method, and the risks of incorrect declaration.',
    descZh: 'HS编码在进出口中的重要性、正确的归类方法以及错误申报的风险。',
    dateTr: 'Haziran 2026', dateEn: 'June 2026', dateZh: '2026年6月',
  },
  {
    slug: 'ithalat-belgeleri',
    tagTr: 'İthalat', tagEn: 'Import', tagZh: '进口',
    titleTr: 'İthalatta Hangi Belgeler Gerekir?',
    titleEn: 'What Documents Are Required for Import?',
    titleZh: '进口需要哪些单证？',
    descTr: 'Konşimento, menşe şahadetnamesi, CE belgesi ve tüm ithalat belgelerinin eksiksiz listesi.',
    descEn: 'A complete list of bill of lading, certificate of origin, CE certificate, and all import documents.',
    descZh: '提单、原产地证明、CE认证及所有进口单证的完整清单。',
    dateTr: 'Haziran 2026', dateEn: 'June 2026', dateZh: '2026年6月',
  },
  {
    slug: 'gumruk-vergisi-hesaplama',
    tagTr: 'Vergi', tagEn: 'Tax', tagZh: '税费',
    titleTr: 'Gümrük Vergisi Nasıl Hesaplanır?',
    titleEn: 'How is Customs Duty Calculated?',
    titleZh: '关税如何计算？',
    descTr: 'CIF değeri, GV, KDV ve ÖTV dahil gerçek örnekle adım adım gümrük vergisi hesaplama.',
    descEn: 'Step-by-step customs duty calculation with a real example, including CIF value, duty, VAT, and SCT.',
    descZh: '通过真实案例分步讲解关税计算，涵盖CIF价值、关税、增值税及特别消费税。',
    dateTr: 'Mayıs 2026', dateEn: 'May 2026', dateZh: '2026年5月',
  },
];

export default function BlogListClient() {
  const { lang, setLang } = useLang();
  const t = (tr: string, en: string, zh: string) => lang === 'tr' ? tr : lang === 'en' ? en : zh;

  return (
    <div style={{ background: '#0a1628', minHeight: '100vh', color: '#fff' }}>
      <nav className="article-nav">
        <Link href="/" className="logo">
          <Image src="/melz-logo-header-mobile-200x60.png" alt="Melz Logo" width={36} height={36} style={{ objectFit: 'contain' }} />
          <span className="logo-main" style={{ marginLeft: 10 }}>Melz</span>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div className="lang-bar">
            <button className={`lang-btn${lang === 'tr' ? ' active' : ''}`} onClick={() => setLang('tr')}>TR</button>
            <button className={`lang-btn${lang === 'en' ? ' active' : ''}`} onClick={() => setLang('en')}>EN</button>
            <button className={`lang-btn${lang === 'zh' ? ' active' : ''}`} onClick={() => setLang('zh')}>中文</button>
          </div>
          <Link href="/" className="nav-back">← {t('Ana Sayfa', 'Home', '首页')}</Link>
        </div>
      </nav>

      <div className="blog-hero">
        <div className="blog-hero-inner">
          <p className="section-label">{t('Bilgi Merkezi', 'Knowledge Center', '知识中心')}</p>
          <h1 className="blog-hero" style={{ fontFamily: 'var(--font)', fontSize: 'clamp(38px, 6vw, 62px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 16 }}>
            {t('Gümrük & Dış Ticaret Rehberleri', 'Customs & Foreign Trade Guides', '报关与对外贸易指南')}
          </h1>
          <p className="blog-hero-desc">
            {t(
              'Gümrük mevzuatı, ithalat-ihracat süreçleri ve uluslararası ticaret hakkında uzman içerikler.',
              'Expert content on customs regulations, import-export processes, and international trade.',
              '关于海关法规、进出口流程及国际贸易的专业内容。',
            )}
          </p>
        </div>
      </div>

      <div className="blog-list-grid">
        {articles.map((a) => (
          <Link key={a.slug} href={`/blog/${a.slug}`} className="blog-listing-card">
            <div className="blog-listing-card-header">
              <span className="blog-tag">{t(a.tagTr, a.tagEn, a.tagZh)}</span>
              <h2>{t(a.titleTr, a.titleEn, a.titleZh)}</h2>
            </div>
            <p>{t(a.descTr, a.descEn, a.descZh)}</p>
            <div className="blog-listing-footer">
              <span className="blog-date">{t(a.dateTr, a.dateEn, a.dateZh)}</span>
              <span className="blog-read-more">{t('Devamını Oku →', 'Read More →', '阅读更多 →')}</span>
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
