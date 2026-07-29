'use client';

import { useLang } from './LangProvider';

export default function Process() {
  const { lang } = useLang();
  const t = (tr: string, en: string, zh: string) => lang === 'tr' ? tr : lang === 'en' ? en : zh;

  const steps = [
    { num: '1', titleTr: 'Talep & Analiz', titleEn: 'Request & Analysis', titleZh: '需求与分析', descTr: 'İhtiyaçlarınızı dinler, ürün ve güzergah analizi yaparız.', descEn: 'We listen to your needs and analyze products and routes.', descZh: '了解您的需求，分析产品及运输路线。' },
    { num: '2', titleTr: 'Belge Hazırlama', titleEn: 'Documentation', titleZh: '单证准备', descTr: 'Tüm gümrük evraklarını eksiksiz hazırlıyoruz.', descEn: 'We prepare all customs documents completely.', descZh: '完整准备所有报关单证。' },
    { num: '3', titleTr: 'Gümrük Bildirimi', titleEn: 'Customs Declaration', titleZh: '海关申报', descTr: 'Dijital sistemler üzerinden hızlı ve doğru beyan.', descEn: 'Fast and accurate declaration via digital systems.', descZh: '通过数字化系统快速准确申报。' },
    { num: '4', titleTr: 'Vergi & Tasfiye', titleEn: 'Tax & Clearance', titleZh: '税费与清关', descTr: 'Vergi ve harç işlemleri en verimli şekilde tamamlanır.', descEn: 'Tax and fee procedures are completed in the most efficient way.', descZh: '以最高效的方式完成税费及清关手续。' },
    { num: '5', titleTr: 'Teslimat', titleEn: 'Delivery', titleZh: '交付', descTr: 'Mallarınız güvenli ve zamanında hedefe ulaşır.', descEn: 'Your goods reach the destination safely and on time.', descZh: '货物安全准时送达目的地。' },
  ];

  return (
    <section id="process" className="site-section process-section">
      <div className="section-inner">
        <p className="section-label">{t('Nasıl Çalışıyoruz', 'How We Work', '工作流程')}</p>
        <h2 className="section-title">{t('5 Adımda Sorunsuz Gümrük', 'Seamless Customs in 5 Steps', '五步轻松完成报关')}</h2>
        <p className="section-desc">
          {t(
            'Başvurunuzdan teslimatınıza kadar her aşamayı şeffaf ve etkin bir şekilde yönetiyoruz.',
            'We manage every stage from your application to delivery transparently and efficiently.',
            '从申请到交付，我们透明高效地管理每一个环节。',
          )}
        </p>
        <div className="process-steps">
          {steps.map((s) => (
            <div key={s.num} className="step">
              <div className="step-circle">{s.num}</div>
              <h4>{t(s.titleTr, s.titleEn, s.titleZh)}</h4>
              <p>{t(s.descTr, s.descEn, s.descZh)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
