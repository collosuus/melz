'use client';

import { useLang } from './LangProvider';

export default function Testimonials() {
  const { lang } = useLang();
  const t = (tr: string, en: string) => lang === 'tr' ? tr : en;

  return (
    <section id="testimonials" className="site-section testimonials-section">
      <div className="section-inner">
        <p className="section-label">{t('Müşteri Görüşleri', 'Client Reviews')}</p>
        <h2 className="section-title">{t('Müşterilerimiz Ne Diyor?', 'What Our Clients Say?')}</h2>
        <p className="section-desc">{t('500\'ü aşkın memnun müşterimizden bazı görüşler.', 'Some reviews from our 500+ satisfied clients.')}</p>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">
              {t(
                'Çin\'den yaptığımız düzenli ithalatlarda Melz ekibi her zaman hızlı ve hatasız çalışıyor. GTİP kodu tespitinden antrepo süreçlerine kadar her şeyi yönetiyorlar. Kesinlikle tavsiye ederim.',
                'The Melz team always works quickly and flawlessly in our regular imports from China. They manage everything from HS code determination to warehouse processes. I highly recommend them.',
              )}
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">AK</div>
              <div className="testimonial-info">
                <strong>Ahmet K.</strong>
                <span>{t('İthalat Müdürü, Tekstil Firması', 'Import Manager, Textile Company')}</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">
              {t(
                'Avrupa\'ya ihracat süreçlerimizde menşe belgelendirmesi ve EUR.1 konusunda çok değerli destek aldık. Bürokrasi bizim için artık bir sorun değil. Melz ile çalışmak büyük avantaj.',
                'We received very valuable support on origin certification and EUR.1 in our export processes to Europe. Bureaucracy is no longer a problem for us. Working with Melz is a great advantage.',
              )}
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">SY</div>
              <div className="testimonial-info">
                <strong>Selin Y.</strong>
                <span>{t('Dış Ticaret Uzmanı, Makine Sektörü', 'Foreign Trade Specialist, Machinery Sector')}</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">
              {t(
                'Gümrükte takılan bir yükümüz vardı, 3 farklı müşavirle çözüm bulamadık. Melz 2 günde halletti. Uzman ekipleri ve 7/24 erişilebilirlikleriyle tam anlamıyla güvenilir bir iş ortağı.',
                'We had a shipment stuck in customs, couldn\'t find a solution with 3 different advisors. Melz solved it in 2 days. With their expert team and 24/7 accessibility, they are a truly reliable business partner.',
              )}
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">MÇ</div>
              <div className="testimonial-info">
                <strong>Murat Ç.</strong>
                <span>{t('Genel Müdür, Kimya Firması', 'General Manager, Chemical Company')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
