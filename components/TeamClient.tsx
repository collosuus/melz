'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from './LangProvider';

export interface TeamMember {
  id: number;
  name: string;
  title_tr: string;
  title_en: string;
  title_zh: string;
  bio_tr: string;
  bio_en: string;
  bio_zh: string;
  photo_url: string | null;
}

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');
}

export default function TeamClient({ members }: { members: TeamMember[] }) {
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
          <p className="section-label">{t('Ekibimiz', 'Our Team', '我们的团队')}</p>
          <h1 className="blog-hero" style={{ fontFamily: 'var(--font)', fontSize: 'clamp(38px, 6vw, 62px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 16 }}>
            {t('Uzman Kadromuzla Tanışın', 'Meet Our Expert Team', '认识我们的专业团队')}
          </h1>
          <p className="blog-hero-desc">
            {t(
              'Gümrük, lojistik ve dış ticaret alanında yılların deneyimine sahip ekibimiz, her adımda yanınızda.',
              'Our team, with years of experience in customs, logistics, and foreign trade, is by your side every step of the way.',
              '我们在报关、物流及对外贸易领域拥有多年经验的团队，将全程为您提供支持。',
            )}
          </p>
        </div>
      </div>

      <section className="site-section" style={{ paddingTop: 60 }}>
        <div className="section-inner">
          {members.length === 0 ? (
            <p className="admin-empty">
              {t('Ekip üyesi bilgisi yakında eklenecek.', 'Team member information coming soon.', '团队成员信息即将添加。')}
            </p>
          ) : (
            <div className="team-grid">
              {members.map((m) => (
                <div key={m.id} className="team-card">
                  {m.photo_url ? (
                    <Image
                      src={m.photo_url}
                      alt={m.name}
                      width={96}
                      height={96}
                      className="team-photo"
                      style={{ objectFit: 'cover' }}
                    />
                  ) : (
                    <div className="team-photo-placeholder">{initials(m.name)}</div>
                  )}
                  <div className="team-name">{m.name}</div>
                  <div className="team-title">{t(m.title_tr, m.title_en, m.title_zh)}</div>
                  {(m.bio_tr || m.bio_en || m.bio_zh) && (
                    <p className="team-bio">{t(m.bio_tr, m.bio_en, m.bio_zh)}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <footer className="simple-footer">
        © 2026 Melz Gümrük Müşavirliği · <Link href="/" style={{ color: 'var(--accent)', textDecoration: 'none' }}>melzgumruk.com</Link>
      </footer>
    </div>
  );
}
