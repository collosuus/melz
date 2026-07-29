'use client';

import { useLang } from './LangProvider';

export default function Services() {
  const { lang } = useLang();
  const t = (tr: string, en: string, zh: string) => lang === 'tr' ? tr : lang === 'en' ? en : zh;

  return (
    <section id="services" className="site-section services-section">
      <div className="section-inner">
        <p className="section-label">{t('Hizmetlerimiz', 'Our Services', '我们的服务')}</p>
        <h2 className="section-title">{t('Eksiksiz Gümrük Çözümleri', 'Complete Customs Solutions', '全方位报关解决方案')}</h2>
        <p className="section-desc">
          {t(
            'İthalattan ihracata, lojistikten antrepoya kadar tüm gümrük süreçleriniz tek çatı altında.',
            'From import to export, from logistics to warehousing — all your customs processes under one roof.',
            '从进口到出口，从物流到保税仓储，所有报关流程一站式解决。',
          )}
        </p>
        <div className="services-grid">
          <div className="service-card">
            <h3>{t('Gümrük Müşavirliği', 'Customs Consultancy', '报关咨询')}</h3>
            <p>
              {t(
                'Uzman kadromuzla gümrük beyannamesi hazırlama, tarife sınıflandırması (GTİP kodu tespiti), ithalat-ihracat vergi hesaplama ve güncel mevzuat danışmanlığı hizmetleri sunuyoruz. Gümrük Kanunu kapsamında tüm belgelerinizi eksiksiz hazırlıyor, dijital beyan sistemleri üzerinden işlemlerinizi hızla tamamlıyoruz. Antidamping, telafi edici vergi ve ön izin süreçlerinde de tam destek sağlıyoruz.',
                'We provide customs declaration preparation, tariff classification (HS code determination), import-export tax calculation, and current regulatory consulting with our expert team. We prepare all your documents completely under the Customs Law and Regulations, and finalize your procedures quickly via digital declaration systems. We also provide full support in anti-dumping, countervailing duty, and prior authorization processes.',
                '我们的专业团队提供报关单证准备、税则归类（HS编码确定）、进出口关税计算及最新法规咨询服务。我们依据《海关法》完整准备所有文件，并通过数字化申报系统快速完成您的通关手续。同时在反倾销税、反补贴税及事前许可流程方面提供全面支持。',
              )}
            </p>
            <div className="service-num">01</div>
          </div>
          <div className="service-card">
            <h3>{t('Lojistik Yönetimi', 'Logistics Management', '物流管理')}</h3>
            <p>
              {t(
                'Deniz, hava ve kara taşımacılığında uçtan uca entegre lojistik çözümler sunuyoruz. FCL/LCL konteyner, parsiyel yük dahil tüm yük türlerinde 80+ ülkeye kapıdan kapıya teslimat gerçekleştiriyoruz. Navlun optimizasyonu, sigortalama ve 7/24 operasyon desteğiyle lojistik maliyetlerinizi minimize ediyoruz.',
                'We provide end-to-end integrated logistics solutions in sea, air and land transportation. We deliver door-to-door to 80+ countries worldwide for all cargo types including FCL/LCL container and groupage. We minimize your logistics costs with freight optimization, insurance, and 24/7 operational support.',
                '我们提供海运、空运及陆运的端到端综合物流解决方案。涵盖FCL/LCL整箱及拼箱等各类货物，为全球80多个国家提供门到门配送服务。通过运费优化、货物保险及全天候运营支持，最大程度降低您的物流成本。',
              )}
            </p>
            <div className="service-num">02</div>
          </div>
          <div className="service-card">
            <h3>{t('Antrepo Hizmetleri', 'Warehousing Services', '保税仓储服务')}</h3>
            <p>
              {t(
                'Gümrük mevzuatına uygun yetkili antrepolarımızda mallarınız tam güvence altında. Elleçleme, tasnif, yeniden ambalajlama hizmetleri sunuyoruz. Vergi ertelemesi imkânı tanıyan antrepo rejimi ile nakit akışınızı koruyabilir, soğuk zincir ve ADR kapasitemizle her sektöre hizmet verebiliyoruz.',
                'Your goods are held under full security in our authorized bonded warehouses compliant with customs regulations. We provide handling, sorting, and repackaging services. With the customs warehouse regime allowing tax deferral, you can protect your cash flow. Our cold chain and ADR capacity serves every sector.',
                '您的货物将在符合海关法规的授权保税仓库中得到全面保障。我们提供装卸、分拣及重新包装服务。保税仓储制度可延迟缴税，帮助您保护现金流；凭借冷链及危险品（ADR）仓储能力，我们可服务各行各业。',
              )}
            </p>
            <div className="service-num">03</div>
          </div>
          <div className="service-card">
            <h3>{t('Ticaret Danışmanlığı', 'Trade Consulting', '贸易咨询')}</h3>
            <p>
              {t(
                'Yeni pazarlara açılmak veya mevcut süreçlerinizi optimize etmek istiyorsunuz? Türkiye\'nin Serbest Ticaret Anlaşmaları, AB Gümrük Birliği kapsamındaki preferansiyel tarife avantajları ve menşe belgelendirmesi (EUR.1, A.TR) konularında rehberlik sağlıyoruz. Damping soruşturmaları, kota yönetimi ve ticaret finansmanı yapılandırmasında da yanınızdayız.',
                'Looking to enter new markets or optimize your existing trade processes? We provide strategic guidance on Free Trade Agreements, preferential tariff advantages under the EU Customs Union, and origin certification (EUR.1, A.TR). We also support you in anti-dumping investigations, quota management, and trade finance structuring.',
                '想要开拓新市场或优化现有贸易流程？我们就土耳其自由贸易协定、欧盟关税同盟下的优惠关税及原产地认证（EUR.1、A.TR）提供战略指导，并在反倾销调查、配额管理及贸易融资架构方面为您提供支持。',
              )}
            </p>
            <div className="service-num">04</div>
          </div>
        </div>
      </div>
    </section>
  );
}
