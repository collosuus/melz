'use client';

import { useLang } from './LangProvider';

export default function Stats() {
  const { lang } = useLang();
  const t = (tr: string, en: string, zh: string) => lang === 'tr' ? tr : lang === 'en' ? en : zh;

  return (
    <div className="stats-bar">
      <div className="stats-inner">
        <div className="stat-item">
          <div className="stat-num">15+</div>
          <div className="stat-label">{t('Yıllık Deneyim', 'Years of Experience', '年经验')}</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">80+</div>
          <div className="stat-label">{t('Ülkeyle Bağlantı', 'Countries Connected', '连接国家')}</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">500+</div>
          <div className="stat-label">{t('Memnun Müşteri', 'Satisfied Clients', '满意客户')}</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">24/7</div>
          <div className="stat-label">{t('Kesintisiz Destek', 'Continuous Support', '全天候支持')}</div>
        </div>
      </div>
    </div>
  );
}
