'use client';

import { useLang } from './LangProvider';

export default function Stats() {
  const { lang } = useLang();
  const t = (tr: string, en: string) => lang === 'tr' ? tr : en;

  return (
    <div className="stats-bar">
      <div className="stats-inner">
        <div className="stat-item">
          <div className="stat-num">15+</div>
          <div className="stat-label">{t('Yıllık Deneyim', 'Years of Experience')}</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">80+</div>
          <div className="stat-label">{t('Ülkeyle Bağlantı', 'Countries Connected')}</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">500+</div>
          <div className="stat-label">{t('Memnun Müşteri', 'Satisfied Clients')}</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">24/7</div>
          <div className="stat-label">{t('Kesintisiz Destek', 'Continuous Support')}</div>
        </div>
      </div>
    </div>
  );
}
