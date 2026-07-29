'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLang } from './LangProvider';

export default function Navbar() {
  const { lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const t = (tr: string, en: string, zh: string) => lang === 'tr' ? tr : lang === 'en' ? en : zh;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
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
          <span className="logo-sub">{t('Gümrük Müşavirliği', 'Customs Consultancy', '报关咨询')}</span>
        </div>
      </Link>
      <ul className="nav-links">
        <li><a href="/#services">{t('Hizmetler', 'Services', '服务项目')}</a></li>
        <li><Link href="/hakkimizda">{t('Melz Hakkımızda', 'About Melz', '关于Melz')}</Link></li>
        <li><a href="/#faq">{t('SSS', 'FAQ', '常见问题')}</a></li>
        <li><Link href="/blog">{t('Blog', 'Blog', '博客')}</Link></li>
      </ul>
      <div className="nav-right">
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
          <button
            className={`lang-btn${lang === 'zh' ? ' active' : ''}`}
            onClick={() => setLang('zh')}
          >
            中文
          </button>
        </div>
        <a href="/#contact" className="nav-cta">{t('Teklif Alın', 'Get a Quote', '获取报价')} →</a>
      </div>
    </nav>
  );
}
