'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from './LangProvider';

const badges = [
  {
    icon: '📋',
    titleTr: 'Yetkili Gümrük Müşaviri', titleEn: 'Authorized Customs Advisor', titleZh: '授权报关顾问',
    descTr: 'T.C. Ticaret Bakanlığı onaylı gümrük müşavirliği ruhsatı',
    descEn: 'T.R. Ministry of Trade approved customs consultancy license',
    descZh: '获土耳其贸易部批准的报关咨询执照',
  },
  {
    icon: '🔐',
    titleTr: 'AEO Yetkili Ekonomik Operatör', titleEn: 'AEO Authorized Economic Operator', titleZh: 'AEO 认证经营者',
    descTr: 'Gümrük Birliği kapsamında güvenilir operatör statüsü',
    descEn: 'Recognized trusted operator status under the Customs Union',
    descZh: '在关税同盟框架下获得认可的可信赖经营者身份',
  },
  {
    icon: '🏛️',
    titleTr: 'İGMD Üyesi', titleEn: 'IGMD Member', titleZh: '伊斯坦布尔报关协会会员',
    descTr: 'İstanbul Gümrük Müşavirleri Derneği aktif üyeliği',
    descEn: 'Active membership of Istanbul Customs Consultants Association',
    descZh: '伊斯坦布尔报关顾问协会（IGMD）正式会员',
  },
  {
    icon: '🌍',
    titleTr: 'FIATA Ağı', titleEn: 'FIATA Network', titleZh: 'FIATA 国际货代联盟',
    descTr: 'Uluslararası Taşımacılık Federasyonu iş ortağı',
    descEn: 'International Federation of Freight Forwarders Associations partner',
    descZh: '国际货运代理协会联合会合作伙伴',
  },
];

const values = [
  {
    icon: '⚡',
    titleTr: 'Hızlı İşlem', titleEn: 'Fast Processing', titleZh: '快速处理',
    descTr: 'Dijital entegrasyonlarımız sayesinde gümrük işlemlerinizi sektör ortalamasının çok üzerinde bir hızla tamamlıyoruz.',
    descEn: 'Thanks to our digital integrations, we complete your customs procedures at a speed far above the industry average.',
    descZh: '得益于我们的数字化系统集成，我们能以远超行业平均水平的速度完成您的报关手续。',
  },
  {
    icon: '🔒',
    titleTr: 'Tam Uyumluluk', titleEn: 'Full Compliance', titleZh: '完全合规',
    descTr: 'Türk gümrük mevzuatı ve uluslararası ticaret hukukunu yakından takip eden uzman ekibimiz, her işlemin yasal güvencesini sağlar.',
    descEn: 'Our expert team closely following Turkish customs legislation and international trade law ensures the legal security of every transaction.',
    descZh: '我们的专业团队密切跟踪土耳其海关法规及国际贸易法，确保每一笔交易都有法律保障。',
  },
  {
    icon: '🌐',
    titleTr: '80+ Ülke Erişimi', titleEn: '80+ Country Access', titleZh: '覆盖80多个国家',
    descTr: 'Dünyanın dört bir yanındaki acenteler ve iş ortaklarımız sayesinde küresel ticaret ağınızı genişletin.',
    descEn: 'Expand your global trade network with our agents and business partners around the world.',
    descZh: '借助我们遍布全球的代理商和合作伙伴网络，拓展您的全球贸易版图。',
  },
  {
    icon: '🤝',
    titleTr: 'Şeffaf İş Birliği', titleEn: 'Transparent Partnership', titleZh: '透明合作',
    descTr: 'Her aşamada açık iletişim kurar, sürecin her adımında müşterilerimizi bilgilendiririz.',
    descEn: 'We maintain open communication at every stage and keep our clients informed throughout the entire process.',
    descZh: '我们在每个环节保持公开沟通，让客户全程掌握流程进展。',
  },
];

