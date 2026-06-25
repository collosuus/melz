'use client';

import { useRef, useState } from 'react';
import { useLang } from './LangProvider';

const phoneCodes = [
  { flag: '🇹🇷', code: '+90', label: '+90' },
  { flag: '🇺🇸', code: '+1', label: '+1 (US)' },
  { flag: '🇬🇧', code: '+44', label: '+44' },
  { flag: '🇩🇪', code: '+49', label: '+49' },
  { flag: '🇫🇷', code: '+33', label: '+33' },
  { flag: '🇮🇹', code: '+39', label: '+39' },
  { flag: '🇪🇸', code: '+34', label: '+34' },
  { flag: '🇳🇱', code: '+31', label: '+31' },
  { flag: '🇧🇪', code: '+32', label: '+32' },
  { flag: '🇵🇱', code: '+48', label: '+48' },
  { flag: '🇷🇴', code: '+40', label: '+40' },
  { flag: '🇧🇬', code: '+359', label: '+359' },
  { flag: '🇬🇷', code: '+30', label: '+30' },
  { flag: '🇺🇦', code: '+380', label: '+380' },
  { flag: '🇷🇺', code: '+7', label: '+7' },
  { flag: '🇦🇪', code: '+971', label: '+971' },
  { flag: '🇸🇦', code: '+966', label: '+966' },
  { flag: '🇨🇳', code: '+86', label: '+86' },
  { flag: '🇯🇵', code: '+81', label: '+81' },
  { flag: '🇰🇷', code: '+82', label: '+82' },
  { flag: '🇮🇳', code: '+91', label: '+91' },
  { flag: '🇧🇷', code: '+55', label: '+55' },
  { flag: '🇨🇦', code: '+1', label: '+1 (CA)' },
  { flag: '🇮🇷', code: '+98', label: '+98' },
  { flag: '🇪🇬', code: '+20', label: '+20' },
];

export default function Contact() {
  const { lang } = useLang();
  const t = (tr: string, en: string) => lang === 'tr' ? tr : en;
  const formRef = useRef<HTMLFormElement>(null);
  const [phoneCode, setPhoneCode] = useState('+90');
  const [phoneNum, setPhoneNum] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = new FormData(form);

    if (phoneNum) {
      data.set('phone', `${phoneCode} ${phoneNum}`);
    }

    try {
      const res = await fetch('https://formspree.io/f/meebapoq', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        formRef.current?.reset();
        setPhoneCode('+90');
        setPhoneNum('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="site-section contact-section">
      <div className="section-inner">
        <div className="contact-grid">
          <div>
            <p className="section-label">{t('İletişim', 'Contact')}</p>
            <h2 className="section-title">{t('Bize Ulaşın!', 'Get In Touch!')}</h2>
            <p className="section-desc">
              {t('Gümrük süreçleriniz için profesyonel destek almak üzere bize ulaşın.', 'Contact us for professional support for your customs processes.')}
            </p>
            <div className="contact-item">
              <div className="contact-item-icon">📍</div>
              <div className="contact-item-text">
                <span>{t('Adres', 'Address')}</span>
                <p>7-8-9-10. Kısım Mah, E5 Yanyol Cad,<br />Selenium Retro 9, Daire 102, Kat: 14,<br />Bakırköy / İstanbul</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">📞</div>
              <div className="contact-item-text">
                <span>{t('Telefon', 'Phone')}</span>
                <p><a href="tel:02125645658" style={{ color: 'var(--white)', textDecoration: 'none' }}>0212 564 56 58</a></p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">🕐</div>
              <div className="contact-item-text">
                <span>{t('Çalışma Saatleri', 'Working Hours')}</span>
                <p>{t('Pazartesi – Cuma: 08:00 – 18:00', 'Monday – Friday: 08:00 – 18:00')}</p>
              </div>
            </div>
          </div>
          <div>
            {status === 'success' ? (
              <div className="form-success">
                <div className="form-success-icon">✓</div>
                <h3>{t('Mesajınız İletildi!', 'Message Sent!')}</h3>
                <p>{t('En kısa sürede size geri döneceğiz.', 'We will get back to you as soon as possible.')}</p>
                <button className="submit-btn" style={{ marginTop: '24px' }} onClick={() => setStatus('idle')}>
                  {t('Yeni Mesaj Gönder', 'Send Another Message')}
                </button>
              </div>
            ) : (
              <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>{t('Adınız', 'Your Name')}</label>
                    <input type="text" name="name" required placeholder={t('Adınız', 'Your name')} />
                  </div>
                  <div className="form-group">
                    <label>{t('Şirket Adı', 'Company Name')}</label>
                    <input type="text" name="company" placeholder={t('Şirket Adı', 'Company Name')} />
                  </div>
                </div>
                <div className="form-group">
                  <label>{t('E-posta', 'E-mail')}</label>
                  <input type="email" name="email" required placeholder={t('ornek@sirket.com', 'example@company.com')} />
                </div>
                <div className="form-group">
                  <label>{t('Telefon', 'Phone')}</label>
                  <div className="phone-field">
                    <select
                      value={phoneCode}
                      onChange={(e) => setPhoneCode(e.target.value)}
                      aria-label={t('Ülke kodu', 'Country code')}
                    >
                      {phoneCodes.map((pc, i) => (
                        <option key={i} value={pc.code}>{pc.flag} {pc.label}</option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      value={phoneNum}
                      onChange={(e) => setPhoneNum(e.target.value)}
                      placeholder={t('5XX XXX XX XX', 'Your phone number')}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>{t('Hizmet Türü', 'Service Type')}</label>
                  <select name="service">
                    <option value="">{t('Seçiniz...', 'Select...')}</option>
                    <option>{t('Gümrük Müşavirliği', 'Customs Consultancy')}</option>
                    <option>{t('Lojistik', 'Logistics')}</option>
                    <option>{t('Antrepo', 'Warehousing')}</option>
                    <option>{t('Ticaret Danışmanlığı', 'Trade Consulting')}</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>{t('Mesajınız', 'Your Message')}</label>
                  <textarea
                    name="message"
                    required
                    placeholder={t('Talebinizi kısaca açıklayın...', 'Briefly describe your request...')}
                  />
                </div>
                {status === 'error' && (
                  <p style={{ color: '#e57373', fontSize: '14px', marginBottom: '12px' }}>
                    {t('Bir hata oluştu, lütfen tekrar deneyin.', 'Something went wrong, please try again.')}
                  </p>
                )}
                <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                  {status === 'sending' ? t('Gönderiliyor...', 'Sending...') : t('Gönder', 'Send')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
