'use client';

import { useLang } from './LangProvider';

export default function WhyMelz() {
  const { lang } = useLang();
  const t = (tr: string, en: string) => lang === 'tr' ? tr : en;

  return (
    <section id="why" className="site-section why-section">
      <div className="section-inner">
        <div className="why-grid why-grid--single">
          <div>
            <p className="section-label">{t('Neden Melz', 'Why Melz')}</p>
            <h2 className="section-title">{t('Küresel Ağ, Yerel Güç', 'Global Network, Local Strength')}</h2>
            <div className="why-features">
              <div className="why-feat">
                <div className="why-feat-icon">⚡</div>
                <div>
                  <h4>{t('Hızlı İşlem', 'Fast Processing')}</h4>
                  <p>
                    {t(
                      'Dijital entegrasyonlarımız sayesinde gümrük işlemlerinizi sektör ortalamasının çok üzerinde bir hızla tamamlıyoruz.',
                      'Thanks to our digital integrations, we complete your customs procedures at a speed far above the industry average.',
                    )}
                  </p>
                </div>
              </div>
              <div className="why-feat">
                <div className="why-feat-icon">🔒</div>
                <div>
                  <h4>{t('Tam Uyumluluk', 'Full Compliance')}</h4>
                  <p>
                    {t(
                      'Türk gümrük mevzuatı ve uluslararası ticaret hukukunu yakından takip eden uzman ekibimiz, her işlemin yasal güvencesini sağlar.',
                      'Our expert team closely following Turkish customs legislation and international trade law ensures the legal security of every transaction.',
                    )}
                  </p>
                </div>
              </div>
              <div className="why-feat">
                <div className="why-feat-icon">🌐</div>
                <div>
                  <h4>{t('80+ Ülke Erişimi', '80+ Country Access')}</h4>
                  <p>
                    {t(
                      'Dünyanın dört bir yanındaki acenteler ve iş ortaklarımız sayesinde küresel ticaret ağınızı genişletin.',
                      'Expand your global trade network with our agents and business partners around the world.',
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