export default function AboutClient() {
  const { lang, setLang } = useLang();
  const t = (tr: string, en: string, zh: string) => lang === 'tr' ? tr : lang === 'en' ? en : zh;

  return (
    <div style={{ background: '#0a1628', minHeight: '100vh', color: '#fff' }}>
      <nav className="article-nav">
        <Link href="/" className="logo">
          <Image src="/melz-logo-header-mobile-200x60.png" alt="Melz Logo" width={36} height={36} style={{ objectFit: 'contain' }} />
          <span className="logo-main" style={{ marginLeft: 10 }}>Melz</span>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div className="lang-bar">
            <button className={`lang-btn${lang === 'tr' ? ' active' : ''}`} onClick={() => setLang('tr')}>TR</button>
            <button className={`lang-btn${lang === 'en' ? ' active' : ''}`} onClick={() => setLang('en')}>EN</button>
            <button className={`lang-btn${lang === 'zh' ? ' active' : ''}`} onClick={() => setLang('zh')}>中文</button>
          </div>
          <Link href="/" className="nav-back">← {t('Ana Sayfa', 'Home', '首页')}</Link>
        </div>
      </nav>

      <div className="blog-hero">
        <div className="blog-hero-inner">
          <p className="section-label">{t('Melz Hakkımızda', 'About Melz', '关于Melz')}</p>
          <h1 className="blog-hero" style={{ fontFamily: 'var(--font)', fontSize: 'clamp(38px, 6vw, 62px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 16 }}>
            {t('Küresel Ağ, Yerel Güç', 'Global Network, Local Strength', '全球网络，本地实力')}
          </h1>
          <p className="blog-hero-desc">
            {t(
              'İstanbul Bakırköy merkezli Melz Gümrük Müşavirliği, 15 yılı aşkın deneyimiyle ithalat, ihracat ve lojistik süreçlerinizi uçtan uca yönetir.',
              'Based in Bakırköy, Istanbul, Melz Customs Consultancy manages your import, export, and logistics processes end-to-end with over 15 years of experience.',
              'Melz报关咨询总部位于伊斯坦布尔巴克尔柯伊，凭借15年以上的丰富经验，为您全程管理进出口及物流流程。',
            )}
          </p>
        </div>
      </div>

      <section className="site-section" style={{ paddingTop: 60 }}>
        <div className="section-inner">
          <p className="section-label">{t('Hikayemiz', 'Our Story', '我们的故事')}</p>
          <h2 className="section-title">{t('Güvenle Büyüyen Bir Ortaklık', 'A Partnership Built on Trust', '信任铸就的伙伴关系')}</h2>
          <p className="section-desc" style={{ maxWidth: 720 }}>
            {t(
              'Melz Gümrük Müşavirliği, İstanbul\'da kurulduğu günden bu yana gümrük ve dış ticaret dünyasında güvenilir bir çözüm ortağı olma vizyonuyla hareket ediyor. Uzman kadromuz, gümrük beyannamesi hazırlamadan tarife sınıflandırmasına, lojistik yönetiminden antrepo hizmetlerine kadar tüm süreçlerde titizlikle çalışıyor. Bugün 80\'den fazla ülkeyle bağlantımız ve 500\'ü aşkın memnun müşterimizle, işletmelerin küresel ticarette güvenle ilerlemesine destek oluyoruz.',
              'Since its founding in Istanbul, Melz Customs Consultancy has operated with the vision of being a trusted solution partner in the world of customs and foreign trade. Our expert team works meticulously across every process, from preparing customs declarations and tariff classification to logistics management and warehousing services. Today, with connections to more than 80 countries and over 500 satisfied clients, we support businesses in moving forward confidently in global trade.',
              'Melz报关咨询自在伊斯坦布尔成立以来，始终秉持成为报关与对外贸易领域值得信赖的解决方案伙伴的愿景。我们的专业团队在从报关单证准备、税则归类到物流管理、保税仓储等各个环节都精益求精。如今，我们已连接80多个国家，拥有500多位满意客户，助力企业在全球贸易中稳健前行。',
            )}
          </p>
        </div>
      </section>

      <div className="stats-bar" style={{ position: 'relative' }}>
        <div className="stats-inner">
          <div className="stat-item">
            <div className="stat-num">15+</div>
            <div className="stat-label">{t('Yıllık Deneyim', 'Years of Experience', '年经验')}</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">80+</div>
            <div className="stat-label">{t('Ülkeyle Bağlantı', 'Countries Connected', '连接国家')}</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">500+</div>
            <div className="stat-label">{t('Memnun Müşteri', 'Satisfied Clients', '满意客户')}</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">24/7</div>
            <div className="stat-label">{t('Kesintisiz Destek', 'Continuous Support', '全天候支持')}</div>
          </div>
        </div>
      </div>

      <section className="site-section why-section">
        <div className="section-inner">
          <p className="section-label">{t('Değerlerimiz', 'Our Values', '我们的价值观')}</p>
          <h2 className="section-title">{t('Bizi Farklı Kılan Nedir?', 'What Sets Us Apart?', '我们的独特之处')}</h2>
          <div className="why-features" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {values.map((v, i) => (
              <div key={i} className="why-feat">
                <div className="why-feat-icon">{v.icon}</div>
                <div>
                  <h4>{t(v.titleTr, v.titleEn, v.titleZh)}</h4>
                  <p>{t(v.descTr, v.descEn, v.descZh)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="site-section contact-section">
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <div className="cta-box" style={{ maxWidth: 640, margin: '0 auto' }}>
            <h3>{t('Bizimle Çalışmaya Hazır mısınız?', 'Ready to Work With Us?', '准备好与我们合作了吗？')}</h3>
            <p>
              {t(
                'Gümrük ve lojistik süreçleriniz için Melz uzmanlarından ücretsiz danışmanlık alın.',
                'Get free consultation from Melz experts for your customs and logistics processes.',
                '就您的报关与物流流程，获取Melz专家的免费咨询。',
              )}
            </p>
            <Link href="/#contact" className="cta-btn">{t('Bize Ulaşın', 'Contact Us', '联系我们')}</Link>
          </div>
        </div>
      </section>

      <footer className="simple-footer">
        © 2026 Melz Gümrük Müşavirliği · <Link href="/" style={{ color: 'var(--accent)', textDecoration: 'none' }}>melzgumruk.com</Link>
      </footer>
    </div>
  );
}
