'use client';

import Link from 'next/link';
import { useLang } from './LangProvider';

export default function BlogSection() {
  const { lang } = useLang();
  const t = (tr: string, en: string) => lang === 'tr' ? tr : en;

  return (
    <section id="blog" className="site-section blog-section">
      <div className="section-inner">
        <p className="section-label">{t('Bilgi Merkezi', 'Knowledge Center')}</p>
        <h2 className="section-title">{t('Son Yazılarımız', 'Latest Articles')}</h2>
        <p className="section-desc">{t('Gümrük ve dış ticaret dünyasından güncel bilgiler.', 'Latest information from the world of customs and foreign trade.')}</p>
        <div className="blog-grid">
          <div className="blog-card">
            <div className="blog-card-header">
              <span className="blog-tag">{t('Gümrük', 'Customs')}</span>
              <h3>{t('GTİP Kodu Nedir? Nasıl Bulunur?', 'What is an HS Code? How to Find It?')}</h3>
            </div>
            <p>
              {t(
                'İthalat ve ihracat işlemlerinin temel taşı olan GTİP kodunu, nasıl tespit edildiğini ve yanlış sınıflandırmanın getirdiği riskleri açıklıyoruz.',
                'We explain the HS code, which is the cornerstone of import and export operations, how it is determined, and the risks of incorrect classification.',
              )}
            </p>
            <div className="blog-card-footer">
              <span className="blog-date">Haziran 2026</span>
              <Link href="/blog/gtip-kodu-nedir" className="blog-read-more">
                {t('Devamını Oku →', 'Read More →')}
              </Link>
            </div>
          </div>
          <div className="blog-card">
            <div className="blog-card-header">
              <span className="blog-tag">{t('İthalat', 'Import')}</span>
              <h3>{t('İthalatta Hangi Belgeler Gerekir?', 'What Documents Are Required for Import?')}</h3>
            </div>
            <p>
              {t(
                'Yurt dışından mal alırken ihtiyaç duyulan tüm belgeler: konşimento, menşe şahadetnamesi, çeki listesi, fatura ve daha fazlası.',
                'All documents needed when purchasing goods from abroad: bill of lading, certificate of origin, packing list, invoice and more.',
              )}
            </p>
            <div className="blog-card-footer">
              <span className="blog-date">Haziran 2026</span>
              <Link href="/blog/ithalat-belgeleri" className="blog-read-more">
                {t('Devamını Oku →', 'Read More →')}
              </Link>
            </div>
          </div>
          <div className="blog-card">
            <div className="blog-card-header">
              <span className="blog-tag">{t('Vergi', 'Tax')}</span>
              <h3>{t('Gümrük Vergisi Nasıl Hesaplanır?', 'How is Customs Duty Calculated?')}</h3>
            </div>
            <p>
              {t(
                'CIF değeri, gümrük vergisi oranları, KDV, ÖTV ve diğer kesintiler dahil adım adım gümrük vergisi hesaplama rehberi.',
                'Step-by-step customs duty calculation guide including CIF value, customs duty rates, VAT, special consumption tax and other deductions.',
              )}
            </p>
            <div className="blog-card-footer">
              <span className="blog-date">Mayıs 2026</span>
              <Link href="/blog/gumruk-vergisi-hesaplama" className="blog-read-more">
                {t('Devamını Oku →', 'Read More →')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
