'use client';

import Link from 'next/link';
import { useLang } from './LangProvider';

export default function WhyMelz() {
  const { lang } = useLang();
  const t = (tr: string, en: string, zh: string) => lang === 'tr' ? tr : lang === 'en' ? en : zh;

  return (
    <section id="why" className="site-section why-section">
      <div className="section-inner">
        <div className="why-grid why-grid--single">
          <div>
            <p className="section-label">{t('Melz Hakkımızda', 'About Melz', '关于Melz')}</p>
            <h2 className="section-title">{t('Güvenilir Çözüm Ortağınız', 'Your Trusted Solution Partner', '您值得信赖的解决方案伙伴')}</h2>
            <div className="why-features">
              <div className="why-feat">
                <div className="why-feat-icon">⚡</div>
                <div>
                  <h4>{t('Hızlı İşlem', 'Fast Processing', '快速处理')}</h4>
                  <p>
                    {t(
                      'Dijital entegrasyonlarımız sayesinde gümrük işlemlerinizi sektör ortalamasının çok üzerinde bir hızla tamamlıyoruz.',
                      'Thanks to our digital integrations, we complete your customs procedures at a speed far above the industry average.',
                      '得益于我们的数字化系统集成，我们能以远超行业平均水平的速度完成您的报关手续。',
                    )}
                  </p>
                </div>
              </div>
              <div className="why-feat">
                <div className="why-feat-icon">🔒</div>
                <div>
                  <h4>{t('Tam Uyumluluk', 'Full Compliance', '完全合规')}</h4>
                  <p>
                    {t(
                      'Türk gümrük mevzuatı ve uluslararası ticaret hukukunu yakından takip eden uzman ekibimiz, her işlemin yasal güvencesini sağlar.',
                      'Our expert team closely following Turkish customs legislation and international trade law ensures the legal security of every transaction.',
                      '我们的专业团队密切跟踪土耳其海关法规及国际贸易法，确保每一笔交易都有法律保障。',
                    )}
                  </p>
                </div>
              </div>
              <div className="why-feat">
                <div className="why-feat-icon">🌐</div>
                <div>
                  <h4>{t('80+ Ülke Erişimi', '80+ Country Access', '覆盖80多个国家')}</h4>
                  <p>
                    {t(
                      'Dünyanın dört bir yanındaki acenteler ve iş ortaklarımız sayesinde küresel ticaret ağınızı genişletin.',
                      'Expand your global trade network with our agents and business partners around the world.',
                      '借助我们遍布全球的代理商和合作伙伴网络，拓展您的全球贸易版图。',
                    )}
                  </p>
                </div>
              </div>
            </div>
            <Link href="/hakkimizda" className="blog-read-more" style={{ display: 'inline-block', marginTop: 28 }}>
              {t('Detaylı Bilgi →', 'Learn More →', '了解更多 →')}
            </Link>
          </div>
        </div>
      </div>
    </section>

  );
}
