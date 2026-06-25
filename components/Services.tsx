'use client';

import { useLang } from './LangProvider';

export default function Services() {
  const { lang } = useLang();
  const t = (tr: string, en: string) => lang === 'tr' ? tr : en;

  return (
    <section id="services" className="site-section services-section">
      <div className="section-inner">
        <p className="section-label">{t('Hizmetlerimiz', 'Our Services')}</p>
        <h2 className="section-title">{t('Eksiksiz Gümrük Çözümleri', 'Complete Customs Solutions')}</h2>
        <p className="section-desc">
          {t(
            'İthalattan ihracata, lojistikten antrepoya kadar tüm gümrük süreçleriniz tek çatı altında.',
            'From import to export, from logistics to warehousing — all your customs processes under one roof.',
          )}
        </p>
        <div className="services-grid">
          <div className="service-card">
            <h3>{t('Gümrük Müşavirliği', 'Customs Consultancy')}</h3>
            <p>
              {t(
                'Uzman kadromuzla gümrük beyannamesi hazırlama, tarife sınıflandırması (GTİP kodu tespiti), ithalat-ihracat vergi hesaplama ve güncel mevzuat danışmanlığı hizmetleri sunuyoruz. Gümrük Kanunu kapsamında tüm belgelerinizi eksiksiz hazırlıyor, dijital beyan sistemleri üzerinden işlemlerinizi hızla tamamlıyoruz. Antidamping, telafi edici vergi ve ön izin süreçlerinde de tam destek sağlıyoruz.',
                'We provide customs declaration preparation, tariff classification (HS code determination), import-export tax calculation, and current regulatory consulting with our expert team. We prepare all your documents completely under the Customs Law and Regulations, and finalize your procedures quickly via digital declaration systems. We also provide full support in anti-dumping, countervailing duty, and prior authorization processes.',
              )}
            </p>
            <div className="service-num">01</div>
          </div>
          <div className="service-card">
            <h3>{t('Lojistik Yönetimi', 'Logistics Management')}</h3>
            <p>
              {t(
                'Deniz, hava ve kara taşımacılığında uçtan uca entegre lojistik çözümler sunuyoruz. FCL/LCL konteyner, parsiyel yük dahil tüm yük türlerinde 80+ ülkeye kapıdan kapıya teslimat gerçekleştiriyoruz. Navlun optimizasyonu, sigortalama ve 7/24 operasyon desteğiyle lojistik maliyetlerinizi minimize ediyoruz.',
                'We provide end-to-end integrated logistics solutions in sea, air and land transportation. We deliver door-to-door to 80+ countries worldwide for all cargo types including FCL/LCL container and groupage. We minimize your logistics costs with freight optimization, insurance, and 24/7 operational support.',
              )}
            </p>
            <div className="service-num">02</div>
          </div>
          <div className="service-card">
            <h3>{t('Antrepo Hizmetleri', 'Warehousing Services')}</h3>
            <p>
              {t(
                'Gümrük mevzuatına uygun yetkili antrepolarımızda mallarınız tam güvence altında. Elleçleme, tasnif, yeniden ambalajlama hizmetleri sunuyoruz. Vergi ertelemesi imkânı tanıyan antrepo rejimi ile nakit akışınızı koruyabilir, soğuk zincir ve ADR kapasitemizle her sektöre hizmet verebiliyoruz.',
                'Your goods are held under full security in our authorized bonded warehouses compliant with customs regulations. We provide handling, sorting, and repackaging services. With the customs warehouse regime allowing tax deferral, you can protect your cash flow. Our cold chain and ADR capacity serves every sector.',
              )}
            </p>
            <div className="service-num">03</div>
          </div>
          <div className="service-card">
            <h3>{t('Ticaret Danışmanlığı', 'Trade Consulting')}</h3>
            <p>
              {t(
                'Yeni pazarlara açılmak veya mevcut süreçlerinizi optimize etmek istiyorsunuz? Türkiye\'nin Serbest Ticaret Anlaşmaları, AB Gümrük Birliği kapsamındaki preferansiyel tarife avantajları ve menşe belgelendirmesi (EUR.1, A.TR) konularında rehberlik sağlıyoruz. Damping soruşturmaları, kota yönetimi ve ticaret finansmanı yapılandırmasında da yanınızdayız.',
                'Looking to enter new markets or optimize your existing trade processes? We provide strategic guidance on Free Trade Agreements, preferential tariff advantages under the EU Customs Union, and origin certification (EUR.1, A.TR). We also support you in anti-dumping investigations, quota management, and trade finance structuring.',
              )}
            </p>
            <div className="service-num">04</div>
          </div>
        </div>
      </div>
    </section>
  );
}
