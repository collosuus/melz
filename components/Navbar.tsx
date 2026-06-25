'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLang } from './LangProvider';

export default function Navbar() {
  const { lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const t = (tr: string, en: string) => lang === 'tr' ? tr : en;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <div className="lang-bar">
        <button
          className={`lang-btn${lang === 'tr' ? ' active' : ''}`}
          onClick={() => setLang('tr')}
        >
          TR
        </button>
        <button
          className={`lang-btn${lang === 'en' ? ' active' : ''}`}
          onClick={() => setLang('en')}
        >
          EN
        </button>
      </div>

      <nav className={`site-nav${scrolled ? ' scrolled' : ''}`}>
        <Link href="/#hero" className="logo">
          <div className="logo-icon">
            <Image
              src="/melz-logo-header-mobile-200x60.png"
              alt="Melz Logo"
              width={52}
              height={52}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className="logo-text">
            <span className="logo-main">Melz</span>
            <span className="logo-sub">{t('Gümrük Müşavirliği', 'Customs Consultancy')}</span>
          </div>
        </Link>
        <ul className="nav-links">
          <li><a href="/#services">{t('Hizmetler', 'Services')}</a></li>
          <li><a href="/#why">{t('Neden Melz', 'Why Melz')}</a></li>
          <li><a href="/#faq">{t('SSS', 'FAQ')}</a></li>
          <li><Link href="/blog">{t('Blog', 'Blog')}</Link></li>
          <li><a href="/#contact" className="nav-cta">{t('İletişim', 'Contact')}</a></li>
        </ul>
      </nav>
    </>
  );
}
