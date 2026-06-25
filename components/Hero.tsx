'use client';

import { useLang } from './LangProvider';

export default function Hero() {
  const { lang } = useLang();
  const t = (tr: string, en: string) => lang === 'tr' ? tr : en;

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
          <span>{t('Gümrük Çözümleri', 'Global Customs Solutions')}</span>
        </div>
        <h1 className="hero-title">
          <span>{t('Dünyanın Her Yerinden', 'From Every Corner')}</span>
          <em>{t('Hızla & Güvenle', 'Fast & Secure')}</em>
        </h1>
        <p className="hero-desc">
          {t(
            'Melz Gümrük Müşavirliği olarak ithalat ve ihracat süreçlerinizi uçtan uca yönetiyor, küresel ticaretinizi kolaylaştırıyoruz. İstanbul merkezli, dünya genelinde operasyon.',
            'Melz Customs Consultancy manages your import and export processes end-to-end, facilitating your global trade. Istanbul-based, operating worldwide.',
          )}
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">
            {t('Hemen Teklif Alın', 'Get a Quote')}
          </a>
          <a href="#services" className="btn-secondary">
            {t('Hizmetlerimiz', 'Our Services')}
          </a>
        </div>
      </div>
    </section>
  );
}
