'use client';

import { useLang } from './LangProvider';

export default function Testimonials() {
  const { lang } = useLang();
  const t = (tr: string, en: string, zh: string) => lang === 'tr' ? tr : lang === 'en' ? en : zh;

  return (
    <section id="testimonials" className="site-section testimonials-section">
      <div className="section-inner">
        <p className="section-label">{t('Müşteri Görüşleri', 'Client Reviews', '客户评价')}</p>
        <h2 className="section-title">{t('Müşterilerimiz Ne Diyor?', 'What Our Clients Say?', '客户怎么说？')}</h2>
        <p className="section-desc">{t('500\'ü aşkın memnun müşterimizden bazı görüşler.', 'Some reviews from our 500+ satisfied clients.', '来自500多位满意客户的部分评价。')}</p>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">
              {t(
                'Çin\'den yaptığımız düzenli ithalatlarda Melz ekibi her zaman hızlı ve hatasız çalışıyor. GTİP kodu tespitinden antrepo süreçlerine kadar her şeyi yönetiyorlar. Kesinlikle tavsiye ederim.',
                'The Melz team always works quickly and flawlessly in our regular imports from China. They manage everything from HS code determination to warehouse processes. I highly recommend them.',
                '在我们从中国的常规进口业务中，Melz团队始终高效无误。从HS编码确定到仓储流程，他们都能妥善处理。强烈推荐。',
              )}
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">AK</div>
              <div className="testimonial-info">
                <strong>Ahmet K.</strong>
                <span>{t('İthalat Müdürü, Tekstil Firması', 'Import Manager, Textile Company', '纺织公司进口经理')}</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">
              {t(
                'Avrupa\'ya ihracat süreçlerimizde menşe belgelendirmesi ve EUR.1 konusunda çok değerli destek aldık. Bürokrasi bizim için artık bir sorun değil. Melz ile çalışmak büyük avantaj.',
                'We received very valuable support on origin certification and EUR.1 in our export processes to Europe. Bureaucracy is no longer a problem for us. Working with Melz is a great advantage.',
                '在对欧出口业务中，我们在原产地认证和EUR.1文件方面获得了非常宝贵的支持。繁琐的行政流程对我们来说不再是问题。与Melz合作是极大的优势。',
              )}
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">SY</div>
              <div className="testimonial-info">
                <strong>Selin Y.</strong>
                <span>{t('Dış Ticaret Uzmanı, Makine Sektörü', 'Foreign Trade Specialist, Machinery Sector', '机械行业外贸专员')}</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">
              {t(
                'Gümrükte takılan bir yükümüz vardı, 3 farklı müşavirle çözüm bulamadık. Melz 2 günde halletti. Uzman ekipleri ve 7/24 erişilebilirlikleriyle tam anlamıyla güvenilir bir iş ortağı.',
                'We had a shipment stuck in customs, couldn\'t find a solution with 3 different advisors. Melz solved it in 2 days. With their expert team and 24/7 accessibility, they are a truly reliable business partner.',
                '我们有一批货物滞留在海关，找了3家不同的报关行都没能解决，Melz在2天内就搞定了。凭借专业的团队和全天候的响应，他们是真正值得信赖的合作伙伴。',
              )}
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">MÇ</div>
              <div className="testimonial-info">
                <strong>Murat Ç.</strong>
                <span>{t('Genel Müdür, Kimya Firması', 'General Manager, Chemical Company', '化工公司总经理')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
