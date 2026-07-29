'use client';

import Link from 'next/link';
import { useLang } from './LangProvider';

export default function BlogSection() {
  const { lang } = useLang();
  const t = (tr: string, en: string, zh: string) => lang === 'tr' ? tr : lang === 'en' ? en : zh;

  return (
    <section id="blog" className="site-section blog-section">
      <div className="section-inner">
        <p className="section-label">{t('Bilgi Merkezi', 'Knowledge Center', '知识中心')}</p>
        <h2 className="section-title">{t('Son Yazılarımız', 'Latest Articles', '最新文章')}</h2>
        <p className="section-desc">{t('Gümrük ve dış ticaret dünyasından güncel bilgiler.', 'Latest information from the world of customs and foreign trade.', '来自报关与对外贸易领域的最新资讯。')}</p>
        <div className="blog-grid">
          <div className="blog-card">
            <div className="blog-card-header">
              <span className="blog-tag">{t('Gümrük', 'Customs', '报关')}</span>
              <h3>{t('GTİP Kodu Nedir? Nasıl Bulunur?', 'What is an HS Code? How to Find It?', 'HS编码是什么？如何查询？')}</h3>
            </div>
            <p>
              {t(
                'İthalat ve ihracat işlemlerinin temel taşı olan GTİP kodunu, nasıl tespit edildiğini ve yanlış sınıflandırmanın getirdiği riskleri açıklıyoruz.',
                'We explain the HS code, which is the cornerstone of import and export operations, how it is determined, and the risks of incorrect classification.',
                '我们将介绍作为进出口业务基石的HS编码，讲解其确定方法以及错误归类可能带来的风险。',
              )}
            </p>
            <div className="blog-card-footer">
              <span className="blog-date">{t('Haziran 2026', 'June 2026', '2026年6月')}</span>
              <Link href="/blog/gtip-kodu-nedir" className="blog-read-more">
                {t('Devamını Oku →', 'Read More →', '阅读更多 →')}
              </Link>
            </div>
          </div>
          <div className="blog-card">
            <div className="blog-card-header">
              <span className="blog-tag">{t('İthalat', 'Import', '进口')}</span>
              <h3>{t('İthalatta Hangi Belgeler Gerekir?', 'What Documents Are Required for Import?', '进口需要哪些单证？')}</h3>
            </div>
            <p>
              {t(
                'Yurt dışından mal alırken ihtiyaç duyulan tüm belgeler: konşimento, menşe şahadetnamesi, çeki listesi, fatura ve daha fazlası.',
                'All documents needed when purchasing goods from abroad: bill of lading, certificate of origin, packing list, invoice and more.',
                '从海外采购货物所需的所有单证：提单、原产地证明、装箱单、发票等。',
              )}
            </p>
            <div className="blog-card-footer">
              <span className="blog-date">{t('Haziran 2026', 'June 2026', '2026年6月')}</span>
              <Link href="/blog/ithalat-belgeleri" className="blog-read-more">
                {t('Devamını Oku →', 'Read More →', '阅读更多 →')}
              </Link>
            </div>
          </div>
          <div className="blog-card">
            <div className="blog-card-header">
              <span className="blog-tag">{t('Vergi', 'Tax', '税费')}</span>
              <h3>{t('Gümrük Vergisi Nasıl Hesaplanır?', 'How is Customs Duty Calculated?', '关税如何计算？')}</h3>
            </div>
            <p>
              {t(
                'CIF değeri, gümrük vergisi oranları, KDV, ÖTV ve diğer kesintiler dahil adım adım gümrük vergisi hesaplama rehberi.',
                'Step-by-step customs duty calculation guide including CIF value, customs duty rates, VAT, special consumption tax and other deductions.',
                '涵盖CIF价值、关税税率、增值税、特别消费税等各项扣除的分步关税计算指南。',
              )}
            </p>
            <div className="blog-card-footer">
              <span className="blog-date">{t('Mayıs 2026', 'May 2026', '2026年5月')}</span>
              <Link href="/blog/gumruk-vergisi-hesaplama" className="blog-read-more">
                {t('Devamını Oku →', 'Read More →', '阅读更多 →')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
