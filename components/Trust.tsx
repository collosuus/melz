'use client';

import { useLang } from './LangProvider';

export default function Trust() {
  const { lang } = useLang();
  const t = (tr: string, en: string) => lang === 'tr' ? tr : en;

  const badges = [
    {
      icon: '📋',
      titleTr: 'Yetkili Gümrük Müşaviri',
      titleEn: 'Authorized Customs Advisor',
      descTr: 'T.C. Ticaret Bakanlığı onaylı gümrük müşavirliği ruhsatı',
      descEn: 'T.R. Ministry of Trade approved customs consultancy license',
    },
    {
      icon: '🔐',
      titleTr: 'AEO Yetkili Ekonomik Operatör',
      titleEn: 'AEO Authorized Economic Operator',
      descTr: 'Gümrük Birliği kapsamında güvenilir operatör statüsü',
      descEn: 'Recognized trusted operator status under the Customs Union',
    },
    {
      icon: '🏛️',
      titleTr: 'İGMD Üyesi',
      titleEn: 'IGMD Member',
      descTr: 'İstanbul Gümrük Müşavirleri Derneği aktif üyeliği',
      descEn: 'Active membership of Istanbul Customs Consultants Association',
    },
    {
      icon: '🌍',
      titleTr: 'FIATA Ağı',
      titleEn: 'FIATA Network',
      descTr: 'Uluslararası Taşımacılık Federasyonu iş ortağı',
      descEn: 'International Federation of Freight Forwarders Associations partner',
    },
  ];

  return (
    <section id="trust" className="trust-section">
      <div className="trust-inner">
        <p className="trust-label">{t('Sertifikalar & Yetki Belgeleri', 'Certifications & Authorizations')}</p>
        <div className="trust-grid">
          {badges.map((b, i) => (
            <div key={i} className="trust-badge">
              <div className="trust-badge-icon">{b.icon}</div>
              <div className="trust-badge-title">{t(b.titleTr, b.titleEn)}</div>
              <div className="trust-badge-desc">{t(b.descTr, b.descEn)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
