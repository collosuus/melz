'use client';

import { useLang } from './LangProvider';

export default function Process() {
  const { lang } = useLang();
  const t = (tr: string, en: string) => lang === 'tr' ? tr : en;

  const steps = [
    { num: '1', titleTr: 'Talep & Analiz', titleEn: 'Request & Analysis', descTr: 'İhtiyaçlarınızı dinler, ürün ve güzergah analizi yaparız.', descEn: 'We listen to your needs and analyze products and routes.' },
    { num: '2', titleTr: 'Belge Hazırlama', titleEn: 'Documentation', descTr: 'Tüm gümrük evraklarını eksiksiz hazırlıyoruz.', descEn: 'We prepare all customs documents completely.' },
    { num: '3', titleTr: 'Gümrük Bildirimi', titleEn: 'Customs Declaration', descTr: 'Dijital sistemler üzerinden hızlı ve doğru beyan.', descEn: 'Fast and accurate declaration via digital systems.' },
    { num: '4', titleTr: 'Vergi & Tasfiye', titleEn: 'Tax & Clearance', descTr: 'Vergi ve harç işlemleri en verimli şekilde tamamlanır.', descEn: 'Tax and fee procedures are completed in the most efficient way.' },
    { num: '5', titleTr: 'Teslimat', titleEn: 'Delivery', descTr: 'Mallarınız güvenli ve zamanında hedefe ulaşır.', descEn: 'Your goods reach the destination safely and on time.' },
  ];

  return (
    <section id="process" className="site-section process-section">
      <div className="section-inner">
        <p className="section-label">{t('Nasıl Çalışıyoruz', 'How We Work')}</p>
        <h2 className="section-title">{t('5 Adımda Sorunsuz Gümrük', 'Seamless Customs in 5 Steps')}</h2>
        <p className="section-desc">
          {t(
            'Başvurunuzdan teslimatınıza kadar her aşamayı şeffaf ve etkin bir şekilde yönetiyoruz.',
            'We manage every stage from your application to delivery transparently and efficiently.',
          )}
        </p>
        <div className="process-steps">
          {steps.map((s) => (
            <div key={s.num} className="step">
              <div className="step-circle">{s.num}</div>
              <h4>{t(s.titleTr, s.titleEn)}</h4>
              <p>{t(s.descTr, s.descEn)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
