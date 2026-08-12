'use client';

import { useLang } from './LangProvider';

export default function Hero() {
  const { lang } = useLang();
  const t = (tr: string, en: string, zh: string) => lang === 'tr' ? tr : lang === 'en' ? en : zh;

  return (
    <section id="hero">
      <div className="hero-video">
        <video autoPlay muted loop playsInline preload="none" style={{ background: '#0a1628' }}>
          <source src="/12028815_1920_1080_24fps.webm" type="video/webm" />
          <source src="/anasayfavideo.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="hero-globe">
        <div className="globe-ring" />
        <div className="globe-ring-2" />
        <div className="globe-lines" />
        <div className="globe-dot d1" />
        <div className="globe-dot d2" />
        <div className="globe-dot d3" />
        <div className="globe-dot d4" />
        <div className="globe-dot d5" />
        <div className="globe-dot d6" />
      </div>
      <div className="hero-content">
        <div className="hero-badge">
          <span className="dot" />
          <span>{t('Gümrük Çözümleri', 'Global Customs Solutions', '全球报关解决方案')}</span>
        </div>
        <h1 className="hero-title">
          <span>{t('Dünyanın Her Yerinden', 'From Every Corner', '连接世界各地')}</span>
          <em>{t('Hızla & Güvenle', 'Fast & Secure', '快速 安全')}</em>
        </h1>
        <h2 className="hero-subtitle">
          {t('Güvenilir Çözüm Ortağınız', 'Your Trusted Solution Partner', '您值得信赖的解决方案伙伴')}
        </h2>
        <p className="hero-subtitle-desc">
          {t(
            'Stratejik, sonuç ve müşteri memnuniyeti odaklı yaklaşımlarımız ile global ve ulusal alanda sektörün öncü şirketi konumundayız.',
            'With our strategic, results- and customer satisfaction-focused approach, we stand as an industry leader both locally and globally.',
            '凭借以战略、成果和客户满意度为导向的方法，我们在国内外市场均处于行业领先地位。',
          )}
        </p>
        <p className="hero-desc">
          {t(
            'Melz Gümrük Müşavirliği olarak ithalat ve ihracat süreçlerinizi uçtan uca yönetiyor, küresel ticaretinizi kolaylaştırıyoruz. İstanbul merkezli, dünya genelinde operasyon.',
            'Melz Customs Consultancy manages your import and export processes end-to-end, facilitating your global trade. Istanbul-based, operating worldwide.',
            'Melz报关咨询公司为您全程管理进出口流程，助力您的全球贸易。总部位于伊斯坦布尔，业务遍及全球。',
          )}
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">
            {t('Hemen Teklif Alın', 'Get a Quote', '立即获取报价')}
          </a>
          <a href="#services" className="btn-secondary">
            {t('Hizmetlerimiz', 'Our Services', '我们的服务')}
          </a>
        </div>
      </div>
    </section>
  );
}
