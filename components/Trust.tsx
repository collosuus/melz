'use client';

import { useLang } from './LangProvider';

export default function Trust() {
  const { lang } = useLang();
  const t = (tr: string, en: string, zh: string) => lang === 'tr' ? tr : lang === 'en' ? en : zh;

  const badges = [
    {
      icon: '📋',
      titleTr: 'Yetkili Gümrük Müşaviri',
      titleEn: 'Authorized Customs Advisor',
      titleZh: '授权报关顾问',
      descTr: 'T.C. Ticaret Bakanlığı onaylı gümrük müşavirliği ruhsatı',
      descEn: 'T.R. Ministry of Trade approved customs consultancy license',
      descZh: '获土耳其贸易部批准的报关咨询执照',
    },
    {
      icon: '🔐',
      titleTr: 'AEO Yetkili Ekonomik Operatör',
      titleEn: 'AEO Authorized Economic Operator',
      titleZh: 'AEO 认证经营者',
      descTr: 'Gümrük Birliği kapsamında güvenilir operatör statüsü',
      descEn: 'Recognized trusted operator status under the Customs Union',
      descZh: '在关税同盟框架下获得认可的可信赖经营者身份',
    },
    {
      icon: '🏛️',
      titleTr: 'İGMD Üyesi',
      titleEn: 'IGMD Member',
      titleZh: '伊斯坦布尔报关协会会员',
      descTr: 'İstanbul Gümrük Müşavirleri Derneği aktif üyeliği',
      descEn: 'Active membership of Istanbul Customs Consultants Association',
      descZh: '伊斯坦布尔报关顾问协会（IGMD）正式会员',
    },
    {
      icon: '🌍',
      titleTr: 'FIATA Ağı',
      titleEn: 'FIATA Network',
      titleZh: 'FIATA 国际货代联盟',
      descTr: 'Uluslararası Taşımacılık Federasyonu iş ortağı',
      descEn: 'International Federation of Freight Forwarders Associations partner',
      descZh: '国际货运代理协会联合会合作伙伴',
    },
  ];

  return (
    <section id="trust" className="trust-section">
      <div className="trust-inner">
        <p className="trust-label">{t('Sertifikalar & Yetki Belgeleri', 'Certifications & Authorizations', '认证与资质')}</p>
        <div className="trust-grid">
          {badges.map((b, i) => (
            <div key={i} className="trust-badge">
              <div className="trust-badge-icon">{b.icon}</div>
              <div className="trust-badge-title">{t(b.titleTr, b.titleEn, b.titleZh)}</div>
              <div className="trust-badge-desc">{t(b.descTr, b.descEn, b.descZh)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
